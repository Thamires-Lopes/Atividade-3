import React from 'react';
import MyCard from './components/Card';
import MyHeader from './components/Header';
import img from './images/code.jpg';

function App() {
  const routes = ['Home', 'Services', 'About'];

  return (
    <div>
      <MyHeader title="Pitang" routes={routes} />
      <div className="m-3">
        <MyCard title="Home" subtitle="There is nothing to see here" image={img} />
      </div>
    </div>
  );
}

export default App;
