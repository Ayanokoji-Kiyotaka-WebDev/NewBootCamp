import React, { useState } from 'react';

const Phone = () => {
  const [phone, setPhone] = useState({
    brand: "Samsung",
    model: "Galaxy S20",
    color: "black",
    year: 2020
  });
    
    function changeColor() {
        setPhone (prev => ({
            ...prev,
            color: "blue"
        }));
    }

  return (
    <div>
      <h1>Phone Information</h1>
      <p>Brand: {phone.brand}</p>
      <p>Model: {phone.model}</p>
      <p>Color: {phone.color}</p>
      <p>Year: {phone.year}</p>
        <button onClick={changeColor}>Change Color</button>
      </div>
      
      
  );
};

export default Phone;