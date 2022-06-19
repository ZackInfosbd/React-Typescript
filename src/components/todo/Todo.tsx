import React from 'react';
import './Todo.css';

interface TodoProps {
  id: string;
  text: string;
  deleteItem: (id: string) => void;
}

const Todo: React.FC<TodoProps> = ({ id, text, deleteItem }) => {
  return (
    <div className="item-container" key={id}>
      <li className="list-item">{text}</li>
      <button className="item-btn" onClick={() => deleteItem(id)}>
        delete
      </button>
    </div>
  );
};

export default Todo;
