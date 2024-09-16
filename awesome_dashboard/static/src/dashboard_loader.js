/** @odoo-module */

import { registry } from "@web/core/registry";
import { LazyComponent } from "@web/core/assets";
import { Component, xml } from "@odoo/owl";

// Define el componente AwesomeDashboardLoader
class AwesomeDashboardLoader extends Component {
    // Registra el componente LazyComponent como un componente hijo
    static components = { LazyComponent };
    
    // Define la plantilla (template) del componente usando XML
    static template = xml`
    <!-- Utiliza el componente LazyComponent para cargar 'AwesomeDashboard' -->
    <LazyComponent bundle="'awesome_dashboard.dashboard'" Component="'AwesomeDashboard'" props="props"/>
    `;
}

// Registra el componente AwesomeDashboardLoader en la categoría 'actions' del registro
registry.category("actions").add("awesome_dashboard.dashboard", AwesomeDashboardLoader);
