# -*- coding: utf-8 -*-

# from odoo import models, fields, api


# class herencia_componente(models.Model):
#     _name = 'herencia_componente.herencia_componente'
#     _description = 'herencia_componente.herencia_componente'

#     name = fields.Char()
#     value = fields.Integer()
#     value2 = fields.Float(compute="_value_pc", store=True)
#     description = fields.Text()
#
#     @api.depends('value')
#     def _value_pc(self):
#         for record in self:
#             record.value2 = float(record.value) / 100

