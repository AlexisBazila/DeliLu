import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';

function App() {
	
	return (
		<>
			<NavBar />
			<ItemListContainer greetings="Cake"/>
		</>
	);
}

export default App;
