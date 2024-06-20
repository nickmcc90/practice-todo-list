import React from 'react'
import '../styles/allinputs.css'

export default function Allinputs(props) {

  const { handleRadioChange } = props;

  return (
    <div className="inputs-container">
      <input className="input-bar" placeholder="Type up what you need to get done...."/>
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
      <button>
        Add
      </button>
    </div>
  )
}
