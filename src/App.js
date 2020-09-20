import React from 'react';
import logo from './impossible-cube.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="spirit">BOTP</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p className="body">
          <em>will</em> be arriving soon...
        </p>
        <a
          className="App-link"
          href="https://instagram.com/anatomicalgift"
          target="_blank"
          rel="noopener noreferrer"
        >
          data consumption
        </a>
        {console.log("00110001 00110010 00101110 00110001 00111000 00101110 00110010 00110000")}
      </header>
    </div>
  );
}

export default App;
