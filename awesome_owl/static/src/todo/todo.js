/** @odoo-module **/

// Importa los módulos necesarios desde OWL.
import { Component } from "@odoo/owl";

// Define el componente `Todo`.
export class Todo extends Component {
    // Asigna la plantilla asociada a este componente.
    static template = "awesome_owl.todo";
    
    // Define las propiedades (`props`) que el componente `Todo` recibe desde su componente padre.
    static props = ["id", "todo", "done", "toggleState", "removeTodo"];

    // Método que se ejecuta cuando se cambia el estado del checkbox (completar o no la tarea).
    handleCheckboxChange(event) {
        // Si existe una función `toggleState` pasada como prop, la ejecuta.
        if (this.props.toggleState) {
            // Llama a la función `toggleState` pasándole el ID de la tarea para alternar su estado.
            this.props.toggleState(this.props.id);  
        }
    }

    // Método que se ejecuta cuando se hace clic en el botón para eliminar una tarea.
    handleRemoveTodo(event) {
        // Si existe una función `removeTodo` pasada como prop, la ejecuta.
        if (this.props.removeTodo) {
            // Llama a la función `removeTodo` pasándole el ID de la tarea para eliminarla.
            this.props.removeTodo(this.props.id);  
        }
    }
}
