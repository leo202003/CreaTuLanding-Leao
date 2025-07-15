import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "./itemList";

export function ItemListContainer({ greeting }) {

    const { id } = useParams(); 
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        if (!id) {
            fetch('https://dummyjson.com/products?limit=200')
                .then(res => res.json())
                .then(data => {
                    const productos = data.products.filter(product =>
                        product.category === "laptops" || product.category === "smartphones"
                    );
                    setItems(productos);
                    setLoading(false);
                })
                .catch(err => {
                    console.error("Error al cargar productos", err);
                    setLoading(false);
                });
        } else {
            fetch(`https://dummyjson.com/products/category/${id}`)
                .then(res => res.json())
                .then(data => {
                setItems(data.products);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error al cargar productos", err);
                setLoading(false);
            });
        }
      
    }, [id]);

  return (
    <div className="container mt-4">
        <h2>{greeting || `Categoría: ${id}`}</h2>
        {loading ? (<p>Cargando productos...</p>) : items.length > 0 ? (<ItemList items={items} />) : (<p className="text-danger">Categoría no encontrada</p>)}
    </div>
  );
}