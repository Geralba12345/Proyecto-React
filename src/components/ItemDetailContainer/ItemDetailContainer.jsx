import {productos} from "../../productosMock"
import { useEffect, useState } from 'react'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})

    useEffect(()=>{
 
        const productElegido = productos.find(productS => productS.id === 2)
        setProduct(productElegido)

    }, [])

    console.log(product)

  return (
    <div>
        <h2>{product.name}</h2>
        <h2>{product.price}</h2>
        <h2>{product.description}</h2>
    </div>
  )
}

export default ItemDetailContainer