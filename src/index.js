import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/index.scss";
import App from "./Router.jsx";
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router-dom'
import store from './store.js';
import {combineReducers, createStore} from 'redux';



const initialState = {};





ReactDOM.render(
  <Provider store={store}>
  <App />
</Provider>,
   document.getElementById('root'));
serviceWorker.unregister();