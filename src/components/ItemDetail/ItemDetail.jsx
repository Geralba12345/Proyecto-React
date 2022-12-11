import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const ItemDetail = ( {product} ) => {

  
  return (
    <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.img} alt="Imagen de producto" />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
        {product.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>${product.price}</ListGroup.Item>
      </ListGroup>
    </Card>
    </div>
  )
}

export default ItemDetail