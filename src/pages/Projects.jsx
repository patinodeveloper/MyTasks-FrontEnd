import '../styles/Projects.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { ProjectModal } from '../components/ProjectModal';
import { useState } from 'react';

export const Projects = () => {
    // Datos estáticos 
    const projects = [
        { id: 1, title: 'Proyecto 1', description: 'Descripción del proyecto 1', date: '2024-12-20' },
        { id: 2, title: 'Proyecto 2', description: 'Descripción del proyecto 2', date: '2024-12-18' },
        { id: 3, title: 'Proyecto 3', description: 'Descripción del proyecto 3', date: '2024-12-15' },
    ];

    const [isModalOpen, setIsModalOpen] = useState(true);

    const closeModal = () => {
        setIsModalOpen(false);
    };

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
                        <h3><i className="fas fa-folder"></i> {project.title}</h3>
                        <p>{project.description}</p>
                        <small><i className="fas fa-calendar-alt"></i> Fecha de creación: {project.date}</small>
                        <button className="view-details-btn">
                            <i className="fas fa-eye"></i> Ver Detalles
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};
