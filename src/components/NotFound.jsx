import { Link } from "react-router-dom";

export function NotFound() {
    
    return (
        <div className="container text-center mt-5">
            <h1>404</h1>
            <p>Página no encontrada</p>
            <Link to="/" className="btn btn-primary">Volver al inicio</Link>
        </div>
    )
}
