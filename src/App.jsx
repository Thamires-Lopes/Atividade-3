import React from 'react';
import {
  Card, Button, Container, Row,
} from 'react-bootstrap';
import MyCard from './components/Card';
import MyHeader from './components/Header';
import code from './images/code.jpg';

function App() {
  return (
    <div>
      <MyHeader title="Pitang" routes={['First route', 'Second route', 'Third route']} />
      <div className="m-3">
        <MyCard title="Home">
          <Button variant="dark">Add Info</Button>
          <Card.Subtitle className="mb-2 text-muted - text-center">
            There are no itens yet.
          </Card.Subtitle>
          <Container>
            <Row className="justify-content-md-center">
              <Card.Img className="justify-content-md-center" style={{ width: '50rem' }} variant="bottom" src={code} />
            </Row>
          </Container>
        </MyCard>
      </div>
    </div>
  );
}

export default App;
