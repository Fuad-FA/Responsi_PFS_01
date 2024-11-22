// // src/components/Projects.js
// import React from 'react';

// function Projects() {
//   return (
//     <div id="projects" className="text-center">
//       <h2>Projects</h2>
//       <p>[Daftar proyek yang sudah dikerjakan]</p>
//     </div>
//   );
// }

// export default Projects;

// src/components/Projects.js
import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import './Projects.css';

function Projects() {
  const projects = [
    { title: 'Project 1', description: 'Creating a patient search game' },
    { title: 'Project 2', description: 'Creating UI design for INS.CO' },
    { title: 'Project 3', description: 'Creating a personal portfolio website' },
    // Tambahkan project lainnya
  ];

  return (
    <div id="projects" className="projects-section text-center">
      <h2>Projects</h2>
      <Row>
        {projects.map((project, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Button variant="primary">View Project</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Projects;
