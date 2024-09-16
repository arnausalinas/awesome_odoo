/** @odoo-module */

// Importaciones necesarias para el módulo
import { Reactive } from "@web/core/utils/reactive"; // Clase para manejar el estado reactivo
import { EventBus } from "@odoo/owl"; // Bus de eventos para comunicación entre componentes
import { rewards } from "./click_rewards"; // Recompensas disponibles en el juego
import { choose } from "./utils"; // Función para seleccionar elementos aleatorios
import { CURRENT_VERSION } from "./clicker_migration"; // Versión actual del esquema de datos

// Definición del modelo de datos para el juego Clicker
export class ClickerModel extends Reactive {
    constructor() {
        super(); // Inicializa la clase base Reactive
        this.version = CURRENT_VERSION; // Establece la versión actual del esquema
        this.clicks = 0; // Número de clics acumulados
        this.level = 0; // Nivel actual del jugador
        this.bus = new EventBus(); // Inicializa el bus de eventos para el modelo
        this.bots = {
            clickbot: {
                price: 1000, // Precio del bot ClickBot
                level: 1, // Nivel del bot ClickBot
                increment: 10, // Incremento por clic del bot ClickBot
                purchased: 0, // Número de ClickBots comprados
            },
            bigbot: {
                price: 5000, // Precio del bot BigBot
                level: 2, // Nivel del bot BigBot
                increment: 100, // Incremento por clic del bot BigBot
                purchased: 0, // Número de BigBots comprados
            }
        }
        this.trees = {
            pearTree: {
                price: 1000000, // Precio del árbol PearTree
                level: 4, // Nivel del árbol PearTree
                produce: "pear", // Fruto producido por el árbol PearTree
                purchased: 0, // Número de PearTrees comprados
            },
            cherryTree: {
                price: 1000000, // Precio del árbol CherryTree
                level: 4, // Nivel del árbol CherryTree
                produce: "cherry", // Fruto producido por el árbol CherryTree
                purchased: 0, // Número de CherryTrees comprados
            },
            peachTree: {
                price: 1500000, // Precio del árbol PeachTree
                level: 5, // Nivel del árbol PeachTree
                produce: "peach", // Fruto producido por el árbol PeachTree
                purchased: 0, // Número de PeachTrees comprados
            },
        }
        this.fruits = {
            pear: 0, // Cantidad de peras
            cherry: 0, // Cantidad de cerezas
            peach: 0, // Cantidad de duraznos
        }
        this.multiplier = 1; // Multiplicador actual de clics

        // Configura el evento de clic en el documento
        document.addEventListener("click", () => this.increment(1), true);

        // Configura un intervalo para actualizar los clics cada 10 segundos
        setInterval(() => {
            for (const bot in this.bots) {
                this.clicks += this.bots[bot].increment * this.bots[bot].purchased * this.multiplier;
            }
        }, 10000);

        // Configura un intervalo para actualizar los frutos cada 30 segundos
        setInterval(() => {
            for (const tree in this.trees) {
                this.fruits[this.trees[tree].produce] += this.trees[tree].purchased;
            }
        }, 30000);
    }

    // Método para comprar un multiplicador de clics
    buyMultiplier() {
        if (this.clicks < 50000) {
            return false; // No tiene suficientes clics para comprar el multiplicador
        }
        this.clicks -= 50000; // Deduce los clics necesarios
        this.multiplier++; // Incrementa el multiplicador
    }

    // Método para incrementar el número de clics
    increment(inc) {
        this.clicks += inc; // Incrementa el número de clics
        // Verifica si se ha alcanzado un hito
        if (
            this.milestones[this.level] &&
            this.clicks >= this.milestones[this.level].clicks
        ) {
            this.bus.trigger("MILESTONE", this.milestones[this.level]); // Dispara un evento de hito
            this.level += 1; // Incrementa el nivel del jugador
        }
    }

    // Método para comprar un bot
    buyBot(name) {
        if (!Object.keys(this.bots).includes(name)) {
            throw new Error(`Invalid bot name ${name}`); // Verifica que el nombre del bot sea válido
        }
        if (this.clicks < this.bots[name].price) {
            return false; // No tiene suficientes clics para comprar el bot
        }
        this.clicks -= this.bots[name].price; // Deduce los clics necesarios
        this.bots[name].purchased += 1; // Incrementa la cantidad de bots comprados
    }

    // Método para otorgar una recompensa
    giveReward() {
        const availableReward = [];
        // Filtra las recompensas disponibles basadas en el nivel actual
        for (const reward of rewards) {
            if (reward.minLevel <= this.level || !reward.minLevel) {
                if (reward.maxLevel >= this.level || !reward.maxLevel) {
                    availableReward.push(reward);
                }
            }
        }
        const reward = choose(availableReward); // Selecciona una recompensa aleatoria
        this.bus.trigger("REWARD", reward); // Dispara un evento de recompensa
        return choose(availableReward); // Devuelve la recompensa seleccionada
    }

    // Método para comprar un árbol
    buyTree(name) {
        if (!Object.keys(this.trees).includes(name)) {
            throw new Error(`Invalid tree name ${name}`); // Verifica que el nombre del árbol sea válido
        }
        if (this.clicks < this.trees[name].price) {
            return false; // No tiene suficientes clics para comprar el árbol
        }
        this.clicks -= this.trees[name].price; // Deduce los clics necesarios
        this.trees[name].purchased += 1; // Incrementa la cantidad de árboles comprados
    }

    // Método para convertir el estado en un JSON
    toJSON() {
        const json = Object.assign({}, this); // Crea una copia del estado
        delete json["bus"]; // Elimina el bus de eventos del JSON
        return json;
    }

    // Método estático para crear una instancia del modelo desde un JSON
    static fromJSON(json) {
        const clicker = new ClickerModel(); // Crea una nueva instancia del modelo
        const clickerInstance = Object.assign(clicker, json); // Asigna el JSON al modelo
        return clickerInstance; // Devuelve la instancia creada
    }

    // Método para obtener los hitos de progreso del juego
    get milestones() {
        return [
            { clicks: 1000, unlock: "clickBot" },
            { clicks: 5000, unlock: "bigBot" },
            { clicks: 100000, unlock: "power multiplier" },
            { clicks: 1000000, unlock: "pear tree & cherry tree" },
            { clicks: 1500000, unlock: "peach tree" },
        ];
    }
}
