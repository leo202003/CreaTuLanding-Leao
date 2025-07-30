import { useEffect, useState } from "react";
import "../scss/Header.scss";
import { ShoppingCart, Heart } from 'lucide-react';
import { NavLink } from "react-router-dom";
import { Bot, Search } from 'lucide-react';
import { Favorites } from './Favorites';
import { Login } from './Login';
import { useCart } from "../context/CartContext";

export function Header() {

    const [cantProductsCart, setcantProductsCart] = useState(0);
    const {productsInCart} = useCart();
    
    useEffect(() => {
        setcantProductsCart(productsInCart());
    },[productsInCart])

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

                        <form className="search-form" role="search">
                            <input className="search-input" type="search" placeholder="Buscar productos..." aria-label="Search" />
                            <button className="search-button" type="submit"><Search /></button>
                        </form>

                    <div className="right-group">
                        <Login className="right-item"/>
                        <NavLink to="/favorites" className="right-item">
                            <Heart size={28} color="#3F4548"/>
                        </NavLink>
                        <NavLink className="right-item cart-link" to="/cart">
                            <ShoppingCart size={28} color="#3F4548" />
                            {cantProductsCart > 0 && <span className="cart-count">{cantProductsCart}</span>}
                        </NavLink>
                    </div>

                </div>
            </section>
        </header>
    )
}
