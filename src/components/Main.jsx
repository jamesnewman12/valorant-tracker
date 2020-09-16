import React, { Component } from "react";
import HoverImage from "react-hover-image";
import Valorantlogo from "./../img/Valorantlogo.png";
import Valorantlogored from "./../img/Valorantlogored.png";
import BackgroundImage from "../components/BackgroundImage.jsx"
import { Row } from "react-bootstrap";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";

class Main extends Component { 
  render() {
    return (
      <div className="background">
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />
      <div id="stars4" />
      <div id="stars5" />
      <div id="stars6" />
      <div id="stars7" />
      <Row className="justify-content-md-center">
        <HoverImage
        {...this.props.HoverImage}
          src={Valorantlogo}
          hoverSrc={Valorantlogored}
          onClick={() => (window.location.href = "/login")}
        />
      </Row>
    </div>
    )
  };
}

Main.Props = {
  src:{Valorantlogo},
  hoverSrc:{Valorantlogored}
}

ReactDOM.render(
<HoverImage />,document.getElementById("root"));

// Main.propTypes = {
//   children: PropTypes.element.isRequired,
// };

export default Main;
