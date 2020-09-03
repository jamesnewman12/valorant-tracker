import React from "react";
import Background from "./background.jsx";
import WOW from "wowjs";


class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.about = React.createRef();
    this.projects = React.createRef();

    this.scrolling = this.scrolling.bind(this);
  }

  componentDidMount() {
    new WOW.WOW().init();
  }

  navEffect() {
    window.addEventListener("scroll", () => {
      var navBar = document.getElementById("navbar");
      var domRect = navBar.getBoundingClientRect();
      var myBackground = document.getElementById("my-background");
      var domBGRect = myBackground.getBoundingClientRect();

      if (domRect.y <= -domRect.height) {
        navBar.classList.add("fade-in-nav");
      }
      if (-domBGRect.height < domBGRect.top) {
        navBar.classList.remove("fade-in-nav");
      }
    });
  }

  scrolling(instance) {
    let node = document.getElementById(instance.current.props.id);
    window.scrollTo({
      top: node.offsetTop,
      behavior: "smooth",
    });
  }

  render() {
    return (
      <div>
        <Background />
        {/* <ProgressButton/> */}
        {/* <About/> */}
      </div>
    );
  }
}

export default Navbar;
