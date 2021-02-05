import React, { useState, useEffect, useRef } from "react";
import './Calculator.css';

function Calculator() {
  const [result, setResult] = useState("");
  const inputRef = useRef(null);

  useEffect(() => inputRef.current.focus());

  function handleClick(e) {
    if (result === "Error") {
      setResult(e.target.name)
    } else {
      setResult(result.concat(e.target.name));
    }
  }

  function clear() {
    setResult("");
  }


  function calculate() {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  }

  return (
    <div className="calculator">
      <from>
        <input type="text" value={result} ref={inputRef} />
      </from>
      <div className="numpad">

        <button id="symbol" name="+" onClick={handleClick}>+</button>
        <button id="symbol" name="-" onClick={handleClick}>-</button>
        <button id="symbol" name="*" onClick={handleClick}>&times;</button>
        <button id="symbol" name="/" onClick={handleClick}>/</button>

        <button name="1" onClick={handleClick}>1</button>
        <button name="2" onClick={handleClick}>2</button>
        <button name="3" onClick={handleClick}>3</button>

        <button name="4" onClick={handleClick}>4</button>
        <button name="5" onClick={handleClick}>5</button>
        <button name="6" onClick={handleClick}>6</button>

        <button name="7" onClick={handleClick}>7</button>
        <button name="8" onClick={handleClick}>8</button>
        <button name="9" onClick={handleClick}>9</button>


        <button name="0" onClick={handleClick}>0</button>


        <button id="clear" onClick={clear}>C</button>
        <button id="result" onClick={calculate}>=</button>
      </div>
    </div>
  );
}

export default Calculator;