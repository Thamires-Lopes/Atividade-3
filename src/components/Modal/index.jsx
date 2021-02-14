import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

const MyModal = ({
  cards, setCards, card, btnText,
}) => {
  const { title, description } = card;
  const [show, setShow] = useState(false);

  const [editTitle, setEditTitle] = useState(title);
  const [editDescription, setEditDescription] = useState(description);

  const handleClose = () => {
    setEditTitle(title);
    setEditDescription(description);
    setShow(false);
  };

  const titleUpdate = (event) => setEditTitle(event.target.value);
  const descriptionUpdate = (event) => setEditDescription(event.target.value);

  const handleSave = () => {
    const id = Math.random() * 100;
    setCards([...cards, {
      id, title: editTitle, description: editDescription, completed: false,
    }]);
    handleClose();
  };

  return (
    <>
      <Button variant="dark" onClick={() => setShow(true)}>
        {btnText}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Tarefa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Título</Form.Label>
              <Form.Control
                type="text"
                placeholder={editTitle || 'Digite o título'}
                onChange={(event) => titleUpdate(event)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Descrição</Form.Label>
              <Form.Control
                type="text"
                placeholder={editDescription || 'Digite a descrição'}
                onChange={(event) => descriptionUpdate(event)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="dark" onClick={handleSave}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MyModal;
