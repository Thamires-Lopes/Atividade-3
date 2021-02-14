import React, { useState } from 'react';
import {
  Card, Button, ButtonGroup, Form,
} from 'react-bootstrap';

import MyModal from '../Modal';

import '../../styles/styles.css';

const MyCard = ({ card: { title, description, completed } }) => {
  const [checkbox, setCheckbox] = useState(completed);
  const onCompletedTodo = () => setCheckbox(!checkbox);

  return (
    <Card className="mb-4">
      <Card.Header>{title}</Card.Header>
      <Card.Body>
        <Form className="d-flex align-items-center justify-content-between">
          <Form.Check type="checkbox">
            <Form.Check.Input
              type="checkbox"
              checked={checkbox}
              onChange={() => onCompletedTodo()}
            />
            <Form.Label className={checkbox ? 'completed' : ''}>{description}</Form.Label>
          </Form.Check>

          <ButtonGroup className="float-right">
            <MyModal />
            <Button className="ml-1" variant="dark">Excluir</Button>
          </ButtonGroup>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default MyCard;
