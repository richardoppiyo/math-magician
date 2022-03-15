import React from 'react';
import './Calculator.css';

export default function Calculator() {
  return (
    <div className="outerbox">
      <div className="grid-container">
        <button type="button" className="item1">0</button>
        <button type="button" className="item2">AC</button>
        <button type="button" className="item3">+/-</button>
        <button type="button" className="item4">%</button>
        <button type="button" className="item5">÷</button>
        <button type="button" className="item6">7</button>
        <button type="button" className="item7">8</button>
        <button type="button" className="item8">9</button>
        <button type="button" className="item9">x</button>
        <button type="button" className="item10">4</button>
        <button type="button" className="item11">5</button>
        <button type="button" className="item12">6</button>
        <button type="button" className="item13">-</button>
        <button type="button" className="item14">1</button>
        <button type="button" className="item15">2</button>
        <button type="button" className="item16">3</button>
        <button type="button" className="item17">+</button>
        <button type="button" className="item18">0</button>
        <button type="button" className="item19">.</button>
        <button type="button" className="item20">=</button>
      </div>
    </div>
  );
}
