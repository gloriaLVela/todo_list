import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
  // To represent an array of todo items.
  const [todos, setTodos] = useState([]);
  // Represent the value entered by user into an input field for adding a new heading for a todo item
  const [headingInput, setHeadingInput] = useState('');
  // This state will hold the value of input fields for each todo item individually.
  const [listInputs, setListInputs] = useState({});

  const handleAddTodo = () => {
    if (headingInput.trim() !== '') {
      setTodos([...todos, { heading: headingInput, lists: [] }]);
      setHeadingInput('');
    }
  };

  return (
    <>
      <div className="todo-container">
        <h1 className="title">My Todo List</h1>
        <div className="input-container">
          <input
            type="text"
            className="heading-input"
            placeholder="Enter heading"
            
          />
          <button className="add-list-button" onClick="handleAddTodo" >Add Heading</button>
        </div>
      </div>
      <div className="todo_main">
        
      </div>
    </>
  );
};

export default TodoList;
