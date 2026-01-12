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
    // The input heading should not be empty
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
            // CSS class for styling
            className="heading-input"
            // Text shown when input is empty
            placeholder="Enter heading"
            value={headingInput}
            // Add onChange event handler to update headingInput state
            onChange={(e) =>{setHeadingInput(e.target.value);}}
            
          />
          {/* Button to add the entered heading to the todo list */}
          <button className="add-list-button" onClick={handleAddTodo} >Add Heading</button>
        </div>
      </div>
      <div className="todo_main">
        {todos.map((todo, index) => ( // Iterate over each todo item in the todos array
            <div key={index} className="todo-card">
                <div className="heading_todo">
                {/* Display the heading text of the current todo item */}
                    <h3>{todo.heading}</h3> {/* Display the heading here */}
                {/* Button to delete the current heading by passing its index */}
                    <button className="delete-button-heading" onClick={() => handleDeleteTodo(index)}>Delete Heading </button>
                </div>
            </div>
  ))}
      </div>
    </>
  );
};

export default TodoList;
