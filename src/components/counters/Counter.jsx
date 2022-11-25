import './counter.css';

function Counter() {
  return (
    <div className='counter card'>
      <h3>Counter</h3>
      <h2 className='counter__value'>0</h2>
      <div className='control'>
        <button>+</button>
        <button>-</button>
      </div>
    </div>
  );
}
export default Counter;
