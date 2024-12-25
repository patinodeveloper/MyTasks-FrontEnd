import { useProjects } from "../hooks/useProjects";
import { ProjectContext } from "./ProjectContext";

export const ProjectProvider = ({ children }) => {
    const {
        projects,
        projectSelected,
        setProjectSelected,
        initialProjectForm,
        isLoading,
        isOpen,
        isModalOpen, 
        setIsModalOpen,

        getProjects,
        getProjectById,
        handlerAddProject,
        handlerRemoveProject,
        handlerProjectSelectedForm,
        toggleModal,
        toggleEditModal
    } = useProjects();

    return (
        <ProjectContext.Provider value={
            {
                projects,
                projectSelected,
                setProjectSelected,
                initialProjectForm,
                isLoading,
                isOpen,
                isModalOpen,
                setIsModalOpen,

                getProjects,
                getProjectById,
                handlerAddProject,
                handlerRemoveProject,
                handlerProjectSelectedForm,
                toggleModal,
                toggleEditModal
            }
        }>
            {children}
        </ProjectContext.Provider>
    )
}