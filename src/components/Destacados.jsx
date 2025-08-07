import { useState, useEffect } from "react"
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../firebaseConfig';
import { ItemList } from './ItemList'
import "../scss/Destacados.scss"

export function Destacados() {
    
    const [prodsDestacados, setprodsDestacados] = useState([]);
    const [yaCargo, setyaCargo] = useState(false);
    useEffect(() => {
        if (yaCargo) {
            return;
        }
        const productosRef = collection(db, "productos");
        const destacadosQuery = query(productosRef, where("destacado", "==", true));
        getDocs(destacadosQuery)
            .then((respuesta) => {
                const productos = respuesta.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setprodsDestacados(productos);
            })
            .catch((err) => {
                console.error("Error al obtener productos destacados:", err);
            })
            .finally(() => {
                setyaCargo(true)
            });

    }, [])

  
    return (
        <section className="productos-destacados container mt-4">
            <h2>🔥 Productos Destacados</h2>
            {prodsDestacados.length > 0 ? (
                <ItemList items={prodsDestacados} />
            ) : (
                <p>No hay productos destacados.</p>
            )}
        </section>
    )
}
