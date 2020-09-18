import React, { Component } from "react";
import Valorantlogo from "./../img/Valorantlogo.png";
import Valorantlogored from "./../img/Valorantlogored.png";

export default class ImageHover extends Component {
  state = {
    img: Valorantlogo,
  };
  render() {
    return (
      <div className="ImageHover">
        <div className="justify-content-md-center">
          <img
            src={this.state.img}
            alt="logo"
            onMouseEnter={() => {
              this.setState({
                img: Valorantlogored,
              });
            }}
            onMouseOut={() => {
              this.setState({
                img: Valorantlogo,
              });
            }}
            onClick={() => (window.location.href = "/login")}
          />
        </div>
      </div>
    );
  }
}
