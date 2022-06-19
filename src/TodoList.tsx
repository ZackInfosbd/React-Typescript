import React from 'react';
import Todo from './Todo';

interface TodosListProps {
  items: { id: string; text: string }[];
}

const TodoList: React.FC<TodosListProps> = ({ items }) => {
  return (
    <ul className="list-container">
      {items.map((item) => {
        return <Todo key={item.id} id={item.id} text={item.text} />;
      })}
    </ul>
  );
};

export default TodoList;
