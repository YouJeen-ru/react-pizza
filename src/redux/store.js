import React from 'react'

import {createStore, combineReducers} from "redux";
import rootReducers from "./reducers";



let store = createStore(rootReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store