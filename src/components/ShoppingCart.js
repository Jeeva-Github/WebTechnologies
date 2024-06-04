// src/components/ShoppingCart.js
import React from 'react';
import { Container, Table, Button, Form } from 'react-bootstrap';

function ShoppingCart({ cart, updateQuantity, removeFromCart }) {
  const getTotal = () => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  return (
    <Container>
      <h1 className="my-4">Shopping Cart</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>
                <Form.Control
                  type="number"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, e.target.value)}
                />
              </td>
              <td>
                <Button variant="danger" onClick={() => removeFromCart(item.id)}>Remove</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <h2>Total: ${getTotal()}</h2>
      <Button variant="success" onClick={() => alert('Purchase Finalized!')}>Finalize Purchase</Button>
    </Container>
  );
}

export default ShoppingCart;
