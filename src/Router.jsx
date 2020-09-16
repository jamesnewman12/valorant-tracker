import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Stats from "./components/Stats.jsx";
import Main from "./components/Main.jsx";
import Login from "./components/Login.jsx";

export default function BasicExample() {
  return (
    <Router>
           {/* <ul>
           <Link to="/stats">Stats</Link>
           </ul> */}
          <Route exact path="/">
            <Main />
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