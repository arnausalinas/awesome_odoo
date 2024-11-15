# -*- coding: utf-8 -*-
{
    "name": "Mazana Incidencias",
    "summary": """Formulario para poder crear incidencias""",
    "description": """Formulario para poder crear incidencias desde cualquier 
                        lado que se crearan automáticamente en el backoffice de Odoo""",
    "author": "Arnau Salinas I Casas",
    "website": "http://www.planesnet.com",
    "installable": True,
    "application": True,
    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/15.0/odoo/addons/base/data/ir_module_category_data.xml
    # for the full list
    "category": "Uncategorized",
    "version": "0.1",
    # any module necessary for this one to work correctly
    "depends": ["base", "website", "web", "portal"],
    # always loaded
    "data": [
        #'security/ir.model.access.csv',
        "views/views.xml",
        "views/templates.xml",
    ],
    "assets": {
        "web.assets_frontend": [
            "herencia_componente/static/src/herencia_componente/**/*",
        ],
        "herencia_componente.assets_incidencias": [
            # Incluye los assets de Odoo de forma correcta
            ("include", "web._assets_helpers"),
            ("include", "web._assets_bootstrap_backend"),
            ("include", "web._assets_core"),
            # Asegúrate de que los archivos de font-awesome estén correctamente referenciados
            "web/static/src/libs/fontawesome/css/font-awesome.css",
            # Incluir archivos SCSS o CSS adicionales si es necesario
            "web/static/src/scss/pre_variables.scss",
        ],
    },
    # only loaded in demonstration mode
    "demo": [
        "demo/demo.xml",
    ],
}
