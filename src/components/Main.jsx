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
    };
  }

  hideComponent(name) {
    switch (name) {
      case "showHideMain":
        this.setState({ showHideMain: !this.state.showHideMain  });
        break;
      case "showComponent":
        this.setState({ showComponent: !this.state.showComponent  });
        break;
        default:
         
    }
  }


  render() {
    const { showHideMain, showComponent } = this.state;
    return (
      <div>
      <div>
        {showHideMain && <Main />}
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
      <Button>
        <img src={valorantlogo} alt="logo1" 
      style={{ backgroundColor: "transparent" }}
      onClick={this._onButtonClick}>
        </img>
      {this.state.showComponent ?
         <About /> :
         null     
  }
  </Button>
      </div>
      </div>
      </div>
    )}
}