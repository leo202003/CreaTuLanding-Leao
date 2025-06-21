import { useState } from "react";
import {CartWidget} from "./CartWidget"
import "../scss/navbar.scss"

export function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
            <a href="#" className="navbar-brand">TechStore</a>

            <button
                className="navbar-toggler"
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>

                <form className="d-flex w-50 w-md-25" role="search">
                    <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                
                <ul className="navbar-nav ms-auto justify-content-end mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Tecnologia e Informatica</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Consolas y Juegos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Audio y Video</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Ilumniacion</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link d-flex align-items-center" href="#">
                            <CartWidget />
                        </a>
                    </li>
                </ul>
            </div>
            
        </div>
    </nav>    
  )
}