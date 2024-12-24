import React, { useState } from 'react';
import '../styles/ProjectModal.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export const ProjectModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [projectData, setProjectData] = useState({
        name: '',
        description: '',
        startDate: new Date().toISOString().split('T')[0],
        endDate: '',
        status: 'ACTIVO',
    });

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProjectData({
            ...projectData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Proyecto creado:', projectData);
        toggleModal();
    };

    return (
        <div>
            <button className="create-project-btn" onClick={toggleModal}>
                <i className="fas fa-plus-circle"></i> Nuevo Proyecto
            </button>

            {isOpen && (
                <div className="modal-overlay">
                    <div className="modal-container">
                        <header className="modal-header">
                            <h2><i className="fas fa-project-diagram"></i> Nuevo Proyecto</h2>
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
                                    value={projectData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Descripción</label>
                                <textarea
                                    id="description"
                                    name="description"
                                    value={projectData.description}
                                    onChange={handleChange}
                                    rows="4"
                                ></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="startDate">Fecha Inicio *</label>
                                <input
                                    type="date"
                                    id="startDate"
                                    name="startDate"
                                    value={projectData.startDate}
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
                                    value={projectData.endDate}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="status">Estado *</label>
                                <select
                                    id="status"
                                    name="status"
                                    value={projectData.status}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="ACTIVO">Activo</option>
                                    <option value="PENDIENTE">Pendiente</option>
                                    <option value="COMPLETADO">Completado</option>
                                </select>
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
