import { Link } from "react-router-dom";
import "../scss/Item.scss"

export function Item({ id, title, price, image }) {
    return (
        <div className="card ">
            <img src={image} alt={title} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">US${price}</p>
                <Link to={`/item/${id}`} className="btn btn-primary">Comprar</Link>
            </div>
        </div>
    );
}
