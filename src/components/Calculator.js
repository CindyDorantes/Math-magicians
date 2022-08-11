/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './Calculator.css';

class Calculator extends React.Component {
  render() {
    return (
      <div className="calc-container">
        <div className="output bg-grey">0.0</div>
        <button type="button" className="bg-onix">AC</button>
        <button type="button" className="bg-onix">+/-</button>
        <button type="button" className="bg-onix">%</button>
        <button type="button" className="bg-orange">÷</button>
        <button type="button" className="bg-onix">7</button>
        <button type="button" className="bg-onix">8</button>
        <button type="button" className="bg-onix">9</button>
        <button type="button" className="bg-orange">x</button>
        <button type="button" className="bg-onix">4</button>
        <button type="button" className="bg-onix">5</button>
        <button type="button" className="bg-onix">6</button>
        <button type="button" className="bg-orange">-</button>
        <button type="button" className="bg-onix">1</button>
        <button type="button" className="bg-onix">2</button>
        <button type="button" className="bg-onix">3</button>
        <button type="button" className="bg-orange">+</button>
        <button type="button" className="span-two">0</button>
        <button type="button" className="bg-onix">.</button>
        <button type="button" className="bg-orange">=</button>
      </div>
    );
  }
}

export default Calculator;
