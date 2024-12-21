import { Navbar } from "./components/layout/Navbar"
import { Home } from "./pages/Home"
import { Projects } from "./pages/Projects"

export const MyTasksApp = () => {

    return (
        <>
            <Navbar />
            <main>
                {/* <Home /> */}
                <Projects />
            </main>
        </>
    )
}