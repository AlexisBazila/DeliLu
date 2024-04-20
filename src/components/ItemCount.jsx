import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import '../../style/ItemCount.css';

const ItemCount = ({quantity, handleAdd, handleSubtract, handleAddCart}) => {

  return (
    <div>
      <div className="item-count">
        <Button onClick={handleSubtract}>-</Button>
        <p>{quantity}</p>
        <Button onClick={handleAdd}>+</Button>
      </div>
      <Button variant="primary" onClick={handleAddCart}>Add to cart</Button>
    </div>
  )
}

export default ItemCount
