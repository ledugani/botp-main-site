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
      </header>
    </div>
  );
}

export default App;
