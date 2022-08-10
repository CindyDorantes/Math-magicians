import './Calculator.css';

const Calculator = () => (
  <div className="calc-container">
    <div className="output bg-grey" />
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

export default Calculator;
