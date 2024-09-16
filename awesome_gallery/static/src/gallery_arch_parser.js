/** @odoo-module */

// Importa la función `visitXML` del módulo de utilidades de Odoo para recorrer nodos XML.
import { visitXML } from "@web/core/utils/xml";

// Define la clase `GalleryArchParser`.
export class GalleryArchParser {
    // Método para analizar un documento XML.
    parse(xmlDoc) {
        // Obtiene el atributo "image_field" del nodo XML.
        const imageField = xmlDoc.getAttribute("image_field");
        // Obtiene el atributo "limit" del nodo XML, si no existe usa el valor por defecto 80.
        const limit = xmlDoc.getAttribute("limit") || 80;
        // Crea un array para almacenar los nombres de los campos para los tooltips.
        const fieldsForTooltip = [];
        // Inicializa la variable para almacenar la plantilla del tooltip, si existe.
        let tooltipTemplate = undefined;
        
        // Recorre los nodos del XML.
        visitXML(xmlDoc, (node) => {
            // Si el nodo es un campo (`field`), añade el atributo "name" a `fieldsForTooltip`.
            if (node.tagName === "field") {
                fieldsForTooltip.push(node.getAttribute("name"));
            }
            // Si el nodo es una plantilla de tooltip (`tooltip-template`), almacena el nodo en `tooltipTemplate`.
            if (node.tagName === "tooltip-template") {
                tooltipTemplate = node;
            }
        });
        
        // Retorna un objeto con los valores extraídos del XML.
        return {
            imageField,
            limit,
            fieldsForTooltip,
            tooltipTemplate,
        };
    }
}
