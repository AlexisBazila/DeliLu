import { CartWidget } from './CartWidget';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../../style/NavBar.css';

export const NavBar = () => (
	<>
		<Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
			<Container fluid>
				<Navbar.Brand href="#">
					<img src="../../resources/img/dllight.png" alt="" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav
						className="me-auto my-2 my-lg-0"
						style={{ maxHeight: '100px' }}
						navbarScroll
					>
						<Nav.Link href="#">Cackes</Nav.Link>
						<Nav.Link href="#">Cheese Cake</Nav.Link>
						<Nav.Link href="#">Salty</Nav.Link>
					</Nav>
					<CartWidget />
				</Navbar.Collapse>
			</Container>
		</Navbar>
	</>
);
