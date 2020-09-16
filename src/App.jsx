import React, { Component } from "react";
import Main from "./components/Main.jsx";
import About from "./components/About.jsx";
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
    const { showHideDemo1, showHideDemo2 } = this.state;
    return (
      <div>

        <Main/>

        {/* <button onClick={() => this.hideComponent("showHideDemo1")}>
              Click to show landing page
            </button>
            <button onClick={() => this.hideComponent("showHideDemo2")}>
              Click to show stats page
            </button> */}
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));