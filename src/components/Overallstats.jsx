import React from "react";
import PropTypes from "prop-types";
import "../styles/background.css";
import { Button } from "react-bootstrap";
import { BrowserRouter as Link } from "react-router-dom";
import Navigation from "./Navigation.jsx";

export default class Overallstats extends React.Component {
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
         
            <div className={"col-6 col-sm-6 col-md-3 " + this.props.fadeInLeft}>
              
              <h2 id="agentIntro">Overall</h2>
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
            variant="outline-primary"
          block
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
      
    );
  }
}
