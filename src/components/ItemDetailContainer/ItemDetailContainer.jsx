import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { getDoc, doc, collection } from "firebase/firestore"
import { database } from "../../firebaseConfig"


const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})

    const {id} = useParams()

    useEffect(()=>{
 

        const itemCollection = collection(database, "Products")
        const ref = doc( itemCollection, id )

        getDoc(ref)
        .then( res => {
          setProduct(
            {
              id: res.id,
              ...res.data()
            }
          )
        })

    }, [id])


  return (
    <div>
      <ItemDetail product={ product } />
    </div>
  )
}

export default ItemDetailContainer