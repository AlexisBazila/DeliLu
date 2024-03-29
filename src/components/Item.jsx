import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ({product}) => {
  return (
    <Card style={{ width: '18rem', margin: '1rem' }}>
      <Card.Img variant="top" src={product.pic} />
      <Card.Body>
        <Card.Title>{product.product}</Card.Title>
        <Card.Text>{product.Description}</Card.Text>
        <Card.Text><strong>Category:</strong> {product.category}</Card.Text>
        <Card.Text>{"$"+product.price}</Card.Text>
        <Button variant="dark">+info</Button>
      </Card.Body>
    </Card>
  )
}

export default Item
