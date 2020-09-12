import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Valorant from "./components/Valorant.jsx";
import 'bootstrap/dist/css/bootstrap.css';
import "./styles/index.scss";


ReactDOM.render(
	<BrowserRouter>
		<Valorant />	
	</BrowserRouter>, document.getElementById('root'));
serviceWorker.unregister();