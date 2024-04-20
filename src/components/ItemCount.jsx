import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import '../../style/ItemCount.css';

const ItemCount = ({item}) => {

const [cantidad, setCantidad] = useState(1);

const handleSubtract = () =>{
  cantidad > 1 && setCantidad(cantidad - 1)
}

const handleAdd = () =>{
  cantidad < item.stock && setCantidad(cantidad + 1)
}

  return (
    <div>
      <div className="item-count">
        <Button onClick={handleSubtract}>-</Button>
        <p>{cantidad}</p>
        <Button onClick={handleAdd}>+</Button>
      </div>
      <Button variant="primary">Add to cart</Button>
    </div>
  )
}

export default ItemCount
