import { useReducer, useState } from "react";
import { taskReducer } from "../reducers/taskReducer";
import { findAllTasks, findTaskById, saveTask, updateTask, removeTask } from "../api/services/tasksServices";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const initialTasks = [];
const initialTaskForm = {
    id: 0, // Despues de Spring Boot 3.3.5 el ID debe ser null/undefined en lugar de 0
    name: '',
    description: '',
    startTime: new Date().toISOString().split('T')[0],
    endTime: '',
    status: 'PENDIENTE',
    priority: 'MEDIA',
    project: {id: 0, name: ''}
}

export const useTasks = () => {
    const [tasks, dispatch] = useReducer(taskReducer, initialTasks);
    const [taskSelected, setTaskSelected] = useState(initialTaskForm)
    const [visibleForm, setVisibleForm] = useState(false);
    const [isLoading, setIsLoading] = useState(false); 

    const [isModalOpen, setIsModalOpen] = useState(true);

    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const toggleModal = () => {
        setIsOpen(!isOpen);
        setTaskSelected(initialTaskForm);
    };

    const toggleEditModal = () => {
        setIsOpen(!isOpen);
    };

    const getTasks = async () => {
        // setIsLoading(true);
        try {
            const result = await findAllTasks();
            dispatch({
                type: "loadTasks",
                payload: result
            });
            // setErrors({});
        } catch (error) {
            console.error("Error al cargar las tareas", error);
        } finally {
            // setIsLoading(false);
        }
    };

    const getTaskById = async (id) => {
        try {
            // setIsLoading(true);
            const result = await findTaskById(id);
            console.log("Tarea obtenido:", result);
            setTaskSelected(result);
        } catch (error) {
            console.error("Error al cargar la tarea", error);
        } finally {
            setIsLoading(false);
        }
    };
    
    const handlerAddTask = async (task) => {
        console.log(task);
        console.log(task.id);
         // Despues de Spring Boot 3.3.5 el ID debe ser null/undefined en lugar de === 0
        const type = (task.id === 0) ? "addTask" : "updateTask";
        let response;
        try {
            if (task.id === 0) {
                console.log('save');
                response = await saveTask({
                    ...task,
                    projectId: task.project.id
                });
            } else {
                response = await updateTask({
                    ...task,
                    projectId: task.project.id
                });
            }

            dispatch({
                type: type,
                payload: response.data,
            });

            setTaskSelected(response.data);

            Swal.fire(
                (task.id === 0) ? "Tarea Registrada" : "Tarea Actualizada",
                (task.id === 0)
                    ? "La Tarea ha sido registrada con éxito"
                    : "La Tarea ha sido actualizada con éxito",
                "success"
            );
            toggleEditModal();
        } catch (error) {
            if (error.response?.status === 400) {
                setErrors(error.response.data);
            } else {
                console.error("Error al guardar la Tarea", error);
                throw error;
            }
        }
    } 

    const handlerRemoveTask = async (id) => {
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
                    removeTask(id);
                    
                    dispatch({
                        type: "removeTask",
                        payload: id
                    })
                    Swal.fire({
                        title: "Tarea Eliminada!",
                        text: "La tarea se ha eliminado exitosamente",
                        icon: "success"
                    });

                    navigate("/tasks");
                }
            });
        } catch (error) {
            console.error("Error al verificar la tarea", error);
            Swal.fire("Error", "Hubo un problema al verificar la tarea.", "error");
        }
    };

    const handlerTaskSelectedForm = (task) => {
        if (!task) {
            console.error("Error: La tarea seleccionada no está definida.");
            return;
        }
        // setVisibleForm(true);
        setTaskSelected({
            ...task,
            projectId: task.project.id
        });
    };

    return {
        tasks,
        taskSelected,
        setTaskSelected,
        initialTaskForm,
        isLoading,
        isOpen,
        isModalOpen, 
        setIsModalOpen,

        getTasks,
        getTaskById,
        handlerAddTask,
        handlerRemoveTask,
        handlerTaskSelectedForm,
        toggleModal,
        toggleEditModal,
    }

}