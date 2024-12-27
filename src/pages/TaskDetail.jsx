import { useContext, useEffect, useState } from 'react';
import '../styles/TaskDetail.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link, useParams } from 'react-router';
import { TaskContext } from "../context/TaskContext";
import { TaskModal } from "../components/TaskModal";

export const TaskDetail = () => {
    const { id } = useParams();
    const { taskSelected, getTaskById, handlerTaskSelectedForm, isModalOpen, toggleEditModal, handlerRemoveTask } = useContext(TaskContext);

    const [taskStatus, setTaskStatus] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
        if (id) {
            getTaskById(id);
        }
    }, [id])

    useEffect(() => {
        if (taskSelected && taskSelected.status) {
            setTaskStatus(taskSelected.status);
        }
    }, [taskSelected])

    const cycleStatus = () => {
        const statuses = ['PENDIENTE', 'ACTIVO'];
        const nextStatus = statuses[(statuses.indexOf(taskStatus) + 1) % statuses.length];
        setTaskStatus(nextStatus);
    };

    const setToCompleted = () => {
        setTaskStatus('COMPLETADO');
    };

    const openEditModal = () => {
        handlerTaskSelectedForm(taskSelected);
        toggleEditModal();
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
                {!taskSelected ? (
                    <div className="no-content">
                        <p className="no-content-message">
                            <i className="fas fa-exclamation-circle"></i> No hay tareas registradas en el sistema
                        </p>
                    </div>
                ) : (
                    <div className="task-card">
                        <header className="task-header">
                            <h1 className="task-title">
                                <i className="fas fa-tasks"></i> {taskSelected?.name}
                            </h1>
                            <button
                                className={getStatusClass(taskStatus)}
                                onClick={cycleStatus}
                            >
                                {taskStatus || 'Cargando...'}
                            </button>
                        </header>
                        <p className="task-description">
                            {taskSelected?.description || 'No hay descripción disponible.'}
                        </p>
                        <div className="task-details-grid">
                            <div className="task-detail-item">
                                <i className="fas fa-calendar-alt"></i>
                                <div>
                                    <span>Inicio:</span>
                                    <p>{taskSelected?.startTime}</p>
                                </div>
                            </div>
                            <div className="task-detail-item">
                                <i className="fas fa-calendar-times"></i>
                                <div>
                                    <span>Fin:</span>
                                    <p>{taskSelected?.endTime || 'No especificada'}</p>
                                </div>
                            </div>
                            <div className="task-detail-item">
                                <i className="fas fa-exclamation-circle"></i>
                                <div>
                                    <span>Prioridad:</span>
                                    <p className={`priority priority-${taskSelected.priority.toLowerCase()}`}>
                                        {taskSelected?.priority}
                                    </p>
                                </div>
                            </div>
                            <div className="task-detail-item">
                                <i className="fas fa-project-diagram"></i>
                                <div>
                                    <span>Proyecto:</span>
                                    <p>{taskSelected?.project.name}</p>
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
                                <button className="edit-button" onClick={openEditModal}>
                                    <i className="fas fa-edit"></i> Editar
                                </button>
                                <button
                                    className="delete-button"
                                    onClick={() => handlerRemoveTask(taskSelected.id)}
                                >
                                    <i className="fas fa-trash-alt"></i> Eliminar
                                </button>
                            </div>
                            {isModalOpen && <TaskModal onClose={toggleEditModal} />}
                            <Link className="back-button" to="/tasks" style={{ textDecoration: 'none' }}>
                                <i className="fas fa-arrow-left"></i> Volver a Tareas
                            </Link>
                        </footer>
                    </div>
                )}
            </div>
        </div>
    );
};
