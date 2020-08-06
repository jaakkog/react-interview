import React, { useState } from 'react';
import './App.css';
import Hello from './components/Hello';
import Bar from './components/Bar';

const todos = [
  { id: 1, name: 'Go to the supermarket', complete: false },
  { id: 2, name: 'Call Alice', complete: false },
  { id: 3, name: 'Ask Alice to call Bob', complete: false },
  { id: 4, name: 'Do the dishes', complete: false },
  { id: 5, name: 'Change car tyres', complete: false },
];

const App = () => {
  const [todo, setToDo] = useState(todos);
  const [newTodoName, setNewTodoName] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      name: newTodoName,
      complete: false,
    }
    setToDo([...todo, newTodo]);
    setNewTodoName('');
  };
  
  const onClick = (id) => {
    const clickedTask = todo.map(task => {
      if(task.id === id) {
        return {...task, complete: !task.complete}
      }
      return task
    })
    setToDo(clickedTask);
  };

  const onChange = (event) => {
    setNewTodoName(event.target.value);
  };

  const onRemoveClick = (id) => {
    const todosLeft = todo.filter(task => id !== task.id)
    setToDo(todosLeft);
  };

  const todoItems = todo.map(task => 
      <Hello 
        onClick={onClick} 
        onRemoveClick={onRemoveClick} 
        key={task.id} 
        id={task.id} 
        name={task.name} 
        complete={task.complete}
      />)

  return (
    <div className="container" style={{ backgroundColor: '#B5E2FA' }}>
      <h1>ToDo App</h1>
      {todoItems}
      <Bar
        onSubmit={onSubmit}
        newTodoName={newTodoName}
        onInputChange={onChange}
      />
    </div>
  );
};

export default App;
