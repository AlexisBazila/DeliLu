import { CartWidget } from './CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../style/NavBar.css';

export const NavBar = () => (
	<>
		<Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
			<Container fluid>
				<Navbar.Brand href="#">
					<h1>DeliLu</h1>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav
						className="me-auto my-2 my-lg-0"
						style={{ maxHeight: '100px' }}
						navbarScroll
					>
						<Nav.Link href="#">Tarts</Nav.Link>
						<Nav.Link href="#">Cakes</Nav.Link>
						<Nav.Link href="#">Desserts</Nav.Link>
					</Nav>
					<CartWidget />
				</Navbar.Collapse>
			</Container>
		</Navbar>
	</>
);
