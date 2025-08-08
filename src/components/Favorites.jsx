import { Trash } from 'lucide-react';
import "../scss/Header.scss";
import { useFav } from '../context/FavContext';
import "../scss/Favorites.scss"
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Favorites() {
  const { favItems, removeFavorite } = useFav();

  if (favItems.length === 0) {
    return (
      <div className='favorites-empty'>
        <p>Aún no has agregado artículos a tu lista de favoritos.</p>
      </div>
    );
  }

  function handleRemove (producto) {
    removeFavorite(producto.id);
    toast.info(`Eliminaste "${producto?.title}" de favoritos 💔`, {
      style: {
        fontSize: "0.9rem",
        padding: "0.7rem 1.2rem",
        minHeight: "50px",
        maxWidth: "480px"
      }
    });
  }

  return (
    <section className="favorites-page">
      <h1>Mis Favoritos</h1>
      <ul className="favorites-list">
        {favItems.map(item => (
          <li key={item.id} className="favorites-item ">
            <img src={item.image} alt={item.title} className="favorites-item-img" />
            <div className="favorites-item-info">
              <div className="left-group">
                <h3>{item.title}</h3>
                <p>Precio: US${item.price}</p>
              </div>
              <div className="right-group">
                <Link to={`/item/${item.id}`}>
                  <button 
                    className="ver-fav-btn btn btn-primary"
                  >
                    Ver
                  </button>
                </Link>
                
                <button
                className="remove-fav-btn btn btn-primary"
                onClick={() => handleRemove(item)}
                >
                  <Trash size={20} />
                </button>
              </div> 
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

