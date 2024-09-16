/** @odoo-module */

import { Component } from "@odoo/owl";

// Definición del componente DashboardItem, que extiende de la clase Component de OWL
export class DashboardItem extends Component {
    // Especifica la plantilla (template) asociada a este componente
    static template = "awesome_dashboard.DashboardItem";
    
    // Define las propiedades (props) que puede recibir este componente
    static props = {
        // La propiedad 'slots' es de tipo objeto y tiene un valor predeterminado de un objeto vacío
        slots: {
            type: Object,
            shape: {
                default: Object
            },
        },
        // La propiedad 'size' es de tipo número, tiene un valor predeterminado de 1 y es opcional
        size: {
            type: Number,
            default: 1,
            optional: true,
        },
    };
}
