import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/index.scss";
import App from "./Router.jsx";

ReactDOM.render(
  <div>
   <App/>
  </div>, document.getElementById('root'));
serviceWorker.unregister();