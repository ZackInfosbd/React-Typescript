import React, { useState } from 'react';
import './App.css';

import TodoList from './TodoList';
import NewTodo from './NewTodo';
import { Todo } from './todo.model';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos([{ id: Math.random().toString(), text }]);
  };

  return (
    <div className="App">
      <NewTodo todoHandler={todoAddHandler} />
      <TodoList items={todos} />
    </div>
  );
};

export default App;
