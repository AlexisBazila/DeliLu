import { createContext, useState } from 'react';
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
		alert('the product was added to the cart');
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
