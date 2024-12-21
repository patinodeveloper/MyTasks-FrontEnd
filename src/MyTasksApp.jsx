import { Navbar } from "./components/layout/Navbar"
import { Home } from "./pages/Home"

export const MyTasksApp = () => {

    return (
        <>
            <Navbar />
            <main>
                <Home />
            </main>
        </>
    )
}