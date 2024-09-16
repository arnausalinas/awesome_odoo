# Awesome Kanban Module

Este módulo para Odoo 17 proporciona una vista Kanban personalizada con funcionalidades avanzadas para gestionar y filtrar clientes. A continuación se describen los archivos principales incluidos en el módulo.

## Archivos

### awesome_kanban_controller.js

**Ubicación**: `src/js/awesome_kanban_controller.js`

**Descripción**:
Define el controlador personalizado `AwesomeKanbanController`, que extiende el `KanbanController` estándar. Agrega el componente `CustomerList` y maneja la lógica específica para filtrar y seleccionar clientes.

**Características**:
- **Componentes**:
  - `CustomerList`: Componente utilizado en la vista Kanban.
- **Métodos**:
  - `selectCustomer(partner_id, partner_name)`: Actualiza los filtros de búsqueda basados en el cliente seleccionado.

### awesome_kanban_view.js

**Ubicación**: `src/js/awesome_kanban_view.js`

**Descripción**:
Registra la vista Kanban personalizada en Odoo con el nombre `awesome_kanban`. Utiliza el controlador `AwesomeKanbanController` para gestionar la vista.

**Características**:
- **Registro**:
  - Añade la vista personalizada al registro de vistas en Odoo.

### customer_list.js

**Ubicación**: `src/js/customer_list/customer_list.js`

**Descripción**:
Define el componente `CustomerList`, que muestra una lista paginada de clientes con la opción de filtrar por nombre y por clientes activos.

**Características**:
- **Propiedades**:
  - `selectCustomer`: Función para manejar la selección de clientes.
- **Métodos**:
  - `filterCustomers(name)`: Filtra la lista de clientes basado en la cadena de búsqueda.
  - `onChangeActiveCustomers(ev)`: Maneja el cambio en el filtro de clientes activos.
  - `loadCustomers()`: Carga los datos de clientes desde el servidor.
  - `onUpdatePager(newState)`: Actualiza el estado del paginador y recarga los datos de clientes.

### customer_list.xml

**Ubicación**: `src/xml/customer_list/customer_list.xml`

**Descripción**:
Plantilla XML para el componente `CustomerList`. Muestra una tabla con un campo de búsqueda, un filtro de clientes activos, y una lista paginada de clientes.

**Características**:
- Usa `t-model` para enlazar el campo de búsqueda con el estado del componente.
- Usa `t-foreach` para iterar sobre la lista de clientes y `t-on-click` para manejar la selección de clientes.

### awesome_kanban_view.xml

**Ubicación**: `src/xml/awesome_kanban_view.xml`

**Descripción**:
Plantilla XML para la vista Kanban personalizada `awesome_kanban`. Modifica la vista Kanban estándar para incluir un panel lateral con el componente `CustomerList`.

**Características**:
- Usa `t-inherit` para heredar y modificar la vista Kanban estándar.
- Inserta el componente `CustomerList` en un panel lateral antes del componente `props.Renderer`.

## Instalación

1. Copia los archivos del módulo en el directorio adecuado dentro de tu instancia de Odoo.
2. Actualiza la lista de módulos en Odoo y selecciona el módulo `awesome_kanban` para instalarlo.
3. Configura los componentes y vistas personalizadas según tus necesidades a través de la interfaz de Odoo.

## Uso

- **Componente `CustomerList`**: Muestra una lista de clientes con opciones de filtrado y paginación.
- **Vista `awesome_kanban`**: Proporciona una vista Kanban personalizada con un panel lateral para gestionar clientes.

Este módulo está diseñado para proporcionar una vista Kanban interactiva y configurable, mejorando la gestión de clientes en Odoo.

## Contacto

¡Gracias por explorar el módulo Awesome Kanban! Si tienes alguna pregunta, sugerencia o necesitas ayuda, no dudes en ponerte en contacto.

**Autor**: Arnau Salinas  
**Email**: [arnau.salinas@example.com](mailto:arnau.salinas@example.com)  
**GitHub**: [ArnauSalinas](https://github.com/arnausalinas)  
**LinkedIn**: [Arnau Salinas](https://www.linkedin.com/in/arnau-salinas-2426bsb)

**Versión**: 1.0.0  
**Fecha de publicación**: 16/09/2024

**Licencia**: Este proyecto está licenciado bajo la Licencia MIT - consulta el archivo [LICENSE](LICENSE) para más detalles.

