import React, { useState } from 'react';
import './App.css';
import calt from './images/calct.png';
function App() {

  const [result, setResult] = useState("");

  const clickHandler = (e) => {
    setResult(result.concat(e.target.value))
  }

  const clearResult = () => {
    setResult("")
  }
  const calculate = () => {
    setResult(eval(result).toString());
  }


  return (
    <div>
      <div className='name'>
        <h1>Simple Calculator By Muhammad Nabeel se.muhammadnabeel@gmail.com</h1>
        </div>
        <div className='calcOutside'>
          <img className='image' src={calt} alt='' />
        </div>
        <div className="calc">

          <input type='text' placeholder='0' id='answer' value={result} />
          <div>
            <button value='1' className='button' onClick={clickHandler}>1</button>
            <button value='2' className='button' onClick={clickHandler}>2</button>
            <button value='3' className='button' onClick={clickHandler}>3</button>
            <button value='4' className='button' onClick={clickHandler}>4</button>
            <button value='5' className='button' onClick={clickHandler}>5</button>
            <button value='6' className='button' onClick={clickHandler}>6</button>
            <button value='7' className='button' onClick={clickHandler}>7</button>
            <button value='8' className='button' onClick={clickHandler}>8</button>
            <button value='9' className='button' onClick={clickHandler}>9</button>
            <button value='0' className='button' onClick={clickHandler}>0</button>
            <button value='-' className='button' onClick={clickHandler} >-</button>
            <button value='+' className='button' onClick={clickHandler}>+</button>
            <button value='%' className='button' onClick={clickHandler}>%</button>
            <button value='/' className='button' onClick={clickHandler}>/</button>
            <button value='*' className='button' onClick={clickHandler}>x</button>
            <button value='=' className='button1' onClick={calculate}>=</button>
            <button value='clear' className='button1' onClick={clearResult}>Clear</button>
          </div>

        </div>
      </div>
  )
}
export default App;