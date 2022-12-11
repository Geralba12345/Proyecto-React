import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer"
import {NavBar} from "./components/NavBar/NavBar"
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>

      <NavBar/>

      <Routes>

        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/category/:categoryName" element={<ItemListContainer/>} />

        <Route path="/category" element={<ItemListContainer/>} />

        <Route path="/ItemDetail/:id" element={<ItemDetailContainer/>} />

        <Route path="/cart" element={<h1>Acá va el carrito</h1>} />

        <Route path="*" element={<h1>Esta página no existe</h1>} />


      </Routes>
    
    
    </BrowserRouter>
  );
}

export default App;



