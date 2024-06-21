import { useState, useEffect } from "react"
import Allinputs from "./components/allinputs"
import MasterListSpace from "./components/MasterListSpace";

function App() {

  const [textValue, setTextValue] = useState('');   // value inside input bar

  const [radioValue, setRadioValue] = useState('today');   // value inside radio buttons

  const [todos, setTodos] = useState([]);   // list of todos at all times

  function handleRadioChange(event) {
    setRadioValue(event);
  }

  function handleTextChange(event) {
    setTextValue(event);
  }

  function addTodo(todoData) {
    const newTodos = [...todos, { todo: todoData, when: radioValue}]; // THIS TOOK ME SO LONG TO FIGURE OUT... YOU HAVE TO MAKE A NEW VARIABLE WITH THE NEW ADDED TODO, THEN WE CAN CHANGE THE STATE VARIABLE!!
    setTodos(newTodos);
  }


  return (
    <>
      <Allinputs radioValue={radioValue} setRadioValue={setRadioValue} handleTextChange={handleTextChange} setTextValue={setTextValue} textValue={textValue} handleRadioChange={handleRadioChange} addTodo={addTodo}/>
      <MasterListSpace todos={todos}/>
    </>
  )
}

export default App

/* 

Just got the radio buttons to work, next time, style up the page and get it to be a final product in
terms of how it looks.

*/