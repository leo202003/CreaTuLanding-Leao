import { useEffect, useState } from "react";
import "../scss/Header.scss";
import { Heart } from 'lucide-react';
import { NavLink } from "react-router-dom";
import { Bot } from 'lucide-react';
import { Login } from './Login';
import { SearchBar } from './SearchBar.jsx'
import { CartWidget } from './CartWidget.jsx'

export function Header() {

    const mensajes = [
        "ENVIOS GRATIS EN COMPRAS MAYORES A $3500",
        "HACE TU PEDIDO HOY",
        "POCITOS | PUNTA CARRETAS | CENTRO"
    ]

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalo = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % mensajes.length);
        },  3000);

        return () => clearInterval(intervalo);
    }, []);


    return (
        <header className="container-fluid col"> 
        
            <section className="row header_mensaje ">
                <p>{mensajes[index]}</p>
            </section>

            <section className="row header_horarios">
                <p>Pocitos L a D de 10 a 22 hs | Punta Carretas L a D de 10 a 22 hs | Centro L a D de 9 a 22 hs</p>
            </section>
            
            <section className="row header_buscador navbar">
                <div className="container">
                        <div className="logo">
                            <Bot size={40} color="#004E7C" />
                            <NavLink className="navbar-brand" to="/">TechStore</NavLink>
                        </div>
                        <SearchBar />
                    <div className="right-group">
                        <Login className="right-item"/>
                        <NavLink to="/favorites" className="right-item">
                            <Heart size={28} color="#3F4548"/>
                        </NavLink>
                        <CartWidget />
                    </div>

                </div>
            </section>
        </header>
    )
}
