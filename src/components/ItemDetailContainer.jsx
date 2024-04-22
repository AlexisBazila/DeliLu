// Importaciones react
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// Importaciones Firestore
import { getFirestore, getDoc, doc } from 'firebase/firestore';
// Importaciones Boostrap
import Spinner from 'react-bootstrap/Spinner';
// Importaciones datos y componentes
import data from '../data/products.json';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
	const [item, setItem] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		const db = getFirestore();

		const refDoc = doc(db, 'items', id);

		getDoc(refDoc).then((snapshot) => {
			setItem({ id: snapshot.id, ...snapshot.data() });
		});
		// const getProducts = () => {
		// 	return new Promise((resolve, reject) => {
		// 		setTimeout(() => {
		// 			resolve(data);
		// 		}, 2000);
		// 	});
		// };
		// getProducts().then((data) => {
		// 	const filteredData = data.find((i) => i.id === Number(id));
		// 	setItem(filteredData);
		// });
	}, [id]);

	if (!item)
		return (
			<div
				style={{
					height: '100vh',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Spinner animation="border" role="status">
					<span className="visually-hidden">Loading...</span>
				</Spinner>
			</div>
		);

	return (
		<div>
			<ItemDetail item={item} />
		</div>
	);
};

export default ItemDetailContainer;
