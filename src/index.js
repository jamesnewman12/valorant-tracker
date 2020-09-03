import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Navbar from "./components/navbar.jsx";
import 'bootstrap/dist/css/bootstrap.css';
import "./styles/index.scss";
import ProgressButton, {STATE} from '../src/components/ProgressButton.jsx'
import createReactClass from 'create-react-class'

ReactDOM.render(
	<React.Fragment>
		<Navbar />
		
		
	</React.Fragment>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();




