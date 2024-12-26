import { Route, Routes } from "react-router";
import { TaskProvider } from "../context/TaskProvider";
import { ProjectProvider } from "../context/ProjectProvider";
import { Home } from "../pages/Home";
import { Projects } from "../pages/Projects";
import { Tasks } from "../pages/Tasks";
import { ProjectDetail } from "../pages/ProjectDetail";

export const AppRoutes = () => {

    return (
        <>
            <TaskProvider>
                <ProjectProvider>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/tasks" element={<Tasks />} />
                        <Route path="/projects/:id" element={<ProjectDetail />} />
                    </Routes>
                </ ProjectProvider>
            </TaskProvider>
        </>
    )
}