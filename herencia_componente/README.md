# Módulo Herencia Componente para Odoo

Este módulo para Odoo 17 implementa componentes OWL (Odoo Web Library) con herencia para operaciones matemáticas básicas. Incluye la clase `Componente1`, que permite realizar sumas, y su clase derivada `HerenciaComponente1`, que realiza restas. Los componentes y sus plantillas permiten crear interfaces interactivas en una vista de portal de Odoo.

## Archivos

### 1. **`herencia_componente.js`**

**Ubicación**: `src/js/herencia_componente/herencia_componente.js`

**Descripción**:
Define el componente `Componente1` y su clase heredada `HerenciaComponente1`. Estos componentes son utilizados para operaciones de suma y resta en una interfaz interactiva.

**Características**:
- **Componentes**:
  - **`Componente1`**: Componente base que realiza la suma de dos valores (`valor1` y `valor2`).
  - **`HerenciaComponente1`**: Componente derivado que realiza la resta de los mismos valores.
- **Propiedades**:
  - `valor1`: Primer número para la operación.
  - `valor2`: Segundo número para la operación.
- **Estado**:
  - `resultado`: Resultado de la operación matemática.
- **Métodos**:
  - `onCalcular()`: Calcula y muestra el resultado. En `Componente1`, realiza la suma, mientras que en `HerenciaComponente1` realiza la resta.

### 2. **`herencia_componente.xml`**

**Ubicación**: `src/xml/herencia_componente/herencia_componente.xml`

**Descripción**:
Plantilla XML para `Componente1` y `HerenciaComponente1`. Renderiza una interfaz de usuario que permite ingresar dos valores y ver el resultado de la operación correspondiente (suma o resta) en función del componente utilizado.

**Características**:
- Contiene dos campos de entrada (`input`) para ingresar los valores de la operación.
- Un botón `Calcular` que llama al método `onCalcular` para realizar la operación.
- Una etiqueta `Resultado` que muestra el valor calculado.

### 3. **`templates.xml`**

**Ubicación**: `src/xml/templates.xml`

**Descripción**:
Define una vista de portal en Odoo que integra los componentes `Componente1` y `HerenciaComponente1`. Esta vista permite a los usuarios realizar sumas y restas directamente desde la interfaz de Odoo.

**Características**:
- Usa `t-call` para incorporar la estructura básica del portal.
- Incluye las instancias de `Componente1` y `HerenciaComponente1` para que ambas operaciones estén disponibles en la vista de usuario.

### 4. **`Controller.py`**

**Ubicación**: `controllers/Controller.py`

**Descripción**:
Controlador de Odoo que gestiona la ruta `/componente` en el sitio web. Renderiza la vista definida en `templates.xml` para hacer accesible la funcionalidad de los componentes desde el frontend.

**Características**:
- Define una ruta pública `/componente` accesible desde el sitio web de Odoo.
- Usa `request.render` para devolver la vista `vista_generica`, que incluye los componentes interactivos.

## Instalación

1. Copia los archivos del módulo en el directorio de módulos de tu instancia de Odoo.
2. Actualiza la lista de aplicaciones en Odoo y selecciona el módulo `herencia_componente` para instalarlo.
3. Navega a `localhost:8069/componente` (ajustando el puerto según tu configuración) para ver el módulo en acción en el frontend de Odoo.

## Uso

- **`Componente1`**: Realiza una suma de dos valores ingresados en los campos de entrada. Al hacer clic en el botón `Calcular`, se muestra el resultado de la suma.
- **`HerenciaComponente1`**: Realiza una resta de los dos valores y muestra el resultado al hacer clic en `Calcular`.

Este módulo permite probar la funcionalidad de herencia en componentes OWL dentro de Odoo, proporcionando una base sencilla para desarrollar interfaces de usuario interactivas con componentes heredables.

---

**Autor**: Arnau Salinas  
**Email**: [arnau@planesnet.com](mailto:arnau@planesnet.com)  
**GitHub**: [ArnauSalinas](https://github.com/arnausalinas)  
**LinkedIn**: [Arnau Salinas](https://www.linkedin.com/in/arnau-salinas-2426bsb)

**Versión**: 1.0.0  
**Fecha de publicación**: 16/09/2024  

**Licencia**: Este proyecto está licenciado bajo la Licencia MIT - consulta el archivo [LICENSE](LICENSE) para más detalles.

---

Este `README.md` proporciona una descripción general del módulo y cómo se integran los componentes OWL para crear una interfaz de usuario sencilla en Odoo.
