import { createContext, useState } from 'react';
import Swal from 'sweetalert2';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [items, setItems] = useState([]);

	const clear = () => setItems([]);

	const addItem = (item, quantity) => {
		const addedItem = { ...item, quantity };
		const newCart = [...items];
		const inCart = newCart.find((product) => product.id === addedItem.id);
		if (inCart) {
			inCart.quantity += quantity;
			setItems(newCart);
		} else {
			setItems([...items, addedItem]);
		}

		Swal.fire({
			position: 'midle',
			icon: 'success',
			title: 'Product added to cart!',
			showConfirmButton: false,
			timer: 900,
		});
	};

	const removeItem = (i) => {
		const filterCart = items.filter((item) => item.id !== i);
		console.log(filterCart);
		setItems(filterCart);
	};

	return (
		<CartContext.Provider value={{ addItem, removeItem, clear, items }}>
			{children}
		</CartContext.Provider>
	);
};
