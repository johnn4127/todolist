import React, { useState } from 'react';
import './Todos.css';

const Todos = () => {
  const [value, setValue] = useState('');
  const [todo, setTodo] = useState([]);

  const handleClick = () => {
    setTodo([...todo, value]);
  };

  const handleDelete = (index) => {
    const newList = [...todo];
    newList.splice(index, 1);
    setTodo(newList);
  };

  return (
    <div className='titleContainer'>
        <h1> Camping Check List</h1>
        <input placeholder='Save Your List' value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={handleClick}>Add to list</button>
    <div className='mainListContainer'>
      <div>
        <ol>
          {todo.map((todoItem, index) => (
            <div className='itemchecks' value={index}>
              
              <li className='list'>{todoItem}</li>
              <button onClick={() => handleDelete(index)}>Checked!</button>
              <button onClick={() => handleUpdate(index)}>Update</button>
            </div>
          ))}
        </ol>
      </div>
    </div>
    </div>
  );
};

export default Todos;
