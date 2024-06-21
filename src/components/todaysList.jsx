import React from 'react'
import '../styles/todaylist.css'
import Card from './card'

export default function TodaysList(props) {

  const { todos } = props;

  const curatedTodos = todos.filter((todo, todoIndex) => {
    return (
      todo.when === "today"
    )
  })

  return (
    <div className="all-containers">
      <i>Tasks for Today</i>
      <div className="colored-todaylist">
        <ul>
          {curatedTodos.map((todo, todoIndex) => {
            <Card todo={todo}/>
          })}
        </ul>
      </div>
    </div>
  )
}
