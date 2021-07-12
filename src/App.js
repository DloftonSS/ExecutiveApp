import "./App.css";
// import loggingIn from "./components/login";
// import Axios from "axios";
// import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminDashBoard from "./Pages/adminDashBoard";
import Login from "./Pages/login";

function App() {
  // const [usernameReg, setUsernameReg] = useState("");
  // const [passwordReg, setPasswordReg] = useState("");

  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  // const register = () => {
  //   Axios.post("http://localhost:3001/register", {
  //     username: usernameReg,
  //     password: passwordReg,
  //   }).then((response) => {
  //     console.log(response);
  //   });
  // };

  // const login = () => {
  //   Axios.post("http://localhost:3001/login", {
  //     username: setUsername,
  //     password: setPassword,
  //   }).then((response) => {
  //     console.log(response);
  //   });
  // };

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/adminDashBoard" exact component={AdminDashBoard} />
      </Switch>
    </Router>
    //   <div className="App">
    //   <div className="form">
    //     <h3>Register</h3>
    //     <label>UserName</label>
    //     <input
    //       type="text"
    //       onChange={(e) => {
    //         setUsernameReg(e.target.value);
    //       }}
    //     ></input>
    //     <label>Password</label>
    //     <input
    //       type="text"
    //       onChange={(e) => {
    //         setPasswordReg(e.target.value);
    //       }}
    //     ></input>
    //     <button onClick={register}>Create Account</button>

    //     <h3>login</h3>
    //     <input
    //       type="text"
    //       placeholder="User Name"
    //       onChange={(e) => {
    //         setUsername(e.target.value);
    //       }}
    //     ></input>
    //     <input
    //       type="text"
    //       placeholder="Password"
    //       onChange={(e) => {
    //         setPassword(e.target.value);
    //       }}
    //     ></input>
    //     <button onClick={login}>Sign In</button>
    //   </div>
    // </div>
  );
}

export default App;
