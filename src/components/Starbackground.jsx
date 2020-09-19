import React, { Component } from "react";
import ImageHover from "./Imagehover.jsx";
class Starbackground extends Component {
render () {
    return (
      
      <div className="background">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
        <div id="stars4" />
        <div id="stars5" />
        <div id="stars6" />
        <div id="stars7" /> 
        <ImageHover/>
      </div>
    );
  }
}

export default Starbackground;