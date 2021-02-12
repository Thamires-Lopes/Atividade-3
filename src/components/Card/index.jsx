import React from 'react';
import {
  Card,
} from 'react-bootstrap';

const MyCard = ({ title, children }) => (
  <Card className="mb-4">
    <Card.Header>
      <Card.Title>{title}</Card.Title>
    </Card.Header>
    <Card.Body>
      {children}
    </Card.Body>
  </Card>
);

export default MyCard;
