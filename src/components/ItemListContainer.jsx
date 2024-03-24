
import ItemDetailContainer from './ItemDetailContainer';
export const ItemListContainer = (props) => {
	return (
		<div>
			<h1>{props.greetings}</h1>
			<ItemDetailContainer />
		</div>
	);
};
