import { CheckoutForm } from "./CheckoutForm";
import { useCart } from "../context/CartContext";
import { db } from "../firebaseConfig";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

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
        Swal.fire({
            icon: 'success',
            title: 'Compra realizada con éxito',
            text: `ID de orden: ${docRef.id}`,
            confirmButtonText: 'OK'
        });
        clearCart();
        navigate("/"); 

        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Hubo un error al procesar la compra.',
                confirmButtonText: 'Aceptar'
            });
        }
    };

    return (
        <div className="checkout-container">
            <CheckoutForm onSubmit={handleCheckout} onClose={() => navigate("/cart")} />
        </div>
    );
}
