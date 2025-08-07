import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import "../scss/Cart.scss";
import { CartItem } from './CartItem';
import { db } from '../firebaseConfig'; 
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { Link } from 'react-router-dom'

export function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const [cantidades, setCantidades] = useState({});

  useEffect(() => {
    const inicial = {};
    cartItems.forEach(item => {
      inicial[item.id] = item.quantity;
    });
    setCantidades(inicial);
  }, [cartItems]);

  if (!cartItems || cartItems.length === 0) {
    return (
      <div className='carrito-vacio'>
        <p>Aún no has agregado artículos a tu compra.</p>
      </div>
    );
  }

  const handleRemove = (id) => {
    removeFromCart(id);
    setCantidades(prev => {
      const copy = { ...prev };
      delete copy[id];
      return copy;
    });
  };

  const handleQuantityChange = (id, value) => {
    setCantidades(prev => ({ ...prev, [id]: value }));
    updateQuantity(id, value);
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = async (clienteData) => {
  try {
    const orden = {
      cliente: clienteData,
      items: cartItems.map(item => ({
        id: item.id,
        title: item.title,
        price: item.price,
        quantity: item.quantity,
      })),
      total,
      fecha: Timestamp.fromDate(new Date()),
      estado: 'generada'
    };

    const docRef = await addDoc(collection(db, "ordenes"), orden);
    alert(`Compra realizada con éxito. ID de orden: ${docRef.id}`);

  } catch(error) {
    console.error("Error creando la orden: ", error);
    alert("Hubo un error al procesar la compra.");
  } finally {
    
  } 
};

  return (
    <section className="cart-page">
      <h1>Tu Carrito</h1>
      <ul className="cart-list">
        {cartItems.map(item => (
          <CartItem
            key={item.id}
            item={item}
            cantidadLocal={cantidades[item.id] ?? item.quantity}
            onQuantityChange={(value) => handleQuantityChange(item.id, value)}
            onRemove={() => handleRemove(item.id)}
          />
        ))}
      </ul>
      <div className="cart-footer">
        <Link to="/checkout" >
          <button className="btn btn-primary">Pagar</button>
        </Link>
        <p className="total">Total: US${total.toFixed(2)}</p>
      </div>
    </section>
  );
}
