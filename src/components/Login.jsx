import React, { useState } from "react";
import "../styles/background.css";
import { BrowserRouter as Link } from "react-router-dom";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="background">
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />
      <div id="stars4" />
      <div id="stars5" />
      <div id="stars6" />
      <div id="stars7" />
      <div className="Login">
        <br />
        <br />
        <form onSubmit={handleSubmit}>
          <FormGroup className="loginEmail" controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              style={{ height: "30px", width: "300px" }}
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <br />
          <br />
          <FormGroup
            style={{ height: "30px", width: "300px" }}
            controlId="password"
            bsSize="large"
          >
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
          </FormGroup>
          <br />
          <br />
          <br />
          <Button
            className="loginButton"
            block
            bsSize="large"
            disabled={!validateForm()}
            style={{ height: "30px", width: "100px" }}
            type="submit"
          >
            Login
          </Button>
        </form>
        <br />
        <br />
        <br />
        <Button
          className="loginButton"
          onClick={(event) => (window.location.href = "/")}
        >
          <Link to="/login" className="button">
            Back to home
          </Link>
        </Button>
      </div>
    </div>
  );
}
