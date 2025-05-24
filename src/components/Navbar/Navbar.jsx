import { Link } from "react-router-dom";
import "./Navbar.scss"

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-left">
                <ul>
                    <li>
                        <Link to="#" className="navbar-link">
                            <img src="/assets/hamburguer.png" alt="" />Categorias
                        </Link>
                    </li>
                    <li>
                        <Link to="/products" className="navbar-link">Productos</Link>
                    </li>
                    <li>
                        <Link to="#" className="navbar-link">Nosotros</Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                OFERTAS 👋
            </div>
        </div>
    )
}

export default Navbar;