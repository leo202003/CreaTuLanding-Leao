import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import {App} from './App.jsx'
import { CartProvider } from './context/CartContext';
import { FavProvider } from './context/FavContext.jsx'
import { ProductsProvider } from "./context/ProductsContext";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductsProvider>
      <FavProvider>
        <CartProvider>
            <BrowserRouter>
              <App />
              <ToastContainer 
                position="bottom-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                pauseOnHover
                draggable
                theme="colored"
              />
            </BrowserRouter>
        </CartProvider>
    </FavProvider>
    </ProductsProvider>
  </StrictMode>
)
