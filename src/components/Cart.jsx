import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { React, useState } from 'react';
// Importacion boostrap
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import Swal from 'sweetalert2';

const Cart = () => {
	const initalValues = {
		name: '',
		email: '',
		phone: '',
	};

	const [buyer, setBuyer] = useState(initalValues);
	const { items, clear, removeItem } = useContext(CartContext);

	const handleChange = (ev) => {
		const { name, value } = ev.target;
		setBuyer((prev) => {
			return {
				...prev,
				[name]: value,
			};
		});
	};

	const total = items.reduce((acu, act) => acu + act.price * act.quantity, 0);

	const handleOrder = () => {
		const order = {
			buyer,
			items,
			total,
		};

		const db = getFirestore();
		const orderCollection = collection(db, 'orders');

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
				// alert('The order ID: ' + id + ' has been complete!');
			}
		});
	};

	return (
		<div>
			<h1>MY ORDER</h1>
			<Table striped bordered hover variant="dark">
				<thead>
					<tr>
						<th>#</th>
						<th>Product Name Name</th>
						<th>Price</th>
						<th>Quantity</th>
						<th>Delete product</th>
					</tr>
				</thead>
				<tbody>
					{items.map((item) => (
						<tr key={item.id}>
							<td>{item.id}</td>
							<td>{item.title}</td>
							<td>${item.price}</td>
							<td>{item.quantity}</td>
							<td>
								<Button onClick={() => removeItem(item.id)}>X</Button>
							</td>
						</tr>
					))}
				</tbody>
			</Table>

			<Button onClick={clear}>Clear cart</Button>

			<h2>CONTACT</h2>
			<form>
				<div>
					<label>Name</label>
					<input
						type="text"
						value={buyer.name}
						name="name"
						onChange={handleChange}
					/>
				</div>
				<div>
					<label>Email</label>
					<input
						type="email"
						value={buyer.email}
						name="email"
						onChange={handleChange}
					/>
				</div>
				<div>
					<label>Phone</label>
					<input
						type="number"
						value={buyer.phone}
						name="phone"
						onChange={handleChange}
					/>
				</div>
			</form>

			<Button onClick={handleOrder}>Buy</Button>
		</div>
	);
};

export default Cart;
