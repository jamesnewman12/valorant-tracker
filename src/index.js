import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import "./styles/index.scss";
import App from "./App.jsx"




ReactDOM.render(<App/>, document.getElementById('root'));
serviceWorker.unregister();

