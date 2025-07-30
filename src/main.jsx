import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import {App} from './App.jsx'
import { CartProvider } from './context/CartContext';
import { FavProvider } from './context/FavContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FavProvider>
      <CartProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
      </CartProvider>
    </FavProvider>
  </StrictMode>
)
