import { useSearchParams } from "react-router-dom";
import { useProducts } from "../context/ProductsContext";
import { ItemList } from "./ItemList";

export function SearchResults() {

    const [params] = useSearchParams();
    const term = params.get("q") || "";
    const { productos, loading } = useProducts();

    const resultados = productos.filter(p =>
        p.title.toLowerCase().includes(term.toLowerCase()) ||
        p.description.toLowerCase().includes(term.toLowerCase()) ||
        p.category.toLowerCase().includes(term.toLowerCase())
    );

    return (
        <div className="container mt-4">
            {loading ? (
                <p>Cargando...</p>
            ) : (
                <>
                    <h5>Resultados para: <em>{term}</em></h5>
                    <p>{resultados.length} producto(s) encontrado(s)</p>
                    {resultados.length > 0 ? (
                        <ItemList items={resultados} />
                    ) : (
                        <p>No se encontraron productos para "{term}".</p>
                    )}
                </>
            )}
        </div>
    );
}
