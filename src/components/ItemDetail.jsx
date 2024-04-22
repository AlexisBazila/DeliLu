// Importaciones de react
import React, { useContext } from 'react';
// Importaciones de Boostrap
import Card from 'react-bootstrap/Card';
// Imporetaciones de componentes
import ItemCount from './ItemCount';
import { CartContext } from '../context/CartContext';

const ItemDetail = ({ item }) => {
	const { addItem } = useContext(CartContext);

	const add = (quantity) => addItem(item, quantity);

	return (
		<div>
			<Card className="text-center" style={{ margin: '5% 20% 5% 20%' }}>
				<Card.Header>
					<Card.Img
						src={item.image}
						style={{ maxHeight: '400px', maxWidth: '400px' }}
					/>
				</Card.Header>
				<Card.Header>
					<Card.Title>{item.title}</Card.Title>
				</Card.Header>
				<Card.Body>
					<Card.Text>{item.description}</Card.Text>
					<Card.Text>
						<strong>Category:</strong> {item.categoryID}
					</Card.Text>
					<Card.Text>
						<strong>Stock:</strong> {item.stock}
					</Card.Text>
					<Card.Text>
						<strong>${item.price}</strong>
					</Card.Text>
				</Card.Body>
				<Card.Footer className="text-muted">
					<ItemCount onAdd={add} stock={item.stock} />
				</Card.Footer>
			</Card>
		</div>
	);
};

export default ItemDetail;
