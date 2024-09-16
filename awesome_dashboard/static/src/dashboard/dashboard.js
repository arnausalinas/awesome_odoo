/** @odoo-module **/
import { Component, useState } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { Layout } from "@web/search/layout";
import { useService } from "@web/core/utils/hooks";
import { DashboardItem } from "./dashboard_item/dashboard_item";
import { Dialog } from "@web/core/dialog/dialog";
import { CheckBox } from "@web/core/checkbox/checkbox";
import { browser } from "@web/core/browser/browser";

// Definición del componente AwesomeDashboard
class AwesomeDashboard extends Component {
    // Especifica la plantilla (template) asociada a este componente
    static template = "awesome_dashboard.AwesomeDashboard";
    
    // Registra los componentes secundarios que se usan en este componente
    static components = { Layout, DashboardItem };

    setup() {
        // Usa el servicio 'action' para manejar acciones
        this.action = useService("action");
        // Usa el servicio 'awesome_dashboard.statistics' para obtener estadísticas y almacena el estado
        this.statistics = useState(useService("awesome_dashboard.statistics"));
        // Usa el servicio 'dialog' para manejar diálogos
        this.dialog = useService("dialog");
        // Define un objeto para el panel de control
        this.display = {
            controlPanel: {},
        };
        // Obtiene todos los elementos registrados en la categoría 'awesome_dashboard'
        this.items = registry.category("awesome_dashboard").getAll();
        // Define el estado para los elementos deshabilitados, leyendo de localStorage o usando un array vacío por defecto
        this.state = useState({
            disabledItems: browser.localStorage.getItem("disabledDashboardItems")?.split(",") || []
        });
    }

    // Abre el diálogo de configuración
    openConfiguration() {
        this.dialog.add(ConfigurationDialog, {
            items: this.items,
            disabledItems: this.state.disabledItems,
            onUpdateConfiguration: this.updateConfiguration.bind(this),
        });
    }

    // Actualiza la configuración con los nuevos elementos deshabilitados
    updateConfiguration(newDisabledItems) {
        this.state.disabledItems = newDisabledItems;
    }

    // Abre la vista del cliente
    openCustomerView() {
        this.action.doAction("base.action_partner_form");
    }

    // Abre la vista de leads
    openLeads() {
        this.action.doAction({
            type: "ir.actions.act_window",
            name: "All leads",
            res_model: "crm.lead",
            views: [
                [false, "list"],
                [false, "form"],
            ],
        });
    }
}

// Definición del componente ConfigurationDialog
class ConfigurationDialog extends Component {
    // Especifica la plantilla (template) asociada a este componente
    static template = "awesome_dashboard.ConfigurationDialog";
    
    // Registra los componentes secundarios que se usan en este componente
    static components = { Dialog, CheckBox };
    
    // Define las propiedades (props) que puede recibir este componente
    static props = ["close", "items", "disabledItems", "onUpdateConfiguration"];

    setup() {
        // Mapea los elementos a su estado habilitado o deshabilitado
        this.items = useState(this.props.items.map((item) => {
            return {
                ...item,
                enabled: !this.props.disabledItems.includes(item.id),
            }
        }));
    }

    // Cierra el diálogo
    done() {
        this.props.close();
    }

    // Maneja el cambio en los checkboxes
    onChange(checked, changedItem) {
        changedItem.enabled = checked;
        // Calcula los nuevos elementos deshabilitados basados en los elementos habilitados
        const newDisabledItems = Object.values(this.items).filter(
            (item) => !item.enabled
        ).map((item) => item.id);

        // Guarda la lista de elementos deshabilitados en localStorage
        browser.localStorage.setItem(
            "disabledDashboardItems",
            newDisabledItems.join(",")
        );

        // Llama al callback para actualizar la configuración
        this.props.onUpdateConfiguration(newDisabledItems);
    }
}

// Registra el componente AwesomeDashboard en la categoría 'lazy_components'
registry.category("lazy_components").add("AwesomeDashboard", AwesomeDashboard);
