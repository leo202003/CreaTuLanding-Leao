import {NavBar} from "./components/NavBar";
import {ItemListContainer} from "./components/ItemListContainer";

export function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda!" />
    </>
  )
}
