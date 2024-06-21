import React from 'react'
import '../styles/allinputs.css'

export default function Allinputs(props) {

  const { handleRadioChange, handleTextChange, textValue, setTextValue, addTodo, handleWarning, radioValue } = props;

  return (
    <div className="inputs-container corben-regular">
      <input value={textValue} onChange={(e) => {
        handleTextChange(e.target.value);
      }} className="input-bar corben-regular" placeholder="Type up what you need to get done...."/>
      <div className="radio-container">
        <label>
          <input type="radio" name="when-todo" value="today" onChange={(e) => {
            handleRadioChange(e.target.value)
          }}/>
          Yeah I wanna do that today.
        </label>
        <label>
          <input type="radio" name="when-todo" value="weekend" onChange={(e) => {
            handleRadioChange(e.target.value)
          }}/>
          Mmm... I'll save it for the weekend.
        </label>
      </div>
      <button onClick={() => {
        if(radioValue !== "") {   // if a radio value isn't selected, nothing will happen.
          addTodo(textValue);
          setTextValue("");
        }
      }} className="add-button corben-regular">
        Add
      </button>
    </div>
  )
}
