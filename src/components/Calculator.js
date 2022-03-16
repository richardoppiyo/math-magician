/* eslint-disable max-len */
import React, { useState } from 'react';
import './Calculator.css';
import calculate from './logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({ total: '0' });

  const obj = state;

  const handelClick = (state, button) => {
    setState(calculate(state, button));
  };

  return (
    <div className="outerbox">
      <div className="grid-container">
        <button type="button" className="item1">{ state.next || state.operation || state.total || 0}</button>
        <button type="button" className="item2" value="2" onClick={() => handelClick(obj, 'AC')}>AC</button>
        <button type="button" className="item3" value="3" onClick={() => handelClick(obj, '+/-')}>+/-</button>
        <button type="button" className="item4" value="4" onClick={() => handelClick(obj, '%')}>%</button>
        <button type="button" className="item5" value="5" onClick={() => handelClick(obj, '÷')}>÷</button>
        <button type="button" className="item6" value="6" onClick={() => handelClick(obj, '7')}>7</button>
        <button type="button" className="item7" value="7" onClick={() => handelClick(obj, '8')}>8</button>
        <button type="button" className="item8" value="8" onClick={() => handelClick(obj, '9')}>9</button>
        <button type="button" className="item9" value="9" onClick={() => handelClick(obj, 'x')}>x</button>
        <button type="button" className="item10" value="10" onClick={() => handelClick(obj, '4')}>4</button>
        <button type="button" className="item11" value="11" onClick={() => handelClick(obj, '5')}>5</button>
        <button type="button" className="item12" value="12" onClick={() => handelClick(obj, '6')}>6</button>
        <button type="button" className="item13" value="13" onClick={() => handelClick(obj, '-')}>-</button>
        <button type="button" className="item14" value="14" onClick={() => handelClick(obj, '1')}>1</button>
        <button type="button" className="item15" value="15" onClick={() => handelClick(obj, '2')}>2</button>
        <button type="button" className="item16" value="16" onClick={() => handelClick(obj, '3')}>3</button>
        <button type="button" className="item17" value="17" onClick={() => handelClick(obj, '+')}>+</button>
        <button type="button" className="item18" value="18" onClick={() => handelClick(obj, '0')}>0</button>
        <button type="button" className="item19" value="19" onClick={() => handelClick(obj, '.')}>.</button>
        <button type="button" className="item20" value="20" onClick={() => handelClick(obj, '=')}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
