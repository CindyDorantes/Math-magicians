/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import calculate from '../logic/calculate';
import './Calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState((state) => calculate(state, e.target.textContent));
  }

  render() {
    const { next, total } = this.state;
    return (
      <div className="calc-container">
        <div className="output bg-grey">{next || total || 0}</div>
        <button type="button" className="bg-onix" onClick={this.handleClick}>AC</button>
        <button type="button" className="bg-onix" onClick={this.handleClick}>+/-</button>
        <button type="button" className="bg-onix" onClick={this.handleClick}>%</button>
        <button type="button" className="bg-orange" onClick={this.handleClick}>÷</button>
        <button type="button" className="bg-onix" onClick={this.handleClick}>7</button>
        <button type="button" className="bg-onix" onClick={this.handleClick}>8</button>
        <button type="button" className="bg-onix" onClick={this.handleClick}>9</button>
        <button type="button" className="bg-orange" onClick={this.handleClick}>x</button>
        <button type="button" className="bg-onix" onClick={this.handleClick}>4</button>
        <button type="button" className="bg-onix" onClick={this.handleClick}>5</button>
        <button type="button" className="bg-onix" onClick={this.handleClick}>6</button>
        <button type="button" className="bg-orange" onClick={this.handleClick}>-</button>
        <button type="button" className="bg-onix" onClick={this.handleClick}>1</button>
        <button type="button" className="bg-onix" onClick={this.handleClick}>2</button>
        <button type="button" className="bg-onix" onClick={this.handleClick}>3</button>
        <button type="button" className="bg-orange" onClick={this.handleClick}>+</button>
        <button type="button" className="span-two" onClick={this.handleClick}>0</button>
        <button type="button" className="bg-onix" onClick={this.handleClick}>.</button>
        <button type="button" className="bg-orange" onClick={this.handleClick}>=</button>
      </div>
    );
  }
}

export default Calculator;
