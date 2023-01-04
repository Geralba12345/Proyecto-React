import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ItemCount from '../ItemCount/ItemCount';
import {useContext} from "react"
import {CartContext} from '../../context/CartContext'


const ItemDetail = ( {product} ) => {


  const {addToCart, getQuantityBiId,} = useContext (CartContext)


  const onAdd = ( quantity ) => {

    addToCart(
      {
        ...product,
        quantity: quantity
      }
    )
    
  }

  const quantity = getQuantityBiId(product.id)

  


  
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
    <ItemCount onAdd={onAdd} stock={product.stock} initial={quantity}/>
    </div>
  )
}

export default ItemDetail