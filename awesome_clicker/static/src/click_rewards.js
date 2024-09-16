/** @odoo-module */

// Exporta una lista de recompensas para el juego Clicker
export const rewards = [
    {
        description: "Get 1 click bot", // Descripción de la recompensa
        apply(clicker) {
            clicker.increment(1); // Aplica la recompensa incrementando el número de clics en 1
        },
        maxLevel: 3, // Nivel máximo requerido para recibir esta recompensa
    },
    {
        description: "Get 10 click bot", // Descripción de la recompensa
        apply(clicker) {
            clicker.increment(10); // Aplica la recompensa incrementando el número de clics en 10
        },
        minLevel: 3, // Nivel mínimo requerido para recibir esta recompensa
        maxLevel: 4, // Nivel máximo requerido para recibir esta recompensa
    },
    {
        description: "Increase bot power!", // Descripción de la recompensa
        apply(clicker) {
            clicker.multiplier += 1; // Aplica la recompensa aumentando el poder de los bots en 1
        },
        minLevel: 3, // Nivel mínimo requerido para recibir esta recompensa
    },
];
