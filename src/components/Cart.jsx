import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { React, useState } from 'react'
// Importacion boostrap
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

const Cart = () => {

    const initalValues = {
        name: "",
        address: "",
        phone: "",
    };
    
    const [buyer, setBuyer] = useState(initalValues);
    const {cart, clear} = useContext(CartContext);

    const handleChange = (ev) => {
        const {name, value} = ev.target;
        setBuyer((prev) => {
            return{
                ...prev, [name]:value,
            }
        })
    }

    const total = cart.reduce((acu, act) => acu + act.price * act.quantity, 0);

    const handleOrder = () =>{
        const order = {
            buyer,
            cart,
            total,
        };

        alert("La compra ha sido completada")
    }

  return (
    <div>
      <h1>MY ORDER</h1>
      <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Product Name Name</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
      {cart.map(item => 
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.quantity}</td>
                </tr> )}
      </tbody>
    </Table>
      
      <Button onClick={clear}>Clear cart</Button>
      
      <h2>CONTACT</h2>
      <form>
        <div>
            <label>Name</label>
            <input type="text" value={buyer.name} name='name' onChange={handleChange}/>
        </div>
        <div>
            <label>Address</label>
            <input type="text" value={buyer.address} name='address' onChange={handleChange}/>
        </div>
        <div>
            <label>Phone</label>
            <input type="text" value={buyer.phone} name='phone' onChange={handleChange}/>
        </div>
      </form>
      
      <Button onClick={handleOrder}>Buy</Button>
    </div>
  )
}

export default Cart
