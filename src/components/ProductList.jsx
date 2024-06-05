import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { products } from '../data';
import './style.css' 

function ProductList({ addToCart }) {
  return (
    <Container>
      <div className="my-4">
      <h1 className="products"> Products</h1>
      </div>
      
      <Row>
        {products.map((product) => (
          <Col key={product.id} md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={product.image} alt={product.name} />
              <Card.Body>
                <Card.Title><strong>{product.name}</strong></Card.Title>
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
