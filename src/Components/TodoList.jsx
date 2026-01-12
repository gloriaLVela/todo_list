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
    // Function to handle adding a new list item to a specific todo heading
    const handleAddList = (index) => {
        // Check if the input for the given index is not empty or just whitespace
        if (listInputs[index] && listInputs[index].trim() !== '') {
            const newTodos = [...todos]; // Create a copy of the current todos array
            newTodos[index].lists.push(listInputs[index]); // Add the new list item to the corresponding heading's list
            setTodos(newTodos); // Update the todos state with the new list item
            setListInputs({ ...listInputs, [index]: '' }); // Clear the input field for that index
        }
    };
    // Function to update list input value for a specific heading index
    const handleListInputChange = (index, value) => {
        setListInputs({ ...listInputs, [index]: value }); // Update the listInputs state for the corresponding index
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
                <ul>
                    {/* Iterate over each list item inside the current todo */}
                    {todo.lists.map((list, listIndex) => (
                    <li key={listIndex} className='todo_inside_list'>
                        {/* Display the text content of the list item */}
                        <p>{list}</p>
                    </li>
                    ))}
                </ul>
                <div className='add_list'>
                {/* Input field for adding a new item under a specific heading */}
                        <input
                            type="text"
                            className="list-input"
                            placeholder="Add List"
                            value={listInputs[index] || ''}// Use the value from listInputs array based on the current heading index
                            onChange={(e) => handleListInputChange(index, e.target.value)}/>
                {/* Button to add the list item to the corresponding heading */}
                        <button className="add-list-button" onClick={() => handleAddList(index)}>Add List</button>
                        </div>
            </div>
  ))}
      </div>
    </>
  );
};

export default TodoList;
