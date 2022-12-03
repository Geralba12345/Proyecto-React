

const Button = ({conteo,setConteo})=>{



    const suma = ()=>{
        setConteo(conteo + 1)
    }

    const resta = ()=>{
        setConteo(conteo - 1)
    }

    const onAdd = ()=>{
        console.log({conteo})
    }

    



    return(
          <>
            <button onClick={suma}>+</button>
            <button onClick={resta}>-</button>
            <button onClick={onAdd}>Agregar al carrito</button>
          </>
    )
}

export default Button