import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <BrowserRouter> {/* Enabling all of the routing functionality that the "react-router-dom" liberary provides. */}
        <App />
    </BrowserRouter>,
    document.getElementById("root")
 );
