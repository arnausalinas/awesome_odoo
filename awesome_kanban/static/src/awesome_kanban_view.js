/** @odoo-module */

// Importa la vista de Kanban estándar desde el módulo @web
import { kanbanView } from "@web/views/kanban/kanban_view";

// Importa el registro de categorías del núcleo de Odoo
import { registry } from "@web/core/registry";

// Importa el controlador personalizado para la vista Kanban
import { AwesomeKanbanController } from "./kanban_controller";

// Crea un nuevo objeto `awesomeKanbanController` que extiende la vista Kanban estándar
// y utiliza el controlador personalizado `AwesomeKanbanController`
const awesomeKanbanController = {
    ...kanbanView, // Copia todas las propiedades de la vista Kanban estándar
    Controller: AwesomeKanbanController, // Reemplaza el controlador estándar con el controlador personalizado
};

// Registra la nueva vista Kanban en la categoría de "views" con el nombre "awesome_kanban"
registry.category("views").add("awesome_kanban", awesomeKanbanController);
