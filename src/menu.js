import { Link } from "react-router-dom";

function menu() {
    return (
        <nav className="menu">
            <h1>Blog do Xereta</h1>
            <ul>
                <Link to="/">
                    <li className="menuzito">Home</li>
                </Link>
                <Link to="Novidades">
                    <li className="menuzito">Novidades</li>
                </Link>
                <Link to="Contato">
                    <li className="menuzito">Contato</li>
                </Link>
                <Link to="Sobre">
                    <li className="menuzito">Sobre</li>
                </Link>
            </ul>
        </nav>
    );
}
export default menu;