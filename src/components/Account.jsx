import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

function Account() {
  const [account, setAccount] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
    shipaddress: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAccount({ ...account, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Account updated!');
  };

  return (
    <Container>
      <div className="my-4">
      <h1 className="products">Account </h1>
      </div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={account.name}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formAddress" className="mt-3">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            name="address"
            value={account.address}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formEmail" className="mt-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={account.email}
            onChange={handleChange}
          />
          </Form.Group>
        <Form.Group controlId="formNumber" className="mt-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="number"
            name="phone"
            value={account.phone}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formShipAddress" className="mt-3">
          <Form.Label>Shipping Address</Form.Label>
          <Form.Control
            type="text"
            name="shipaddress"
            value={account.shipaddress}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Update Account
        </Button>
      </Form>
    </Container>
  );
}

export default Account;
