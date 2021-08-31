import "./App.css";
// import loggingIn from "./components/login";
// import Axios from "axios";
// import React, { useState } from "react";
// import PrivateRoute from "./PrivateRoute";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import { useState } from "react";
import AdminDashBoard from "./Pages/adminDashBoard";
import Login from "./Pages/login";
import AddMember from "./Pages/AddMember";
import AllMembers from "./Pages/Allmembers";
import AddAdmin from "./Pages/AddAdmin";
import AllRequests from "./Pages/AllRequests";
import ExecutiveAccount from "./Pages/ExecutiveAccount";
import Catalog from "./Pages/Catalog";
import StoreFront from "./Pages/StoreFront";
import ProtectedRoute from "./Pages/ProtectedRoute";
import Profile from "./Pages/ProfilePage/Profilepage";
import LoggingIn from "./Pages/login";
import "./Pages/login.css";
import Axios from "axios";

import { useHistory } from "react-router-dom";

import LoginHeader from "./components/Storefront/loginHeader";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  // let isAuth = false;
  let history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  const login = (props) => {
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
        setLoginStatus(<p>Incorrect UserName/Password Combination.</p>);
      } else if (response.data[0].role == "admin") {
        setIsAuth(true);
        setLoginStatus(
          <button
            onClick={() => {
              setIsAuth(true);
            }}
            style={{
              backgroundColor: "black",
              borderRadius: "5px",
              borderColor: "red",
              height: "50px",
              width: "350px",
            }}
          >
            <Link
              style={{
                color: "white",
              }}
              to="/adminDashBoard"
            >
              Success!, go to dashboard.
            </Link>
          </button>
        );
        // history.push("/adminDashBoard");

        // console.log(response.data[0].role == "admin");

        // console.log("Admin " + admin + " logged in");
        // setIsAuth(true);
      } else if (response.data[0].role == "manager") {
        setIsAuth(true);
        // props.history.push("/storeFront");
        setLoginStatus(
          <button
            onClick={() => {
              setIsAuth(true);
            }}
            style={{
              backgroundColor: "black",
              borderRadius: "5px",
              borderColor: "red",
              height: "50px",
              width: "350px",
            }}
          >
            <Link
              style={{
                color: "white",
              }}
              to="/storeFront"
            >
              Success!, click to create user.
            </Link>
          </button>
        );
        console.log(isAuth);
        // console.log("manager " + manager + " logged in");
      } else {
        setLoginStatus(<p>You are not authorized to login here.</p>);
      }
    });
  };

  return (
    <Router>
      <Switch>
        <Route
          path="/"
          exact
          // component={Login}
        >
          {/* <div>
            <button
              onClick={() => {
                setIsAuth(true);
              }}
            >
              LogIn
            </button>
            <button
              onClick={() => {
                setIsAuth(false);
              }}
            >
              LogOut
            </button>
            <Link to="/storeFront">Store front</Link>
          </div> */}
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
                type="password"
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
              <Link to="/storeFront">Go to profile page</Link> */}
            </div>
            <h3>{loginStatus}</h3>
          </div>
        </Route>

        <Route path="/addMember" exact component={AddMember} />
        <Route path="/allMembers" exact component={AllMembers} />
        <Route path="/addAdmin" exact component={AddAdmin} />
        <Route path="/allRequests" exact component={AllRequests} />
        <Route path="/catalog" exact component={Catalog} />
        {/* <Route path="/storeFront" exact component={StoreFront} /> */}
        <Route
          path="/executiveAccount/:id"
          exact
          component={ExecutiveAccount}
        />

        {/* PROTECTED ROUTES */}
        <Route
          path="/adminDashBoard"
          exact
          component={AdminDashBoard}
          isAuth={isAuth}
        />
        <ProtectedRoute
          path="/storeFront"
          component={StoreFront}
          isAuth={isAuth}
        />
        <Route
          path="/profile"
          component={Profile}
          //  isAuth={isAuth}
        />
      </Switch>
    </Router>
  );
}

export default App;
