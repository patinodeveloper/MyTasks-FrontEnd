import { Link } from 'react-router'
import '../styles/Home.css'

export const Home = () => {

    return (
        <div className="home">
            <h2>Bienvenido a MyTasks</h2>
            <p>Gestiona tus proyectos y tareas de manera eficiente.</p>
            <div>
                <p>Comienza creando un nuevo proyecto.</p>
                <button><Link to="/projects">Proyectos</Link></button>
            </div>
        </div>
    )
}