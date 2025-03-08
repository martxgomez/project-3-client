# 📍Nexo 

**Nexo** es una SPA diseñada para ayudarte a crear, organizar y compartir planes con tus amigos. Ya sea que estés planeando una reunión, una actividad o cualquier otro tipo de evento, Nexo te permite crear planes personalizados, invitando a amigos a unirse. Además, puedes elegir si tu plan será público o privado para compartirlo con más personas o mantenerlo exclusivo.

## 📄 Descripción

Esta es una aplicación full stack que cumple con los requisitos técnicos especificados. La aplicación consta de un **frontend** desarrollado con **React** (Single Page Application - SPA) y un **backend** construido con **Express.js**, **MongoDB** y **Mongoose**. La aplicación implementa todas las operaciones **CRUD** (Crear, Leer, Actualizar, Eliminar) para tres modelos de base de datos: Usuarios, Planes y Comentarios. Además, la aplicación incluye funcionalidades de autenticación (registro, inicio de sesión y cierre de sesión) con contraseñas encriptadas y autorización para usuarios registrados.

La aplicación está diseñada con un enfoque **mobile-first**, asegurando que sea completamente responsive y optimizada para dispositivos móviles. También se ha implementado validación en el backend y manejo centralizado de errores, proporcionando retroalimentación clara al usuario en caso de errores.

## 📱 Funcionalidades

1. **Crear plan**:
   - Agrega título, descripción, fecha y hora.
   - Define la privacidad del plan (público o privado).
   - Envía invitaciones a tus amigos por WhatsApp o enlace.

2. **Unirse a planes**:
   - Explora planes públicos creados por otros usuarios.
   - Únete a planes que se adapten a tus intereses.

3. **Gestionar planes**:
   - Edita o elimina tus planes.
   - Visualiza el estado de los planes y la lista de personas unidas.
   - Comenta en los planes para interactuar con otros usuarios y compartir ideas.

4. **Comentar en planes**:
   - Deja comentarios en los planes para compartir opiniones, sugerencias o preguntas.
   - Interactúa con otros usuarios a través de los comentarios.
  
   
## ⚙️ Instalación & Configuración

### Frontend

1. **Clonar el repositorio del frontend:**

   ```bash
   git clone https://github.com/martxgomez/project-3-client.git
   cd project-3-client
   ```

2. **Instalar dependencias:**

   ```bash
   npm install 
   ```
3. **Configurar variables de entorno:**
Crea un archivo .env en la raíz del proyecto y añade la siguiente variable:
   ```bash
   REACT_APP_API_URL=http://localhost:5000
   ```
4. **Ejecutar la aplicación:**
Crea un archivo .env en la raíz del proyecto y añade la siguiente variable:
   ```bash
   npm start
   ```
El frontend estará disponible en http://localhost:3000.

## 🛤️ Rutas Principales

Nexo utiliza **React Router** para la navegación dentro de la aplicación. A continuación, se detallan las rutas principales:

- **🏠 Home (`/`)** → Página principal con una vista general de los planes públicos.
- **📝 Registro (`/sign-up`)** → Página para que los nuevos usuarios se registren.
- **🔑 Iniciar Sesión (`/log-in`)** → Página de inicio de sesión para usuarios existentes.
- **📌 Detalles del Plan (`/details/:planId`)** → Muestra la información detallada de un plan específico.
- **✏️ Editar Plan (`/edit-plan/:planId`)** → Permite modificar un plan (requiere autenticación).
- **👤 Página de Usuario (`/user-homepage/`)** → Vista personalizada para el usuario autenticado.
- **📋 Detalles de Usuario (`/user-details/`)** → Información del perfil del usuario.
- **⚙️ Editar Perfil (`/user-edit/`)** → Página para que el usuario actualice su información personal.
- **➕ Crear Plan (`/new-plan/`)** → Formulario para la creación de nuevos planes.
- **ℹ️ Sobre Nosotros (`/about`)** → Información sobre el equipo y la aplicación.
- **❌ Página de Error (`/*`)** → Página que se muestra cuando la ruta no existe.

Algunas rutas están protegidas:
- 🔒 **Rutas privadas**: Solo accesibles para usuarios autenticados (usando `<IsPrivate>`).
- 🚪 **Rutas anónimas**: Solo accesibles para usuarios no autenticados (usando `<IsAnon>`).

## 🛠️ Tecnologías Usadas

### Frontend
- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **React Router**: Manejo de rutas en la aplicación.
- **Axios**: Cliente HTTP para realizar peticiones al backend.
- **Bootstrap**: Framework de CSS para estilos responsivos.

### Herramientas Adicionales
- **Git**: Control de versiones.
- **GitHub**: Plataforma para alojar y gestionar el código.
- **Visual Studio Code**: Editor de código utilizado para el desarrollo.


## ⏳ Backlog

### Implementado
- [x] Configuración inicial del backend con Node.js y Express.
- [x] Conexión a la base de datos MongoDB.
- [x] Desarrollo de la API RESTful para manejar usuarios, productos y pedidos.
- [x] Configuración inicial del frontend con React.
- [x] Integración del frontend con el backend mediante Axios.
- [x] Implementación de la autenticación con JWT.
- [x] Validación en el backend y manejo centralizado de errores.
- [x] Despliegue de la aplicación.
- [x] Diseño mobile-first y aplicación responsive.

### Pendiente
- [ ] Pruebas end-to-end (e2e) con Cypress.
- [ ] Mejoras en la interfaz de usuario.
- [ ] Añadir más funcionalidades fuera del MVP (por ejemplo, búsqueda avanzada, filtros, etc.).
- [ ] Optimización del rendimiento del backend.
- [ ] Implementación de un sistema de notificaciones en tiempo real.

## 🔗 Enlace a repositorio de Backend
https://github.com/tmartin87/project-3-server

## 📩 Contact

### José Inacio
- 📧 Email: inaciojosea13@gmail.com  
- 🐱 GitHub: martxgomez
- 🔗 LinkedIn: https://www.linkedin.com/in/josé-antonio-inácio-romero-5b04a0179/

### Marta Gómez
- 📧 Email: martagomez.code@gmail.com  
- 🐱 GitHub: martxgomez
- 🔗 LinkedIn: https://www.linkedin.com/in/martagomezmartinez/

### Roxana Ferramola
- 📧 Email: ferramolafvm@gmail.com
- 🐱 GitHub: rferramola
- 🔗 LinkedIn: https://www.linkedin.com/in/rferramola/
  
### Tomás Martín
- 📧 Email: tmartindsgn@gmail.com
- 🐱 GitHub: tmartin87
- 🔗 LinkedIn: https://www.linkedin.com/in/tomas-martin-46496282

