import React from "react";
import PropTypes from "prop-types";
import Slide from "react-reveal/Slide";
import valorantlogo from "../img/valorantlogo.png";
import WOW from "wowjs";
import SlideText from "./SlideText";
import "../styles/background.css";




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
        <div className="top-container">
          <img src={valorantlogo} alt="" />
          <br />
          <div class="backgroundText">Real Time Stat Tracker</div>
          {}
          <br />
          <Slide left>
              <SlideText />
          </Slide>
        </div>
      </div>
    );
  }
}



Background.propTypes = {
  aboutRef: PropTypes.object,
  bounceIn: PropTypes.string,
};
