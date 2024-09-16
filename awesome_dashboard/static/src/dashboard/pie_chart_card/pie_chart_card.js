/** @odoo-module */

import { Component } from "@odoo/owl";
import { PieChart } from "../pie_chart/pie_chart"; // Importa el componente PieChart

// Definición del componente PieChartCard, que extiende de la clase Component de OWL
export class PieChartCard extends Component {
    // Especifica la plantilla (template) asociada a este componente
    static template = "awesome_dashboard.PieChartCard";
    
    // Registra el componente PieChart como un componente hijo de PieChartCard
    static components = { PieChart };

    // Define las propiedades (props) que puede recibir este componente
    static props = {
        // La propiedad 'title' es de tipo cadena (String) y representa el título del card
        title: {
            type: String,
        },
        // La propiedad 'values' es de tipo objeto (Object) y contiene los datos para el gráfico
        values: {
            type: Object,
        },
    };
}
