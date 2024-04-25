// Importaciones React
import { NavLink } from 'react-router-dom';
import React, { useContext } from 'react';
// Importaciones Boostrap
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
// Importaciones componentes
import { CartContext } from '../context/CartContext';

export const CartWidget = () => {
	const { items } = useContext(CartContext);

	const itemsInCart = items.reduce(
		(accumulator, current) => accumulator + current.quantity,
		0
	);

	if (!itemsInCart) return null;
	return (
		<Nav.Link to="/cart" as={NavLink}>
			<Button variant="light">
				<i className="bx bx-cart" style={{ fontSize: '30px' }}></i>{' '}
				<Badge bg="dark" pill>
					{itemsInCart}
				</Badge>
				<span class="visually-hidden">unread messages</span>
			</Button>
		</Nav.Link>
	);
};
