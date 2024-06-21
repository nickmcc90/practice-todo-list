import { useState, useEffect } from "react"
import Allinputs from "./components/allinputs"
import MasterListSpace from "./components/MasterListSpace";

function App() {

  const [textValue, setTextValue] = useState('');   // value inside input bar

  const [radioValue, setRadioValue] = useState('');   // value inside radio buttons

  const [todos, setTodos] = useState([]);   // list of todos at all times

  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos: newList }))
  }


  function handleRadioChange(event) {
    setRadioValue(event);
  }

  function handleTextChange(event) {
    setTextValue(event);
  }

  function addTodo(todoData) {
    const newTodos = [...todos, { todo: todoData, when: radioValue}]; // THIS TOOK ME SO LONG TO FIGURE OUT... YOU HAVE TO MAKE A NEW VARIABLE WITH THE NEW ADDED TODO, THEN WE CAN CHANGE THE STATE VARIABLE THROUGH THE NEW VARIABLE!!
    persistData(newTodos);
    setTodos(newTodos);
    console.log(todos);
  }

  function handleDeleteTodo(index) {
    const newTodos = todos.filter((todo, todoIndex) => {
      return index !== todoIndex
    })
    persistData(newTodos);
    setTodos(newTodos);
  }

  function handleEditTodo(index) {
    const newTodo = todos[index].todo
    setTextValue(newTodo)
    handleDeleteTodo(index)
  }

  function deleteAllOfOneKind(type) { // first we filter the todos we have access to for a specific kind, then we map those and send them to the delete.
    const filteredTodos = todos.filter((todo) => { // the above strategy wouldn't work because we don't have access to the indexes. We need the correct index to delete.
      return todo.when !== type   // However, we can filter for the opposite of the type sent to this function, and set todos equal to that filtered thing!!
    })
    persistData(filteredTodos);
    setTodos(filteredTodos);

  }

  useEffect(() => {

    if(!localStorage) {
      return;
    }

    let theTodos = localStorage.getItem('todos');

    if(!theTodos) {
      return;
    }

    console.log(theTodos);

    theTodos = JSON.parse(theTodos).todos;
    setTodos(theTodos);

  }, [])


  return (
    <>
      <Allinputs radioValue={radioValue} setRadioValue={setRadioValue} handleTextChange={handleTextChange} setTextValue={setTextValue} textValue={textValue} handleRadioChange={handleRadioChange} addTodo={addTodo}/>
      <MasterListSpace deleteAllOfOneKind={deleteAllOfOneKind} handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} todos={todos}/>
    </>
  )
}

export default App

/* 

Just got the radio buttons to work, next time, style up the page and get it to be a final product in
terms of how it looks.

*/