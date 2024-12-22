import '../styles/Tasks.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export const Tasks = () => {
    // Datos estáticos
    const tasks = [
        {
            id: 1,
            name: 'Tarea 1',
            startDate: '2024-12-20',
            status: 'ACTIVO',
            priority: 'ALTA',
            project: 'Proyecto 1',
        },
        {
            id: 2,
            name: 'Tarea 2',
            startDate: '2024-12-18',
            status: 'PENDIENTE',
            priority: 'MEDIA',
            project: 'Proyecto 2',
        },
        {
            id: 3,
            name: 'Tarea 3',
            startDate: '2024-12-15',
            status: 'COMPLETADO',
            priority: 'BAJA',
            project: 'Proyecto 3',
        },
        {
            id: 4,
            name: 'Tarea 4',
            startDate: '2024-12-10',
            status: 'ACTIVO',
            priority: 'ALTA',
            project: 'Proyecto 1',
        },
    ];

    return (
        <div className="tasks">
            <h2>Mis Tareas</h2>
            <p className="tasks-description">
                Aquí puedes ver todas tus tareas pendientes, asignarlas a proyectos y realizar un seguimiento de su progreso.
            </p>
            <button className="create-task-btn">
                <i className="fas fa-plus"></i> Nueva Tarea
            </button>
            <div className="tasks-container">
                {tasks.map((task) => (
                    <div className="card-task" key={task.id}>
                        <h3><i className="fas fa-thumbtack"></i> {task.name}</h3>
                        <p><strong>Fecha de Inicio:</strong> {task.startDate}</p>
                        <p><strong>Estatus:</strong> {task.status}</p>
                        <p><strong>Prioridad:</strong> {task.priority}</p>
                        <p><strong>Proyecto:</strong> {task.project}</p>
                        <button className="view-details-btn">
                            <i className="fas fa-eye"></i> Ver Detalles
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};
