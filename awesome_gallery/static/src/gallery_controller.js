/** @odoo-module */

// Importa los módulos necesarios de Odoo y OWL.
import { Layout } from "@web/search/layout";
import { useService } from "@web/core/utils/hooks";
import { Component, onWillStart, onWillUpdateProps, useState } from "@odoo/owl";
import { standardViewProps } from "@web/views/standard_view_props";
import { usePager } from "@web/search/pager_hook";

// Define la clase `GalleryController` que extiende de `Component`.
export class GalleryController extends Component {
    // Especifica la plantilla que se utilizará para este componente.
    static template = "awesome_gallery.GalleryController";
    
    // Define las propiedades que el componente aceptará.
    static props = {
        ...standardViewProps, // Propiedades estándar para vistas de Odoo.
        archInfo: Object,    // Información de la arquitectura del componente.
        Model: Function,     // Función que define el modelo a usar.
        Renderer: Function,  // Función que define el renderizador a usar.
    };
    
    // Registra el componente `Layout` para su uso en la plantilla.
    static components = { Layout };

    // Configuración inicial del componente.
    setup() {
        // Obtiene el servicio `orm` de Odoo para manejar operaciones ORM.
        this.orm = useService("orm");

        // Inicializa el modelo usando el constructor proporcionado en las propiedades.
        this.model = useState(
            new this.props.Model(
                this.orm,
                this.props.resModel,
                this.props.fields,
                this.props.archInfo,
            )
        );

        // Configura el paginador usando el hook `usePager`.
        usePager(() => {
            return {
                offset: this.model.pager.offset,
                limit: this.model.pager.limit,
                total: this.model.recordsLength,
                onUpdate: async ({ offset, limit }) => {
                    // Actualiza el estado del paginador y recarga los datos.
                    this.model.pager.offset = offset;
                    this.model.pager.limit = limit;
                    await this.model.load(this.props.domain);
                },
            };
        });

        // Hook que se ejecuta cuando el componente está a punto de iniciarse.
        onWillStart(async () => {
            // Carga los datos iniciales.
            await this.model.load(this.props.domain);
        });

        // Hook que se ejecuta cuando se actualizan las propiedades del componente.
        onWillUpdateProps(async (nextProps) => {
            // Verifica si el dominio ha cambiado y recarga los datos si es necesario.
            if (JSON.stringify(nextProps.domain) !== JSON.stringify(this.props.domain)) {
                await this.model.load(nextProps.domain);
            }
        });
    }

    // Método para manejar la carga de imágenes.
    async onImageUpload(record_id, image_binary) {
        // Llama al método `uploadImage` del modelo para cargar la imagen.
        this.model.uploadImage(record_id, image_binary, this.props.domain);
    }
}
