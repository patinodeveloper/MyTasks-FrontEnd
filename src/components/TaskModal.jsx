import React, { useState } from 'react';
import '../styles/TaskModal.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export const TaskModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [taskData, setTaskData] = useState({
        name: '',
        description: '',
        startDate: new Date().toISOString().split('T')[0],
        endDate: '',
        status: 'PENDIENTE',
        priority: 'BAJA',
        project: '',
    });

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTaskData({
            ...taskData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Tarea creada:', taskData);
        toggleModal();
    };

    return (
        <div>
            <button className="create-task-btn" onClick={toggleModal}>
                <i className="fas fa-plus-circle"></i> Nueva Tarea
            </button>

            {isOpen && (
                <div className="modal-overlay">
                    <div className="modal-container">
                        <header className="modal-header">
                            <h2><i className="fas fa-tasks"></i> Nueva Tarea</h2>
                            <button className="close-btn" onClick={toggleModal}>
                                <i className="fas fa-times"></i>
                            </button>
                        </header>
                        <form className="modal-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Nombre *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={taskData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Descripción</label>
                                <textarea
                                    id="description"
                                    name="description"
                                    value={taskData.description}
                                    onChange={handleChange}
                                    rows="4"
                                    required
                                ></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="startDate">Fecha Inicio *</label>
                                <input
                                    type="date"
                                    id="startDate"
                                    name="startDate"
                                    value={taskData.startDate}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="endDate">Fecha Fin</label>
                                <input
                                    type="date"
                                    id="endDate"
                                    name="endDate"
                                    value={taskData.endDate}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="status">Estado *</label>
                                <select
                                    id="status"
                                    name="status"
                                    value={taskData.status}
                                    onChange={handleChange}
                                    required
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
                                    value={taskData.priority}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="BAJA">Baja</option>
                                    <option value="MEDIA">Media</option>
                                    <option value="ALTA">Alta</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="project">Proyecto Relacionado *</label>
                                <input
                                    type="text"
                                    id="project"
                                    name="project"
                                    value={taskData.project}
                                    onChange={handleChange}
                                    required
                                    disabled
                                />
                            </div>
                            <footer className="modal-footer">
                                <button type="submit" className="save-btn">
                                    <i className="fas fa-save"></i> Guardar
                                </button>
                                <button type="button" className="cancel-btn" onClick={toggleModal}>
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