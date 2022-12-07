
const Item = ({element}) => {
    return (
      <div>
          <h2>{element.name}</h2>
          <h3>${element.price}</h3>
          <img src={element.img} alt="Imagen de producto" />
      </div>
    )
}

export default Item;


