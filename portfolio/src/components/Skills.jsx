import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Skills = () => {
  const skillData = [
    {
      title: 'HTML5',
      icon: 'fab fa-html5', // Replace with actual icon class
    },
    {
      title: 'CSS3',
      icon: 'fab fa-css3', // Replace with actual icon class
    },
    {
      title: 'JavaScript',
      icon: 'fab fa-js', // Replace with actual icon class
    },
    {
      title: 'React',
      icon: 'fab fa-react', // Replace with actual icon class
    },
    {
      title: 'Bootstrap',
      icon: 'fab fa-bootstrap', // Replace with actual icon class
    },
    {
      title: 'Git',
      icon: 'fab fa-git', // Replace with actual icon class
    },
  ];

  return (
    <section className="skills-section">
      <Container>
        <h2 className="text-center mb-4">Skills</h2>
        <Row>
          {skillData.map((skill, index) => (
            <Col key={index} md={4} sm={6} className="mb-4">
              <Card className="text-center">
                <i className={`icon ${skill.icon}`}></i>
                <Card.Body>
                  <Card.Title>{skill.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
