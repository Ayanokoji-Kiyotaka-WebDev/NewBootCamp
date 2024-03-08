import React, { useState } from 'react';

const App = () => {
  const [languages, setLanguages] = useState([
    { name: "PHP", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 },
  ]);

  const increaseVote = (index) => {
    setLanguages(prevLanguages => {
      const updatedLanguages = [...prevLanguages];
      updatedLanguages[index].votes += 1;
      return updatedLanguages;
    });
  };

  return (
    <div>
      {languages.map((language, index) => (
        <div key={index}>
          <span>{language.name}: </span>
          <span>{language.votes}</span>
          <button onClick={() => increaseVote(index)}>vote</button>
        </div>
      ))}
    </div>
  );
};
export default App