import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import "../scss/Cart.scss";
import { CartItem } from './CartItem';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Cart() {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();
  const [cantidades, setCantidades] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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
    const producto = cartItems.find(p => p.id === id);
    removeFromCart(id);
    setCantidades(prev => {
      const copy = { ...prev };
      delete copy[id];
      return copy;
    });
    toast.info(`Eliminaste "${producto?.title}" del carrito`, {
      style: {
        fontSize: "0.9rem",
        padding: "0.7rem 1.2rem",
        minHeight: "50px",
        maxWidth: "280px"
      }
    });
  };

  const handleQuantityChange = (id, value) => {
    setCantidades(prev => ({ ...prev, [id]: value }));
    updateQuantity(id, value);
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleVaciarCarrito = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Se eliminarán todos los productos del carrito.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#004E7C",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, vaciar",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Carrito vaciado", "Tu carrito ha sido vaciado exitosamente.", "success");
        navigate("/"); 
      }
    });
  };

  const handlePagar = () => {
    setLoading(true);
    setTimeout(() => {
      navigate("/checkout");
    }, 1000); 
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
        <div className="buttons">
          <button className="btn btn-secondary" onClick={handleVaciarCarrito}>Vaciar carrito</button>
          <button className="btn btn-primary" onClick={handlePagar} disabled={loading}>
            {loading ? <span className="spinner" /> : "Pagar"}
          </button>
        </div>
        <p className="total">Total: US${total.toFixed(2)}</p>
      </div>
    </section>
  );
}
