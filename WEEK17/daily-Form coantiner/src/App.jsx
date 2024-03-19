import React, { useState } from 'react';

const App = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    destination: '',
    lactoseFree: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;

    setFormData({
      ...formData,
      [name]: val
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, age, gender, destination, lactoseFree } = formData;

    const urlParams = new URLSearchParams();
    urlParams.set('firstName', firstName);
    urlParams.set('lastName', lastName);
    urlParams.set('age', age);
    urlParams.set('gender', gender);
    urlParams.set('destination', destination);
    urlParams.set('lactoseFree', lactoseFree ? 'on' : 'off');

    const url = `http://localhost:3000/?${urlParams.toString()}`;
    console.log(url);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
        <input type="number" name="age" value={formData.age} onChange={handleChange} />
        <input type="text" name="gender" value={formData.gender} onChange={handleChange} />
        <input type="text" name="destination" value={formData.destination} onChange={handleChange} />
        <input type="checkbox" name="lactoseFree" checked={formData.lactoseFree} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;