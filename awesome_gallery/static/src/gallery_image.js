/** @odoo-module */

// Importa los módulos necesarios de Odoo y OWL.
import { Component } from "@odoo/owl";
import { url } from "@web/core/utils/urls";
import { GalleryModel } from "./gallery_model";
import { useService } from "@web/core/utils/hooks";
import { FileUploader } from "@web/views/fields/file_handler";
import { useTooltip } from "@web/core/tooltip/tooltip_hook";

// Define la clase `GalleryImage` que extiende de `Component`.
export class GalleryImage extends Component {
    // Registra el componente `FileUploader` para su uso en la plantilla.
    static components = { FileUploader };
    
    // Especifica la plantilla que se utilizará para este componente.
    static template = "awesome_gallery.GalleryImage";
    
    // Define las propiedades que el componente aceptará.
    static props = {
        record: Object,            // Registro de la imagen en la galería.
        model: GalleryModel,       // Instancia del modelo de galería.
        onImageUpload: Function,   // Función para manejar la carga de imágenes.
        tooltipTemplate: {        // Plantilla opcional para el tooltip.
            optional: true,
            type: String,
        },
    };

    // Configuración inicial del componente.
    setup() {
        // Obtiene el servicio `action` de Odoo para manejar acciones de vista.
        this.action = useService("action");

        // Si se proporciona una plantilla de tooltip, configura el tooltip usando `useTooltip`.
        if (this.props.tooltipTemplate) {
            useTooltip("tooltip", {
                info: { record: this.props.record },
                template: this.props.tooltipTemplate,
            });
        }
    }

    // Maneja el clic en la imagen, cambiando la vista a un formulario para el registro dado.
    onImageClick(resId) {
        this.action.switchView("form", { resId });
    }
    
    // Calcula la URL de la imagen utilizando los parámetros proporcionados.
    get imageUrl() {
        return url("/web/image", {
            model: this.props.model.resModel,
            id: this.props.record.id,
            field: this.props.model.imageField,
            unique: this.props.record.write_date,
        });
    }
    
    // Maneja la carga del archivo, llamando a `onImageUpload` con el ID del registro y los datos del archivo.
    async _onFileUploaded({ data }) {
        await this.props.onImageUpload(this.props.record.id, data);
    }
}
