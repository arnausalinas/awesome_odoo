/** @odoo-module */

import { Component } from "@odoo/owl";

// Definición del componente NumberCard, que extiende de la clase Component de OWL
export class NumberCard extends Component {
    // Especifica la plantilla (template) asociada a este componente
    static template = "awesome_dashboard.NumberCard";
    
    // Define las propiedades (props) que puede recibir este componente
    static props = {
        // La propiedad 'title' es de tipo cadena (String) y representa el título de la tarjeta
        title: {
            type: String,
        },
        // La propiedad 'value' es de tipo número (Number) y representa el valor mostrado en la tarjeta
        value: {
            type: Number,
        }
    }
}
