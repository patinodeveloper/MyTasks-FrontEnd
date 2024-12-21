import '../styles/Projects.css';

export const Projects = () => {
    // Datos estáticos 
    const projects = [
        { id: 1, title: 'Proyecto 1', description: 'Descripción del proyecto 1', date: '2024-12-20' },
        { id: 2, title: 'Proyecto 2', description: 'Descripción del proyecto 2', date: '2024-12-18' },
        { id: 3, title: 'Proyecto 3', description: 'Descripción del proyecto 3', date: '2024-12-15' },
    ];

    return (
        <div className="projects">
            <h2>Mis Proyectos</h2>
            <p className="projects-description">
                Aquí puedes ver todos tus proyectos actuales, gestionarlos y crear nuevos proyectos para seguir avanzando en tu trabajo.
            </p>
            <button className="create-project-btn">Crear Nuevo Proyecto</button>
            <div className="projects-container">
                {projects.map((project) => (
                    <div className="card" key={project.id}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <small>Fecha de creación: {project.date}</small>
                        <button className="view-details-btn">Ver Detalles</button>
                    </div>
                ))}
            </div>
        </div>
    );
};
