import '../../styles/Header.css'

export const Navbar = () => {

    return (
        <header className="header">
            <div className="container">
                <h1>MyTasks</h1>
                <nav>
                    <ul>
                        <li>Inicio</li>
                        <li>Proyectos</li>
                        <li>Tareas</li>
                    </ul>
                </nav>
            </div>
        </header>

    )
}