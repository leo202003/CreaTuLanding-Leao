import { useCart } from '../context/CartContext';
import "../scss/Cart.scss"
import { Trash } from 'lucide-react'
import { useState } from 'react'

export function CartWidget() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const [cantidades, setCantidades] = useState({})

  if (cartItems.length === 0) {
    return (
      <div className='carrito-vacio'>
        <p>Aún no has agregado artículos a tu compra.</p>
      </div>
    )
  }

  const handleClick = (id) => {
    removeFromCart(id);
  }

  const handleChange = (e, id)  => {
    const value = parseInt(e.target.value);
      if (!isNaN(value) && value > 0) {
        setCantidades(prev => ({ ...prev, [id]: value }));
        updateQuantity(id, value)
      }
  }
  return (
    <section className="cart-page">
      <h1>Tu Carrito</h1>
      <ul className="cart-list">
        {cartItems.map(item => (
          <li key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} className="cart-item-img" />
            <div className="cart-item-info">
              <h3>{item.title}</h3>
              <p>Precio unitario: US${item.price}</p>
              <p>Subtotal: US${(item.price * item.quantity).toFixed(2)}</p>
            </div>
            <div className="cart-item-action">
                <input
                    type="number"
                    min="1"
                    value={cantidades[item.id] || item.quantity}
                    onChange={(e) => handleChange(e, item.id)}
                    className="form-control w-25 mb-3"
                />
              <button className="cart-item-remove btn btn-primary" onClick={() => handleClick(item.id)}><Trash /></button>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-footer">
        <button className="btn btn-primary">Pagar</button>
        <p className='total'>
          Total: US${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}
        </p>
      </div>
    </section>
  );
}

