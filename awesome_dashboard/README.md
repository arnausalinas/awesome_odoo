# Awesome Dashboard Module

Este módulo para Odoo 17 proporciona una serie de componentes y servicios para crear un dashboard interactivo y configurable. A continuación se describen los archivos principales incluidos en el módulo.

## Archivos

### 1. **`dashboard_item.js`**

**Ubicación**: `src/js/dashboard_item/dashboard_item.js`

**Descripción**:
Define el componente `DashboardItem`, que representa un contenedor de tarjeta para elementos del dashboard. Permite ajustar su tamaño a través de la propiedad `size`.

**Características**:
- **Propiedades**:
  - `slots`: Contiene los slots que se pueden insertar en la tarjeta.
  - `size`: Tamaño de la tarjeta en términos de unidades de medida.

### 2. **`dashboard_item.xml`**

**Ubicación**: `src/xml/dashboard_item/dashboard_item.xml`

**Descripción**:
Plantilla XML para el componente `DashboardItem`. Renderiza una tarjeta con un estilo ajustable según el tamaño proporcionado y permite incluir contenido a través de un slot.

**Características**:
- Usa el atributo `t-attf-style` para ajustar el ancho de la tarjeta.
- Contiene un slot para insertar contenido en la tarjeta.

### 3. **`number_card.js`**

**Ubicación**: `src/js/number_card/number_card.js`

**Descripción**:
Define el componente `NumberCard`, que muestra un título y un valor numérico. Es útil para mostrar estadísticas o métricas clave.

**Características**:
- **Propiedades**:
  - `title`: El título de la tarjeta.
  - `value`: El valor numérico a mostrar.

### 4. **`number_card.xml`**

**Ubicación**: `src/xml/number_card/number_card.xml`

**Descripción**:
Plantilla XML para el componente `NumberCard`. Muestra un título y un valor numérico con un estilo grande y centrado.

**Características**:
- Usa `t-esc` para escapar y mostrar el título y el valor.

### 5. **`pie_chart.js`**

**Ubicación**: `src/js/pie_chart/pie_chart.js`

**Descripción**:
Define el componente `PieChart`, que renderiza un gráfico circular usando Chart.js. Se carga de forma perezosa para mejorar el rendimiento.

**Características**:
- **Propiedades**:
  - `label`: Etiqueta del gráfico.
  - `data`: Datos del gráfico.
- **Métodos**:
  - `renderChart()`: Renderiza el gráfico con los datos proporcionados.

### 6. **`pie_chart.xml`**

**Ubicación**: `src/xml/pie_chart/pie_chart.xml`

**Descripción**:
Plantilla XML para el componente `PieChart`. Contiene un elemento `<canvas>` donde se renderiza el gráfico circular.

**Características**:
- Usa `t-ref` para referenciar el canvas para el renderizado del gráfico.

### 7. **`pie_chart_card.js`**

**Ubicación**: `src/js/pie_chart_card/pie_chart_card.js`

**Descripción**:
Define el componente `PieChartCard`, que combina un gráfico circular con un título. Utiliza el componente `PieChart` para mostrar gráficos.

**Características**:
- **Propiedades**:
  - `title`: Título de la tarjeta.
  - `values`: Datos para el gráfico circular.

### 8. **`pie_chart_card.xml`**

**Ubicación**: `src/xml/pie_chart_card/pie_chart_card.xml`

**Descripción**:
Plantilla XML para el componente `PieChartCard`. Muestra un título seguido de un gráfico circular.

**Características**:
- Usa `t-component` para incluir el componente `PieChart` con las propiedades necesarias.

### 9. **`dashboard_loader.js`**

**Ubicación**: `src/js/dashboard_loader/dashboard_loader.js`

**Descripción**:
Define el componente `AwesomeDashboardLoader`, que carga de manera perezosa el componente `AwesomeDashboard`.

**Características**:
- Usa `LazyComponent` para el cargado perezoso del componente `AwesomeDashboard`.

### 10. **`dashboard_loader.xml`**

**Ubicación**: `src/xml/dashboard_loader/dashboard_loader.xml`

**Descripción**:
Plantilla XML para el componente `AwesomeDashboardLoader`. Utiliza `LazyComponent` para cargar dinámicamente el componente `AwesomeDashboard`.

**Características**:
- Define cómo se carga el componente usando `LazyComponent`.

### 11. **`statistics_service.js`**

**Ubicación**: `src/js/statistics_service/statistics_service.js`

**Descripción**:
Define un servicio `statisticsService` que maneja la carga y actualización de estadísticas para el dashboard. Utiliza `rpc` para obtener datos desde el servidor.

**Características**:
- Carga datos cada 10 minutos y actualiza el objeto reactivo con las estadísticas.
- Se registra en la categoría `services`.

## Instalación

1. Copia los archivos del módulo en el directorio adecuado dentro de tu instancia de Odoo.
2. Actualiza la lista de módulos en Odoo y selecciona el módulo `awesome_dashboard` para instalarlo.
3. Configura los componentes y servicios según tus necesidades a través de la interfaz de Odoo.

## Uso

- **Componente `AwesomeDashboard`**: Muestra un dashboard interactivo con diferentes tarjetas y gráficos.
- **Servicio `statisticsService`**: Proporciona estadísticas actualizadas para el dashboard.

Este módulo está diseñado para proporcionar una visión clara y dinámica de las métricas clave a través de un dashboard configurable en Odoo.

---

Este `README.md` proporciona una visión general de los archivos incluidos en el módulo y cómo se integran para crear una experiencia de dashboard interactiva en Odoo.

## Contacto

¡Gracias por explorar el módulo Awesome Dashboard! Si tienes alguna pregunta, sugerencia o necesitas ayuda, no dudes en ponerte en contacto.

**Autor**: Arnau Salinas  
**Email**: [arnau.salinas@example.com](mailto:arnau@planesnet.com)
**GitHub**: [ArnauSalinas](https://github.com/arnausalinas)  
**LinkedIn**: [Arnau Salinas](https://www.linkedin.com/in/arnau-salinas-2426bsb)

**Versión**: 1.0.0  
**Fecha de publicación**: 16/09/2024

**Licencia**: Este proyecto está licenciado bajo la Licencia MIT - consulta el archivo [LICENSE](LICENSE) para más detalles.
