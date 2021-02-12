import React from 'react';
import {
  Card, Button, Container, Row,
} from 'react-bootstrap';
import code from '../../images/code.jpg';

const MyCard = ({ title }) => (
  <Card className="mb-4">
    <Card.Header>
      <Card.Title>{title}</Card.Title>
    </Card.Header>
    <Card.Body>
      <Button variant="dark">Add Info</Button>
      <Card.Subtitle className="mb-2 text-muted - text-center">
        There are no itens yet.
      </Card.Subtitle>
      <Container>
        <Row className="justify-content-md-center">
          <Card.Img className="justify-content-md-center" style={{ width: '50rem' }} variant="bottom" src={code} />
        </Row>
      </Container>

    </Card.Body>
  </Card>
);

export default MyCard;
