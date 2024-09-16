/** @odoo-module **/

// Importaciones necesarias desde OWL (Odoo Web Library) y componentes personalizados.
import { markup, Component, useState } from "@odoo/owl";
import { Counter } from "../counter/counter";  // Componente contador.
import { Todolist } from "../todolist/todolist";  // Componente lista de tareas.
import { Card } from "../card/card";  // Componente tarjeta.
import { Carta } from "../carta/carta";  // Componente carta.

export class Playground extends Component {
    // Define la plantilla que se utilizará en este componente.
    static template = "awesome_owl.playground";

    // Registra los componentes que se usarán dentro de este componente.
    static components = { Counter, Todolist, Card, Carta };

    setup() {
        // `useState` inicializa un estado reactivo para el componente.
        // Aquí se define el estado `cards`, que contiene una lista de objetos tarjeta con id, título y contenido.
        this.state = useState({ 
            cards: [
                { id: 1, title: "Card ", content: "Yo que se" },
                { id: 2, title: "Card ", content: "Menos aqui" },
            ],
            // Se define otro estado `cartas`, que es una lista de objetos carta.
            cartas: [
                { id: 1, title: "Carta Grande "},
                { id: 2, title: "Carta Grande "} 
            ],
            // Inicializa una variable que suma la cantidad de clics.
            sumatorioClicks: 0,
        });

        // Otro estado separado, `state2`, que también contiene una lista de tarjetas, pero aquí el contenido puede incluir markup HTML.
        this.state2 = useState({ 
            cards: [
                { id: 1, title: "Card ", content: "<div>some text 1</div>" },
                // El uso de `markup()` es necesario para asegurar que el contenido HTML se renderice de manera segura.
                { id: 2, title: "Card ", content: markup("<div>some text 2</div>") },
            ],
        });
        
        // Asigna el contexto actual (`this`) a la función `checkIfClicked` para que pueda acceder al estado del componente.
        this.checkIfClickedCallback = this.checkIfClicked.bind(this);
    }

    // Esta función actualiza el contador `sumatorioClicks` si recibe un valor booleano verdadero.
    checkIfClicked(boolean) {
        if (boolean) {
            this.state.sumatorioClicks += 1;
        }
    }
}
