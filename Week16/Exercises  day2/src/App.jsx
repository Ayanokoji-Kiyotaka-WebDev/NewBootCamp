import React from 'react';
import Car from './Components/Car';
import Events from './Events';
import Phone from './Components/Phone';

const carinfo = { name: "Ford", model: "Mustang" };

function App() {
  return (
    <div>
      <Car carInfo={carinfo} />

      <Events />

      <Phone />
    </div>
  );
}

export default App;