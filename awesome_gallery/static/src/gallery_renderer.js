/** @odoo-module */

// Importa los módulos necesarios de Odoo y OWL.
import { Component } from "@odoo/owl";
import { GalleryModel } from "./gallery_model";
import { GalleryImage } from "./gallery_image";
import { createElement } from "@web/core/utils/xml";
import { xml } from "@odoo/owl";

// Define la clase `GalleryRenderer` que extiende de `Component`.
export class GalleryRenderer extends Component {
    // Registra el componente `GalleryImage` para su uso en la plantilla.
    static components = { GalleryImage };
    
    // Especifica la plantilla que se utilizará para este componente.
    static template = "awesome_gallery.GalleryRenderer";
    
    // Define las propiedades que el componente aceptará.
    static props = {
        model: GalleryModel,                  // Instancia del modelo de galería.
        onImageUpload: Function,              // Función para manejar la carga de imágenes.
        tooltipTemplate: {                   // Plantilla opcional para el tooltip.
            optional: true,
            type: Element,
        },
    }

    // Configuración inicial del componente.
    setup() {
        // Si se proporciona una plantilla de tooltip, realiza el procesamiento necesario.
        if (this.props.tooltipTemplate) {
            // Selecciona todos los elementos 'field' en la plantilla de tooltip.
            const fieldsToReplace = this.props.tooltipTemplate.querySelectorAll("field");
            
            // Reemplaza cada elemento 'field' con un elemento 't' que tiene un atributo `t-esc`.
            for (const field of fieldsToReplace) {
                const fieldName = field.getAttribute("name");
                const t = document.createElement("t");
                t.setAttribute("t-esc", `record.${fieldName}`);
                field.replaceWith(t);
            }
            
            // Convierte la plantilla de tooltip en un HTML que OWL pueda procesar.
            const tooltipHTML = createElement("t", [this.props.tooltipTemplate]).outerHTML;
            this.owlTooltipTemplate = xml`${tooltipHTML}`; // Asigna la plantilla procesada a `owlTooltipTemplate`.
        }
    }
}
