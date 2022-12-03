import {Card} from 'react-bootstrap';
import './ItemListContainer.css'
import ItemCount from "../ItemCount/ItemCount"
import {products} from "../../productsMock"


export const ItemListContainer = (greeting) => {

    const {titulo,subtitulo,content} = greeting

    console.log({products})




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
        </article>
    )
}