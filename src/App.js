import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Valorant from "./components/Valorant.jsx";
import background from "./components/background.jsx";
import Button from "./components/StartButton.jsx/index.js";


class LoggingButton extends React.Component {
    // This syntax ensures `this` is bound within handleClick.
    // Warning: this is *experimental* syntax.
    handleClick = () => {
      console.log('this is:', this);
    }
  
    render() {
      return (
        <Button onClick={this.handleClick}>
          Click me
        </Button>
      );
    }
  }

export default LoggingButton;