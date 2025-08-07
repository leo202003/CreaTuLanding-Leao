import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { NotFound } from "./components/NotFound";
import { Header } from "./components/Header";
import { Home } from './components/Home';
import { Cart } from "./components/Cart";
import { Favorites } from "./components/Favorites";
import { SearchResults } from './components/SearchResults';
import { CheckoutPage } from "./components/CheckoutPage";
import { Footer } from './components/Footer'
import "./index.css";

export function App() {
  return (
    <div className="app-wrapper">
      <main className="main-content">
        <Header />
        <NavBar />
        <Routes>
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/buscar" element={<SearchResults />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
 