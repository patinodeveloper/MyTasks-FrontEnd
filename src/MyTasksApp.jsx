import { Navbar } from "./components/layout/Navbar"
import { Home } from "./pages/Home"
import { Projects } from "./pages/Projects"
import { ProjectDetail } from "./pages/ProjectDetail"

export const MyTasksApp = () => {

    return (
        <>
            <Navbar />
            <main>
                {/* <Home /> */}
                {/* <Projects /> */}
                <ProjectDetail />
            </main>
        </>
    )
}