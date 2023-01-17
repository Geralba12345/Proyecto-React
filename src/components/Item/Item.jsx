import {Link} from "react-router-dom"
import Card from 'react-bootstrap/Card';
import './Item.css';
import Button from 'react-bootstrap/Button';

const Item = ({element}) => {
    return (
      <div>
        <Card style={{ width: '18rem'}} className='cartas'>
          <Card.Img variant="top" src={element.img} alt="Imagen de producto" />
          <Card.Body>
            <Card.Title>{element.name}</Card.Title>
            <Card.Text>
              ${element.price}
            </Card.Text>
            <Link variant="primary" to={`/ItemDetail/${element.id}`}>
            <Button variant="success">Ver detalles</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    )
}

export default Item;


