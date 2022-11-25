import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer"
import {NavBar} from "./components/NavBar/NavBar"

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer titulo = "Bienvenido a Electrónika" content = "Los mejores precios para los productos tecnológicos que necesitás"/>
    </div>
  );
}

export default App;
