import React from 'react';
import MyCard from './components/Card';
import MyHeader from './components/Card/Header';

function App() {
  return (
    <div>
      <MyHeader title="Pitang" routes={['Primeira rota', 'Segunda rota', 'Terceira rota']} />
      <MyCard title="Home" />
    </div>
  );
}

export default App;
