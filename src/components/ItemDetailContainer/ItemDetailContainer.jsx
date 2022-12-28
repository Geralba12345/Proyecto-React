import {productos} from "../../productosMock"
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"



const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})

    const {id} = useParams()

    useEffect(()=>{
 
        const productElegido = productos.find(productS => productS.id === +id)
        setProduct(productElegido)

    }, [id])


  return (
    <div>
      <ItemDetail product={ product } />
    </div>
  )
}

export default ItemDetailContainer