import React from "react";
import PropTypes from "prop-types";
import valorantlogo from "../img/valorantlogo.png";
import "../styles/background.css";
import Button from "@material-ui/core/Button";
import About from "./About.jsx";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
    };
    this._onButtonClick = this._onButtonClick.bind(this);
  }
  
  _onButtonClick() {
    this.setState({
      showComponent: true,
    });
  }


  render() {
    return (
       <div id="my-background" className="background">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
        <div id="stars4" />
        <div id="stars5" />
        <div id="stars6" />
        <div className="top-container">




<div id="picture2" className="picture2">
      
      <Button><img src={valorantlogo} alt="logo1" 
      style={{ backgroundColor: "transparent" }}
      onClick={this._onButtonClick}>
        </img>
      {this.state.showComponent ?
         <About /> :
         null
      }
      </Button>
      <div id="backgroundText" className="backgroundText">
      Real Time Stat Tracker
    </div>

</div>
</div>
</div>
    )}
}