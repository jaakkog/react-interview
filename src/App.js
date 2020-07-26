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

  const generateNewId = () => Math.floor(Math.random() * 1000);

  const onSubmit = (event) => {
    event.preventDefault();
    const newTodos = [...todo];
    newTodos.push({
      id: generateNewId(),
      name: newTodoName,
      complete: false,
    });
    setToDo(newTodos);
    setNewTodoName('');
  };

  const onClick = (id) => {
    const todoItems = [...todo];
    for (let i = 0; i < todo.length; i++) {
      if (todoItems[i].id === id) {
        const newComplete = !todoItems[i].complete;
        todoItems[i].complete = newComplete;
      }
    }
    setToDo(todoItems);
  };

  const onChange = (event) => {
    setNewTodoName(event.target.value);
  };

  const onRemoveClick = (id) => {
    const todoItems = [...todo];
    const deleteItem = todoItems.indexOf(todoItems.find((x) => x.id === id));
    todoItems.splice(deleteItem, 1);
    setToDo(todoItems);
  };

  const todoItems = () => {
    const retVal = [];

    for (let i = 0; i < todo.length; i++) {
      const todos = todo[i];
      retVal.push(
        <Hello
          key={todos.id}
          todo={todos}
          onClick={onClick}
          onRemoveClick={onRemoveClick}
        />,
      );
    }
    return retVal;
  };

  return (
    <div className="container" style={{ backgroundColor: '#B5E2FA' }}>
      <h1>ToDo App</h1>
      {todoItems()}
      <Bar
        onSubmit={onSubmit}
        newTodoName={newTodoName}
        onInputChange={onChange}
      />
    </div>
  );
};

export default App;
