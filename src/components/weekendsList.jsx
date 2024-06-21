import React from 'react'
import Card from './card'

export default function WeekendsList(props) {

  const { todos } = props;

  const curatedTodos = todos.filter((todo, todoIndex) => {
    return (
      todo.when === "weekend"
    )
  })

  return (
    <div className="all-containers">
    <i>Tasks for the weekend</i>
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
