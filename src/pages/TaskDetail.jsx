import { useState } from 'react';
import '../styles/TaskDetail.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const task = {
    id: 101,
    name: 'Tarea 1',
    description: 'Esta tarea es parte del proyecto principal para gestionar el sistema.',
    startDate: '2024-12-10',
    endDate: '2024-12-20',
    status: 'COMPLETADO',
    priority: 'ALTA',
    projectName: 'Proyecto Principal',
};

export const TaskDetail = () => {
    const [taskStatus, setTaskStatus] = useState(task.status);

    const cycleStatus = () => {
        const statuses = ['PENDIENTE', 'ACTIVO'];
        const nextStatus = statuses[(statuses.indexOf(taskStatus) + 1) % statuses.length];
        setTaskStatus(nextStatus);
    };

    const setToCompleted = () => {
        setTaskStatus('COMPLETADO');
    };

    const getStatusClass = (status) => {
        switch (status.toLowerCase()) {
            case 'completado':
                return 'task-status completado';
            case 'activo':
                return 'task-status activo';
            case 'pendiente':
                return 'task-status pendiente';
            default:
                return 'task-status';
        }
    };

    return (
        <div className="task-detail-page">
            <h1 className="page-title">Detalles de la Tarea</h1>
            <div className="task-detail-container">
                <div className="task-card">
                    <header className="task-header">
                        <h1 className="task-title">
                            <i className="fas fa-tasks"></i> {task.name}
                        </h1>
                        <button
                            className={getStatusClass(taskStatus)}
                            onClick={cycleStatus}
                        >
                            {taskStatus}
                        </button>
                    </header>
                    <p className="task-description">
                        {task.description || 'No hay descripción disponible.'}
                    </p>
                    <div className="task-details-grid">
                        <div className="task-detail-item">
                            <i className="fas fa-calendar-alt"></i>
                            <div>
                                <span>Inicio:</span>
                                <p>{task.startDate}</p>
                            </div>
                        </div>
                        <div className="task-detail-item">
                            <i className="fas fa-calendar-times"></i>
                            <div>
                                <span>Fin:</span>
                                <p>{task.endDate || 'No especificada'}</p>
                            </div>
                        </div>
                        <div className="task-detail-item">
                            <i className="fas fa-exclamation-circle"></i>
                            <div>
                                <span>Prioridad:</span>
                                <p className={`priority-${task.priority.toLowerCase()}`}>
                                    {task.priority}
                                </p>
                            </div>
                        </div>
                        <div className="task-detail-item">
                            <i className="fas fa-project-diagram"></i>
                            <div>
                                <span>Proyecto:</span>
                                <p>{task.projectName}</p>
                            </div>
                        </div>
                    </div>
                    <footer className="task-footer">
                        <div className="action-buttons">
                            <button
                                className={`finish-button ${taskStatus === 'COMPLETADO' ? 'disabled' : ''}`}
                                onClick={setToCompleted}
                                disabled={taskStatus === 'COMPLETADO'}
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
                            <i className="fas fa-arrow-left"></i> Volver a Tareas
                        </button>
                    </footer>
                </div>
            </div>
        </div>
    );
};
