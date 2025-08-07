import { Trash } from 'lucide-react';
import "../scss/Header.scss";
import { useFav } from '../context/FavContext';
import "../scss/Favorites.scss"
import { Link } from "react-router-dom";

export function Favorites() {
  const { favItems, removeFavorite } = useFav();

  if (favItems.length === 0) {
    return (
      <div className='favorites-empty'>
        <p>Aún no has agregado artículos a tu lista de favoritos.</p>
      </div>
    );
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
                onClick={() => removeFavorite(item.id)}
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

