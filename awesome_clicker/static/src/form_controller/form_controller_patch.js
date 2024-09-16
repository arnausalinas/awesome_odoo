/** @odoo-module */

// Importación de módulos necesarios de Odoo
import { FormController } from "@web/views/form/form_controller"; // Controlador para formularios en Odoo
import { patch } from "@web/core/utils/patch"; // Función para aplicar parches a clases
import { useClicker } from "../clicker_hook"; // Hook personalizado para el servicio "clicker"

// Definición del parche para el controlador de formularios
const FormControllerPatch = {
    setup() {
        super.setup(...arguments); // Llama al método setup original del controlador
        const clicker = useClicker(); // Accede al servicio personalizado "clicker"
        // 1% de probabilidad de otorgar una recompensa
        if (Math.random() < 0.01) {
            clicker.giveReward(); // Llama al método para dar una recompensa
        }
    },
};

// Aplicación del parche al FormController de Odoo
patch(FormController.prototype, FormControllerPatch);
