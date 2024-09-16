/** @odoo-module */

import { registry } from "@web/core/registry"; // Importa el registro de categorías de Odoo
import { ClickerModel } from "./clicker_model"; // Importa el modelo de datos del Clicker
import { browser } from "@web/core/browser/browser"; // Importa el módulo del navegador
import { migrate } from "./clicker_migration"; // Importa la función de migración

const clickerService = {
    dependencies: ["action", "effect", "notification"], // Dependencias del servicio
    start(env, services) {
        // Recupera el estado guardado del Clicker desde localStorage y lo migra si es necesario
        const localState = migrate(JSON.parse(browser.localStorage.getItem("clickerState")));
        // Crea una instancia del modelo Clicker usando el estado recuperado o uno nuevo si no hay estado guardado
        const clickerModel = localState ? ClickerModel.fromJSON(localState) : new ClickerModel();

        // Guarda el estado del Clicker en localStorage cada 10 segundos
        setInterval(() => {
            browser.localStorage.setItem("clickerState", JSON.stringify(clickerModel))
        }, 10000);

        const bus = clickerModel.bus;

        // Maneja el evento "MILESTONE" para mostrar una notificación cuando se alcanza un hito
        bus.addEventListener("MILESTONE", (ev) => {
            services.effect.add({
                message: `Milestone reached! You can now buy ${ev.detail.unlock}`,
                type: "rainbow_man",
            });
        });

        // Maneja el evento "REWARD" para mostrar una notificación cuando se obtiene una recompensa
        bus.addEventListener("REWARD", (ev) => {
            const reward = ev.detail;
            const closeNotification = services.notification.add(
                `Congrats you won a reward: "${reward.description}"`,
                {
                    type: "success",
                    sticky: true,
                    buttons: [
                        {
                            name: "Collect",
                            onClick: () => {
                                reward.apply(clickerModel); // Aplica la recompensa al modelo Clicker
                                closeNotification(); // Cierra la notificación
                                services.action.doAction({
                                    type: "ir.actions.client",
                                    tag: "awesome_clicker.client_action",
                                    target: "new",
                                    name: "Clicker Game"
                                }); // Abre el juego Clicker en una nueva ventana
                            },
                        },
                    ],
                }
            );
        });

        // Devuelve el modelo Clicker para que otros servicios puedan interactuar con él
        return clickerModel;
    },
};

// Registra el servicio "awesome_clicker.clicker" en la categoría "services"
registry.category("services").add("awesome_clicker.clicker", clickerService);
