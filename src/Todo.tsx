import React from 'react';

interface TodoProps {
  id: string;
  text: string;
}

const Todo: React.FC<TodoProps> = ({ id, text }) => {
  return (
    <div className="item-container" key={id}>
      <li className="list-item">{text}</li>
      <button className="item-btn">delete</button>
    </div>
  );
};

export default Todo;
