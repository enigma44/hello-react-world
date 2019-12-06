import React from 'react';
import logo from './logo.svg';
import moon from './img/moon-icon-vector.png';
import SVG from 'react-inlinesvg';
import './App.css';
//import FormContainer from "./containers/FormContainer.jsx";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={moon} className="App-logo" alt="moon" />
        <SVG src={logo} className="App-logo" alt="logo" />
        <p>
          Hello React Worlds. Click on one to proceed.
        </p>

      </header>
    </div>
  );
}

export default App;
