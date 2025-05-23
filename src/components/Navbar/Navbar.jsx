import "./Navbar.scss"

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-left">
                <ul>
                    <li><a href="#">
                        <img src="/assets/hamburguer.png" alt="" />Categorias
                    </a></li>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Nosotros</a></li>
                </ul>
            </div>
            <div className="navbar-right">
                OFERTAS 👋
            </div>
        </div>
    )
}

export default Navbar;