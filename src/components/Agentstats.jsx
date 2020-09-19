import React from "react";
import PropTypes from "prop-types";
import "../styles/background.css";
import { Button } from "react-bootstrap";
import { BrowserRouter as Link } from "react-router-dom";
import Navigation from "./Navigation.jsx";

export default class Agentstats extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "React",
    };
  }
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
        <Navigation />
        <div class="col align-items-center">
          <div class="col"></div>
        </div>
        <div class="col">
          <h2 id="agentIntro">Agent Stats</h2>
        </div>
        <div class="col"></div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div class="col align-items-center">
          <div class="col"></div>
        </div>
        <div class="colBtn">
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
    );
  }
}
