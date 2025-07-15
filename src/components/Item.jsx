import { Link } from "react-router-dom";

export function Item({ id, title, price, thumbnail }) {
    return (
        <div className="card h-100">
            <img src={thumbnail} alt={title} className="card-img-top" />
            <div className="card-body">
                <h5>{title}</h5>
                <p>${price}</p>
                <Link to={`/item/${id}`} className="btn btn-primary">Ver más</Link>
            </div>
        </div>
    );
}
