import React, { useState } from 'react';
import './App.css';

function App() {
  const [addtodos, setAddtodos] = useState('');
  const [todos, setTodos] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    if(!addtodos.trim()) return; 

    setTodos(prevTodos => [...prevTodos, { id: Date.now(), text: addtodos, completed: false }]);
    setAddtodos("");
  };

  const removeTodo = id => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  const handleListChange = id => {
    setTodos(prevTodos => prevTodos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit} className="todo-form">
        <div className="form-control">
          <label htmlFor="addtodos" className="form-label">New 📃 ToDo 🦖</label>
          <input value={addtodos} onChange={e => setAddtodos(e.target.value)} type="text" id="addtodos" className="form-input"/>
        </div>
        <button type="submit" className="submit-btn">Add🤍</button>
      </form>
      <h2 className="list-title">ToDo List🌠🗺️🦖🌏</h2>
      <ul className="todo-list">
        {todos.length === 0 && <li>No ToDos☹️</li>}
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <label className="todo-label">
              <input type="checkbox" checked={todo.completed} onChange={() =>  handleListChange(todo.id)}/>
              {todo.text}🤠
            </label>
            <button onClick={() => removeTodo(todo.id)} className="delete-btn">delete</button>
          </li>
       ))}
      </ul>
    </div>
  );
}

export default App;