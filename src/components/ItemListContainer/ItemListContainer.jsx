import {Card} from 'react-bootstrap';
import './ItemListContainer.css'

export const ItemListContainer = (greeting) => {

    const {titulo,subtitulo,content} = greeting


    return(
        <article className='articulo'>
            <Card border="success" style={{ width: '18rem' }}>
                <Card.Header>{titulo}</Card.Header>
                <Card.Body>
                    <Card.Title>{subtitulo}</Card.Title>
                    <Card.Text>
                        {content}
                    </Card.Text>
                </Card.Body>
            </Card>
        </article>
    )
}