import React, { useState } from "react";
import "./LoginBox.css";
import { Button, Input } from "@geist-ui/react";
import { auth } from "../../fire";
import { Redirect } from "react-router-dom";

function LoginBox(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  function handleLogin() {
    console.log("logging in with:");
    console.log(email);
    console.log(password);
    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        setLoggedIn(true);
      })
      .catch((error) => {
        console.log(error);
        alert("Invalid login, please try again.");
      });
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  return (
    <div className="loginBox">
      <Input
        type="text"
        placeholder="Email"
        value={email}
        className="formItem"
        onChange={(e) => handleEmailChange(e)}
        width="90%"
      />
      <Input.Password
        type="text"
        placeholder="Password"
        value={password}
        className="formItem"
        onChange={(e) => handlePasswordChange(e)}
        width="90%"
      />
      <Button type="success" className="formItem" onClick={handleLogin}>
        Login
      </Button>
      {loggedIn ? <Redirect to="/" /> : null}
    </div>
  );
}

export default LoginBox;
//lets component be used in other files
