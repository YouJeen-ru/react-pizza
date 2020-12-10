import React from 'react';
import ReactDOM from 'react-dom';
import './scss/app.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {HashRouter as Router, Route} from "react-router-dom";
import store from "./redux/store";
import {Provider} from "react-redux";




ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App/>
        </Provider>
    </Router>,
  document.getElementById('root')
);




reportWebVitals();
