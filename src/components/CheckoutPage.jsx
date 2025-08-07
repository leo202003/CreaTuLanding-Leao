// components/CheckoutPage.jsx
import { CheckoutForm } from "./CheckoutForm";
import { useCart } from "../context/CartContext";
import { db } from "../firebaseConfig";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export function CheckoutPage() {
    const { cartItems, clearCart } = useCart(); 
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const navigate = useNavigate();

    const handleCheckout = async (clienteData) => {
        try {
        const orden = {
            cliente: clienteData,
            items: cartItems.map(item => ({
            id: item.id,
            title: item.title,
            price: item.price,
            quantity: item.quantity,
            })),
            total,
            fecha: Timestamp.fromDate(new Date()),
            estado: 'generada'
        };

        const docRef = await addDoc(collection(db, "ordenes"), orden);
        alert(`Compra realizada con éxito. ID de orden: ${docRef.id}`);
        clearCart();
        navigate("/"); 

        } catch (error) {
            console.error("Error creando la orden: ", error);
            alert("Hubo un error al procesar la compra.");
        }
    };

    return (
        <div className="checkout-container">
            <CheckoutForm onSubmit={handleCheckout} onClose={() => navigate("/cart")} />
        </div>
    );
}
