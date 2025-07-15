import { useState } from "react";
import {CartWidget} from "./CartWidget"
import "../scss/navbar.scss"
import { Link, NavLink } from "react-router-dom";

export function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
            
            <h1><Link to = "/" className="navbar-brand">TechStore</Link></h1>

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
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                    
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/category/smartphones">Smartphones</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to="/category/laptops">Laptops</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link d-flex align-items-center"> 
                            <CartWidget />
                        </NavLink>
                    </li>

                </ul>
            </div>
            
        </div>
    </nav>    
  )
}