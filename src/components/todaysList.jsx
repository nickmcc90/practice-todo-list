import React from 'react'
import '../styles/todaylist.css'
import Card from './card'

export default function TodaysList(props) {

  const { todos, handleDeleteTodo, handleEditTodo, deleteAllOfOneKind } = props;

  return (
    <div className="all-containers">
      <h2>Tasks for Today</h2>
      <div className="colored-todaylist">
        <div>
          {todos.map((todo, todoIndex) => {
            return (
              <>
                {todo.when === "today" ? <Card handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} todo={todo.todo} todoIndex={todoIndex}/> : null}
              </>
            )
          })}
        </div>
      </div>
      <button className="delete-all-button" onClick={() => {
        deleteAllOfOneKind("today")
      }}>
        Delete All?
      </button>
    </div>
  )
}
