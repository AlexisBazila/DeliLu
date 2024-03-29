import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/products.json';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';


const ItemDetailContainer = () => {
	const [item, setItem] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		const getProducts = () => {
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve(data);
				}, 2000);
			});
		};

		getProducts().then((data) => {
			const filteredData = data.find((i) => i.id === Number(id));
			setItem(filteredData);
		});
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
			<Card className="text-center" style={{margin:'5% 20% 5% 20%'}}>
				<Card.Header >
                    <Card.Img  src={item.pictureUrl} style={{maxHeight:'400px', maxWidth:'400px'}}/>
                </Card.Header>
                <Card.Header>
                    <Card.Title>{item.title}</Card.Title>
                </Card.Header>
				<Card.Body>

                <Card.Text>{item.Description}</Card.Text>
                    <Card.Text><strong>Category:</strong> {item.category}</Card.Text>
                    <Card.Text><strong>${item.price}</strong></Card.Text>
				</Card.Body>
				<Card.Footer className="text-muted">
                    <Button variant="primary">Add to cart</Button>
                    </Card.Footer>
			</Card>
            </div>

	);
};

export default ItemDetailContainer;
