// import React from "react";
// import "./App.css";
// import loggingIn from "./components/login";
import Axios from "axios";
import React, { useState } from "react";
// import { useHistory } from "react-router-dom";

function AdminDashBoard() {
  //     let history = useHistory();
  // history.push("/adminDashBoard");

  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const register = () => {
    Axios.post("https://executive-app.herokuapp.com/register", {
      // Axios.post("localhost:3001/register", {
      username: usernameReg,
      password: passwordReg,
    })
      .then((response, error) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const login = () => {
    Axios.get("https://executive-app.herokuapp.com/login", {
      // Axios.get("localhost:3001/login", {
      username: setUsername,
      password: setPassword,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="App">
      {" "}
      <div className="form">
        <h3>Register</h3>
        <label>UserName</label>{" "}
        <input
          type="text"
          onChange={(e) => {
            setUsernameReg(e.target.value);
          }}
        ></input>
        <label>Password</label>
        <input
          type="text"
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
        ></input>
        <button onClick={register}>Create Account</button>
        <h3>login</h3>
        <input
          type="text"
          placeholder="User Name"
          onChange={(e) => {
            setUsername(e.target.value);
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
    </div>
  );
}

export default AdminDashBoard;
