import Button from "../Button/Button"
import {useState} from "react"

const ItemCount = ({stock,initial}) => {
  
  
  const [conteo, setConteo] = useState(initial)
  

  
  return (
    <>
      <Button conteo={conteo} setConteo={setConteo} stock={stock}/>
      <h2>{conteo}</h2>
    </>
  )
}

export default ItemCount