import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Navbar from "./components/Navbar.jsx";
import 'bootstrap/dist/css/bootstrap.css';
import "./styles/index.scss";
import topNav from "./components/TopNav.jsx"

ReactDOM.render(
	<React.Fragment>
		<Navbar />
		<topNav />
	</React.Fragment>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
