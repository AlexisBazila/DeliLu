import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
	return (
		<Card style={{ width: '18rem', margin: '1rem' }}>
			<Card.Img variant="top" src={product.pictureUrl} />
			<Card.Body>
				<Card.Title>{product.title}</Card.Title>
				<Card.Text>{product.Description}</Card.Text>
				<Card.Text>
					<strong>Category:</strong> {product.category}
				</Card.Text>
				<Card.Text>{'$' + product.price}</Card.Text>
				<Link to={`/item/${product.id}`}>
					<Button variant="dark">+info</Button>
				</Link>
			</Card.Body>
		</Card>
	);
};

export default Item;
