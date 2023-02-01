import {useState} from 'react'
import {addDoc, collection, doc, serverTimestamp, updateDoc} from "firebase/firestore"
import {database} from "../../firebaseConfig"
import Button from 'react-bootstrap/Button';


const Form = ({cart, getTotalPrice, setOrderId, clearCart}) => {

    const [userData, setUserData ] = useState ({name:"", phone:"", email:""})


    const total = getTotalPrice()




    const handleSubmit = (event)=>{
        event.preventDefault()

        const order = {
           buyer: userData,
           items: cart,
           total: total,
           date: serverTimestamp()
        }

        const orderCollection = collection(database, "orders")

        addDoc(orderCollection, order)
        .then(res => setOrderId(res.id))
        
        // eslint-disable-next-line
        cart.map( product => {
            updateDoc( doc(database, "Products", product.id), {stock: product.stock - product.quantity})
        }) 

        clearCart()

    }



    


    return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder="Ingrese su nombre" name="name" onChange={(event)=> setUserData ({...userData, name:event.target.value})} value={userData.name}/>
            <input type="text" placeholder="Ingrese su teléfono" name="phone" onChange={(event)=> setUserData ({...userData, phone:event.target.value})} value={userData.phone} />
            <input type="email" placeholder="Ingrese su e-mail" name="email" onChange={(event)=> setUserData ({...userData, email:event.target.value})} value={userData.email} />
            <Button type="submit">Finalizar compra</Button>
        </form>
    </div>
  )
}

export default Form
