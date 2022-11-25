import './App.css';
import Title from './components/Title';
import MainTitle from './components/MainTitle';

function App() {
  console.log('App.jsx created');

  // paspaudus an h1 el, padidini jo dydi iki 2rem
  return (
    <div className='App'>
      <MainTitle />
      <Title>Events and Hooks</Title>
    </div>
  );
}

export default App;
