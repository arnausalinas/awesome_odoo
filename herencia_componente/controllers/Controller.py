# -*- coding: utf-8 -*-
from odoo import http
from odoo.http import request
import base64

class Controller(http.Controller):
    @http.route('/componente', auth='public', website=True, csrf=True)
    def index(self, **kw):
        return request.render('herencia_componente.vista_generica')
    
    