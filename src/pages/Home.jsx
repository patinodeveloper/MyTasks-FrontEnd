import '../styles/Home.css'

export const Home = () => {

    return (
        <div className="home">
            <h2>Bienvenido a MyTasks</h2>
            <p>Gestiona tus proyectos y tareas de manera eficiente.</p>
            <div className="cta">
                <p>Comienza creando un nuevo proyecto.</p>
                <button>Proyectos</button>
            </div>
        </div>
    )
}