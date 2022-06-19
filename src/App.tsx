import React, { useState } from 'react';
import './App.css';

import TodoList from './components/todo list/TodoList';
import NewTodo from './components/new todo/NewTodo';
import { Todo } from './components/todo/todo.model';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos((prevTodos) => {
      return [...prevTodos, { id: Math.random().toString(), text }];
    });
  };

  const deleteItemHandler = (id: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  return (
    <div className="App">
      <NewTodo todoHandler={todoAddHandler} />
      <TodoList items={todos} deleteItem={deleteItemHandler} />
    </div>
  );
};

export default App;
