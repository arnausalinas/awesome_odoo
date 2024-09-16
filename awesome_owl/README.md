# Awesome OWL Module

Este módulo para Odoo 17 proporciona una serie de componentes OWL (Odoo Web Library) que permiten construir interfaces de usuario interactivas y modulares. A continuación se describen los archivos principales incluidos en el módulo.

## Archivos

### 1.** `playground.js`**

**Ubicación**: `src/js/playground/playground.js`

**Descripción**:
Define el componente `Playground`, que sirve como un contenedor para varios componentes interactivos. Maneja estados como `cards`, `cartas`, y `sumatorioClicks`, e incluye métodos para manejar eventos de clic.

**Características**:
- **Estado**:
  - `cards`: Lista de tarjetas con ID, título y contenido.
  - `cartas`: Lista de cartas con ID y título.
  - `sumatorioClicks`: Contador de clics.
- **Métodos**:
  - `checkIfClicked(boolean)`: Actualiza el contador de clics.

### 2.** `playground.xml`**

**Ubicación**: `src/xml/playground/playground.xml`

**Descripción**:
Plantilla XML para el componente `Playground`. Renderiza una serie de componentes como `Counter`, `Todolist`, `Card`, y `Carta`, y maneja su disposición y eventos de usuario.

**Características**:
- Usa `t-foreach` para iterar sobre listas de tarjetas y cartas.
- Incluye un botón y un contador que se actualiza en función de los clics.

### 3. **`todolist.js`**

**Ubicación**: `src/js/todolist/todolist.js`

**Descripción**:
Define el componente `Todolist`, que permite gestionar una lista de tareas (`todos`). Incluye funcionalidades para agregar, eliminar y alternar el estado de las tareas.

**Características**:
- **Estado**:
  - `todos`: Lista de tareas con ID, texto, y estado (`done`).
  - `newTodo`: Texto de una nueva tarea a añadir.
- **Métodos**:
  - `addTodo(event)`: Añade una nueva tarea cuando se presiona Enter.
  - `handleInputChange(event)`: Actualiza el texto de la nueva tarea.
  - `toggleTodoState(id)`: Alterna el estado de una tarea.
  - `removeTodo(id)`: Elimina una tarea de la lista.

### 4.** `todolist.xml`**

**Ubicación**: `src/xml/todolist/todolist.xml`

**Descripción**:
Plantilla XML para el componente `Todolist`. Incluye un campo de entrada para añadir nuevas tareas y una lista de tareas existentes, renderizadas usando el componente `Todo`.

**Características**:
- Usa `t-foreach` para iterar sobre las tareas.
- Incluye un botón para enfocar el campo de entrada.

### 5. **`todo.js`**

**Ubicación**: `src/js/todo/todo.js`

**Descripción**:
Define el componente `Todo`, que representa una tarea individual en la lista de tareas. Permite marcar la tarea como completada y eliminarla.

**Características**:
- **Propiedades**:
  - `id`: ID de la tarea.
  - `todo`: Texto de la tarea.
  - `done`: Estado de la tarea (completada o no).
  - `toggleState`: Función para alternar el estado de la tarea.
  - `removeTodo`: Función para eliminar la tarea.

### 6. **`todo.xml`**

**Ubicación**: `src/xml/todo/todo.xml`

**Descripción**:
Plantilla XML para el componente `Todo`. Muestra un elemento de tarea con un checkbox para marcarla como completada y un icono para eliminarla.

**Características**:
- Usa `t-att-class` para aplicar una clase condicional según el estado de la tarea.
- Usa `t-on-change` y `t-on-click` para manejar eventos de usuario.

### 7. **`counter.js`**

**Ubicación**: `src/js/counter/counter.js`

**Descripción**:
Define el componente `Counter`, que muestra un contador simple y permite incrementarlo. También emite un evento cuando se incrementa.

**Características**:
- **Estado**:
  - `value`: Valor del contador.
