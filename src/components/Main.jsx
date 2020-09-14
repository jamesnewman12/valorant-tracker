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
  constructor() {
      super();
      this.state = {
        name: "React",
        showHideDemo1: false,
        showHideDemo2: false
      };
      this.hideComponent = this.hideComponent.bind(this);
  }
  
  hideComponent(name) {
    console.log(name);
    switch (name) {
      case "showHideDemo1":
        this.setState({ showHideDemo1: !this.state.showHideDemo1 });
        break;
      case "showHideDemo2":
        this.setState({ showHideDemo2: !this.state.showHideDemo2 });
        break;
      default:
        
    }
  }

  render() {
    const { showHideMain, showHideDemo2 } = this.state;
    return (
      <div>
      <div>
        {showHideMain && <Main />}
        {showHideDemo2 && <About />}
        <Button onClick={() => this.hideComponent("showHideMain")}>
        </Button>
        </div>

        
       <div id="my-background" className="background">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
        <div id="stars4" />
        <div id="stars5" />
        <div id="stars6" />
        <div id="stars7" />
        <div className="top-container">
      <button onClick={() => this.hideComponent("showHideDemo2")}>
        <img src={valorantlogo} alt="logo1" />
  </button>

      </div>
      </div>
      </div>
    )}
}