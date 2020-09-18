import React from "react";
import layers from "../img/layers.png";
import cogwheel from "../img/cogwheel.png";
import pen from "../img/pen.png";
import browser from "../img/browser.png";
import PropTypes from "prop-types";
import "../styles/background.css";
import { Button } from "react-bootstrap";
import { BrowserRouter as Link } from "react-router-dom";

export default class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "React",
    };
  }
  render() {
    return (
      <div
        id="about-container"
        className="content-containers container text-center mt-5"
      >
        <h2 id="about" className={this.props.bounceLeft}>
          Coming Soon
        </h2>
        <div className="row mt-5">
          <div className={"col-6 col-sm-6 col-md-3 " + this.props.fadeInLeft}>
            <img src={layers} alt="" />
            <h2 id="about">adr</h2>
          </div>
          <div className={"col-6 col-sm-6 col-md-3 " + this.props.fadeInLeft}>
            <img src={pen} alt="" />
            <h2 id="about">damage</h2>
          </div>
          <div className={"col-6 col-sm-6 col-md-3 " + this.props.fadeInRight}>
            <img src={cogwheel} alt="" />
            <h2 id="about">hs percentage</h2>
          </div>
          <div className={"col-6 col-sm-6 col-md-3 " + this.props.fadeInRight}>
            <img src={browser} alt="" />
            <h2 id="about">best gun</h2>
          </div>
        </div>
        <div className="row" style={{ marginTop: 7 + "rem" }}>
          <div className="col-12 col-lg-6 hidden"></div>
        </div>

        <div
          className={"col-12 col-sm-12 col-md-12 col-lg-6 " + this.props.tada}
        >
          <div>
            <h2 id="about">Map Win Percentage </h2>
          </div>
          <div className="progress mb-3">
            <div
              className="progress-bar fill-80-bar"
              role="progressbar"
              style={{ width: 80 + "%" }}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              BIND
            </div>
          </div>
          <div className="progress mb-3">
            <div
              className="progress-bar fill-80-bar"
              role="progressbar"
              style={{ width: 20 + "%" }}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              HAVEN
            </div>
          </div>
          <div className="progress mb-3">
            <div
              className="progress-bar fill-90-bar"
              role="progressbar"
              style={{ width: 65 + "%" }}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              SPLIT
            </div>
          </div>
          <div className="progress mb-3">
            <div
              className="progress-bar fill-60-bar"
              role="progressbar"
              style={{ width: 70 + "%" }}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              ASCENT
            </div>
          </div>
        </div>
        <Button
          block
          variant="primary"
          onClick={(event) => (window.location.href = "/")}
          size="lg"
        >
          <Link to="/login" className="backButton">
            Back to home
          </Link>
        </Button>
      </div>
    );
  }
}

Profile.propTypes = {
  bounceLeft: PropTypes.string,
  fadeInLeft: PropTypes.string,
  fadeInRight: PropTypes.string,
  fadeIn: PropTypes.string,
  tada: PropTypes.string,
};
