import {useContext, useState, useEffect} from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import Form from "../Form/Form"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { getDoc,doc,collection,} from "firebase/firestore";
import { database } from "../../firebaseConfig";






const Cart = () => {

    const {cart, clearCart, getTotalPrice, deleteProductById} = useContext(CartContext)

    const [buy, setBuy] = useState(false)

    const [orderId, setOrderId] = useState(null)

    const [orders, setOrders] = useState({})



    const openForm = ()=>{

      if(cart.length > 0){
        setBuy(true)
      }else{
        alert("Antes de comprar debes elegir cuáles productos quieres")
      }

    }

  

    

    useEffect(()=>{
      if(orderId){
      
 

      const orderersCollection = collection(database, "orders")
      const ref = doc( orderersCollection, orderId )

      getDoc(ref)
      .then( res => {
        setOrders(
          {
            id: res.id,
            ...res.data()
          }
        )
      })
    }

  }, [orderId])





    if(orderId){
      return <div>
        <Card body><h2>Tu ticket de compra es: {orderId}</h2>
        <h4>{orders?.buyer?.name}</h4>
        <h4>{orders?.buyer?.email}</h4>
        <h4>{orders?.buyer?.phone}</h4>
        <h4>Precio final: {orders?.total}</h4>
        </Card>
        <Link to={"/"}>
        <Button variant="success">Volver al catálogo</Button>
        </Link>
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
         cart.length > 0 &&
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