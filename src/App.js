import './App.css';
import Square from './Square.js'
import Input from './Input.js'
import {useState } from 'react'

function App() {
  const [colorValue, setColorValue] = useState()
  const [hexValue, setHexValue] = useState()
  const [darkTxt, setDarkTxt] = useState(true)


  return (
    <div className="App">
      <Square
        colorValue={colorValue}
        hexValue={hexValue}
        darkTxt={darkTxt}
      />
      <Input
        colorValue={colorValue}
        setColorValue={setColorValue}
        setHexValue={setHexValue}
        darkTxt={darkTxt}
        setDarkTxt={setDarkTxt}
      />
    </div>
  );
}

export default App;
