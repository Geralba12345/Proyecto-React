import './ItemListContainer.css'
import {productos} from '../../productosMock';
import { useEffect, useState } from 'react';
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom';



export const ItemListContainer = () => {

    const {categoryName} = useParams()

    const [ items, setItems ] = useState([])

    const [ isLoading, setIsLoading ] = useState(false)


    useEffect(()=>{

        setIsLoading(true)

        const productosFiltados = productos.filter( products => products.category === categoryName)

        const task = new Promise ((resolve,reject)=>{
            setTimeout(()=>{
                resolve(categoryName ? productosFiltados : productos)
            },500)
        })
    
    
        task
            .then((res)=>{setItems(res)})
            .catch((err)=>{console.log("Su solicitud fue rechazada")})

        
        setTimeout(()=>{
            setIsLoading(false)
        }, 2000)

    }, [categoryName] )

    

    return(
        <article>
            {
                isLoading ? <h2>Se están cargando los productos</h2> : <ItemList items={items}/>
            }
        </article>
    )
}