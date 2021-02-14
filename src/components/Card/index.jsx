import React, { useState } from 'react';
import {
  Card, Button, ButtonGroup, Form,
} from 'react-bootstrap';

import MyModal from '../Modal';
import '../../styles/styles.css';

const MyCard = ({
  card, cards, setCards,
}) => {
  const {
    id, title, description, completed,
  } = card;
  const [checkbox, setCheckbox] = useState(completed);
  const onCompletedTodo = () => setCheckbox(!checkbox);

  const deleteCard = () => {
    const teste = cards.filter((el) => el.id !== id);

    setCards(teste);
  };

  return (
    <Card className="mb-4" id={`${id}`}>
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
            <MyModal card={card} btnText="Editar" />
            <Button className="ml-1" variant="dark" onClick={() => deleteCard()}>Excluir</Button>
          </ButtonGroup>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default MyCard;
