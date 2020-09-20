import React, { Component } from "react";
import Valorantlogo from "./../img/valorantlogo.png";
import Valorantlogored from "./../img/Valorantlogored.png";
import stats from "./../img/stats.png";
import statsstyle from "./../styles/stats.css"

export default class ImageHover extends Component {
  state = {
    img: Valorantlogo,
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <div class="ImageHover">
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
            
          <div class="statsImg">
          <img
        src={stats}
        alt="stats"/>
      </div>
        </div>
        </div>
        </div>
    );
  }
}