import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import "./styles/index.scss";
import App from "./App.jsx"
import Main from "./components/Main.jsx";
import { render } from "react-dom";



render(
  <div>
  <App />, <Main/>
  </div>, document.getElementById('root'));
serviceWorker.unregister();