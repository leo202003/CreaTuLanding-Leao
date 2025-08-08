import "../scss/Footer.scss";
import { NavLink } from "react-router-dom";

export function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <nav className="footer-nav">
                    <NavLink className="footer-link" to="/category/smartphones">Smartphones</NavLink>
                    <NavLink className="footer-link" to="/category/consolas">Consolas</NavLink>
                    <NavLink className="footer-link" to="/category/videojuegos">Videojuegos</NavLink>
                    <NavLink className="footer-link" to="/category/laptops">Laptops</NavLink>
                    <NavLink className="footer-link" to="/category/iluminacion">Iluminación</NavLink>
                </nav>
                <p className="footer-copy">© 2025 TechStore. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}
