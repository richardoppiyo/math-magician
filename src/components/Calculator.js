/* eslint-disable max-len */
import React from 'react';
import './Calculator.css';
import calculate from './logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
    };
    this.handelClick = this.handelClick.bind(this);
  }

  handelClick = (state, button) => {
    const newState = calculate(state, button);
    this.setState(newState);
  }

  render() {
    const obj = this.state;
    const { total, next, operation } = this.state;
    return (
      <div className="outerbox">
        <div className="grid-container">
          <button type="button" className="item1">{ next || operation || total || 0}</button>
          <button type="button" className="item2" value="2" onClick={() => this.handelClick(obj, 'AC')}>AC</button>
          <button type="button" className="item3" value="3" onClick={() => this.handelClick(obj, '+/-')}>+/-</button>
          <button type="button" className="item4" value="4" onClick={() => this.handelClick(obj, '%')}>%</button>
          <button type="button" className="item5" value="5" onClick={() => this.handelClick(obj, '÷')}>÷</button>
          <button type="button" className="item6" value="6" onClick={() => this.handelClick(obj, '7')}>7</button>
          <button type="button" className="item7" value="7" onClick={() => this.handelClick(obj, '8')}>8</button>
          <button type="button" className="item8" value="8" onClick={() => this.handelClick(obj, '9')}>9</button>
          <button type="button" className="item9" value="9" onClick={() => this.handelClick(obj, 'x')}>x</button>
          <button type="button" className="item10" value="10" onClick={() => this.handelClick(obj, '4')}>4</button>
          <button type="button" className="item11" value="11" onClick={() => this.handelClick(obj, '5')}>5</button>
          <button type="button" className="item12" value="12" onClick={() => this.handelClick(obj, '6')}>6</button>
          <button type="button" className="item13" value="13" onClick={() => this.handelClick(obj, '-')}>-</button>
          <button type="button" className="item14" value="14" onClick={() => this.handelClick(obj, '1')}>1</button>
          <button type="button" className="item15" value="15" onClick={() => this.handelClick(obj, '2')}>2</button>
          <button type="button" className="item16" value="16" onClick={() => this.handelClick(obj, '3')}>3</button>
          <button type="button" className="item17" value="17" onClick={() => this.handelClick(obj, '+')}>+</button>
          <button type="button" className="item18" value="18" onClick={() => this.handelClick(obj, '0')}>0</button>
          <button type="button" className="item19" value="19" onClick={() => this.handelClick(obj, '.')}>.</button>
          <button type="button" className="item20" value="20" onClick={() => this.handelClick(obj, '=')}>=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
