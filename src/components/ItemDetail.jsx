import "../scss/ItemDetail.scss"
import { Heart } from 'lucide-react'
import { useCart } from '../context/CartContext';
import { useFav } from '../context/FavContext'
import { ItemCount } from './ItemCount'
import { useState } from 'react'
import { toast } from "react-toastify";

export function ItemDetail({ id, title, price, description, image }) {

    const {addFavorite, favItems, removeFavorite} = useFav();
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);

    const handleClick = () => {
        const product = { id, title, price, image };
        addToCart(product, quantity); 
        toast.success("Producto agregado al carrito 🛒", {
            style: {
                fontSize: "0.9rem",
                padding: "0.7rem 1.2rem",
                minHeight: "50px",
                maxWidth: "280px"
            }
        });
        
    };

    const isFav = favItems.some(fav => fav.id === id); 

    const handleClickFav = () => {
        const prod = {id, title, image, description, price}
        if (isFav) {
            removeFavorite(id);
            toast.info("Eliminado de favoritos 💔", {
                style: {
                    fontSize: "0.9rem",
                    padding: "0.7rem 1.2rem",
                    minHeight: "50px",
                    maxWidth: "280px"
                }
            });
        } else {
            addFavorite(prod);
            toast.info("Añadido a favoritos ❤️", {
                style: {
                    fontSize: "0.9rem",
                    padding: "0.7rem 1.2rem",
                    minHeight: "50px",
                    maxWidth: "280px"
                }
            });
        }
        
    }

    return (
        <section className="detail ">
            <div className="img-detail">
                <img src={image} alt={title} />
            </div>
            <div className="info-detail">
                <div className="heart-container" onClick={handleClickFav}>
                    <Heart color={isFav ? "#004E7C" : "gray"} fill={isFav ? "#004E7C" : "none"} />
                </div>
                <h2>{title}</h2>
                <p><strong>Precio:</strong> US${price}</p>
                <p>{description}</p>
            </div>
            <div className="compra-detail">
                <ItemCount quantity={quantity} setQuantity={setQuantity}/>
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
