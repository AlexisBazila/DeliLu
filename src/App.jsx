import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import { NotFound } from './components/NotFound';
import ItemDetailContainer from './components/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { useEffect } from 'react';

function App() {

	useEffect(() => {
		const db = getFirestore();

		const refDoc = doc(db, "items", "U64p3Yjf3D1f4rneu1xQ");

		getDoc(refDoc).then((snapshot) => {
			console.log({id: snapshot.id, ...snapshot.data()});
		})
	}, [])

	return (
		<CartProvider>
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route path="*" element={<NotFound />}/>
				<Route path="/" element={<ItemListContainer />}/>
				<Route path="/category/:id" element={<ItemListContainer />}/>
				<Route path="/item/:id" element={<ItemDetailContainer />}/>
				<Route path="/cart" element={<Cart />}/>
			</Routes>
		</BrowserRouter>
		</CartProvider>
	);
}

export default App;
