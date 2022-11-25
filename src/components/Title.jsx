function Title(props) {
  console.log('Title.jsx created');

  function titleHideHandler() {
    console.log('titleHideHandler');
  }

  return (
    <div>
      <h2>{props.children}</h2>
      <button onClick={titleHideHandler}>hide title</button>
    </div>
  );
}

export default Title;
