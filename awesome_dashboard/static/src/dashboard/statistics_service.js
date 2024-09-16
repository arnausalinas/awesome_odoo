/** @odoo-module */

import { registry } from "@web/core/registry";
import { reactive } from "@odoo/owl";

// Define un servicio para manejar estadísticas del dashboard
const statisticsService = {
    // Define las dependencias necesarias para este servicio
    dependencies: ["rpc"],

    // Método que se llama al iniciar el servicio
    start(env, { rpc }) {
        // Define un objeto reactivo para almacenar las estadísticas
        const statistics = reactive({ isReady: false });

        // Función para cargar datos desde el servidor
        async function loadData() {
            // Realiza una llamada RPC al endpoint para obtener las estadísticas
            const updates = await rpc("/awesome_dashboard/statistics");
            // Actualiza el objeto reactivo con los datos obtenidos y marca el estado como listo
            Object.assign(statistics, updates, { isReady: true });
        }

        // Llama a loadData cada 10 minutos para actualizar las estadísticas
        setInterval(loadData, 10 * 60 * 1000);
        // Llama a loadData inmediatamente para obtener datos iniciales
        loadData();

        // Retorna el objeto reactivo con las estadísticas
        return statistics;
    },
};

// Registra el servicio en la categoría 'services' del registro
registry.category("services").add("awesome_dashboard.statistics", statisticsService);
