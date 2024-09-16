/** @odoo-module */
// Importación de módulos necesarios de OWL y Odoo
import { Component } from "@odoo/owl"; // Clase base de componentes OWL
import { registry } from "@web/core/registry"; // Registro central para agregar nuevos elementos en categorías
import { useService } from "@web/core/utils/hooks"; // Hook para acceder a servicios en OWL
import { useClicker } from "../clicker_hook"; // Hook personalizado para el servicio "clicker"
import { ClickerValue } from "../clicker_value/clicker_value"; // Componente ClickerValue
import { Dropdown } from "@web/core/dropdown/dropdown"; // Componente Dropdown de Odoo
import { DropdownItem } from "@web/core/dropdown/dropdown_item"; // Componente DropdownItem de Odoo

// Definición del componente ClickerSystray
export class ClickerSystray extends Component {
    // Definición de la plantilla y los componentes que se utilizarán
    static template = "awesome_clicker.ClickerSystray"; // Vinculación con la plantilla XML
    static props = {}; // No hay props en este componente
    static components = { ClickerValue, Dropdown, DropdownItem }; // Componentes usados en la plantilla

    // Función setup para inicializar los hooks y servicios
    setup() {
        this.action = useService("action"); // Servicio de acciones para realizar acciones del cliente
        this.clicker = useClicker(); // Acceso al servicio personalizado "clicker"
    }

    // Método para abrir una acción de cliente, como una ventana modal o página nueva
    openClientAction() {
        this.action.doAction({
            type: "ir.actions.client", // Tipo de acción para abrir una vista de cliente
            tag: "awesome_clicker.client_action", // Etiqueta personalizada para la acción
            target: "new", // Abre en una nueva ventana/modal
            name: "Clicker Game" // Nombre de la acción
        });
    }

    // Getter para contar el número de árboles comprados en el juego clicker
    get numberTrees() {
        let sum = 0;
        for (const tree in this.clicker.trees) {
            sum += this.clicker.trees[tree].purchased; // Suma la cantidad comprada de cada árbol
        }
        return sum;
    }

    // Getter para contar el número de frutas recolectadas en el juego clicker
    get numberFruits() {
        let sum = 0;
        for (const fruit in this.clicker.fruits) {
            sum += this.clicker.fruits[fruit]; // Suma la cantidad de frutas de cada tipo
        }
        return sum;
    }
}

// Registro del componente ClickerSystray en la categoría "systray"
export const systrayItem = {
    Component: ClickerSystray,
};
registry.category("systray").add("awesome_clicker.ClickerSystray", systrayItem, { sequence: 1000 }); // Agrega el componente con una prioridad alta
