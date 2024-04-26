// Importacion react
import React, {useState} from 'react'
// Importacion boostrap
import Button from 'react-bootstrap/Button';
// Importacion de estilos
import '../../style/ItemCount.css';


const ItemCount = ({onAdd, stock}) => {

const [quantity, setQuantity] = useState(1);

const handleSubtract = () =>{
  quantity > 1 && setQuantity(quantity - 1)
}
const handleAdd = () =>{
  quantity < stock && setQuantity(quantity + 1)
}

const handleAddCart = () =>{
    setQuantity(1);
    onAdd(quantity);
}

  return (
    <div>
      <div className="item-count">
        <Button variant="dark" onClick={handleSubtract}>-</Button>
        <p>{quantity}</p>
        <Button  variant="dark" onClick={handleAdd}>+</Button>
      </div>
      <Button  variant="dark"onClick={handleAddCart}>Add to cart</Button>
    </div>
  )
}

export default ItemCount
