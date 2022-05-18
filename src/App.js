import "./App.css";
// import loggingIn from "./components/login";
// import Axios from "axios";
// import React, { useState } from "react";
// import PrivateRoute from "./PrivateRoute";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import { useState } from "react";
import AdminDashBoard from "./Pages/adminDashBoard";
import AdminAccount from "./Pages/AdminDashBoard/AdminAccount";
import Login from "./Pages/login";
import AddMember from "./Pages/AddMember";
import AllMembers from "./Pages/Allmembers";
import AddAdmin from "./Pages/AddAdmin";
import AllRequests from "./Pages/AllRequests";
import ExecutiveAccount from "./Pages/ExecutiveAccount";
import Catalog from "./Pages/Catalog";
import MainPage from "./components/MainPage/MainPage";
import Benefits from "./components/MainPage/Benefits";
import StoreFront from "./Pages/StoreFront";
import ProtectedRoute from "./Pages/ProtectedRoute";
import Profile from "./Pages/ProfilePage/Profilepage";
import LoggingIn from "./Pages/login";
import "./Pages/login.css";
import Axios from "axios";
import { Button, Form, Header, Icon, Modal, Input } from "semantic-ui-react";
import React from "react";
import { useHistory } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container } from "react-bootstrap";

import LoginHeader from "./components/Storefront/loginHeader";

