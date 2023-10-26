import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      <Container>
        <Row>
          <Col lg={4} sm={6}>
            <h5>Contact</h5>
            <p>Email: contributor@example.com</p>
            <p>Phone: (123) 456-7890</p>
          </Col>
          <Col lg={4} sm={6}>
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li><a href="/">Home</a></li>
              <li><a href="/portfolio">Portfolio</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </Col>
          <Col lg={4} sm={12}>
            
          </Col>
        </Row>
      </Container>
      <div className="text-center p-3">
        &copy; {new Date().getFullYear()} Your Name. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
