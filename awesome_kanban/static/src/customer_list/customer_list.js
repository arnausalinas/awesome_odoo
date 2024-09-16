/** @odoo-module */

import { useService } from "@web/core/utils/hooks"; // Importa el hook `useService` para acceder a servicios de Odoo
import { Component, onWillStart, useState } from "@odoo/owl"; // Importa las funcionalidades de OWL: `Component`, `onWillStart`, `useState`
import { KeepLast } from "@web/core/utils/concurrency"; // Importa `KeepLast` para manejar resultados de búsqueda en caché
import { fuzzyLookup } from "@web/core/utils/search"; // Importa `fuzzyLookup` para búsqueda difusa en datos
import { Pager } from "@web/core/pager/pager"; // Importa el componente `Pager` para paginación

export class CustomerList extends Component {
    // Define los componentes utilizados en esta clase
    static components = { Pager };
    // Define la plantilla que se utilizará para este componente
    static template = "awesome_kanban.CustomerList";
    // Define las propiedades que este componente puede recibir
    static props = {
        selectCustomer: {
            type: Function, // La propiedad `selectCustomer` es una función
        },
    };

    // Configura el estado inicial y las dependencias del componente
    setup() {
        this.orm = useService("orm"); // Accede al servicio `orm` para realizar operaciones de base de datos
        this.partners = useState({ data: [] }); // Define el estado `partners` para almacenar los datos de los socios
        this.pager = useState({ offset: 0, limit: 14 }); // Define el estado `pager` para la paginación
        this.keepLast = new KeepLast(); // Crea una instancia de `KeepLast` para la caché de resultados
        this.state = useState({
            searchString: "", // Cadena de búsqueda para filtrar socios
            displayActiveCustomers: false, // Booleano para mostrar solo clientes activos
        })

        // Carga los datos de clientes cuando el componente está a punto de iniciarse
        onWillStart(async () => {
            const { length, records } = await this.loadCustomers();
            this.partners.data = records; // Asigna los registros de clientes al estado
            this.pager.total = length; // Asigna el total de registros al paginador
        })
    }

    // Filtra los socios según la cadena de búsqueda
    get displayedPartners() {
        return this.filterCustomers(this.state.searchString);
    }

    // Maneja el cambio en el filtro de clientes activos
    async onChangeActiveCustomers(ev) {
        this.state.displayActiveCustomers = ev.target.checked; // Actualiza el estado basado en el checkbox
        this.partners.data = await this.keepLast.add(this.loadCustomers()); // Carga y almacena los datos de clientes
        this.pager.offset = 0; // Reinicia el offset de paginación
        const { length, records } = await this.keepLast.add(this.loadCustomers());
        this.partners.data = records; // Actualiza los datos de socios
        this.pager.total = length; // Actualiza el total de registros en el paginador
    }

    // Filtra la lista de clientes basado en la cadena de búsqueda
    filterCustomers(name) {
        if (name) {
            return fuzzyLookup(name, this.partners.data, (partner) => partner.display_name);
        } else {
            return this.partners.data;
        }
    }

    // Carga los datos de clientes desde el servidor con paginación y filtros aplicados
    loadCustomers() {
        const { limit, offset } = this.pager;
        const domain = this.state.displayActiveCustomers ? [["opportunity_ids", "!=", false]] : [];
        return this.orm.webSearchRead("res.partner", domain, {
            specification: {
                "display_name": {},
            },
            limit,
            offset,
        })
    }

    // Actualiza el estado del paginador y recarga los datos de clientes
    async onUpdatePager(newState) {
        Object.assign(this.pager, newState); // Actualiza el estado del paginador con el nuevo estado
        const { records } = await this.loadCustomers(); // Carga los registros de clientes
        this.partners.data = records; // Actualiza los datos de socios
        this.filterCustomers(this.filterName); // Aplica el filtro de búsqueda
    }
}
