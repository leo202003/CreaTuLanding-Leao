import { Routes, Route } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { ItemListContainer } from "./components/ItemListContainer"
import { ItemDetailContainer } from "./components/ItemDetailContainer"
import { NotFound } from "./components/NotFound"
import { Header } from "./components/Header"
import { CargarProductos } from './components/cargarProductos'
import { Home } from './components/Home'
import { CartWidget } from "./components/Cart"
import { Favorites } from "./components/Favorites"

export function App() {
  return (
    <>
      <CargarProductos />
      <Header />
      <NavBar />
      <Routes>
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartWidget />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}
 