import './counter.css';
import { useState } from 'react';

function Counter() {
  // 1. state counterValue, useState
  const [counterValue, setCounterValue] = useState(0);
  // susikurti counterClass state
  // const [counterClass, setCounterClass] = useState('');

  // kai turim reiksme kuri tiesiogiai priklauso nuo kitos reiksme, galim naudoti
  // infered/caclulated value
  let counterClassInfered = counterValue >= 5 ? 'high' : '';

  // const counterValue = stateArr[0];
  // const setCounterValue = stateArr[1];
  // 2. increaseHandler, decreaseHandler fn kurios didins ir mazins skaitliuka
  function incrementHandler() {
    setCounterValue((prevCounterValue) => {
      return prevCounterValue + 1;
    });
  }

  function decrementHandler() {
    setCounterValue((prevValue) => prevValue - 1);
  }

  // let reiksme = 10;
  // reiksme++; // === reiksme = reiksme + 1
  // reksme + 1; //  reksme + 1

  // kai reiksme virsija 5 uzdedam counter__value prideti klase high

  return (
    <div className='counter card'>
      <h3>Counter</h3>
      <h2 className={`counter__value ${counterClassInfered}`}>{counterValue}</h2>
      <div className='control'>
        <button onClick={incrementHandler}>+</button>
        <button onClick={() => setCounterValue(0)}>reset</button>
        <button onClick={decrementHandler}>-</button>
      </div>
    </div>
  );
}
export default Counter;
