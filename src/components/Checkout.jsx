import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { React, useState } from 'react';
import { Link } from 'react-router-dom';
// Importacion boostrap
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
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
import '../../style/Checkout.css';

import CheckoutForm from './CheckoutForm';

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
					title: 'The order has been complete!',
					text: 'Order ID: ' + id + '',
					icon: 'success',
				});
			}
		});
	};

	if (items.length === 0) {
		return (
			<div className="cart">
				<div className="order">
					<Badge bg="dark">
						<h1>
							<h2>
								<i className="bx bxs-cart-alt icart"></i> Your cart is empty
							</h2>
							<Link to="/">
								<Button variant="light">
									Go to shop <i class="bx bx-run"></i>
								</Button>
							</Link>
						</h1>
					</Badge>
				</div>
			</div>
		);
	}

	return (
		<div className="cart">
			<div className="order">
				<Badge bg="dark">
					<h1>
						<i className="bx bxs-cart-alt icart"></i>
					</h1>
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
											<i className="bx bxs-message-square-minus"></i>
										</Button>
									</td>
								</tr>
							))}
						</tbody>
					</Table>
					<div>
						<Badge bg="dark" className="buton">
							<Button variant="light" onClick={clear}>
								Clear cart <i className="bx bx-message-square-x"></i>
							</Button>
							<h2>Total: ${total}</h2>
						</Badge>
					</div>
				</div>
			</div>

			<CheckoutForm
				buyer={buyer}
				handleChange={handleChange}
				handleOrder={handleOrder}
			/>
		</div>
	);
};

export default Cart;
