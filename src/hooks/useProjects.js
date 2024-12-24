import { useReducer, useState } from "react";
import { projectReducer } from "../reducers/projectReducer";
import { findAllProjects, removeProject, saveProject, updateProject } from "../api/services/projectsServices";
import Swal from "sweetalert2";

const initialProjects = [];
const initialProjectForm = {
    id: 0,
    name: '',
    description: '',
    startTime: new Date().toISOString().split('T')[0],
    endTime: '',
    status: 'ACTIVO',
}

export const useProjects = () => {
    const [projects, dispatch] = useReducer(projectReducer, initialProjects);
    const [projectSelected, setProjectSelected] = useState(initialProjectForm)
    const [visibleForm, setVisibleForm] = useState(false);
    const [isLoading, setIsLoading] = useState(false); 

    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    const getProjects = async () => {
        // setIsLoading(true);
        try {
            const result = await findAllProjects();
            dispatch({
                type: "loadProjects",
                payload: result
            });
            // setErrors({});
        } catch (error) {
            console.error("Error al cargar los proyectos", error);
        } finally {
            // setIsLoading(false);
        }
    };
    
    const handlerAddProject = async (project) => {
        console.log(project);
        console.log(project.id);
        const type = (project.id === 0) ? "addProject" : "updateProject";
        let response;
        try {
            if (project.id === 0) {
                console.log('save');
                response = await saveProject({
                    ...project
                });
            } else {
                response = await updateProject({
                    ...project
                });
            }

            dispatch({
                type: type,
                payload: response.data,
            });

            Swal.fire(
                (project.id === 0) ? "Proyecto Registrado" : "Proyecto Actualizado",
                (project.id === 0)
                    ? "El Proyecto ha sido registrado con éxito"
                    : "El Proyecto ha sido actualizado con éxito",
                "success"
            );
            toggleModal();
        } catch (error) {
            if (error.response?.status === 400) {
                setErrors(error.response.data);
            } else {
                console.error("Error al guardar el Proyecto", error);
                throw error;
            }
        }
    } 

    const handlerRemoveProject = async (id) => {
        try {
            Swal.fire({
                title: "¿Está seguro que desea eliminar?",
                text: "Esta acción es irreversible",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Si, eliminar!",
                cancelButtonText: "Cancelar"
            }).then((result) => {
                if (result.isConfirmed) {
                    removeProject(id);
                    
                    dispatch({
                        type: "removeProject",
                        payload: id
                    })
                    Swal.fire({
                        title: "Proyecto Eliminado!",
                        text: "El proyecto se ha eliminado exitosamente",
                        icon: "success"
                    });
                }
            });
        } catch (error) {
            console.error("Error al verificar el proyecto", error);
            Swal.fire("Error", "Hubo un problema al verificar el proyecto.", "error");
        }
    };

    const handlerProjectSelectedForm = (project) => {
        if (!project) {
            console.error("Error: El proyecto seleccionado no está definido.");
            return;
        }
        setVisibleForm(true);
        setProjectSelected({
            ...project,
        });
    };

    return {
        projects,
        projectSelected,
        initialProjectForm,
        isLoading,
        isOpen,

        getProjects,
        handlerAddProject,
        handlerRemoveProject,
        handlerProjectSelectedForm,
        toggleModal
    }

}