import './ItemListContainer.css'
import {productos} from '../../productosMock';
import { useEffect, useState } from 'react';
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom';



export const ItemListContainer = () => {

    const {categoryName} = useParams()

    const [ items, setItems ] = useState([])


    useEffect(()=>{

        const productosFiltados = productos.filter( products => products.category === categoryName)

        const task = new Promise ((resolve,reject)=>{
            setTimeout(()=>{
                resolve(categoryName ? productosFiltados : productos)
            },2000)
        })
    
    
        task
            .then((res)=>{setItems(res)})
            .catch((err)=>{console.log("Su solicitud fue rechazada")})

    }, [categoryName] )

    

    return(
        <article>
            <ItemList items={items}/>
        </article>
    )
}