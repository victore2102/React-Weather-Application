import React from 'react';
import logo from './logo.svg';
import start from './start';
import './App.css';
import Start from './start';

const api = {
  key: "a2afcf79342a908e248e9b85ddc69e4f",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <div className="App">
      <header>
        <h3>Welcome To My Project</h3>
        <h2>React Weather Application</h2>
      </header>
      <Start />
      <footer>
        <h3>Created By:</h3>
        <h2>Victor Ekpenyong</h2>
      </footer>
    </div>
  );
}

export default App;
