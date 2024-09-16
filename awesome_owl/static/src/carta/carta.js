/** @odoo-module **/

// Importa los módulos necesarios desde OWL.
import { Component, useState } from "@odoo/owl";

// Define el componente `Carta`.
export class Carta extends Component {
    // Asocia la plantilla correspondiente a este componente.
    static template = "awesome_owl.carta";

    // Define las propiedades (`props`) que el componente espera recibir.
    static props = {
        id: Number,  // El ID de la carta, de tipo número.
        title: String,  // El título de la carta, de tipo cadena.
        slots: {
            type: Object,  // Los slots que pueden contener contenido personalizado.
            shape: {
                default: true  // Permite verificar que el slot `default` está disponible.
            },
        }
    };

    // Configura el estado inicial del componente usando `useState`.
    setup() {
        this.state = useState({ open: true });  // Estado que controla si el contenido de la carta está abierto o cerrado.
    }

    // Método que alterna el estado `open` de la carta para mostrar u ocultar el contenido.
    toggleContent() {
        this.state.open = !this.state.open;  // Invierte el valor de `open` para abrir/cerrar el contenido.
    }
}
