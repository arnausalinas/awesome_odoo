/** @odoo-module */

// Importa la clase `KeepLast` de Odoo para manejar la sincronización de datos concurrentes.
import { KeepLast } from "@web/core/utils/concurrency";

// Define la clase `GalleryModel`.
export class GalleryModel {
    // Constructor para inicializar el modelo de galería.
    constructor(orm, resModel, fields, archInfo) {
        this.orm = orm; // Servicio ORM para operaciones de base de datos.
        this.resModel = resModel; // Modelo de recursos para trabajar con registros.
        
        // Extrae los parámetros de configuración del objeto `archInfo`.
        const { imageField, limit, fieldsForTooltip } = archInfo;
        this.fieldsForTooltip = fieldsForTooltip; // Campos adicionales para tooltips.
        this.imageField = imageField; // Campo de imagen en el modelo.
        this.fields = fields; // Campos que se cargarán en el modelo.
        this.limit = limit; // Límite de registros por página.
        
        // Inicializa el manejador de concurrencia `KeepLast`.
        this.keepLast = new KeepLast();
        
        // Configura el paginador con el desplazamiento inicial y el límite.
        this.pager = { offset: 0, limit: limit };
    }

    // Método para cargar registros desde el servidor.
    async load(domain) {
        // Define la especificación de los campos que se deben recuperar.
        const specification = {
            [this.imageField]: {}, // Campo de imagen.
            write_date: {}, // Fecha de escritura para la gestión de versiones.
        };
        
        // Agrega los campos de tooltip a la especificación.
        for (const field of this.fieldsForTooltip) {
            specification[field] = {};
        }
        
        // Realiza una búsqueda en el servidor y agrega el resultado al manejador de concurrencia.
        const { length, records } = await this.keepLast.add(
            this.orm.webSearchRead(this.resModel, domain, {
                limit: this.pager.limit, // Límite de registros por página.
                offset: this.pager.offset, // Desplazamiento para la paginación.
                specification, // Campos a recuperar.
                context: {
                    bin_size: true, // Incluye el tamaño del bin en el contexto.
                }
            })
        );
        
        // Actualiza las propiedades del modelo con los resultados.
        this.recordsLength = length;
        this.records = records;
    }

    // Método para cargar una imagen en un registro específico.
    async uploadImage(record_id, image_binary, domain) {
        // Guarda la imagen en el registro especificado.
        await this.orm.webSave(
            this.resModel,
            [record_id], // IDs de registros a actualizar.
            {
                [this.imageField]: image_binary, // Campo de imagen actualizado.
            },
            {
                specification: {}, // No se especifican campos adicionales para la actualización.
            }
        );
        
        // Recarga los registros después de la actualización de la imagen.
        await this.load(domain);
    }
}
