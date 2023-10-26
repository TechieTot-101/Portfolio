import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <Container>
        <Row>
          <Col md={6}>
            <h1 className="display-4 text-white">Diya Ghosh</h1>
            <p className="lead text-white">Web Developer | Graphic Designer</p>
            <Button variant="primary" size="lg">View Portfolio</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroBanner;
