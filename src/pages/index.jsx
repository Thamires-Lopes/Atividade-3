import React from 'react';
import MyCard from '../components/Card';
import img from '../images/code.jpg';

function App() {
  return (
    <div>
      <div className="m-3">
        <MyCard title="Home" subtitle="There is nothing to see here" image={img} />
      </div>
    </div>
  );
}

export default App;
