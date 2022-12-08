

const Button = ({conteo,setConteo,stock})=>{

    let StockDisponible = stock


    const suma = ()=>{
        conteo < StockDisponible ? setConteo(conteo + 1) : alert("No hay más stock");
    }

    const resta = ()=>{
        conteo <= 1 ? alert("No se puede comprar menos de 1 producto") : setConteo(conteo - 1);
    }

    const onAdd = ()=>{
        alert("Usted está comprando " + conteo + " producto/s")
    }

    



    return(
          <>
            <button onClick={suma}>+</button>
            <button onClick={resta}>-</button>
            <button onClick={()=>{onAdd()}}>Agregar al carrito</button>
          </>
    )
}

export default Button