import React from 'react';
// Importacion boostrap
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
import Form from 'react-bootstrap/Form';

const CheckoutForm = ({ buyer, handleChange, handleOrder }) => {
	return (
		<div className="form">
			<Badge bg="dark">
				<h2>
					<i className="bx bx-package  icart"></i> checkout
				</h2>
			</Badge>

			<Form className="checkoutForm">
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Name</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter name"
						name="name"
						onChange={handleChange}
						value={buyer.name}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email</Form.Label>
					<Form.Control
						type="email"
						placeholder="Enter email"
						name="email"
						onChange={handleChange}
						value={buyer.email}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Phone</Form.Label>
					<Form.Control
						type="number"
						placeholder="Enter Phone-number"
						name="phone"
						onChange={handleChange}
						value={buyer.phone}
					/>
				</Form.Group>
			</Form>
			<Badge className="buton" bg="dark">
				<h3>Send Order</h3>
				<Button variant="light" onClick={handleOrder}>
					<i className="bx bx-arrow-from-left"></i>
				</Button>
			</Badge>
		</div>
	);
};

export default CheckoutForm;
