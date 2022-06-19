import React from 'react';
import Todo from '../todo/Todo';
import './TodoList.css';

interface TodosListProps {
  items: { id: string; text: string }[];
  deleteItem: (id: string) => void;
}

const TodoList: React.FC<TodosListProps> = ({ items, deleteItem }) => {
  return (
    <ul className="list-container">
      {items.map((item) => {
        return (
          <Todo
            key={item.id}
            id={item.id}
            text={item.text}
            deleteItem={deleteItem.bind(null, item.id)}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
