import { useCart } from "../context/CartContext";
import { ShoppingCart } from 'lucide-react';
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export function CartWidget() {

    const [cantProductsCart, setcantProductsCart] = useState(0);
    const {productsInCart} = useCart();

    useEffect(() => {
        setcantProductsCart(productsInCart());
    },[productsInCart])


  return (
    <NavLink className="right-item cart-link" to="/cart">
        <ShoppingCart size={28} color="#3F4548" />
        {cantProductsCart > 0 && <span className="cart-count">{cantProductsCart}</span>}
    </NavLink>
  )
}
