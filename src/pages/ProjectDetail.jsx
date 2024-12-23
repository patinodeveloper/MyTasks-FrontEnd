import { useState } from 'react';
import '../styles/ProjectDetail.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const project = {
    id: 1,
    name: 'Proyecto Principal',
    description: 'Este es un proyecto diseñado para gestionar múltiples sistemas.',
    startDate: '2024-12-01',
    endDate: null,
    status: 'ACTIVO',
    owner: 'Juan Pérez',
    priority: 'ALTA',
};

export const ProjectDetail = () => {
    const [projectStatus, setProjectStatus] = useState(project.status);

    const cycleStatus = () => {
        const statuses = ['ACTIVO', 'PENDIENTE'];
        const nextStatus = statuses[(statuses.indexOf(projectStatus) + 1) % statuses.length];
        setProjectStatus(nextStatus);
    };

    const setToCompleted = () => {
        setProjectStatus('COMPLETADO');
    };

    const getStatusClass = (status) => {
        switch (status.toLowerCase()) {
            case 'completado':
                return 'project-status completado';
            case 'activo':
                return 'project-status activo';
            case 'pendiente':
                return 'project-status pendiente';
            default:
                return 'project-status';
        }
    };

    return (
        <div className="project-detail-page">
            <h1 className="page-title">Detalles del Proyecto</h1>
            <div className="project-detail-container">
                <div className="project-card">
                    <header className="project-header">
                        <h1 className="project-title">
                            <i className="fas fa-folder"></i> {project.name}
                        </h1>
                        <button
                            className={getStatusClass(projectStatus)}
                            onClick={cycleStatus}
                        >
                            {projectStatus}
                        </button>
                    </header>
                    <p className="project-description">
                        {project.description || 'No hay descripción disponible.'}
                    </p>
                    <div className="project-details-grid">
                        <div className="project-detail-item">
                            <i className="fas fa-calendar-alt"></i>
                            <div>
                                <span>Inicio:</span>
                                <p>{project.startDate}</p>
                            </div>
                        </div>
                        <div className="project-detail-item">
                            <i className="fas fa-calendar-times"></i>
                            <div>
                                <span>Fin:</span>
                                <p>{project.endDate || 'No especificada'}</p>
                            </div>
                        </div>
                    </div>
                    <footer className="project-footer">
                        <div className="action-buttons">
                            <button
                                className={`finish-button ${projectStatus === 'COMPLETADO' ? 'disabled' : ''}`}
                                onClick={setToCompleted}
                                disabled={projectStatus === 'COMPLETADO'}
                            >
                                <i className="fas fa-check-circle"></i> Finalizar
                            </button>
                            <button className="edit-button">
                                <i className="fas fa-edit"></i> Editar
                            </button>
                            <button className="delete-button">
                                <i className="fas fa-trash-alt"></i> Eliminar
                            </button>
                        </div>
                        <button className="back-button">
                            <i className="fas fa-arrow-left"></i> Volver a Proyectos
                        </button>
                    </footer>
                </div>
            </div>
        </div>
    );
};
