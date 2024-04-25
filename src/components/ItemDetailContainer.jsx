// Importaciones React
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// Importaciones Firestore
import { getFirestore, getDoc, doc } from 'firebase/firestore';
// Importaciones Boostrap
import Spinner from 'react-bootstrap/Spinner';
// Importaciones componentes
import ItemDetail from './ItemDetail';
import { NotFound } from './NotFound';

const ItemDetailContainer = () => {
	const [item, setItem] = useState(null);
	const [loading, setLoading] = useState(true);
	const { id } = useParams();

	useEffect(() => {
		const db = getFirestore();
		const refDoc = doc(db, 'items', id);

		getDoc(refDoc)
			.then((snapshot) => {
				if (snapshot.exists()) {
					setItem({ id: snapshot.id, ...snapshot.data() });
				} else {
					setItem(null);
				}
				setLoading(false);
			})
			.catch((error) => {
				console.error('Error:', error);
				setLoading(false);
			});
	}, [id]);

	if (loading) {
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
	} else if (!item) {
		return <NotFound />;
	} else {
		return (
			<div>
				<ItemDetail item={item} />
			</div>
		);
	}
};

export default ItemDetailContainer;
