import React, {useEffect, useState} from "react";
import {Header} from "./components";
import {Home, Cart} from "./pages";
import {Route} from "react-router-dom";
import axios from 'axios'
import {useDispatch, useSelector} from "react-redux";
import {setPizzas} from "./redux/actions/pizzas";


function App() {

    const dispatch = useDispatch()

    useEffect(() => {
        // Перенести в Redux и подключить redux-thunk
        axios.get('http://localhost:3001/pizzas').then(({ data }) => {
            dispatch(setPizzas(data))
        })
    }, [])
    return (
        <>
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <Route path='/' component={Home}  exact/>
                    <Route path='/cart' component={Cart} exact/>
                </div>
            </div>
        </>
    );
}

export default App;
