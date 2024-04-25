import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import { NotFound } from './components/NotFound';
import ItemDetailContainer from './components/ItemDetailContainer';
import { CartProvider } from './context/CartContext';

import Checkout from './components/Checkout';

function App() {
	return (
		<CartProvider>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path="*" element={<NotFound />} />
					<Route path="/" element={<ItemListContainer />} />
					<Route path="/category/:id" element={<ItemListContainer />} />
					<Route path="/item/:id" element={<ItemDetailContainer />} />
					<Route path="/cart" element={<Checkout />} />
				</Routes>
			</BrowserRouter>
		</CartProvider>
	);
}

export default App;
