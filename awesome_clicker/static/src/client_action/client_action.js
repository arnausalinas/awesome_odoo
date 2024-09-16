/** @odoo-module */
// Importación de módulos necesarios de OWL y Odoo
import { Component } from "@odoo/owl"; // Clase base para componentes OWL
import { registry } from "@web/core/registry"; // Registro central para agregar nuevos elementos en categorías
import { useClicker } from "../clicker_hook"; // Hook personalizado para el servicio "clicker"
import { ClickerValue } from "../clicker_value/clicker_value"; // Componente ClickerValue
import { Notebook } from "@web/core/notebook/notebook"; // Componente Notebook de Odoo

// Definición del componente ClickerClientAction
class ClickerClientAction extends Component {
    // Definición de la plantilla asociada a este componente
    static template = "awesome_clicker.ClickerClientAction";
    static props = ['*']; // Permite recibir todas las propiedades desde el exterior
    static components = { ClickerValue, Notebook }; // Componentes utilizados en la plantilla

    // Función setup para inicializar los hooks y servicios
    setup() {
        this.clicker = useClicker(); // Acceso al servicio personalizado "clicker"
    }
}

// Registro del componente ClickerClientAction en la categoría "actions"
registry.category("actions").add("awesome_clicker.client_action", ClickerClientAction);
