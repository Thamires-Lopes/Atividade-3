import React from 'react';
import { Button } from 'react-bootstrap';
import Card from '../components/Card';
import data from '../utils/data';

function App() {
  return (
    <main>
      <div className="m-3">
        <div className="mb-4 d-flex justify-content-center align-items-center">
          <h1 className="center-text">Lista de Tarefas</h1>
          <Button className="m-3" variant="dark">Adicionar Tarefa</Button>
        </div>
        {data.map((card) => <Card card={card} />)}
      </div>
    </main>
  );
}

export default App;
