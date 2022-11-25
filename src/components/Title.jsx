import { useState } from 'react';

function Title(props) {
  console.log('Title.jsx created');

  let toShow = true;
  // toShowState vietinis kintamasis kuri galim atvaizduot ir jo reiksme pakeiciam su setToShowState(nauja reiksme)
  // !!!! niekada neprilyginti toShowState kazkam su '='
  const [toShowState, setToShowState] = useState(true);
  // panaudojau setToShowState fn kad pakeisti toShowState reiksme i false
  // setToShowState(false);

  function titleHideHandler() {
    console.log('titleHideHandler');
    setToShowState(false);
  }

  return (
    <div>
      <h3>toShowState reiksme: {toShowState.toString()}</h3>
      {toShowState && <h2>{props.children}</h2>}
      <button onClick={titleHideHandler}>hide title</button>
    </div>
  );
}

export default Title;
