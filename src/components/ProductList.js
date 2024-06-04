// src/components/ProductList.js
import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { products } from '../data';

function ProductList({ addToCart }) {
  return (
    <Container>
      <h1 className="my-4">Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product.id} md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={product.image} alt={product.name} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>${product.price}</Card.Text>
                <Button variant="primary" onClick={() => addToCart(product)}>Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductList;
