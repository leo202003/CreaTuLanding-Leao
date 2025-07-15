import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {ItemDetail} from "./ItemDetail";

export function ItemDetailContainer() {
    
    const { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(data => setItem(data))
            .catch(err => {
                console.error("Error al cargar el producto", err);
            });
    }, [id]);

    return (
        <div className="container mt-4">
            {item ? <ItemDetail {...item} /> : <p>Cargando detalle...</p>}
        </div>
    );
}
