import { useState, useEffect } from "react"
import Allinputs from "./components/allinputs"

function App() {

  const [textValue, setTextValue] = useState('');

  const [radioValue, setRadioValue] = useState('');

  function handleRadioChange(event) {
    setRadioValue(event)
  }


  return (
    <>
      <Allinputs handleRadioChange={handleRadioChange} />
    </>
  )
}

export default App

/* 

Just got the radio buttons to work, next time, style up the page and get it to be a final product in
terms of how it looks.

*/