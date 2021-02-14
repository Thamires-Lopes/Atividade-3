import React, { useState } from 'react';
import MyModal from '../components/Modal';
import Card from '../components/Card';

function App() {
  const [cards, setCards] = useState([]);

  return (
    <main>
      <div className="m-3">
        <div className="mb-4 d-flex justify-content-center align-items-center">
          <h1 className="center-text">Lista de Tarefas</h1>
          <div className="ml-2">
            <MyModal cards={cards} setCards={setCards} card={{}} btnText="Adicionar nova tarefa" />
          </div>
        </div>
        {cards.map((card, index) => (
          <Card
            cards={cards}
            setCards={setCards}
            card={card}
            index={index}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
