import React from 'react';
import logo from './images/busbudLogo.png';

const AppHeader = () => {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Get to Osheaga!</h1>
      </header>
      <p className="App-subheader">
      Find tickets from New York to Montréal on August 3rd, 2018:
      </p>
    </div>
  );
};

export default AppHeader;
