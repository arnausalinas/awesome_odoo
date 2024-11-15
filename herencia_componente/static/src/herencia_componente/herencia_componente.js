/** @odoo-module **/
import { Component, useState } from "@odoo/owl";
import { useService } from "@web/core/utils/hooks";
import { registry } from "@web/core/registry"

export class Componente1 extends Component {
    static template = "herencia_componente.Componente1Template";
    static props = {
        valor1: { type: Number, optional: true },
        valor2: { type: Number, optional: true },
    };

    setup() {
        this.state = useState({
            resultado:null
        });

    }

    onCalcular(){
        const valor1 = parseFloat(this.props.valor1) ?? 0;
        const valor2 = parseFloat(this.props.valor2) ?? 0;
        this.state.resultado = valor1 + valor2
        console.log(`Has sumado ${this.props.valor1} + ${this.props.valor2} y te ha dado ${this.state.resultado}`);
    }
}

export class HerenciaComponente1 extends Componente1{

    onCalcular(){
        const valor1 = parseFloat(this.props.valor1) ?? 0;
        const valor2 = parseFloat(this.props.valor2) ?? 0;
        this.state.resultado = valor1 - valor2
        console.log(`Has restado ${this.props.valor1} + ${this.props.valor2} y te ha dado ${this.state.resultado}`);
}
}

registry.category("public_components").add("herencia_componente.Componente1", Componente1);
registry.category("public_components").add("herencia_componente.HerenciaComponente1", HerenciaComponente1);