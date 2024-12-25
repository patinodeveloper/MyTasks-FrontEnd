import { Link, useLocation } from 'react-router';
import '../../styles/Header.css';

export const Navbar = () => {
    const location = useLocation();

    return (
        <header className="header">
            <div className="container">
                <h1>MyTasks</h1>
                <nav>
                    <ul>
                        <li>
                            <Link
                                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                                to="/"
                            >
                                Inicio
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={`nav-link ${location.pathname.startsWith('/projects') ? 'active' : ''}`}
                                to="/projects"
                            >
                                Proyectos
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={`nav-link ${location.pathname.startsWith('/tasks') ? 'active' : ''
                                    }`}
                                to="/tasks"
                            >
                                Tareas
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};
