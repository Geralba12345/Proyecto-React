import {Card} from 'react-bootstrap';
import './ItemListContainer.css'
import ItemCount from "../ItemCount/ItemCount"
import {productos} from '../../productosMock';
import { useEffect, useState } from 'react';
import ItemList from "../ItemList/ItemList"



export const ItemListContainer = (greeting) => {

    const {titulo,subtitulo,content} = greeting

    const [ items, setItems ] = useState([])


    useEffect(()=>{
        const task = new Promise ((resolve,reject)=>{
            setTimeout(()=>{
                resolve(productos)
            },2000)
        })
    
    
        task
            .then((res)=>{setItems(res)})
            .catch((err)=>{console.log("Su solicitud fue rechazada")})

    }, [] )

    

    return(
        <article>
            <Card className='articulo' border="success" style={{ width: '18rem' }}>
                <Card.Header>{titulo}</Card.Header>
                <Card.Body>
                    <Card.Title>{subtitulo}</Card.Title>
                    <Card.Text>
                        {content}
                    </Card.Text>
                </Card.Body>
            </Card>
            <ItemCount stock={5} initial={1}/>
            <ItemList items={items}/>
        </article>
    )
}