import '../styles/ProjectDetail.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export const ProjectDetail = () => {
    // Datos estáticos 
    const project = {
        id: 1,
        name: 'Proyecto 1',
        description: 'Este es un proyecto diseñado para demostrar el uso de React con estilos personalizados.',
        startDate: '2024-12-01',
        endDate: null,
        status: 'ACTIVO',
    };

    return (
        <div className="project-detail">
            <h1 className="project-title">
                <i className="fas fa-folder-open"></i> Detalles del Proyecto
            </h1>
            <table className="project-table">
                <tbody>
                    <tr>
                        <th><i className="fas fa-tag"></i> Nombre:</th>
                        <td>{project.name}</td>
                    </tr>
                    <tr>
                        <th><i className="fas fa-align-left"></i> Descripción:</th>
                        <td>{project.description || 'No especificada'}</td>
                    </tr>
                    <tr>
                        <th><i className="fas fa-calendar-alt"></i> Fecha de Inicio:</th>
                        <td>{project.startDate}</td>
                    </tr>
                    <tr>
                        <th><i className="fas fa-calendar-times"></i> Fecha de Fin:</th>
                        <td>{project.endDate || 'No especificada'}</td>
                    </tr>
                    <tr>
                        <th><i className="fas fa-flag"></i> Estatus:</th>
                        <td className={`status ${project.status.toLowerCase()}`}>
                            {project.status}
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="action-buttons">
                <button className="edit-button">
                    <i className="fas fa-edit"></i> Editar Proyecto
                </button>
                <button className="delete-button">
                    <i className="fas fa-trash-alt"></i> Eliminar Proyecto
                </button>
            </div>
            <button className="back-button">
                <i className="fas fa-arrow-left"></i> Volver a Proyectos
            </button>
        </div>
    );
};
