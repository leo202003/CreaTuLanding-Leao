import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import {App} from './App.jsx'
import { CartProvider } from './context/CartContext';
import { FavProvider } from './context/FavContext.jsx'
import { ProductsProvider } from "./context/ProductsContext";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductsProvider>
      <FavProvider>
        <CartProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
        </CartProvider>
    </FavProvider>
    </ProductsProvider>
  </StrictMode>
)
