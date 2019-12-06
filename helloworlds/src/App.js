import React from 'react';
import logo from './logo.svg';
import moon from './img/moon-icon-vector.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={moon} className="App-logo" alt="moon" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello React Worlds. Click on one to proceed.
        </p>

      </header>
    </div>
  );
}

export default App;
