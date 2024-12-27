import '../styles/Projects.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { ProjectModal } from '../components/ProjectModal';
import { useEffect, useContext } from 'react';
import { ProjectContext } from '../context/ProjectContext';
import { Link } from 'react-router';

export const Projects = () => {
    const { projects, getProjects, isModalOpen, setIsModalOpen, toggleModal } = useContext(ProjectContext);

    const closeModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        getProjects();
    }, []);

    return (
        <div className="projects">
            <h2>Mis Proyectos</h2>
            <p className="projects-description">
                <i className="fas fa-info-circle"></i> Aquí puedes ver todos tus proyectos actuales, gestionarlos y crear nuevos proyectos para seguir avanzando en tu trabajo.
            </p>
            <button className="create-project-btn" onClick={toggleModal}>
                <i className="fas fa-plus-circle"></i> Nuevo Proyecto
            </button>
            {/* Modal para crear un nuevo proyecto */}
            {isModalOpen && <ProjectModal onClose={closeModal} />}

            {projects.length === 0 ? (
                <div className="no-content">
                    <p className="no-content-message">
                        <i className="fas fa-exclamation-circle"></i> No hay proyectos registrados en el sistema
                    </p>
                </div>
            ) : (
                <div className="projects-container">
                    {projects.map((project) => (
                        <div className="card-project" key={project.id}>
                            <h3><i className="fas fa-folder"></i> {project.name}</h3>
                            <p>{project.description}</p>
                            <small><i className="fas fa-calendar-alt"></i> Fecha de creación: {project.startTime}</small>
                            <Link className='view-details-btn' to={`/projects/${project.id}`}>
                                <i className="fas fa-eye"></i> Ver Detalles
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
