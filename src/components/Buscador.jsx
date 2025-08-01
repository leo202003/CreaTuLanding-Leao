import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Search } from "lucide-react";


export function Buscador() {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            navigate(`/buscar?q=${encodeURIComponent(searchTerm)}`);
        }
    };

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <input
                type="search"
                placeholder="Buscar ..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
            />
            <button type="submit" className="search-button">
                <Search />
            </button>
        </form>
    );
}

