import { useState, useEffect } from "react"
import Button from 'react-bootstrap/Button';
import './ItemCount.css';


const ItemCount = ({ stock, initial = 0, onAdd }) => {
  const [counter, setCounter] = useState(initial)


  useEffect(()=>{
    setCounter(initial)
  },[initial])

  const increment = () => {
    if (counter < stock) {
      setCounter(counter + 1)
    }
  }

  const decrement = () => {
    if (counter > 1) {
      setCounter(counter - 1)
    }
  }


  return (
    <div>
      <Button variant="success" onClick={increment}>+</Button>
      <Button variant="success" onClick={decrement}>-</Button>
      <Button variant="secondary">{counter}</Button>
      <Button variant="success" onClick={() => onAdd(counter)}>Agregar al carrito</Button>
    </div>
  )
}

export default ItemCount
