/** @odoo-module */

// Define la versión actual del esquema de datos
export const CURRENT_VERSION = 2.0;

// Lista de migraciones que transforman el estado de una versión a otra
export const migrations = [
    {
        fromVersion: 1.0, // Versión de origen para esta migración
        toVersion: 2.0, // Versión a la que se migra
        apply: (state) => {
            // Aplicar cambios al estado para la migración
            state.trees.peachTree = {
                price: 1500000, // Precio del nuevo árbol
                level: 5, // Nivel del nuevo árbol
                produce: "peach", // Tipo de fruto que produce
                purchased: 0, // Cantidad comprada
            };
            state.fruits.peach = 0; // Inicializa el nuevo tipo de fruta
        },
    },
];

// Función que aplica las migraciones necesarias al estado local
export function migrate(localState) {
    // Verifica si el estado local necesita migración
    if (localState?.version < CURRENT_VERSION) {
        // Itera sobre las migraciones y aplica las necesarias
        for (const migration of migrations) {
            if (localState.version === migration.fromVersion) {
                migration.apply(localState); // Aplica la migración
                localState.version = migration.toVersion; // Actualiza la versión
            }
        }
        // Asegura que la versión se actualice a la versión actual
        localState.version = CURRENT_VERSION;
    }
    return localState; // Devuelve el estado actualizado
}
