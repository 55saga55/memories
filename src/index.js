import React from "react";
import ReactDOM from "react-dom";
import App from "./App"
import { Provider } from 'react-redux'
import { createStore, applyMiddleware,compose  } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { reducers } from './reducer'


const store = createStore(reducers,compose(applyMiddleware(thunkMiddleware)))
ReactDOM.render(
<Provider store= {store}>

<App/>
</Provider>

,document.getElementById("root"));
