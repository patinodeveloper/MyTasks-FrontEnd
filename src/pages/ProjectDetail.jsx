import { useContext, useEffect, useState } from 'react';
import '../styles/ProjectDetail.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link, useParams } from 'react-router';
import { ProjectContext } from '../context/ProjectContext';
import { ProjectModal } from '../components/ProjectModal';

export const ProjectDetail = () => {
    const { id } = useParams();
    const { projectSelected, getProjectById, handlerProjectSelectedForm, isModalOpen, toggleEditModal, handlerRemoveProject } = useContext(ProjectContext);

    const [projectStatus, setProjectStatus] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
        if (id) {
            getProjectById(id);
        }
    }, [id]);

    useEffect(() => {
        if (projectSelected && projectSelected.status) {
            setProjectStatus(projectSelected.status);
        }
    }, [projectSelected]);

    const cycleStatus = () => {
        const statuses = ['ACTIVO', 'PENDIENTE'];
        const nextStatus = statuses[(statuses.indexOf(projectStatus) + 1) % statuses.length];
        setProjectStatus(nextStatus);
    };

    const setToCompleted = () => {
        setProjectStatus('COMPLETADO');
    };

    const openEditModal = () => {
        handlerProjectSelectedForm(projectSelected);
        toggleEditModal();
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
        <div id='title' className="project-detail-page">
            <h1 className="page-title">Detalles del Proyecto</h1>
            <div className="project-detail-container">
                <div className="project-card">
                    <header className="project-header">
                        <h1 className="project-title">
                            <i className="fas fa-folder"></i> {projectSelected?.name}
                        </h1>
                        <button
                            className={getStatusClass(projectStatus)}
                            onClick={cycleStatus}
                        >
                            {projectStatus || 'Cargando...'}
                        </button>
                    </header>
                    <p className="project-description">
                        {projectSelected?.description || 'No hay descripción disponible.'}
                    </p>
                    <div className="project-details-grid">
                        <div className="project-detail-item">
                            <i className="fas fa-calendar-alt"></i>
                            <div>
                                <span>Inicio:</span>
                                <p>{projectSelected?.startTime}</p>
                            </div>
                        </div>
                        <div className="project-detail-item">
                            <i className="fas fa-calendar-times"></i>
                            <div>
                                <span>Fin:</span>
                                <p>{projectSelected?.endTime || 'No especificada'}</p>
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
                            <button className="edit-button" onClick={openEditModal}>
                                <i className="fas fa-edit"></i> Editar
                            </button>


                            <button
                                className="delete-button"
                                onClick={() => handlerRemoveProject(projectSelected.id)}
                            >
                                <i className="fas fa-trash-alt"></i> Eliminar
                            </button>
                        </div>
                        {isModalOpen && <ProjectModal onClose={toggleEditModal} />}
                        <Link className="back-button" to="/projects" style={{ textDecoration: 'none' }}>
                            <i className="fas fa-arrow-left"></i> Volver a Proyectos
                        </Link>
                    </footer>
                </div>
            </div>
        </div>
    );
};
