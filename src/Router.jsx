import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Profile from "./components/Profile.jsx";
import Login from "./components/Login.jsx";
import StarBackground from "./components/Starbackground.jsx";
import Agentstats from "./components/Agentstats.jsx";
import Weaponstats from "./components/Weaponstats.jsx";
import Mapstats from "./components/Mapstats.jsx";


export default function BasicExample() {
  return (
    <Router>
          <Route exact path="/">
          <StarBackground/>
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/profile+agent">
            <Agentstats/>
          </Route>
          <Route path="/profile+weapon">
            <Weaponstats/>
          </Route>
          <Route path="/profile+map">
            <Mapstats/>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.