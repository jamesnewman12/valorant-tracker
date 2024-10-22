import React, { useState } from "react";
import { BrowserRouter as Link } from "react-router-dom";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import Tooltip from "@material-ui/core/Tooltip";

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
      <div class="row">
        <div class="col-lg-4 col-lg-offset-4">
          <div class="loginText">Email</div>
          <form onSubmit={handleSubmit}>
            <FormGroup className="loginEmail" authButton="email" bsSize="large">
              <FormControl
                column="lg"
                lg={2}
                autoFocus
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>
            <div class="loginText">Password</div>
            <FormGroup controlId="password" bsSize="large">
              <FormControl
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
              />
            </FormGroup>
            <br />
            <Tooltip
              title="By clicking this button you are agreeing to grant permissions and authorization access to your riot account."
              placement="right-start"
            >
              <Button
                className="authButton"
                block
                bsSize="large"
                disabled={!validateForm()}
                type="submit"
                outline-primary
                size="lg"
                onClick={() => (window.location.href = "/profile")}
              >
                Authorize Your Account
              </Button>
            </Tooltip>
          </form>
          <br />
          <br />
          <br />
          <Button
            block
            className="loginFont"
            onClick={(event) => (window.location.href = "/")}
            outline-primary
            size="lg"
          >
            <Link to="/login" className="backButton">
              Back to home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
