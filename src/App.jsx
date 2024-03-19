import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';

function App() {
	return (
		<>
			<NavBar />
			<ItemListContainer greetings="The productos will be here soon..." />
		</>
	);
}

export default App;
