import { useProjects } from "../hooks/useProjects";
import { ProjectContext } from "./ProjectContext";

export const ProjectProvider = ({ children }) => {
    const {
        projects,
        projectSelected,
        initialProjectForm,
        isLoading,
        isOpen,

        getProjects,
        handlerAddProject,
        handlerRemoveProject,
        handlerProjectSelectedForm,
        toggleModal
    } = useProjects();

    return (
        <ProjectContext.Provider value={
            {
                projects,
                projectSelected,
                initialProjectForm,
                isLoading,
                isOpen,

                getProjects,
                handlerAddProject,
                handlerRemoveProject,
                handlerProjectSelectedForm,
                toggleModal
            }
        }>
            {children}
        </ProjectContext.Provider>
    )
}