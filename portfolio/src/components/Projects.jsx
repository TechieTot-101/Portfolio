import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Projects = () => {
  const projectData = [
    {
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'project1.jpg', // Replace with actual image path
    },
    {
      title: 'Project 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageUrl: 'project2.jpg', // Replace with actual image path
    },
    {
      title: 'Project 3',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      imageUrl: 'project3.jpg', // Replace with actual image path
    },
  ];

  return (
    <section className="projects-section">
      <Container>
        <h2 className="text-center mb-4">Projects</h2>
        <Row>
          {projectData.map((project, index) => (
            <Col key={index} md={4} sm={6} className="mb-4">
              <Card>
                <Card.Img variant="top" src={project.imageUrl} alt={project.title} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
