import "../scss/ItemDetail.scss"
import { Heart } from 'lucide-react'
import { useCart } from '../context/CartContext';
import { useState } from 'react'

export function ItemDetail({ id, title, price, description, image }) {

    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);

    const handleClick = () => {
        const product = { id, title, price, image };
        addToCart(product, quantity); 
    };

    const handleChange = (e) => {
        const value = parseInt(e.target.value);
        if (!isNaN(value) && value > 0) {
            setQuantity(value);
        }
    };

    return (
        <section className="detail ">
            <div className="img-detail">
                <img src={image} alt={title} />
            </div>
            <div className="info-detail">
                <div className="heart-container">
                    <Heart />
                </div>
                <h2>{title}</h2>
                <p><strong>Precio:</strong> US${price}</p>
                <p>{description}</p>
            </div>
            <div className="compra-detail">
                <label>Cantidad:</label>
                <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={handleChange}
                    className="form-control w-25 mb-3"
                />
                <button className="btn btn-primary" onClick={handleClick} >Comprar</button>
                <p className="proteccion">
                    Compra Protegida. Recibe el producto que esperabas o te devolvemos tu dinero.
                </p>
                <p className="garantia">
                    12 días de garantía de fábrica.
                </p>
            </div>
        </section>
        
  );
}
