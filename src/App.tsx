import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Chart} from "./components/Chart/Chart";
import {FormDemo} from "./components/Form";
import {Chart1} from "./charts/Chart1";
import {createTheme} from "@mui/material";
import {ThemeProvider} from '@mui/system';
import {MuiDemo} from "./components/MuiDemo";

const theme = createTheme();


function App() {


    return (
        <ThemeProvider theme={theme}>
            <>
                <div className="App">
                    <header className="App-header">
                        <div style={{display: "flex"}}>
                            <img src={logo} className="App-logo" alt="logo"/>
                            React app demo
                        </div>
                    </header>


                </div>
                <div style={{display: "flex"}}>
                    <FormDemo/>

                    <MuiDemo/>
                </div>

                <div style={{display: "flex"}}>
                    <Chart1 width={300} height={300}/>
                    <Chart/>
                </div>
            </>
        </ThemeProvider>
    );
}


export default App;
