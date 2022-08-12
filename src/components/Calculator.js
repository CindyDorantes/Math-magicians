/* eslint-disable react/prefer-stateless-function */
import React, { useState } from 'react';
import calculate from '../logic/calculate';
import './Calculator.css';

const Calculator = () => {
  const [digits, setDigits] = useState();

  const handleClick = (e) => {
    const newDigits = (calculate(digits, e.target.textContent));
    setDigits((previuosDigits) => ({
      ...previuosDigits,
      ...newDigits,
    }));
  };

  const [next, total] = digits;
  return (
    <div className="calc-container">
      <div className="output bg-grey">{next || total || 0}</div>
      <button type="button" className="bg-onix" onClick={handleClick}>AC</button>
      <button type="button" className="bg-onix" onClick={handleClick}>+/-</button>
      <button type="button" className="bg-onix" onClick={handleClick}>%</button>
      <button type="button" className="bg-orange" onClick={handleClick}>÷</button>
      <button type="button" className="bg-onix" onClick={handleClick}>7</button>
      <button type="button" className="bg-onix" onClick={handleClick}>8</button>
      <button type="button" className="bg-onix" onClick={handleClick}>9</button>
      <button type="button" className="bg-orange" onClick={handleClick}>x</button>
      <button type="button" className="bg-onix" onClick={handleClick}>4</button>
      <button type="button" className="bg-onix" onClick={handleClick}>5</button>
      <button type="button" className="bg-onix" onClick={handleClick}>6</button>
      <button type="button" className="bg-orange" onClick={handleClick}>-</button>
      <button type="button" className="bg-onix" onClick={handleClick}>1</button>
      <button type="button" className="bg-onix" onClick={handleClick}>2</button>
      <button type="button" className="bg-onix" onClick={handleClick}>3</button>
      <button type="button" className="bg-orange" onClick={handleClick}>+</button>
      <button type="button" className="span-two" onClick={handleClick}>0</button>
      <button type="button" className="bg-onix" onClick={handleClick}>.</button>
      <button type="button" className="bg-orange" onClick={handleClick}>=</button>
    </div>
  );
};

export default Calculator;
