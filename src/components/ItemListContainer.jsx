import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../firebaseConfig';

export function ItemListContainer() {

    const { id } = useParams(); 
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const productosRef = collection(db, "productos");
        const q = id ? query(productosRef, where("category", "==", id)) : productosRef;
        getDocs(q)
          .then((resp) => {
            const productos = resp.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));
            setItems(productos);
          })
          .catch((err) => {
            console.error("Error al obtener productos:", err);
            setItems([]);
          })
          .finally(() => {
            setLoading(false);
          }); 
    }, [id]);

  return (
    <section className="container mt-4">
      <h2>{`Categoría: ${id}`}</h2>
      {loading ? (<p>Cargando productos...</p>) : items.length > 0 ? (<ItemList items={items} />) 
        : (<p className="text-danger">Categoría no encontrada</p>)}
    </section>
  )
}