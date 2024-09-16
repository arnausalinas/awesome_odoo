/** @odoo-module **/

// Importa el módulo necesario desde OWL
import { Component, useState } from "@odoo/owl";

// Define el componente `Counter`.
export class Counter extends Component {
    // Asigna la plantilla asociada a este componente.
    static template = "awesome_owl.counter";
    
    // Define la propiedad `checkIfClicked` que se pasa desde el componente padre.
    static prop = ["checkIfClicked"];

    // Configura el estado inicial del componente usando `useState`.
    setup() {
        this.state = useState({ value: 0 });  // Estado con una propiedad `value` inicializada en 0.
    }

    // Método que se ejecuta cuando el contador incrementa.
    increment() {
        // Incrementa el valor del contador.
        this.state.value++;

        // Imprime un mensaje en la consola para debug.
        console.log("a punto");

        // Si existe la función `checkIfClicked` pasada como propiedad, la ejecuta.
        if (this.props.checkIfClicked) {
            // Llama a la función `checkIfClicked` pasándole `true` para indicar que el botón fue clicado.
            this.props.checkIfClicked(true);
        }
    }
}
