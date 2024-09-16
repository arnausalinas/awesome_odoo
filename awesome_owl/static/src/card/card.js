/** @odoo-module **/

// Importa el módulo necesario desde OWL.
import { Component } from "@odoo/owl";

// Define el componente `Card`.
export class Card extends Component {
    // Asocia la plantilla correspondiente a este componente.
    static template = "awesome_owl.card";

    // Define las propiedades (`props`) que el componente `Card` espera recibir.
    static props = ["id", "title", "content"];
}
