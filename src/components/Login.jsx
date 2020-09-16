import React, { useState } from "react";
import { BrowserRouter as Link } from "react-router-dom";
import { Row, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

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
    <div className = "background">
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />
      <div id="stars4" />
      <div id="stars5" />
      <div id="stars6" />
      <div id="stars7" />
      <div className="Container">
        <form onSubmit={handleSubmit}>
          <FormGroup className="loginEmail" controlId="email" bsSize="large">
            
            <ControlLabel className = "loginFont">Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            
          </FormGroup>
          <FormGroup
           
            controlId="password"
            bsSize="large"
          >
            <ControlLabel className = "loginFont">Password</ControlLabel>
            <FormControl
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
          </FormGroup>

          <Button
            className="loginFont"
            block
            bsSize="large"
            disabled={!validateForm()}
            type="submit"
          >
            Login
          </Button>
        </form>
        <br />
        <br />
        <br />
        <Button
          className="loginFont"
          onClick={(event) => (window.location.href = "/")}
        >
          <Link to="/login" className="loginFont">
            Back to home
          </Link>
        </Button>
      </div>
    </div>
  );
}
