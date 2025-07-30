import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {ItemDetail} from "./ItemDetail";
import { db } from '../firebaseConfig'
import { doc, getDoc } from "firebase/firestore";

export function ItemDetailContainer() {
    
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [cargo, setCargo] = useState(false);

    useEffect(() => {

        if (cargo) return;

        const docRef = doc(db, "productos", id);
        
        getDoc(docRef) 
             .then((docSnap) => {
                if (docSnap.exists()) {
                    setItem({ 
                        id: docSnap.id,
                         ...docSnap.data() 
                    });
                } else {
                    setItem(null); 
                }
            })
            .catch((err) => {
                console.error("Error al obtener productos:", err);
                setItem(null);
            })
            .finally(() => {
                setCargo(true);
            });
    }, [cargo, id]);

    return (
        <div className="item-detail-container container mt-5 mb-5">
            {item ? <ItemDetail {...item} /> : <p>Cargando detalle...</p>}
        </div>
    );
}
