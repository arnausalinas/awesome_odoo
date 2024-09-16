/** @odoo-module **/

import { registry } from "@web/core/registry"; // Importa el registro de categorías de Odoo

// Obtiene el registro de proveedores de comandos
const commandProviderRegistry = registry.category("command_provider");

// Agrega un nuevo proveedor de comandos para la categoría "clicker"
commandProviderRegistry.add("clicker", {
    provide: (env, options) => {
        return [
            {
                name: "Buy 1 click bot", // Nombre del comando
                action() {
                    // Acción que se ejecuta cuando se selecciona el comando
                    env.services["awesome_clicker.clicker"].buyBot("clickbot"); // Compra un ClickBot
                },
            },
            {
                name: "Open Clicker Game", // Nombre del comando
                action() {
                    // Acción que se ejecuta cuando se selecciona el comando
                    env.services.action.doAction({
                        type: "ir.actions.client", // Tipo de acción cliente
                        tag: "awesome_clicker.client_action", // Etiqueta del componente del cliente
                        target: "new", // Abre la acción en una nueva ventana
                        name: "Clicker Game", // Nombre para mostrar
                    });
                },
            }
        ];
    },
});
