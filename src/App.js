import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function hello() {
  alert ("hello!");
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello2 <code>src/App.js</code> and save to reload.
          </p>
          <button onClick={hello}>
            hello
          </button>
          <button onClick={hello}>
            hello
          </button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
