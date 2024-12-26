import { useTasks } from "../hooks/useTasks";
import { TaskContext } from "./TaskContext";

export const TaskProvider = ({ children }) => {
    const {
        tasks,
        taskSelected,
        setTaskSelected,
        initialTaskForm,
        isLoading,
        isOpen,
        isModalOpen,
        setIsModalOpen,

        getTasks,
        getTaskById,
        handlerAddTask,
        handlerRemoveTask,
        handlerTaskSelectedForm,
        toggleModal,
        toggleEditModal,
    } = useTasks();

    return (
        <TaskContext.Provider value={
            {
                tasks,
                taskSelected,
                setTaskSelected,
                initialTaskForm,
                isLoading,
                isOpen,
                isModalOpen,
                setIsModalOpen,

                getTasks,
                getTaskById,
                handlerAddTask,
                handlerRemoveTask,
                handlerTaskSelectedForm,
                toggleModal,
                toggleEditModal,
            }
        }>
            {children}
        </TaskContext.Provider>
    )
}