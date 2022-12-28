import {createContext, useState} from "react"

export const CartContext = createContext()


const CartContextProvider = ({children}) => {

   const [cart, setCart ] = useState([])

   const addToCart = (element)=>{

     setCart([...cart, element])
   }
   
   
   
   const data ={
    cart,
    addToCart

   }


  return (
    <CartContext.Provider value={data}>
        {children}

    </CartContext.Provider>
  )
}

export default CartContextProvider