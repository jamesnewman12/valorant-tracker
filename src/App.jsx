import React, { Component } from "react";
import Main from "./components/Main.jsx";
import Background from "./components/Background.jsx"
import { render } from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Main {
  constructor() {
    super();
    this.state = {
      name: "ValorantApp",
      showHideDemo1: false,
      showHideDemo2: false,
    };
    this.hideComponent = this.hideComponent.bind(this);
  }

  hideComponent(name) {
    console.log(name);
    switch (name) {
      case "showHideDemo1":
        this.setState({ showHideDemo1: !this.state.showHideDemo1 });
        break;
      case "showHideDemo2":
        this.setState({ showHideDemo2: !this.state.showHideDemo2 });
        break;
      default:
    }
  }

  render() {
    return (
      <div>
        <Main/>
      </div>
    );
  }
}

render(<App />, document.getElementById("App"));