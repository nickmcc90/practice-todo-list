import React from 'react'

export default function Card(props) {

  const { todo } = props;

  return (
    <li>
      {todo.todo}
    </li>
  )
}
