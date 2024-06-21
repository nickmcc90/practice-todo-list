import React from 'react'
import Card from './card'
import '../styles/weekendlist.css'

export default function WeekendsList(props) {

  const { todos, handleDeleteTodo, handleEditTodo, deleteAllOfOneKind } = props;

  return (
    <div className="all-containers">
      <h2>Tasks for the weekend</h2>
      <div className="colored-weekendlist">
        <div>
          {todos.map((todo, todoIndex) => {
            return (
              <>
                {todo.when === "weekend" ? <Card handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} todo={todo.todo} todoIndex={todoIndex}/> : null}
              </>
            )
          })}
        </div>
      </div>
      <button className="delete-all-button" onClick={() => {
        deleteAllOfOneKind("weekend")
      }}>
        Delete All?
      </button>
    </div>
  )
}
