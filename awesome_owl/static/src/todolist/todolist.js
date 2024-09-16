/** @odoo-module **/

// Importación de componentes necesarios desde OWL (Odoo Web Library).
import { Component, useState, useRef } from "@odoo/owl";
import { Todo } from "../todo/todo";  // Importa el componente Todo.

export class Todolist extends Component {
    // Define la plantilla y los componentes que usará este componente.
    static template = "awesome_owl.todolist";
    static components = { Todo }; 

    setup() {
        // `useState` inicializa un estado reactivo con una lista de tareas (`todos`) y un campo de entrada para una nueva tarea.
        this.state = useState({ 
            todos: [
                { id: 1, todo: ". Comprar leche", done: false},  // Una tarea no completada.
                { id: 2, todo: ". Leer un libro", done: false},  // Otra tarea no completada.
                { id: 3, todo: ". Hacer ejercicio", done: false} // Tercera tarea no completada.
            ],
            newTodo: "",  // Variable para almacenar el texto de la nueva tarea.
        });
        // `useRef` se usa para acceder al elemento del campo de entrada y gestionarlo.
        this.input_todo = useRef("input-todo");

        // Se hace binding de los métodos para asegurar que `this` apunte al contexto correcto.
        this.toggleTodoState = this.toggleTodoState.bind(this);  // Alternar el estado de una tarea.
        this.removeTodo = this.removeTodo.bind(this);  // Eliminar una tarea.
    }

    // Método para agregar una nueva tarea al presionar Enter (keyCode 13).
    addTodo(event) {
        if (event.keyCode === 13 && this.state.newTodo.trim()) {
            // Encuentra el ID máximo en la lista de tareas para asignar uno nuevo.
            let maxID = this.state.todos.reduce((max, todo) => Math.max(max, todo.id), 0);
            let newID = maxID + 1;

            // Agrega la nueva tarea al estado `todos` con el texto de `newTodo`.
            this.state.todos.push({
                id: newID,
                todo: ". " + this.state.newTodo,
                done: false,  // La nueva tarea empieza como no completada.
            });
            // Limpia el campo de entrada después de agregar la tarea.
            this.state.newTodo = "";
        }
    }

    // Método para actualizar el valor del campo de entrada cuando cambia.
    handleInputChange(event) {
        this.state.newTodo = event.target.value;
    }

    // Método para enfocar automáticamente el campo de entrada cuando se necesite.
    focusInput() {
        this.input_todo.el.focus();
    }

    // Método para alternar el estado `done` de una tarea específica por su ID.
    toggleTodoState(id) {
        let todo = this.state.todos.find(todo => todo.id === id);
        if (todo) {
            todo.done = !todo.done;  // Alterna entre completado y no completado.
        }
    }

    // Método para eliminar una tarea de la lista por su ID.
    removeTodo(id) {
        // Filtra las tareas, eliminando la que coincida con el ID.
        this.state.todos = this.state.todos.filter(todo => todo.id !== id);
    }
}
