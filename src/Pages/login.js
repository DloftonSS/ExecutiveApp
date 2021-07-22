// import React from "react";
// import "./App.css";
// import loggingIn from "./components/login";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

function LoggingIn() {
  let history = useHistory();
  // history.push("/adminDashBoard");

  //*** not registering here ***/
  // const [emailReg, setEmailReg] = useState("");
  // const [passwordReg, setPasswordReg] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  const login = () => {
    Axios.get("https://executive-app.herokuapp.com/login", {
      // Axios.post("http://localhost:3001/login", {
      email: email,
      password: password,
    }).then((response) => {
      if (response.data[0].role == "admin") {
        // setLoginStatus("Welcome" + " " + response.data[0].first_name);
        history.push("/adminDashBoard");
      } else if (response.data[0].role == "fake" || "undefined") {
        setLoginStatus("Unauthorized user");
      } else {
        setLoginStatus(response.data.message);
        console.log(response.data);
      }
    });
  };

  //authenticate user
  // const [role, setRole] = useState("");
  // const history = useHistory();
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   if (loggedIn && role == "admin") {
  //     history.push("/adminDashBoard");
  //     console.log(role);
  //   }
  //   if (role == "user") {
  //     history.push("/");
  //   } else {
  //     console.log("incorrect credentials");
  //   }
  // });

  //rendered to page
  return (
    <div className="App">
      {" "}
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
