import { Trash } from 'lucide-react';

export function CartItem({ item, cantidadLocal, onQuantityChange, onRemove }) {

    const handleChange = (e) => {
        const value = parseInt(e.target.value, 10);
        if (!isNaN(value) && value > 0) {
            onQuantityChange(value);
        }
    };

    return (
        <li className="cart-item">
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
                    value={cantidadLocal}
                    onChange={handleChange}
                    className="form-control w-25 mb-3"
                />
                <button className="cart-item-remove btn btn-primary" onClick={onRemove}>
                    <Trash />
                </button>
            </div>
        </li>
    );
}
