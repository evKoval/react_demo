import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Chart} from "./components/Chart/Chart";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{display:"flex"}}>
            <img src={logo} className="App-logo" alt="logo" />
            React app demo
        </div>
      </header>
        <Chart/>
    </div>
  );
}

export default App;
