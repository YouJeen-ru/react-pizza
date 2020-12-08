import React from 'react';
import ReactDOM from 'react-dom';
import './scss/app.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {HashRouter as Router, Route} from "react-router-dom";
import Header from "./components/Header";

ReactDOM.render(
    <Router>
       <App/>
    </Router>,
  document.getElementById('root')
);




reportWebVitals();
