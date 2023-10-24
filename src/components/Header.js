import React from 'react';

function Header(props) {
  return (
    <header>
      <h1>My App</h1>
      <button onClick={props.onDarkModeClick}>Toggle Dark Mode</button>
    </header>
  );
}

export default Header;
