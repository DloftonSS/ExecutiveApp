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
import LoginHeader from "../components/Storefront/loginHeader";
// import auth from "../auth";

function LoggingIn(props) {
  let history = useHistory();

  // history.push("/adminDashBoard");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  // const { isAuthenticated, role } = useSelector((state) => state.auth);
  // const [isAuth, setisAuth] = useState(true);

  const login = () => {
    Axios.post("https://executive-app.herokuapp.com/login", {
      // Axios.post("http://localhost:3001/login", {
      email: email,
      password: password,
    }).then((response) => {
      // console.log(response);
      // const manager = response.data[0].first_name;
      // const admin = response.data[0].first_name;

      // setLoginStatus("Correct passwor");
      if (response.data.message) {
        // setIsAuth(true);
        // console.log(response.data.message);
        setLoginStatus("Incorrect UserName/Password Combination");
      } else if (response.data[0].role == "admin") {
        history.push("/adminDashBoard");
        // console.log(response.data[0].role == "admin");

        // console.log("Admin " + admin + " logged in");
        // setIsAuth(true);
      } else if (response.data[0].role == "manager") {
        history.push("/storeFront");
        // console.log("manager " + manager + " logged in");
      } else {
        setLoginStatus("you are not authorized to login here");
      }
    });
  };

  //rendered to page
  return (
    <div className="App">
      {" "}
      {/* <Container textAlign="center"> */}
      {/* {" "}
        <a href="/adminDashBoard">
          {" "}
          <img src={logo} style={{ height: "150px" }}></img>
        </a> */}
      <LoginHeader />
      {/* </Container> */}
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
        <button onClick={login}>Authenticate</button>
        {/* <button
          onClick={() => {
            setIsAuth(true);
          }}
        >
          test Login
        </button>
        <button
          onClick={() => {
            setIsAuth(false);
          }}
        >
          test logout
        </button>
        <link to="/profile">Go to profile page</link> */}
      </div>
      <h3>{loginStatus}</h3>
    </div>
  );
}

export default LoggingIn;
