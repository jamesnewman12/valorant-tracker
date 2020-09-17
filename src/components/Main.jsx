import React, { Image, Component, styles } from "react";
import Valorantlogo from "./../img/Valorantlogo.png";
import Valorantlogored from "./../img/Valorantlogored.png";
import { Row } from "react-bootstrap";

class Main extends Component {
  render() {
    return (
<div>
  <div>
<div>
      <div className="justify-content-md-center">
          src={Valorantlogo}
          hoverSrc={Valorantlogored}
          onClick={() => (window.location.href = "/login")}
          </div>
          </div>
    </div>
    </div>
    )
  };
}

export default Main;
