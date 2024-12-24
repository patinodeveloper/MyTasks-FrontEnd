import '../styles/Projects.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { ProjectModal } from '../components/ProjectModal';
import { useState, useEffect, useContext } from 'react';
import { ProjectContext } from '../context/ProjectContext';

export const Projects = () => {
    const { projects, getProjects } = useContext(ProjectContext);
    const [isModalOpen, setIsModalOpen] = useState(true);
    
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
            {/* Modal para crear un nuevo proyecto */}
            {isModalOpen && <ProjectModal onClose={closeModal} />}
            <div className="projects-container">
                {projects.map((project) => (
                    <div className="card-project" key={project.id}>
                        <h3><i className="fas fa-folder"></i> {project.name}</h3>
                        <p>{project.description}</p>
                        <small><i className="fas fa-calendar-alt"></i> Fecha de creación: {project.startTime}</small>
                        <button className="view-details-btn">
                            <i className="fas fa-eye"></i> Ver Detalles
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};
