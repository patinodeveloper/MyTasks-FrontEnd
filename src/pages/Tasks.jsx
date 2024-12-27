import '../styles/Tasks.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useContext, useEffect } from 'react';
import { TaskContext } from '../context/TaskContext';
import { TaskModal } from '../components/TaskModal';
import { Link } from 'react-router';

export const Tasks = () => {

    const { tasks, getTasks, isModalOpen, setIsModalOpen, toggleModal } = useContext(TaskContext);

    const closeModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        getTasks();
    }, []);

    const getStatusClass = (status) => {
        switch (status.toLowerCase()) {
            case 'completado':
                return 'status-completado';
            case 'activo':
                return 'status-activo';
            case 'pendiente':
                return 'status-pendiente';
            default:
                return 'status';
        }
    };

    const getPriorityClass = (priority) => {
        switch (priority.toLowerCase()) {
            case 'baja':
                return 'priority-baja';
            case 'media':
                return 'priority-media';
            case 'alta':
                return 'priority-alta';
            default:
                return 'priority';
        }
    };

    return (
        <div className="tasks">
            <h2>Mis Tareas</h2>
            <p className="tasks-description">
                Aquí puedes ver todas tus tareas pendientes, asignarlas a proyectos y realizar un seguimiento de su progreso.
            </p>
            <button className="create-task-btn" onClick={toggleModal}>
                <i className="fas fa-plus-circle"></i> Nueva Tarea
            </button>
            {/* Modal para crear un nuevo proyecto */}
            {isModalOpen && <TaskModal onClose={closeModal} />}
            {tasks.length === 0 ? (
                <div className="no-content">
                    <p className="no-content-message">
                        <i className="fas fa-exclamation-circle"></i> No hay tareas registradas en el sistema
                    </p>
                </div>
            ) : (
                <div className="tasks-container">
                    {tasks.map((task) => (
                        <div className="card-task" key={task.id}>
                            <h3><i className="fas fa-thumbtack"></i> {task.name}</h3>
                            <p><strong>Fecha de Inicio:</strong> {task.startTime}</p>
                            <p className={getStatusClass(task.status)}><strong>Estatus:</strong> {task.status}</p>
                            <p className={getPriorityClass(task.priority)}><strong>Prioridad:</strong> {task.priority}</p>
                            <p><strong>Proyecto:</strong> {task.project.name}</p>
                            <Link className="view-details-btn" to={`/tasks/${task.id}`}>
                                <i className="fas fa-eye"></i> Ver Detalles
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
