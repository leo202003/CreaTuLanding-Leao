import { useState } from 'react'
import "../scss/Cart.scss"

export function CheckoutForm({ onSubmit, onClose }) {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [direccion, setDireccion] = useState('');
    const [ciudad, setCiudad] = useState('');
    const [codigoPostal, setCodigoPostal] = useState('');
    const [numeroTarjeta, setNumeroTarjeta] = useState("");

    function formatearNumero(valor) {
    return valor
        .replace(/\D/g, "")              
        .replace(/(.{4})/g, "$1 ")       
        .trim();                         
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({
            nombre,
            email,
            telefono,
            direccion,
            ciudad,
            codigoPostal,
            numeroTarjeta
        });
    };

    return (
        <form onSubmit={handleSubmit} className="checkout-form">
            <h2>Formulario de pago</h2>
            <div>
                <label>Nombre completo</label>
                <input 
                    type="text" 
                    value={nombre} 
                    onChange={e => setNombre(e.target.value)} 
                    required 
                />
            </div>

            <div>
                <label>Email</label>
                <input 
                    type="email" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                    required 
                />
            </div>

            <div>
                <label>Teléfono</label>
                <input 
                    type="tel" 
                    value={telefono} 
                    onChange={e => setTelefono(e.target.value)} 
                    required 
                />
            </div>

            <div>
                <label>Dirección</label>
                <input 
                    type="text" 
                    value={direccion} 
                    onChange={e => setDireccion(e.target.value)} 
                    required 
                />
            </div>

            <div>
                <label>Ciudad</label>
                <input 
                    type="text" 
                    value={ciudad} 
                    onChange={e => setCiudad(e.target.value)} 
                    required 
                />
            </div>

            <div>
                <label>Código postal</label>
                <input 
                    type="text" 
                    value={codigoPostal} 
                    onChange={e => setCodigoPostal(e.target.value)} 
                    required 
                />
            </div>

            <div>
                <label>Número de tarjeta</label>
                    <input 
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9\s]{13,19}"
                        maxLength="19"
                        placeholder="1234 5678 9012 3456"
                        value={numeroTarjeta}
                        onChange={(e) => setNumeroTarjeta(formatearNumero(e.target.value))}
                        required
                    />
                </div>

            <button type="submit" className="btn btn-success">Confirmar compra</button>
            <button type="button" className="close-btn" onClick={onClose}>
                Cerrar
            </button>
        </form>
    );
}

