import React, { Component } from "react";
import Valorantlogo from "./../assets/img/valorantlogo.png";
import Valorantlogored from "./../assets/img/Valorantlogored.png";
import stats from "./../assets/img/stats.png";
import "./../styles/stats.css";

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
              onClick={() => (window.location.href = "/logincontrol")}
            />
            <div class="statsImg">
              <img src={stats} alt="stats" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
