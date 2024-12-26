import React, { useContext, useEffect, useState } from 'react';
import '../styles/TaskModal.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { TaskContext } from '../context/TaskContext';
import Swal from "sweetalert2";
import { ProjectContext } from '../context/ProjectContext';

export const TaskModal = () => {
    const {
        handlerAddTask,
        initialTaskForm,
        toggleModal,
        toggleEditModal,
        isOpen,
        taskSelected
    } = useContext(TaskContext);

    const [taskForm, setTaskForm] = useState(initialTaskForm);

    useEffect(() => {
        if (taskSelected) {
            setTaskForm(taskSelected);
        }
    }, [taskSelected]);

    const { id, name, description, startTime, endTime, status, priority, project } = taskForm;
    const { projects, getProjects } = useContext(ProjectContext);

    useEffect(() => {
        getProjects();
    }, [])

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setTaskForm({
            ...taskForm,
            [name]: value
        });
    };

    const onProjectChange = ({ target }) => {
        const selectedProject = projects.find(p => p.id === parseInt(target.value));
        setTaskForm({
            ...taskForm,
            project: selectedProject
        });
    };

    const onSubmit = (evt) => {
        evt.preventDefault();
        // Validacion de datos del formulario (project.id === 0: asegura que este seleccionado un proyecto relacion)
        if (!name || !startTime || !status || !priority || !project || project.id === 0) {
            Swal.fire({
                title: 'Error de Validación',
                text: 'Por favor, completa los campos requeridos del formulario!',
                icon: "error",
            });
            return;
        }

        // Validación de fechas solo si endTime tiene valor
        const start = new Date(startTime);
        // Si endTime tiene valor entonces convierte a objeto Date, si no es null
        const end = endTime ? new Date(endTime) : null;

        if (end && start > end) {
            Swal.fire({
                title: 'Error de Validación',
                text: 'La fecha de inicio no puede ser posterior a la de fin!',
                icon: "error",
            });
            return;
        }

        console.log('Enviando formulario');

        handlerAddTask(taskForm);
        setTaskForm(initialTaskForm);
    };

    const closeModal = () => {
        if (taskSelected.id > 0) {
            toggleEditModal();
        } else {
            setTaskForm(initialTaskForm);
            toggleModal();
        }
    };

    return (
        <div>
            {isOpen && (
                <div className="modal-overlay">
                    <div className="modal-container">
                        <header className="modal-header">
                            <h2><i className="fas fa-tasks"></i> {id ? "Editar Tarea" : "Nueva Tarea"}</h2>
                            <button className="close-btn" onClick={closeModal}>
                                <i className="fas fa-times"></i>
                            </button>
                        </header>
                        <form className="modal-form" onSubmit={onSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Nombre *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={name}
                                    onChange={onInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Descripción</label>
                                <textarea
                                    id="description"
                                    name="description"
                                    value={description || ""}
                                    onChange={onInputChange}
                                    rows="4"
                                ></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="startTime">Fecha Inicio *</label>
                                <input
                                    type="date"
                                    id="startTime"
                                    name="startTime"
                                    value={startTime || ""}
                                    onChange={onInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="endTime">Fecha Fin</label>
                                <input
                                    type="date"
                                    id="endTime"
                                    name="endTime"
                                    value={endTime || ""}
                                    onChange={onInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="status">Estado *</label>
                                <select
                                    id="status"
                                    name="status"
                                    value={status}
                                    onChange={onInputChange}
                                >
                                    <option value="PENDIENTE">Pendiente</option>
                                    <option value="ACTIVO">Activo</option>
                                    <option value="COMPLETADO">Completado</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="priority">Prioridad *</label>
                                <select
                                    id="priority"
                                    name="priority"
                                    value={priority}
                                    onChange={onInputChange}
                                >
                                    <option value="BAJA">Baja</option>
                                    <option value="MEDIA">Media</option>
                                    <option value="ALTA">Alta</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="project">Proyecto Relacionado *</label>
                                <select
                                    name="project"
                                    value={project?.id || ''}
                                    onChange={onProjectChange}
                                >
                                    <option value="">Seleccionar proyecto</option>
                                    {projects.length > 0 ? (
                                        projects.map(project => (
                                            <option key={project.id} value={project.id}>
                                                {project.name}
                                            </option>
                                        ))
                                    ) : (
                                        <option disabled>No hay proyectos disponibles</option>
                                    )}
                                </select>
                            </div>
                            <footer className="modal-footer">
                                <button type="submit" className={id ? "edit-btn" : "save-btn"}>
                                    <i className="fas fa-save"></i> {id ? "Editar" : "Crear"}
                                </button>
                                <button type="button" className="cancel-btn" onClick={closeModal}>
                                    <i className="fas fa-ban"></i> Cancelar
                                </button>
                            </footer>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};