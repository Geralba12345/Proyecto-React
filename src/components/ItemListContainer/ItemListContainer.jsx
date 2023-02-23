import './ItemListContainer.css'
import { useEffect, useState } from 'react';
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where } from "firebase/firestore";
import { database } from '../../firebaseConfig';
import { Spinner } from '@chakra-ui/react'



export const ItemListContainer = () => {

    const {categoryName} = useParams()

    const [ items, setItems ] = useState([])

    const [ isLoading, setIsLoading ] = useState(false)


    useEffect(()=>{

        setIsLoading(true)

        const itemCollection = collection( database, "Products")

        if( categoryName ){
            const q = query( itemCollection, where("category", "==", categoryName))
            getDocs(q)
        .then( (res) => {
            const products = res.docs.map( product => {
                return{
                    ...product.data(),
                    id: product.id
                }
            })
            setItems(products)
        })
        .catch( (err) => console.log(err))

        }else{
        
            getDocs(itemCollection)
        .then( (res) => {
            const products = res.docs.map( product => {
                return{
                    ...product.data(),
                    id: product.id
                }
            })
            setItems(products)
        })
        .catch( (err) => console.log(err))

        }


        setTimeout(()=>{
            setIsLoading(false)
        }, 2000)

    }, [categoryName] )

    

    return(
        <article>
            {
                isLoading ? <Spinner
                thickness='2px'
                speed='0.65s'
                emptyColor='gray.200'
                color='black.500'
                size='xl'
              /> : <ItemList items={items}/>
            }
        </article>
    )
}