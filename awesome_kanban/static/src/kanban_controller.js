/** @odoo-module  */

// Importa el controlador Kanban estándar desde el módulo @web
import { KanbanController } from "@web/views/kanban/kanban_controller";

// Importa el componente `CustomerList` desde el archivo correspondiente
import { CustomerList } from "./customer_list/customer_list";

// Define una nueva clase `AwesomeKanbanController` que extiende el `KanbanController` estándar
export class AwesomeKanbanController extends KanbanController {
    // Define los componentes que se utilizarán en este controlador
    // Añade `CustomerList` a los componentes existentes del `KanbanController`
    static components = { ...KanbanController.components, CustomerList }

    // Especifica la plantilla que se utilizará para este controlador
    static template = "awesome_kanban.AwesomeKanbanController";

    // Método que se llama para configurar el controlador
    setup() {
        super.setup(); // Llama al método `setup` del controlador base
        // Define una clave de búsqueda única para filtrar elementos en la vista Kanban
        this.searchKey = Symbol("isFromAwesomeKanban");
    }

    // Método para seleccionar un cliente y actualizar los filtros de búsqueda
    selectCustomer(partner_id, partner_name) {
        // Obtiene los elementos de búsqueda activos utilizando la clave de búsqueda definida
        const customerFilters = this.env.searchModel.getSearchItems((searchItem) =>
            searchItem[this.searchKey]
        );

        // Itera sobre los filtros de cliente y desactiva los filtros activos
        for (const customerFilter of customerFilters) {
            if (customerFilter.isActive) {
                this.env.searchModel.toggleSearchItem(customerFilter.id);
            }
        }

        // Crea nuevos filtros para el cliente seleccionado
        this.env.searchModel.createNewFilters([{
            description: partner_name, // Descripción del filtro
            domain: [["partner_id", "=", partner_id]], // Dominio del filtro basado en el ID del socio
            [this.searchKey]: true, // Marca el filtro con la clave de búsqueda única
        }])
    }
}
