// Importaciones react
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// Importaciones Firebase
import {
	getFirestore,
	getDocs,
	collection,
	query,
	where,
} from 'firebase/firestore';
// Importaion de componentes
import ItemList from './ItemList';
import data from '../data/products.json';

export const ItemListContainer = (props) => {
	const [products, setProducts] = useState([]);

	const { id } = useParams();

	useEffect(() => {
		const db = getFirestore();

		let refCollection;

		if (!id) refCollection = collection(db, 'items');
		else {
			refCollection = query(
				collection(db, 'items'),
				where('categoryId', '==', id)
			);
		}

		getDocs(refCollection).then((snapshot) => {
			setProducts(
				snapshot.docs.map((doc) => {
					return { id: doc.id, ...doc.data() };
				})
			);
		});
	}, [id]);

	// useEffect(() => {
	// 	const getProducts = () => {
	// 		return new Promise((resolve, reject) => {
	// 			setTimeout(() => {
	// 				resolve(data);
	// 			}, 2000);
	// 		});
	// 	};

	// 	getProducts().then((data) => {
	// 		if (id) {
	// 			const filteredData = data.filter((d) => d.category === id);
	// 			setProducts(filteredData);
	// 		} else {
	// 			setProducts(data);
	// 		}
	// 	});
	// }, [id]);

	return <ItemList products={products} />;
};
