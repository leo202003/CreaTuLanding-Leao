import { createContext, useContext, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

const ProductsContext = createContext();

export function ProductsProvider( {children}) {
    
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProductos = async () => {
            try {
                const snapshot = await getDocs(collection(db, "productos"));
                const productosCargados = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setProductos(productosCargados);
            } catch (error) {
                console.error("Error cargando productos:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProductos();
    }, []);


  return (
    <ProductsContext.Provider value={{ productos, loading }}>
        {children}
    </ProductsContext.Provider>
  )
}

export function useProducts() {
    return useContext(ProductsContext);
}
