/** @odoo-module */

import { NumberCard } from "./number_card/number_card";
import { PieChartCard } from "./pie_chart_card/pie_chart_card";
import { registry } from "@web/core/registry";

// Definición de una lista de elementos para el dashboard
const items = [
    // Tarjeta que muestra la cantidad promedio de camisetas
    {
        id: "average_quantity",
        description: "Average amount of t-shirt",
        Component: NumberCard,
        props: (data) => ({
            title: "Average amount of t-shirt by order this month",
            value: data.average_quantity,
        })
    },
    // Tarjeta que muestra el tiempo promedio para un pedido
    {
        id: "average_time",
        description: "Average time for an order",
        Component: NumberCard,
        props: (data) => ({
            title: "Average time for an order to go from 'new' to 'sent' or 'cancelled'",
            value: data.average_time,
        })
    },
    // Tarjeta que muestra el número de nuevos pedidos este mes
    {
        id: "number_new_orders",
        description: "New orders this month",
        Component: NumberCard,
        props: (data) => ({
            title: "Number of new orders this month",
            value: data.nb_new_orders,
        })
    },
    // Tarjeta que muestra el número de pedidos cancelados este mes
    {
        id: "cancelled_orders",
        description: "Cancelled orders this month",
        Component: NumberCard,
        props: (data) => ({
            title: "Number of cancelled orders this month",
            value: data.nb_cancelled_orders,
        })
    },
    // Tarjeta que muestra el monto total de nuevos pedidos este mes
    {
        id: "amount_new_orders",
        description: "amount orders this month",
        Component: NumberCard,
        props: (data) => ({
            title: "Total amount of new orders this month",
            value: data.total_amount,
        })
    },
    // Tarjeta que muestra un gráfico de pastel de pedidos por tamaño
    {
        id: "pie_chart",
        description: "Shirt orders by size",
        Component: PieChartCard,
        size: 2,
        props: (data) => ({
            title: "Shirt orders by size",
            values: data.orders_by_size,
        })
    },
    // Tarjeta adicional para el gráfico de pastel de pedidos por tamaño
    {
        id: "pie_chart_2",
        description: "Shirt orders by size",
        Component: PieChartCard,
        size: 2,
        props: (data) => ({
            title: "Shirt orders by size",
            values: data.orders_by_size,
        })
    },
    // Otra tarjeta adicional para el gráfico de pastel de pedidos por tamaño
    {
        id: "pie_chart_3",
        description: "Shirt orders by size",
        Component: PieChartCard,
        size: 2,
        props: (data) => ({
            title: "Shirt orders by size",
            values: data.orders_by_size,
        })
    }
];

// Registra cada elemento en la categoría 'awesome_dashboard' del registro de componentes
items.forEach(item => {
    registry.category("awesome_dashboard").add(item.id, item);
});
