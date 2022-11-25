import './counter.css';
import { useState } from 'react';

function Counter() {
  // 1. state counterValue, useState
  const [counterValue, setCounterValue] = useState(0);

  // const counterValue = stateArr[0];
  // const setCounterValue = stateArr[1];
  // 2. increaseHandler, decreaseHandler fn kurios didins ir mazins skaitliuka
  function incrementHandler() {
    setCounterValue((prevCounterValue) => prevCounterValue + 1);
  }

  return (
    <div className='counter card'>
      <h3>Counter</h3>
      <h2 className='counter__value'>{counterValue}</h2>
      <div className='control'>
        <button onClick={incrementHandler}>+</button>
        <button>-</button>
      </div>
    </div>
  );
}
export default Counter;
