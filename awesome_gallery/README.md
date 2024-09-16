# Odoo Gallery Module

Este módulo de Odoo implementa una vista de galería que permite mostrar y gestionar imágenes asociadas con registros en un formato de cuadrícula. A continuación, se presenta una breve descripción de cada archivo incluido en el módulo.

## Archivos

### 1. **`gallery_arch_parser.js`**

**Descripción:**  
Este archivo contiene la clase `GalleryArchParser`, que se encarga de analizar el XML de configuración de la vista de galería. 

**Funcionalidad:**  
- **parse(xmlDoc):** Extrae información relevante del XML, como el campo de imagen, el límite de registros y los campos para los tooltips. 

### 2. **`gallery_controller.js`**

**Descripción:**  
Define el controlador `GalleryController` que maneja la lógica de la vista de galería.

**Funcionalidad:**  
- **setup():** Configura el modelo, el paginador y maneja la carga inicial de registros.
- **onImageUpload(record_id, image_binary):** Maneja la carga de nuevas imágenes.

### 3. **`gallery_image.js`**

**Descripción:**  
Contiene el componente `GalleryImage`, que se encarga de representar cada imagen individual en la galería.

**Funcionalidad:**  
- **setup():** Configura el servicio de acción y el tooltip, si se proporciona.
- **onImageClick(resId):** Maneja el clic en una imagen para cambiar a la vista de formulario del registro.
- **get imageUrl():** Genera la URL de la imagen.
- **_onFileUploaded({ data }):** Maneja la carga de archivos.

### 4. **`gallery_renderer.js`**

**Descripción:**  
Define el componente `GalleryRenderer` que se encarga de renderizar la vista de galería.

**Funcionalidad:**  
- **setup():** Procesa la plantilla del tooltip, si se proporciona, y la convierte en un formato que OWL puede utilizar.

### 5. **`gallery_view.js`**

**Descripción:**  
Configura y registra la vista de galería en el sistema de vistas de Odoo.

**Funcionalidad:**  
- **galleryView:** Define el tipo de vista, el nombre a mostrar, el icono, y asocia el controlador, el parser, el modelo y el renderizador.
- **props(genericProps, view):** Configura las propiedades de la vista utilizando el parser de arquitectura.

### 6. **`gallery_renderer.xml`**

**Descripción:**  
Contiene la plantilla XML para el componente `GalleryRenderer`.

**Funcionalidad:**  
- Muestra una cuadrícula de imágenes utilizando el componente `GalleryImage` para cada registro.

### 7. **`gallery_image.xml`**

**Descripción:**  
Define la plantilla XML para el componente `GalleryImage`.

**Funcionalidad:**  
- Muestra una imagen y un cargador de archivos dentro de una tarjeta con soporte para tooltips.

## Cómo usar

1. **Instalación:**  
   Copia los archivos a la carpeta de módulos de Odoo y actualiza el módulo desde la interfaz de administración de Odoo.

2. **Configuración:**  
   Asegúrate de que el XML de la vista esté configurado correctamente y que el módulo esté registrado.

3. **Uso:**  
   Añade la vista de galería a tu configuración de vista en Odoo, y deberías poder ver y gestionar las imágenes en la galería.


## Contacto

¡Gracias por explorar el módulo Awesome Gallery! Si tienes alguna pregunta, sugerencia o necesitas ayuda, no dudes en ponerte en contacto.

**Autor**: Arnau Salinas  
**Email**: [arnau.salinas@example.com](mailto:arnau.salinas@example.com)  
**GitHub**: [ArnauSalinas](https://github.com/arnausalinas)  
**LinkedIn**: [Arnau Salinas](https://www.linkedin.com/in/arnau-salinas-2426bsb)

**Versión**: 1.0.0  
**Fecha de publicación**: 16/09/2024

**Licencia**: Este proyecto está licenciado bajo la Licencia MIT - consulta el archivo [LICENSE](LICENSE) para más detalles.