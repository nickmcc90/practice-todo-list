import React from 'react'
import '../styles/card.css'

export default function Card(props) {

  const { todo, todoIndex, handleDeleteTodo, handleEditTodo } = props;

  return (
    <p className="fancy-todo">
      <div className="open-sans">
        {todo}
      </div>
      <div className="button-container">
        <button onClick={() => {
          handleEditTodo(todoIndex);
        }}>
          <i class="fa-solid fa-file-pen"></i>
        </button>
        <button onClick={() => {
          handleDeleteTodo(todoIndex);
        }}>
          <i class="fa-solid fa-circle-minus"></i>
        </button>
      </div>
    </p>
  )
}
