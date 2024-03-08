import React, { useState } from 'react';

function Car(props) {
  const [color, setColor] = useState("red");

  return (
    <h1>This car is {color} {props.carInfo.model}.</h1>
  );
}

export default Car;