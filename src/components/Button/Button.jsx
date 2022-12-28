import { useContext } from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import { CartContext } from '../../context/CartContext';
import './Button.css';



const Button = ({conteo,setConteo,stock,product})=>{

    const {addToCart} = useContext(CartContext)

    let StockDisponible = stock


    const suma = ()=>{
        conteo < StockDisponible ? setConteo(conteo + 1) : alert("No hay más stock");
    }

    const resta = ()=>{
        conteo <= 1 ? alert("No se puede comprar menos de 1 producto") : setConteo(conteo - 1);
    }

    const onAdd = (quantity)=>{
        addToCart (
            {
                ...product,
                quantity:quantity
            }
        )
    }
    
    
    return(
          <>
          <ToggleButtonGroup type="checkbox" className='botonera'>
            <ToggleButton id="tbg-btn-1" onClick={suma}>
                +
            </ToggleButton>
            <ToggleButton id="tbg-btn-2" onClick={resta}>
                -
            </ToggleButton>
            <ToggleButton id="tbg-btn-3" onClick={()=>{onAdd(conteo)}}>
                Agregar al carrito
            </ToggleButton>
            <h2 className='numero'>{conteo}</h2>
           </ToggleButtonGroup>
          </>
    )
}

export default Button