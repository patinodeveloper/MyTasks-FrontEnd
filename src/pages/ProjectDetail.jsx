import '../styles/ProjectDetail.css';

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
            <h1 className="project-title">Detalles del Proyecto</h1>
            <table className="project-table">
                <tbody>
                    <tr>
                        <th>Nombre:</th>
                        <td>{project.name}</td>
                    </tr>
                    <tr>
                        <th>Descripción:</th>
                        <td>{project.description || 'No especificada'}</td>
                    </tr>
                    <tr>
                        <th>Fecha de Inicio:</th>
                        <td>{project.startDate}</td>
                    </tr>
                    <tr>
                        <th>Fecha de Fin:</th>
                        <td>{project.endDate || 'No especificada'}</td>
                    </tr>
                    <tr>
                        <th>Estatus:</th>
                        <td className={`status ${project.status.toLowerCase()}`}>
                            {project.status}
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="action-buttons">
                <button className="edit-button">Editar Proyecto</button>
                <button className="delete-button">Eliminar Proyecto</button>
            </div>
            <button className="back-button">
                Volver a Proyectos
            </button>
        </div>
    );
};
