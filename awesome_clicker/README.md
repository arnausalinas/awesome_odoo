# Awesome Clicker Module

Este módulo de Odoo 17, llamado "Awesome Clicker", implementa un juego de tipo "clicker" dentro del sistema Odoo. A continuación se detalla cada uno de los archivos que componen el módulo.

## Archivos

### 1. **`clicker_systray.js`**

Este archivo define el componente `ClickerSystray`, que se muestra en la bandeja del sistema (systray) de Odoo. El componente permite al usuario:
- Ver el número de "clicks" realizados.
- Mostrar el número total de árboles y frutas compradas.
- Abrir el juego Clicker y comprar un "ClickBot" desde un menú desplegable.

### 2. **`clicker_systray.xml`**

Contiene la plantilla XML para el componente `ClickerSystray`. Esta plantilla define el diseño del menú desplegable en la bandeja del sistema y muestra:
- El valor de los "clicks".
- El número de árboles y frutas.
- Botones para abrir el juego Clicker y comprar un "ClickBot".

### 3. **`clicker_value.js`**

Define el componente `ClickerValue`, que muestra el número de "clicks" en un formato humanizado. Utiliza el servicio `clicker` para obtener y mostrar el valor actual de los "clicks".

### 4. **`clicker_value.xml`**

Contiene la plantilla XML para el componente `ClickerValue`. Esta plantilla muestra el número de "clicks" en un formato humanizado y con una etiqueta de herramienta (tooltip) que muestra el valor exacto.

### 5. **`clicker_client_action.js`**

Define el componente `ClickerClientAction`, que se usa en una acción cliente en Odoo. Este componente:
- Muestra el número de "clicks".
- Permite al usuario incrementar el número de "clicks".
- Muestra una lista de bots y árboles que el usuario puede comprar, dependiendo de su nivel en el juego.

### 6. **`clicker_client_action.xml`**

Contiene la plantilla XML para el componente `ClickerClientAction`. La plantilla incluye:
- Un botón para incrementar los "clicks".
- Un "Notebook" con pestañas para comprar bots, multiplicadores y árboles, y ver la cantidad de frutas.

### 7. **`form_controller_patch.js`**

Modifica el comportamiento del `FormController` en Odoo para dar una recompensa aleatoria cuando se carga un formulario, utilizando el modelo `ClickerModel`.

### 8. **`clicker_rewards.js`**

Define una lista de recompensas disponibles en el juego Clicker. Cada recompensa tiene una descripción, una función para aplicarla y niveles mínimos y máximos para su disponibilidad.

### 9. **`clicker_hook.js`**

Define el hook `useClicker` que proporciona acceso al servicio `clicker` mediante el uso de `useState` para gestionar el estado del Clicker.

### 10. **`clicker_migration.js`**

Contiene la lógica para manejar las migraciones de versiones del estado del Clicker. Asegura que los datos sean compatibles con la versión actual del módulo.

### 11. **`clicker_model.js`**

Define el modelo `ClickerModel`, que gestiona el estado del juego Clicker, incluyendo:
- Número de "clicks".
- Niveles y compras de bots y árboles.
- Funciones para comprar y gestionar bots, árboles, multiplicadores y recompensas.
- Guarda el estado en `localStorage` y maneja la lógica de eventos y actualizaciones.

### 12. **`utils.js`**

Contiene la función `choose`, que selecciona un elemento aleatorio de una lista dada.

### 13. **`command_provider.js`**

Registra un proveedor de comandos que permite realizar acciones relacionadas con el Clicker, como comprar un bot y abrir el juego Clicker desde la interfaz de usuario.

### 14. **`clicker_service.js`**

Define el servicio `clickerService`, que proporciona el modelo `ClickerModel` y maneja eventos y notificaciones para el juego Clicker, incluyendo la gestión del estado en `localStorage`.

## Cómo usar

1. **Instalación:**  
   Copia los archivos a la carpeta de módulos de Odoo y actualiza el módulo desde la interfaz de administración de Odoo.

2. **Configuración:**  
   Asegúrate de que el XML de la vista esté configurado correctamente y que el módulo esté registrado.

3. **Uso:**  
   Añade la vista de galería a tu configuración de vista en Odoo, y deberías poder ver y gestionar las imágenes en la galería.

   ## Contacto
   
   ¡Gracias por explorar el módulo Awesome Clicker! Si tienes alguna pregunta, sugerencia o necesitas ayuda, no dudes en ponerte en contacto.
   
   **Autor**: Arnau Salinas  
   **Email**: [arnau.salinas@example.com](mailto:arnau.salinas@example.com)  
   **GitHub**: [ArnauSalinas](https://github.com/arnausalinas)  
   **LinkedIn**: [Arnau Salinas](https://www.linkedin.com/in/arnau-salinas-2426bsb)
   
   **Versión**: 1.0.0  
   **Fecha de publicación**: 16/09/2024
   
   **Licencia**: Este proyecto está licenciado bajo la Licencia MIT - consulta el archivo [LICENSE](LICENSE) para más detalles.