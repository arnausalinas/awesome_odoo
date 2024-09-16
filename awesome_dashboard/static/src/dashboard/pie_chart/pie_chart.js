/** @odoo-module */

import { loadJS } from "@web/core/assets";
import { getColor } from "@web/core/colors/colors";
import { Component, onWillStart, useRef, onMounted, onWillUnmount } from "@odoo/owl";

// Definición del componente PieChart, que extiende de la clase Component de OWL
export class PieChart extends Component {
    // Especifica la plantilla (template) asociada a este componente
    static template = "awesome_dashboard.PieChart";
    
    // Define las propiedades (props) que puede recibir este componente
    static props = {
        // La propiedad 'label' es de tipo cadena (String) y representa la etiqueta del gráfico
        label: String,
        // La propiedad 'data' es de tipo objeto (Object) y contiene los datos para el gráfico
        data: Object,
    };

    setup() {
        // Referencia al elemento canvas en la plantilla
        this.canvasRef = useRef("canvas");
        
        // Carga el script de Chart.js antes de que el componente se monte
        onWillStart(() => loadJS(["/web/static/lib/Chart/Chart.js"]));
        
        // Renderiza el gráfico cuando el componente está montado
        onMounted(() => {
            this.renderChart();
        });
        
        // Destruye el gráfico cuando el componente se desmonta para evitar fugas de memoria
        onWillUnmount(() => {
            this.chart.destroy();
        });
    }

    // Función para renderizar el gráfico utilizando Chart.js
    renderChart() {
        // Obtiene las etiquetas y los datos de las propiedades del componente
        const labels = Object.keys(this.props.data);
        const data = Object.values(this.props.data);
        
        // Genera un color para cada segmento del gráfico
        const color = labels.map((_, index) => getColor(index));
        
        // Inicializa el gráfico de tipo 'pie' con los datos proporcionados
        this.chart = new Chart(this.canvasRef.el, {
            type: "pie",
            data: {
                labels: labels,
                datasets: [
                    {
                        label: this.props.label,
                        data: data,
                        backgroundColor: color,
                    },
                ],
            },
        });
    }
}
