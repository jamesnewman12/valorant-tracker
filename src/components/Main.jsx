import React from "react";
import valorantlogo from "../img/valorantlogo.png";
import "../styles/background.css";
import Button from "@material-ui/core/Button";
import Stats from "./Stats.jsx";

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "ValorantApp",
      showMainComponent: false,
      showAboutComponent: false,
    };
    this.hideComponent = this.hideComponent.bind(this);
  }

  hideComponent(name) {
    console.log(name);
    switch (name) {
      case "showMainComponent":
        this.setState({ showMainComponent: !this.state.showMainComponent });
        break;
      case "showAboutComponent":
        this.setState({ showAboutComponent: !this.state.showAboutComponent });
        break;
      default:
    }
  }

  render() {
    const { showHideMain, showAboutComponent } = this.state;
    return (
      <div>
        <div>
          {showHideMain && <Main />}
          {showAboutComponent && <Stats />}
        </div>
        <div className="background">
          <div id="stars" />
          <div id="stars2" />
          <div id="stars3" />
          <div id="stars4" />
          <div id="stars5" />
          <div id="stars6" />
          <div id="stars7" />
          <div className="top-container">
            <Button
              className="button"
              onClick={() =>
                this.hideComponent("showAboutComponent", "showMainComponent")
              }
            >
              <img src={valorantlogo} alt="logo1" />
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
