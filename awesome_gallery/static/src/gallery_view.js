/** @odoo-module */

// Importa los módulos necesarios de Odoo.
import { registry } from "@web/core/registry";
import { GalleryController } from "./gallery_controller";
import { GalleryArchParser } from "./gallery_arch_parser";
import { GalleryModel } from "./gallery_model";
import { GalleryRenderer } from "./gallery_renderer";

// Define la vista de galería.
export const galleryView = {
    type: "gallery",                    // Tipo de vista, en este caso "gallery".
    display_name: "Gallery",            // Nombre para mostrar de la vista.
    icon: "fa fa-picture-o",            // Icono que se mostrará en la interfaz.
    multiRecord: true,                  // Indica si la vista puede manejar múltiples registros.
    Controller: GalleryController,      // Controlador para manejar la lógica de la vista.
    ArchParser: GalleryArchParser,      // Parser para interpretar el XML de la vista.
    Model: GalleryModel,                // Modelo que gestiona los datos para la vista.
    Renderer: GalleryRenderer,          // Renderizador que se encarga de mostrar los datos en la vista.

    // Método para configurar las propiedades de la vista.
    props(genericProps, view) {
        const { ArchParser } = view;     // Obtiene el parser de arquitectura de la vista.
        const { arch } = genericProps;   // Extrae el XML de la vista de las propiedades genéricas.
        const archInfo = new ArchParser().parse(arch); // Usa el parser para obtener la información de arquitectura.

        // Devuelve las propiedades configuradas para la vista.
        return {
            ...genericProps,             // Propiedades genéricas de la vista.
            Model: view.Model,           // Modelo asociado con la vista.
            Renderer: view.Renderer,     // Renderizador asociado con la vista.
            archInfo,                    // Información de arquitectura obtenida del parser.
        };
    },
};

// Registra la vista de galería en el sistema de registro de vistas de Odoo.
registry.category("views").add("gallery", galleryView);
