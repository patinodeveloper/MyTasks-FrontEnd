import { Route, Routes } from "react-router"
import { ProjectProvider } from "../context/ProjectProvider"
import { Home } from "../pages/Home"
import { Projects } from "../pages/Projects"
import { Tasks } from "../pages/Tasks"

export const AppRoutes = () => {

    return (
        <>
            <ProjectProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/tasks" element={<Tasks />} />
                </Routes>
            </ ProjectProvider>
        </>
    )
}