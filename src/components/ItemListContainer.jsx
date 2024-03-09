import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const ItemListContainer = (props) =>{
    return (
        <Card style={{ width: '18rem', margin: '5px'}}>
        <Card.Img variant="top" src="../../resources/img/cake.png" />
        <Card.Body>
            <Card.Title>{props.greetings}</Card.Title>
            <Card.Text>
                Example
            </Card.Text>
            <Button variant="primary">Add to car</Button>
        </Card.Body>
        </Card>
      );
}