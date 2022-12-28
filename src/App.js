import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer"
import {NavBar} from "./components/NavBar/NavBar"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Form from "./components/Form/Form";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./context/CartContext";


function App() {
  return (
    <BrowserRouter>

    <CartContextProvider>

      <NavBar/>

      <Routes>

        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/category/:categoryName" element={<ItemListContainer/>} />

        <Route path="/category" element={<ItemListContainer/>} />

        <Route path="/ItemDetail/:id" element={<ItemDetailContainer/>} />

        <Route path="/checkout" element={<Form/>} />

        <Route path="/cart" element={<Cart/>} />

        <Route path="*" element={<h1>Esta página no existe</h1>} />


      </Routes>


      </CartContextProvider>
    
    
    </BrowserRouter>
  );
}

export default App;



