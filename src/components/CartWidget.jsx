import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

export const CartWidget = () => {
	return (
	<Button variant="light">
      <i className="bx bx-cart" style={{ fontSize: '30px',}}></i> <Badge bg="dark" pill>5</Badge>
      <span class="visually-hidden">unread messages</span>
    </Button>
	);
};
