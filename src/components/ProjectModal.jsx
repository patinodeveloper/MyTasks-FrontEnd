import React, { useState, useContext, useEffect } from 'react';
import '../styles/ProjectModal.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { ProjectContext } from '../context/ProjectContext';
import Swal from "sweetalert2";

export const ProjectModal = () => {
    const {
        handlerAddProject,
        initialProjectForm,
        toggleModal,
        toggleEditModal,
        isOpen,
        projectSelected
    } = useContext(ProjectContext);
    
    const [projectForm, setProjectForm] = useState(initialProjectForm);

    useEffect(() => {
        if (projectSelected) {
            setProjectForm(projectSelected);
        }
    }, [projectSelected]);

    const { id, name, description, startTime, endTime, status } = projectForm;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setProjectForm({
            ...projectForm,
            [name]: value
        });
    };

    const onSubmit = (evt) => {
        evt.preventDefault();

        if (!name || !startTime || !status) {
            Swal.fire({
                title: 'Error de Validación',
                text: 'Por favor, completa todos los campos del formulario!',
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

        handlerAddProject(projectForm);
        setProjectForm(initialProjectForm);
    };


    const closeModal = () => {
        if (projectSelected.id > 0) {
            toggleEditModal();
        } else {
            setProjectForm(initialProjectForm);
            toggleModal();
        }
    };

    return (
        <div>
            {isOpen && (
                <div className="modal-overlay">
                    <div className="modal-container">
                        <header className="modal-header">
                            <h2><i className="fas fa-project-diagram"></i> {id ? "Editar Proyecto" : "Nuevo Proyecto"}</h2>
                            <button className="close-btn" onClick={closeModal}>
                                <i className="fas fa-times"></i>
                            </button>
                        </header>
                        <form onSubmit={onSubmit} className="modal-form">
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
                                    value={startTime || " "}
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
                                    required
                                >
                                    <option value="ACTIVO">Activo</option>
                                    <option value="PENDIENTE">Pendiente</option>
                                    <option value="COMPLETADO">Completado</option>
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