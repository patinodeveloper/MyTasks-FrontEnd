import { Navbar } from "./components/layout/Navbar"
import { Home } from "./pages/Home"
import { Projects } from "./pages/Projects"
import { ProjectDetail } from "./pages/ProjectDetail"
import { Tasks } from "./pages/Tasks"
import { TaskDetail } from "./pages/TaskDetail"
import { BrowserRouter } from "react-router"
import { AppRoutes } from "./routes/AppRoutes"

export const MyTasksApp = () => {

    return (
        <>
            <BrowserRouter>
                <Navbar />

                <main>
                    <AppRoutes />
                </main>
            </BrowserRouter>
        </>
    )
}