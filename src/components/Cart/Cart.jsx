import {useContext, useState} from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import Form from "../Form/Form"

const Cart = () => {

    const {cart, clearCart, getTotalPrice, deleteProductById} = useContext(CartContext)

    const [buy, setBuy] = useState(false)

    const [orderId, setOrderId] = useState(null)

    const openForm = ()=>{

      if(cart.length > 0){
        setBuy(true)
      }else{
        alert("Antes de comprar debes elegir cuáles productos quieres")
      }

    }





    if(orderId){
      return <div>
        <h1>Tu ticket de compra es: {orderId}</h1>
        <Link to={"/"}>Volver al catálogo</Link>
      </div>
    }



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


      {buy ? (
         <Form cart={cart} getTotalPrice={getTotalPrice} setOrderId={setOrderId} clearCart={clearCart}/>
      ) : (


      cart.length > 0 &&
        <div>
        <button onClick={()=>clearCart()}>Limpiar productos</button>
        <button onClick={openForm}>Comprar</button>
      </div>

      )

      }


    </div>
  )
}

export default Cart