import React, { Image, Component, styles } from "react";
import Valorantlogo from "./../img/Valorantlogo.png";
import Valorantlogored from "./../img/Valorantlogored.png";
import Starbackground from "./Starbackground.jsx";
import { Row } from "react-bootstrap";

export default class ImageHover extends Component {
  render() {
    return (
  <div>
  <div className="ImageHover">
      <div className="justify-content-md-center">
         <img src={Valorantlogo} alt="ImageHover"
          hoversrc={Valorantlogored}
          onClick={() => (window.location.href = "/login")}/>
          </div>
    </div>
     </div>
    )
  };
}