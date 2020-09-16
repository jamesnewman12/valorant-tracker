import React from "react";
import HoverImage from "react-hover-image";
import Valorantlogo from "./../img/Valorantlogo.png";
import Valorantlogored from "./../img/Valorantlogored.png";
import { Row, Col } from "react-bootstrap";


const Main: React.SFC = () => {
  return (
    <div className="background">
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />
      <div id="stars4" />
      <div id="stars5" />
      <div id="stars6" />
      <div id="stars7" />
      <Row className="justify-content-md-center">
        <Col xs={12} sm={4} md={4}>
          <HoverImage
            src={Valorantlogo}
            hoverSrc={Valorantlogored}
            onClick={() => (window.location.href = "/login")}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Main;
