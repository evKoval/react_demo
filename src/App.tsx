import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Chart} from "./components/Chart/Chart";
import {FormDemo} from "./components/Form";
import {SelectExample} from "./components/Select";
import {Chart1} from "./charts/Chart1";

function App() {
    return (
        <>
            <div className="App">
                <header className="App-header">
                    <div style={{display: "flex"}}>
                        <img src={logo} className="App-logo" alt="logo"/>
                        React app demo
                    </div>
                </header>


            </div>
            <FormDemo/>


            <div style={{display: "flex"}}>
            <Chart1 width={300} height={300} />
            <Chart/>
            </div>
        </>
    );
}

export default App;
