import { Navbar } from "./components/layout/Navbar"
import { Home } from "./pages/Home"
import { Projects } from "./pages/Projects"
import { ProjectDetail } from "./pages/ProjectDetail"
import { Tasks } from "./pages/Tasks"
import { TaskDetail } from "./pages/TaskDetail"

export const MyTasksApp = () => {

    return (
        <>
            <Navbar />
            <main>
                {/* <Home /> */}
                {/* <Projects /> */}
                {/* <ProjectDetail /> */}
                {/* <Tasks /> */}
                <TaskDetail />
            </main>
        </>
    )
}