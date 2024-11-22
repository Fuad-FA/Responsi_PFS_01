// // src/components/Experiences.js
// import React from 'react';

// function Experiences() {
//   return (
//     <div id="experiences" className="text-center">
//       <h2>Experiences</h2>
//       <p>[Daftar pengalaman kerja atau proyek lainnya]</p>
//     </div>
//   );
// }

// export default Experiences;
// src/components/Experiences.js
import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import './Experiences.css';

function Experiences() {
  const experiences = [
    { title: 'Experience 1', description: 'Aisyiyah university information technology students class of 2023' },
    { title: 'Experience 2', description: 'organizers at the I-Tech comparative study event' },
    { title: 'Experience 3', description: 'organizers at the Mataf of the information technology study program in 2024' },
    // Tambahkan lebih banyak pengalaman di sini
  ];

  return (
    <div id="experiences" className="experiences-section text-center">
      <h2>Experiences</h2>
      <Row>
        {experiences.map((experience, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{experience.title}</Card.Title>
                <Card.Text>{experience.description}</Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Experiences;
