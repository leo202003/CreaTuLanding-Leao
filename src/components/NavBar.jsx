import { useState } from "react";
import {CartWidget} from "./Cart"
import "../scss/navbar.scss"
import { Link, NavLink } from "react-router-dom";

export function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar navbar-expand-lg custom-navbar">
            <div className="container-fluid">

                <button
                className="navbar-toggler"
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse justify-content-center ${isOpen ? "show" : ""}`}>
                    <ul className="navbar-nav gap-4 text-center">

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/category/smartphones">Smartphones</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/category/consolas">Consolas</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/category/videojuegos">VideoJuegos</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/category/laptops">Laptops</NavLink>
                        </li>
                        
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/category/iluminacion">Iluminación</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
