import React from "react";
import PropTypes from "prop-types";
import valorantlogo from "../img/valorantlogo.png";
import "../styles/background.css";
import Button from "@material-ui/core/Button";
import About from "./About.jsx";
import ReactDOM from "react-dom";

export default class Main extends React.Component {
  handleClick(event) {
    console.log("clicked");
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
          <div id="logo1" className="logo1">
            <Button
              onClick={this.handleClick}
              style={{ backgroundColor: "transparent" }}
            >
              <div id="picture2" className="picture2">
                <img src={valorantlogo} alt="logo1" />
              </div>
              <div id="backgroundText" className="backgroundText">
                Real Time Stat Tracker
              </div>
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
