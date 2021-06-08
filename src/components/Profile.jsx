import React, { Component } from "react";
import PropTypes from "prop-types";
import "../styles/background.css";
import { Button } from "react-bootstrap";
import { BrowserRouter as Link } from "react-router-dom";
import Navigation from "./Navigation.jsx";
import agentImage from "../assets/img/agentImage.png";

class Profile extends React.Component {
  render() {
    return (
      <div>
        <div>
          <div className="background">
            <div id="stars" />
            <div id="stars2" />
            <div id="stars3" />
            <div id="stars4" />
            <div id="stars5" />
            <div id="stars6" />
            <div id="stars7" />
            <Navigation />
            <div
              id="about-container"
              className="content-containers container text-center mt-5"
            >
              <div>
                <h2 className="sibling">Welcome, "USER"</h2>
              </div>
              <br />
              <br />
              <img src={agentImage} alt="" />
              <div
                className={"col-6 col-sm-6 col-md-3 " + this.props.fadeInLeft}
              ></div>
              <br />
              <div className="rankBtn">
                <h2 id="about">RANK</h2>
              </div>
            </div>
            <br />
            <div className="colBtn">
              <Button
                className="loginFont"
                onClick={(event) => (window.location.href = "/")}
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

export default Profile;
