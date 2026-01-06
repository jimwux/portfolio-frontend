# Portfolio Frontend — Jimena Gómez Wusinowski

Portfolio personal construido con **Angular** para presentar experiencia, habilidades y proyectos, incluyendo un formulario de contacto conectado a un backend de envío de correos.

## Descripción general
Este sitio web funciona como **portfolio profesional** y reúne información clave sobre el perfil, la experiencia laboral, la formación y las habilidades técnicas, además de un canal de contacto directo.

## Tecnologías utilizadas
- **Angular 19** (standalone components)
- **TypeScript**
- **HTML5**
- **SCSS**
- **RxJS**
- **Angular Router** (configurado)
- **Angular HttpClient**

## Estructura del proyecto Angular
```
src/
├── app/
│   ├── app.component.*
│   ├── app.config.ts
│   ├── app.routes.ts
│   ├── components/
│   │   ├── navbar/
│   │   ├── footer/
│   │   ├── loading/
│   │   ├── toast/
│   │   └── sections/
│   │       ├── home/
│   │       ├── about/
│   │       ├── experience/
│   │       ├── skills/
│   │       ├── education/
│   │       └── contact/
│   └── shared/
│       ├── directives/
│       ├── models/
│       └── services/
├── environments/
└── styles.scss
```

## Secciones principales del sitio
- **Home**: presentación principal y visual.
- **About**: resumen profesional.
- **Experience**: experiencia laboral.
- **Skills**: habilidades técnicas.
- **Education**: formación académica.
- **Contact**: formulario de contacto y datos de contacto.

## Funcionamiento del formulario de contacto
- El formulario se implementa con **Reactive Forms** y validaciones (`required`, `minLength`, `email`).
- Al enviar, se construye un payload con `name`, `email` y `message`.
- La comunicación con el backend se realiza mediante `HttpClient` desde `ContactService`, que envía un **POST** a `${apiBaseUrl}/contact`.
- El feedback al usuario se muestra con un sistema de **toasts** (`ToastService`).

## Variables de entorno
Definidas en `src/environments/`:
- `apiBaseUrl`: URL base del backend para el envío de mensajes.
  - **Desarrollo**: `http://localhost:8080/api`
  - **Producción**: `https://porfolio-backend-1o6s.onrender.com/api`

## Instalación y ejecución local
```bash
npm install
npm start
```
Luego abrir: `http://localhost:4200/`

## Buenas prácticas aplicadas
- **Componentización** por secciones y UI (navbar, footer, toast, loading).
- **Standalone components** con imports explícitos.
- **Servicios compartidos** para lógica reutilizable (`ContactService`, `ToastService`).
- **Modelos tipados** en `shared/models` para datos de contacto, experiencia, skills, etc.
- **Directiva reutilizable** (`FadeInOnViewDirective`) para animaciones basadas en visibilidad.
- **Uso de HttpClient** centralizado y configuración de `environment` para endpoints.

## Autor / Contacto
**Jimena Gómez Wusinowski**  
GitHub: https://github.com/jimwux/  
LinkedIn: https://www.linkedin.com/in/jimenagomezwusinowski/
