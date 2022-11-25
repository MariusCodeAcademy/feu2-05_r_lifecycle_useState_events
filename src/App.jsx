import './App.css';
import Title from './components/Title';
import { useState } from 'react';

function App() {
  console.log('App.jsx created');

  const [h1Size, setH1Size] = useState('1rem');
  // const h1Size = '1rem'
  function sizeHandler() {
    console.log('size to 3rem');
    setH1Size('3rem');
  }

  function increaseTitleSizeHandler() {
    setH1Size((prevH1Size) => {
      // pasiimti dabartine reiksme
      console.log('prevH1Size ===', prevH1Size);
      // issitraukti skaitine dali
      let skDalisBeRem = parseFloat(prevH1Size);
      console.log('skDalisBeRem ===', skDalisBeRem);
      // ja padidinti
      skDalisBeRem++;
      // prideti atgal 'rem'
      const padidintaSuRem = skDalisBeRem + 'rem';
      // setitini state su reiksme
      return `${skDalisBeRem}rem`;
    });
  }

  // paspaudus an h1 el, padidini jo dydi iki 2rem
  return (
    <div className='App'>
      <h1 onClick={increaseTitleSizeHandler} style={{ fontSize: h1Size }}>
        Lifecycle
      </h1>

      <Title>Events and Hooks</Title>
    </div>
  );
}

export default App;
