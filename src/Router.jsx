import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Stats from "./components/Stats.jsx";
import Main from "./components/Main.jsx";
import Login from "./components/Login.jsx";

export default function BasicExample() {
  return (
    <Router>
           
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/stats">
            <Stats />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>

    </Router>
  );
}

// You can think of these components as "pages"
// in your app.
