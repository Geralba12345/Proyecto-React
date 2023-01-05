import {useContext} from "react"
import { CartContext } from "../../context/CartContext"

const Cart = () => {

    const {cart, clearCart, getTotalPrice, deleteProductById} = useContext(CartContext)




  return (
    <div>
      {
        cart.map( item => (
          <div key={item.id}>
            <div>
              <h2>{item.name}</h2>
              <h2>{item.price}</h2>
              <h2>{item.quantity} unidades</h2>
            </div>
            <button onClick={()=>deleteProductById(item.id)}>Quitar producto</button>
          </div>
        ))
      }

      {cart.length < 1 && <h2>No hay elementos</h2>}


      <div>
      <h2>Precio total: {getTotalPrice() > 0 ? getTotalPrice(): "No hay productos"}</h2>


      </div>



      <div>
        <button onClick={()=>clearCart()}>Limpiar productos</button>
      </div>
    </div>
  )
}

export default Cart