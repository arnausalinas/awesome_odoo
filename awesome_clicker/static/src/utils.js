/** @odoo-module */

export function choose(list) {
    // Selecciona un elemento aleatorio de la lista proporcionada
    return list[Math.floor(Math.random() * list.length)];
}
