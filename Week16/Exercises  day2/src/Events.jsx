import React, { useState } from 'react';

const Events = () => {
  const [inputValue, setInputValue] = useState('');
  const [isToggleOn, setIsToggleOn] = useState(true);

  const clickMe = () => {
    alert('I was clicked');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      alert('Input value: ' + inputValue);
    }
  };

  const toggleState = () => {
    setIsToggleOn(!isToggleOn);
  };

  return (
    <div>
      <button onClick={clickMe}>
        Click me!
      </button>
      <input
        type="text"
        onKeyDown={handleKeyDown}
        onChange={(event) => setInputValue(event.target.value)}
        value={inputValue}
      />
      <button onClick={toggleState}>
        {isToggleOn ? 'ON' : 'OFF'}
      </button>
    </div>
  );
};

export default Events;