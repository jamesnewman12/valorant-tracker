import React from 'react';
import PropTypes from "prop-types";
import valorantlogo from "../img/valorantlogo.png";
import "../styles/background.css";
import Button from "@material-ui/core/Button";
import About from "./About.jsx";
import ReactDOM from 'react-dom';



export default class Main extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {isLoggedIn: false};
  //   this.handleClick = this.handleClick.bind(this);

  // }
   
  // handleClick() {
  //   this.setState({isLoggedIn: true});
  // }

  // handleLogoutClick() {
  //   this.setState({isLoggedIn: false});
  // }


  handleClick(event) {
    console.log("clicked");
  }

  render() {
    // const isLoggedIn = this.state.isLoggedIn;
    // let Button;

    // if (isLoggedIn) {
    //   Button = <Button onClick={this.handleLogoutClick} />;
    // } else {
    //   Button = <Button onClick={this.handleClick} />;
    


    return (
      <div id="my-background" className="background">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
        <div id="stars4" />
        <div id="stars5" />
        <div id="stars6" />
        <div className="top-container">
          <div id="logo1" className="logo1">
            <Button
              onClick={this.handleClick}
              style={{ backgroundColor: "transparent" }}
              // {...(this.state.isAboutVisible ? <About /> : null)}
            >
              <div id="picture2" className="picture2">
                <img src={valorantlogo} alt="logo1" />
              </div>
              <div id="backgroundText" className="backgroundText">
                Real Time Stat Tracker
              </div>
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

 
