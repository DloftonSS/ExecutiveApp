// import React from "react";
// import "./App.css";
// import loggingIn from "./components/login";
import "./login.css";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../Pages/images/ExecutiveAccess.png";
import { Container, Icon } from "semantic-ui-react";

function LoggingIn() {
  let history = useHistory();

  // history.push("/adminDashBoard");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  // const [isAuth, setIsAuth] = useState(false);

  const login = () => {
    // Axios.post("https://executive-app.herokuapp.com/login", {
    Axios.post("http://localhost:3001/login", {
      email: email,
      password: password,
    }).then((response) => {
      if (response.data[0].email && response.data[0].password) {
        // setIsAuth(true);
        history.push("/adminDashBoard");
        console.log("matching user and password");
      } else {
        setLoginStatus("Incorrect email or password");
      }
    });
  };

  //rendered to page
  return (
    <div className="App">
      {" "}
      <Container textAlign="center">
        {" "}
        <a href="/adminDashBoard">
          {" "}
          <img src={logo} style={{ height: "150px" }}></img>
        </a>
      </Container>
      <div className="form">
        <h3>login</h3>
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <input
          type="text"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <button onClick={login}>Sign In</button>
      </div>
      <h3>{loginStatus}</h3>
    </div>
  );
}

export default LoggingIn;
