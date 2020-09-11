import React from "react";
import PropTypes from "prop-types";
import valorantlogo from "../img/valorantlogo.png";
import WOW from "wowjs";
import Fade from "react-reveal/Fade";
import Button from "./Button";
import OverridesCss from "./Button";
import "../styles/background.css";
// import About from "./About.jsx";

export default class Background extends React.Component {
  componentDidMount() {
    new WOW.WOW().init();
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
          <Fade>
            <div id="logo1" className="logo1">
              <img src={valorantlogo} alt="logo1" />
              <div id="backgroundText" classname="backgroundText">
                Real Time Stat Tracker
              </div>
              <br />
            </div>
          </Fade>
          <Fade>
            <Button>
              <OverridesCss />
            </Button>
          </Fade>
          <br />
        </div>
      </div>
    );
  }
}

Background.propTypes = {
  aboutRef: PropTypes.object,
  bounceIn: PropTypes.string,
};
