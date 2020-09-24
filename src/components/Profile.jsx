import React from "react";
import PropTypes from "prop-types";
import "../styles/background.css";
import { Button } from "react-bootstrap";
import { BrowserRouter as Link } from "react-router-dom";
import Navigation from "./Navigation.jsx";
import agentImage from "../assets/img/agentImage.png";


export default class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }
  render() {
    return (
      <div>
        <div>
      <div className = "background">
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />
      <div id="stars4" />
      <div id="stars5" />
      <div id="stars6" />
      <div id="stars7" />
      <Navigation/>
                <div
          id="about-container"
          className="content-containers container text-center mt-5"
        >
      <h2 id="about" className={this.props.bounceLeft}>
            Welcome "USER"
          </h2>
          <br/>
          <br/>
      <img src={agentImage} alt="" />
            <div className={"col-6 col-sm-6 col-md-3 " + this.props.fadeInLeft}>
              </div>
              <br/>
              <div class="rankBtn">
              <h2 id="about">RANK</h2>
              </div>
              </div>
            <br/>
            <div class="colBtn">
            <Button
            variant="outline-primary"
            className="loginFont"
            onClick={(event) => (window.location.href = "/")}
            outline-primary
            size="lg"
        >
          <Link to="/login" className="backButton">
            Back to home
          </Link>
        </Button>
       </div>
        </div>
        </div>
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
