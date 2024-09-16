/** @odoo-module */
// Importación de módulos necesarios de OWL y Odoo
import { Component } from "@odoo/owl"; // Clase base para componentes OWL
import { humanNumber } from "@web/core/utils/numbers"; // Utilidad para convertir números a un formato más legible
import { useClicker } from "../clicker_hook"; // Hook personalizado para el servicio "clicker"

// Definición del componente ClickerValue
export class ClickerValue extends Component {
    // Definición de la plantilla asociada a este componente
    static template = "awesome_clicker.ClickerValue"; 
    static props = {}; // No hay propiedades definidas para este componente

    // Función setup para inicializar los hooks y servicios
    setup() {
        this.clicker = useClicker(); // Acceso al servicio personalizado "clicker"
    }

    // Getter que devuelve el número de clicks en un formato legible
    get humanizedClicks() {
        return humanNumber(this.clicker.clicks, {
            decimals: 1, // Formatea el número con un decimal
        });
    }
}
