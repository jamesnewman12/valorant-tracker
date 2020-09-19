import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Profile from "./components/Profile.jsx";
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
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.