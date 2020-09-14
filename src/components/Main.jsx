import React from "react";
import HoverImage from "react-hover-image";
import Valorantlogo from "./../img/Valorantlogo.png"
import Valorantlogored from "./../img/Valorantlogored.png";
import Button from "@material-ui/core/Button";


 const Main: React.SFC = () => {
  return (
    <div>
    <div>
    <div className="background">  
    <div className="top-container">
      
      <Button>
      <HoverImage src={Valorantlogo} hoverSrc={Valorantlogored} onClick={(event) => (window.location.href = "/login")} />
      </Button>
      
          <div id="stars" />
          <div id="stars2" />
          <div id="stars3" />
          <div id="stars4" />
          <div id="stars5" />
          <div id="stars6" />
          <div id="stars7" />
          </div>
          </div>
          </div>
          </div>
          
  );
  }

export default Main