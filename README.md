# MyTasks - Gestión de Tareas

Este repositorio contiene el frontend de **MyTasks**, un sistema de gestión de tareas desarrollado con **React.js** y **CSS**. El backend, que es una API desarrollada en **Spring Boot**, se encuentra en otro repositorio: [MyTasks API](https://github.com/patinodeveloper/MyTasks-API.git).

## Módulos del Sistema

El sistema cuenta con los siguientes módulos:

- **Tareas**: Para gestionar las tareas registradas por los usuarios, incluyendo la creación, edición, eliminación y visualización.
- **Proyectos**: Cada tarea puede estar asociada a un proyecto para una mejor organización.

## Características Técnicas

- **React.js**: Utilizado para construir la interfaz de usuario.
- **CSS personalizado**: Para los estilos de la aplicación.
- **React Router**: Para la navegación entre las distintas páginas del sistema.
- **Context API**: Implementado para la gestión global del estado de la aplicación.
- **Buenas prácticas**: El código sigue una estructura modular, haciendo uso de hooks personalizados, contexto, react-router, etc. Y buenas prácticas para asegurar la mantenibilidad y escalabilidad.

## Capturas de Pantalla

Aquí hay algunas capturas de pantalla que muestran el funcionamiento de la aplicación:

### Pantalla de Inicio
![Pantalla de Inicio](https://res.cloudinary.com/dtncgfvxw/image/upload/v1735354749/Captura_desde_2024-12-27_20-46-52_clb6bp.png)

### Gestión de Proyectos

En esta sección puedes gestionar los proyectos. Todas las acciones principales están disponibles: buscar, mostrar, insertar, editar y eliminar registros.

- **Vista General de Gestión de Proyectos**  
  ![Gestión de Proyectos](https://res.cloudinary.com/dtncgfvxw/image/upload/v1735354751/Captura_desde_2024-12-27_20-47-03_mijeyk.png)

- **Agregar un Proyecto**  
  ![Agregar Proyecto](https://res.cloudinary.com/dtncgfvxw/image/upload/v1735354749/Captura_desde_2024-12-27_20-48-14_bokxd7.png)

- **Registrar Proyecto SweetAlert**  
  ![Registrar Proyecto](https://res.cloudinary.com/dtncgfvxw/image/upload/v1735354749/Captura_desde_2024-12-27_20-48-21_enehdg.png)

- **Detalles de un Proyecto**  
  ![Detalle Proyecto](https://res.cloudinary.com/dtncgfvxw/image/upload/v1735354749/Captura_desde_2024-12-27_20-48-28_xmeeuj.png)

- **Actualizar Proyecto**  
  ![Actualizar Proyecto](https://res.cloudinary.com/dtncgfvxw/image/upload/v1735354750/Captura_desde_2024-12-27_20-48-44_bplc5d.png)

---

### Gestión de Tareas

En esta sección puedes administrar las tareas asociadas a proyectos. Podrás realizar operaciones como buscar, mostrar, insertar, editar y eliminar tareas.

- **Vista General de Gestión de Tareas**  
  ![Gestión de Tareas](https://res.cloudinary.com/dtncgfvxw/image/upload/v1735354750/Captura_desde_2024-12-27_20-48-54_lotcko.png)

- **Agregar una Tarea**  
  ![Agregar Tarea](https://res.cloudinary.com/dtncgfvxw/image/upload/v1735354750/Captura_desde_2024-12-27_20-51-53_jw5sxv.png)

- **Registrar Tarea SweetAlert**  
  ![Registrar Tarea](https://res.cloudinary.com/dtncgfvxw/image/upload/v1735354750/Captura_desde_2024-12-27_20-51-59_gc3qjo.png)

- **Detalle de una Tarea**  
  ![Detalle Tarea](https://res.cloudinary.com/dtncgfvxw/image/upload/v1735354750/Captura_desde_2024-12-27_20-52-06_ugq66l.png)

- **Actualizar Tarea Modal**  
  ![Modal Tarea](https://res.cloudinary.com/dtncgfvxw/image/upload/v1735354751/Captura_desde_2024-12-27_20-52-41_kvnmat.png)

- **Eliminar Tarea**  
  ![Eliminar Tarea](https://res.cloudinary.com/dtncgfvxw/image/upload/v1735354750/Captura_desde_2024-12-27_20-52-13_cd1tm4.png)

- **Eliminar Tarea SweetAlert**  
  ![Eliminar Tarea](https://res.cloudinary.com/dtncgfvxw/image/upload/v1735354751/Captura_desde_2024-12-27_20-52-19_go31xc.png)

---

## Instalación

Para instalar y correr el proyecto en tu máquina local, sigue estos pasos:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tuusuario/MyTasks-Frontend.git

2. Instala las dependencias:
   ```bash
   npm install

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev

4. Abre el navegador en ```http://localhost:5173``` para ver la aplicación en funcionamiento
