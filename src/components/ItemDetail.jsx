import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount';


const ItemDetail = ({item}) => {

    const [quantity, setQuantity] = useState(1);

const handleSubtract = () =>{
  quantity > 1 && setQuantity(quantity - 1)
}

const handleAdd = () =>{
  quantity < item.stock && setQuantity(quantity + 1)
}

const handleAddCart = () =>{
    console.log({...item, quantity})
}
  return (
    <div>
      <Card className="text-center" style={{ margin: '5% 20% 5% 20%' }}>
				<Card.Header>
					<Card.Img
						src={item.pictureUrl}
						style={{ maxHeight: '400px', maxWidth: '400px' }}
					/>
				</Card.Header>
				<Card.Header>
					<Card.Title>{item.title}</Card.Title>
				</Card.Header>
				<Card.Body>
					<Card.Text>{item.Description}</Card.Text>
					<Card.Text>
						<strong>Category:</strong> {item.category}
					</Card.Text>
					<Card.Text>
						<strong>Stock:</strong> {item.stock}
					</Card.Text>
					<Card.Text>
						<strong>${item.price}</strong>
					</Card.Text>
				</Card.Body>
				<Card.Footer className="text-muted">
					<ItemCount 
                    quantity={quantity} 
                    handleAdd={handleAdd} 
                    handleSubtract={handleSubtract}
                    handleAddCart={handleAddCart}/>
				</Card.Footer>
			</Card>  
    </div>
  )
}

export default ItemDetail