- **Métodos**:
  - `increment()`: Incrementa el valor del contador y llama a `checkIfClicked` si está definido.

### 8. **`counter.xml`**

**Ubicación**: `src/xml/counter/counter.xml`

**Descripción**:
Plantilla XML para el componente `Counter`. Muestra el valor del contador y un botón para incrementarlo.

**Características**:
- Usa `t-esc` para mostrar el valor del contador.
- Usa `t-on-click` para manejar el evento de clic en el botón.

### 9. **`carta.js`**

**Ubicación**: `src/js/carta/carta.js`

**Descripción**:
Define el componente `Carta`, que representa un contenedor con un título y un contenido que se puede mostrar u ocultar.

**Características**:
- **Propiedades**:
  - `id`: ID de la carta.
  - `title`: Título de la carta.
  - `slots`: Contenido que puede ser pasado como slot.
- **Estado**:
  - `open`: Controla si el contenido está visible o no.
- **Métodos**:
  - `toggleContent()`: Alterna la visibilidad del contenido.

### 10. **`carta.xml`**

**Ubicación**: `src/xml/carta/carta.xml`

**Descripción**:
Plantilla XML para el componente `Carta`. Muestra el título de la carta y el contenido basado en el estado de `open`.

**Características**:
- Usa `t-if` para mostrar u ocultar el contenido.
- Usa `t-slot` para permitir contenido personalizado.

### 11. **`card.js`**

**Ubicación**: `src/js/card/card.js`

**Descripción**:
Define el componente `Card`, que representa una tarjeta simple con un título y un contenido.

**Características**:
- **Propiedades**:
  - `id`: ID de la tarjeta.
  - `title`: Título de la tarjeta.
  - `content`: Contenido de la tarjeta.

### 12. **`card.xml`**

**Ubicación**: `src/xml/card/card.xml`

**Descripción**:
Plantilla XML para el componente `Card`. Muestra una tarjeta con un título y contenido.

**Características**:
- Usa `t-out` para mostrar el título y el contenido de la tarjeta.

## Instalación

1. Copia los archivos del módulo en el directorio adecuado dentro de tu instancia de Odoo.
2. Actualiza la lista de módulos en Odoo y selecciona el módulo `awesome_owl` para instalarlo.
3. Configura los componentes según tus necesidades a través de la interfaz de Odoo.

## Uso

- **Componente `Playground`**: Sirve como un contenedor para otros componentes como `Counter`, `Todolist`, `Card`, y `Carta`.
- **Componente `Todolist`**: Permite gestionar una lista de tareas con funcionalidades para agregar, eliminar y alternar el estado de las tareas.
- **Componente `Todo`**: Representa una tarea individual en la lista de tareas.
- **Componente `Counter`**: Muestra y actualiza un contador simple.
- **Componente `Carta`**: Representa un contenedor con un título y contenido que se puede mostrar u ocultar.
- **Componente `Card`**: Muestra una tarjeta con un título y contenido.

Este módulo está diseñado para proporcionar una interfaz interactiva y modular en Odoo, utilizando componentes OWL para una experiencia de usuario dinámica y personalizable.

---

Este `README.md` proporciona una visión general de los archivos incluidos en el módulo y cómo se integran para crear una experiencia de usuario modular e interactiva en Odoo.

## Contacto

¡Gracias por explorar el módulo Awesome OWL! Si tienes alguna pregunta, sugerencia o necesitas ayuda, no dudes en ponerte en contacto.

**Autor**: Arnau Salinas  
**Email**: [arnau.salinas@example.com](mailto:arnau@planesnet.com)
**GitHub**: [ArnauSalinas](https://github.com/arnausalinas)  
**LinkedIn**: [Arnau Salinas](https://www.linkedin.com/in/arnau-salinas-2426bsb)

**Versión**: 1.0.0  
**Fecha de publicación**: 16/09/2024

**Licencia**: Este proyecto está licenciado bajo la Licencia MIT - consulta el archivo [LICENSE](LICENSE) para más detalles.
