import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { React, useState } from 'react';
// Importacion boostrap
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
import Form from 'react-bootstrap/Form';
// Importaciones Firesotre
import {
	Timestamp,
	addDoc,
	collection,
	getFirestore,
} from 'firebase/firestore';
// Importaciones sweetalert
import Swal from 'sweetalert2';
// Importaciones de componentes
import CheckoutForm from './CheckoutForm';
import '../../style/Checkout.css';

const Cart = () => {
	const initalValues = {
		name: '',
		email: '',
		phone: '',
	};
	const today = Timestamp.fromDate(new Date());
	const [buyer, setBuyer] = useState(initalValues);
	const { items, clear, removeItem } = useContext(CartContext);
	const total = items.reduce((acu, act) => acu + act.price * act.quantity, 0);
	const db = getFirestore();
	const orderCollection = collection(db, 'orders');

	const handleChange = (ev) => {
		const { name, value } = ev.target;
		setBuyer((prev) => {
			return {
				...prev,
				[name]: value,
			};
		});
	};

	const handleOrder = () => {
		const order = {
			buyer,
			items,
			total,
			date: today,
		};

		addDoc(orderCollection, order).then(({ id }) => {
			if (id) {
				clear();
				Swal.fire({
					position: 'midle',
					icon: 'success',

					title: 'The order ID: ' + id + ' has been complete!',
					showConfirmButton: false,
					timer: 2500,
				});
			}
		});
	};

	return (
		<div className="cart">
			<div className="order">
				<Badge bg="dark">
					<h1>MY ORDER</h1>
				</Badge>
				<div>
					<Table striped bordered hover variant="dark">
						<thead>
							<tr>
								<th colSpan={2}>PRODUCT</th>
								<th>PRICE</th>
								<th>QUANTITY</th>
								<th>SUBTOTAL</th>
								<th>DELETE PRODUCT</th>
							</tr>
						</thead>
						<tbody>
							{items.map((item) => (
								<tr key={item.id}>
									<td>
										<img className="tdimage" src={item.image} alt="" />
									</td>
									<td>
										<p>{item.title}</p>
									</td>
									<td>${item.price}</td>
									<td>{item.quantity}</td>
									<td>${item.price * item.quantity}</td>
									<td>
										<Button variant="light" onClick={() => removeItem(item.id)}>
											<i class="bx bxs-message-square-minus"></i>
										</Button>
									</td>
								</tr>
							))}
						</tbody>
					</Table>
					<div className="buton">
						<Button variant="dark" onClick={clear}>
							Clear cart
						</Button>
						<Badge bg="dark">
							<h3>Total: ${total}</h3>
						</Badge>
					</div>
				</div>
			</div>

			<div className="form">
				<Badge bg="dark">
					<h2>CONTACT</h2>
				</Badge>

				<Form>
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
				<Button variant="dark" onClick={handleOrder}>
					Buy
				</Button>
			</div>
		</div>
	);
};

export default Cart;
