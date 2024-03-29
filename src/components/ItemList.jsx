import Item from './Item';
import Spinner from 'react-bootstrap/Spinner';

const ItemList = ({ products }) => {
	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				flexWrap: 'wrap',
			}}
		>
			{products.length > 0 ? (
				products.map((product) => {
					return <Item key={product.id} product={product} />;
				})
			) : (
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
			)}
		</div>
	);
};

export default ItemList;
