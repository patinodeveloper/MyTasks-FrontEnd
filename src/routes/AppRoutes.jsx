import { Route, Routes } from "react-router";
import { TaskProvider } from "../context/TaskProvider";
import { ProjectProvider } from "../context/ProjectProvider";
import { Home } from "../pages/Home";
import { Projects } from "../pages/Projects";
import { Tasks } from "../pages/Tasks";
import { ProjectDetail } from "../pages/ProjectDetail";
import { TaskDetail } from "../pages/TaskDetail";

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
                        <Route path="/tasks/:id" element={<TaskDetail />} />
                    </Routes>
                </ ProjectProvider>
            </TaskProvider>
        </>
    )
}