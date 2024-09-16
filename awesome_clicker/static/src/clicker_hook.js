/** @odoo-module */

// Importación de módulos necesarios de Odoo
import { useService } from "@web/core/utils/hooks"; // Hook para acceder a servicios de Odoo
import { useState } from "@odoo/owl"; // Hook para manejar el estado en OWL

// Define un hook personalizado para el servicio Clicker
export function useClicker() {
    // Accede al servicio "awesome_clicker.clicker" y lo envuelve en un estado reactivo
    return useState(useService("awesome_clicker.clicker"));
}
