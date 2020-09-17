import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Stats from "./components/Stats.jsx";
import Main from "./components/Main.jsx";
import Login from "./components/Login.jsx";
import StarBackground from "./components/Starbackground.jsx";

export default function BasicExample() {
  return (
    <Router>
      
           {/* <ul>
           <Link to="/stats">Stats</Link>
           </ul> */}
          <Route exact path="/">
          <StarBackground/>  
          </Route>
          <Route path="/stats">
            <Stats />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.
