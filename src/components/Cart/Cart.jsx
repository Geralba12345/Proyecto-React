import {useContext, useState} from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import Form from "../Form/Form"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



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
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>
                    Precio: {item.price} c/u
                  </Card.Text>
                  <Card.Text>
                  {item.quantity} unidades.
                  </Card.Text>
                  <Button variant="danger" onClick={()=>deleteProductById(item.id)}>Quitar producto</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        ))
      }
      
      {cart.length < 1 && <h2>No hay elementos. Debes comprar algo.</h2>}

      <div>
      <h2>Precio total: {getTotalPrice() > 0 ? getTotalPrice(): "No hay productos"}</h2>


      </div>


      {buy ? (
         <Form cart={cart} getTotalPrice={getTotalPrice} setOrderId={setOrderId} clearCart={clearCart}/>
      ) : (


      cart.length > 0 &&
        <div
        style={{ display: 'flex', position: 'right'}}>
          
              <Button variant="secondary" onClick={()=>clearCart()}>Limpiar productos</Button>
              <Button variant="success"  onClick={openForm}>Comprar</Button>
            
        </div>
      )

      }


    </div>

    
  )
}

export default Cart