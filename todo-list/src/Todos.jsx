import React, { useState } from 'react';
import './Todos.css';
import titlecampImage from './assets/titlecamp.jpeg';

const Todos = () => {
  const [value, setValue] = useState('');
  const [todo, setTodo] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  
  
  const handleClick = () => {
    if (value.trim() !== '') {
      setTodo([...todo, value.trim()]);
      setValue('');
    }
  };
  

  const handleDelete = (index) => {
    const newList = [...todo];
    newList.splice(index, 1);
    setTodo(newList);
  };

  const handleClear = () => {
    setTodo([]);
  };

  const handleUpdate = (index) => {
    setSelectedIndex(index); 
    setValue(todo[index]); 
  };

  const handleSaveUpdate = () => {
    if (selectedIndex !== -1) {
      const updatedList = [...todo];
      updatedList[selectedIndex] = value;
      setTodo(updatedList);
      setValue(''); 
      setSelectedIndex(-1); 
    }
  };

  return (
    <div className='titleContainer'>
      <h1>
        Adventure Packer{' '}
        <img src={titlecampImage} alt="" style={{maxWidth:'100px', height:'auto', marginTop:'20px'}} />
      </h1>
      <input className='inputvalue'
        placeholder='Plan your adventure'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleClick}>Add to list</button>
      <button onClick={handleClear}>Clear Camp</button>
      <div className='mainListContainer'>
        <div>
          <ol>
            {todo.map((todoItem, index) => (
              <div className='itemchecks' key={index}>
                <li className='list'>
                  {selectedIndex === index ? (
                    <input
                      type='text'
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                    />
                  ) : (
                    todoItem
                  )}
                 
                </li>
                <button onClick={() => handleDelete(index)}>Delete!</button>
                {selectedIndex === index ? (
                  <button onClick={handleSaveUpdate}>Save</button>
                ) : (
                  <button onClick={() => handleUpdate(index)}>Update</button>
                )}
              </div>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Todos;
