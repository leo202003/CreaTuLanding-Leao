import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item, cant) => {
        const cartCopy = [...cartItems];
        const itemInCart = cartCopy.find(prod => prod.id === item.id);
        if (itemInCart) {
            itemInCart.quantity += cant;
        } else {
            cartCopy.push({ ...item, quantity: cant });
        }
        setCartItems(cartCopy);
    };

    const removeFromCart = (id) => {
        const cartCopy = [...cartItems];
        const newCart = cartCopy.filter(prod => prod.id !== id);
        setCartItems(newCart);
    }

    const productsInCart = () => {
        return cartItems.length;
    } 

    const updateQuantity = (id, nuevaCantidad) => {
        const cartCopy = [...cartItems];
        const itemInCart = cartCopy.find(prod => prod.id === id);
        itemInCart.quantity = nuevaCantidad;
    }

    const cleanCart = () => {
        setCartItems([]);
    }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, productsInCart, removeFromCart, updateQuantity, cleanCart}}>
        {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