function App(props) {
  const [isAuth, setIsAuth] = useState(false);
  // let isAuth = false;
  let history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const [profileData, setProfileData] = useState("");
  const [adminData, setAdminData] = useState("");
  const id = props.id;
  const [open, setOpen] = React.useState(false);
  const [openTwo, setOpenTwo] = React.useState(false);
  // const [memberList, setMemberList] = useState("");

  const memberLogin = (props) => {
    Axios.post("https://executive-app.herokuapp.com/memberLogin", {
      // Axios.post("http://localhost:3001/memberLogin", {
      email: email,
      password: password,
    }).then((response) => {
      if (response.data[0]) {
        setIsAuth(true);

        const profileName = response.data[0].first_name;
        setProfileData(response.data[0]);
        const profileData = response.data[0];

        setLoginStatus(
          <button
            onClick={() => {
              setIsAuth(true);
            }}
            className="loginStatus"
          >
            <Link
              style={{
                color: "white",
              }}
              to={`/profile/${profileData.id}`}
            >
              Welcome {profileData.first_name}, Click to view Profile.
            </Link>
          </button>
        );
      } else if (response.data.message) {
        setLoginStatus(
          <p className="incorrect-combo">
            Incorrect UserName/Password Combination.
          </p>
        );
      }
    });
  };
  const login = (props) => {
    Axios.post("https://executive-app.herokuapp.com/login", {
      // Axios.post("http://localhost:3001/login", {
      email: email,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(
          <p className="incorrect-combo">
            Incorrect UserName/Password Combination.
          </p>
        );
      } else if (response.data[0].role == "admin") {
        setIsAuth(true);
        setAdminData(response.data[0]);
        const adminData = response.data[0];
        // console.log(adminData);
        setLoginStatus(
          <button
            onClick={() => {
              setIsAuth(true);
            }}
            className="loginStatus"
          >
            <Link
              style={{
                color: "white",
              }}
              // to={`/adminDashboard/${adminData.id}`}
              // to="adminDashboard"
              to="AdminAccount"
            >
              Hello {adminData.first_name}, CLICK HERE TO CONTINUE.
            </Link>
          </button>
        );
      } else if (response.data[0].role == "manager") {
        setIsAuth(true);
        setAdminData(response.data[0]);
        const adminData = response.data[0];
        // console.log(adminData);
        setLoginStatus(
          <button
            onClick={() => {
              setIsAuth(true);
            }}
            style={{
              backgroundColor: "black",
              borderRadius: "5px",
              borderColor: "red",
            }}
            className="loginStatus"
          >
            <Link
              style={{
                color: "white",
              }}
              // to="/storeFront"
              to={`/storeFront/${adminData.id}`}
            >
              Hello! {adminData.first_name} CLICK HERE TO CONTINUE.
            </Link>
          </button>
        );
        // console.log(isAuth);
      } else if (profileData.id === undefined) {
        setLoginStatus(
          <p
            className="loginStatus"
            style={{
              backgroundColor: "black",
              borderRadius: "5px",
              borderColor: "red",
              color: "white",
            }}
          >
            You are not authorized to login here.
          </p>
        );
      } else {
        setLoginStatus(
          <p
            className="loginStatus"
            style={{
              backgroundColor: "black",
              borderRadius: "5px",
              borderColor: "red",
              color: "white",
            }}
          >
            You are not authorized to login here.
          </p>
        );
      }
    });
  };

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <div className="App">
            {" "}
            {/* TITLE OF THE PAGE WITH THE RED BACKGROUND GUN IMAGES */}
            <LoginHeader />
            {/* HOME PAGE TITLE "AN EXCLUSIE BENEFITS..." */}
            <MainPage />
            {/* NEW LOGIN SCREEN */}
            {/* LOGIN BUTTONS FOR MEMBERS AND ADMINS */}
            <div className="Modals">
              <Container>
                <Row>
                  <Col className="BenCol4">
                    <p className="login-title">Member Login</p>
                    <input
                      className="loginInput"
                      required
                      type="text"
                      placeholder="Email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    ></input>
                    <br></br>
                    <input
                      className="loginInput"
                      required
                      type="password"
                      placeholder="Password"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    ></input>
                    <br></br>
                    <button
                      className="validate"
                      onClick={() => {
                        memberLogin();
                      }}
                    >
                      Sign In
                    </button>
                    <br></br>
                    <Modal
                      onClose={() => setOpen(false)}
                      onOpen={() => setOpen(true)}
                      open={open}
                      trigger={<button className="validate">Admin?</button>}
                      style={{
                        height: "300px",
                        width: "300px",
                        marginLeft: "45%",
                        marginRight: "45%",
                        marginTop: "25%",
                      }}
                    >
                      <Modal.Content>
                        <p className="login-title-admin">Admin Login</p>
                        <input
                          className="loginInput"
                          required
                          type="text"
                          placeholder="Email"
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                        ></input>
                        <br></br>
                        <input
                          className="loginInput"
                          required
                          type="password"
                          placeholder="Password"
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                        ></input>
                        <br></br>
                        <button
                          className="admin-validate"
                          onClick={() => {
                            login();
                            // memberLogin();
                            // clearInput();
                            setOpen(false);
                          }}
                          // onClick={() => setOpen(false)}
                        >
                          Sign In
                        </button>
                      </Modal.Content>
                    </Modal>
                  </Col>

                  {/* ADMIN LOGIN */}
                  {/* <Col className="BenCol4">
                    <p className="login-title">Login</p>
                    <Input
                      className="loginInput"
                      required
                      type="text"
                      placeholder="Email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    ></Input>
                    <br></br>
                    <Input
                      className="loginInput"
                      required
                      type="password"
                      placeholder="Password"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    ></Input>
                    <br></br>
                    <button
                      className="validate"
                      onClick={() => {
                        login();
                        // memberLogin();
                        // clearInput();
                      }}
                    >
                      Sign In
                    </button>
                  </Col> */}
                </Row>
                <Row>
                  <Col>
                    <Header icon>{loginStatus}</Header>
                  </Col>
                </Row>
              </Container>
              {/* </div> */}
            </div>
            <Benefits />
          </div>
        </Route>

        {/* PAGE ROUTES */}

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
          // isAuth={isAuth}
        />
        <Route
          path="/adminAccount"
          exact
          component={AdminAccount}
          isAuth={isAuth}
        />
        <ProtectedRoute
          path="/storeFront/:id"
          component={StoreFront}
          isAuth={isAuth}
        />
        <ProtectedRoute
          path="/profile/:id"
          exact
          component={Profile}
          isAuth={isAuth}
        />
      </Switch>
    </Router>
  );
}

export default App;
