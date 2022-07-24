import "./App.css"; 
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container } from "react-bootstrap";
import LoginHeader from "./components/Storefront/loginHeader";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  useHistory,
} from "react-router-dom"; 
import AdminAccount from "./Pages/AdminDashBoard/AdminAccount"; 
import AddMember from "./Pages/AddMember";
import AllMembers from "./Pages/Allmembers";
import AddAdmin from "./Pages/AddAdmin";
import AllRequests from "./Pages/AllRequests";
import ExecutiveAccount from "./Pages/ExecutiveAccount";
import Catalog from "./Pages/Catalog";
import MainPage from "./components/MainPage/MainPage"; 
import LoginFooter from "./components/MainPage/loginFooter";
import StoreFront from "./Pages/StoreFront";
import ProtectedRoute from "./Pages/ProtectedRoute";
import Profile from "./Pages/ProfilePage/Profilepage";  
import Axios from "axios";
import { Header, Modal } from "semantic-ui-react";
import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
init("user_9MrgO9HIeQQan5hAG15a2");

function App(props) {
  const [isAuth, setIsAuth] = useState(false); 
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const [profileData, setProfileData] = useState("");
  const [adminData, setAdminData] = useState("");
  const id = props.id;
  const [open, setOpen] = React.useState(false);
  const [openTwo, setOpenTwo] = React.useState(false);
  const form = useRef(); 
  var [tempPassword, setTempPassword] = useState(""); 

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
              WELCOME {profileData.first_name}, CLICK TO VIEW PROFILE
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

  const sendPasswordReset = () => {
    Axios.post("https://executive-app.herokuapp.com/sendPasswordReset", {
      // Axios.post("http://localhost:3001/sendPasswordReset", {
      email: email,
      phone: phone,
      tempPassword: tempPassword,
      // password: password,
    }).then((response) => {
      if (response.data.message) {
        setOpenTwo(false);
        setLoginStatus(
          <p className="incorrect-combo">Email and Phone number do not match</p>
        );
      } else if (response.data[0]) {
        // Axios.post("https://executive-app.herokuapp.com/setTempPassword", {
        //   Axios.post("http://localhost:3001/setTempPassword", {
        //     tempPassword: tempPassword
        // })
        sendTempPasswordEmail();
        setOpenTwo(false);
        setLoginStatus(
          <p className="loginStatus">
            PASSWORD SENT TO {response.data[0].email}
          </p>
        );
      }
    });
  };

  const theTempPassword = () => {
    Axios.post("https://executive-app.herokuapp.com/setTempPassword", {
      // Axios.post("http://localhost:3001/setTempPassword", {
      tempPassword: tempPassword,
    });
  };

  const makeTempPassword = () => {
    var chars =
      "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength = 12;

    for (var i = 0; i <= passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() * chars.length);
      // tempPassword += chars.substring(randomNumber, randomNumber +1);
      setTempPassword(
        (tempPassword += chars.substring(randomNumber, randomNumber + 1))
      );
    }
  };

  //SENDING EMAIL NOTIFICATION OF EXEC SIGN UP
  const sendTempPasswordEmail = (e) => {
    // e.preventDefault();

    emailjs
      .sendForm(
        // "service_gt7pfpe",
        "service_640rs57",
        "template_7vtpjtr",
        form.current,
        "user_QGlVs4Qz8yzIHPSfomOw6"
      )
      .then(
        (result) => {},
        (error) => {}
      );
    // e.target.reset();
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
            Incorrect Username/Password Combination.
          </p>
        );
      } else if (response.data[0].role == "admin") {
        setIsAuth(true);
        setAdminData(response.data[0]);
        const adminData = response.data[0]; 
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
              HELLO {adminData.first_name}, CLICK HERE TO CONTINUE
            </Link>
          </button>
        );
      } else if (response.data[0].role == "manager") {
        setIsAuth(true);
        setAdminData(response.data[0]);
        const adminData = response.data[0]; 
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
              // to="/storeFront"
              to={`/storeFront/${adminData.id}`}
            >
              HELLO {adminData.first_name}, CLICK HERE TO CONTINUE
            </Link>
          </button>
        ); 
      } else if (profileData.id === undefined) {
        setLoginStatus(
          <p className="loginStatus">YOU ARE NOT AUTHORIZED TO LOG IN HERE</p>
        );
      } else {
        setLoginStatus(
          <p className="loginStatus">YOU ARE NOT AUTHORIZED TO LOG IN HERE</p>
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
            <LoginHeader /> 
            <MainPage /> 
            <div className="Modals">
              <Container>
                <Row>
                  <Col className="BenCol4">
                    <p className="login-title">Member Login</p>
                    <p className="login-underline"></p>
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
                        position: "fixed",
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%)",
                        borderRadius: "0px",
                      }}
                    >
                      <Modal.Content>
                        <p className="login-title-admin">Admin Login</p>
                        <p className="login-underline"></p>
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
                            setOpen(false);
                          }}
                        >
                          Sign In
                        </button>
                      </Modal.Content>
                    </Modal>
                    <br></br>
                    <Modal
                      onClose={() => setOpenTwo(false)}
                      onOpen={() => setOpenTwo(true)}
                      open={openTwo}
                      trigger={
                        <button
                          className="forgot-btn"
                          onClick={() => {
                            makeTempPassword();
                          }}
                        >
                          Forgot Password?
                        </button>
                      }
                      style={{
                        height: "300px",
                        width: "300px",
                        position: "fixed",
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%)",
                        borderRadius: "0px",
                      }}
                    >
                      <Modal.Content>
                        <p className="login-title-admin">
                          Receive Temporary Password
                        </p>
                        <p className="login-underline"></p>
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
                          type="text"
                          placeholder="Phone Number"
                          onChange={(e) => {
                            setPhone(e.target.value);
                          }}
                        ></input>
                        <p
                          style={{
                            textAlign: "center",
                            fontSize: "10px",
                            marginBottom: "0px",
                          }}
                        >
                          *Phone Format 000-000-000
                        </p>
                        <br></br>
                        <button
                          className="admin-validate"
                          onClick={() => {
                            sendPasswordReset();
                          }}
                        >
                          Send
                        </button>
                        <form
                          ref={form}
                          onSubmit={sendTempPasswordEmail}
                          className="hide"
                        >
                          <input
                            value={email}
                            type="text"
                            placeholder="email"
                            name="customerEmail"
                            readOnly
                          ></input>
                          <input
                            value={tempPassword}
                            type="tel"
                            data-mask="(999) 999-9999"
                            placeholder="password"
                            name="tempPassword"
                            readOnly
                          ></input>
                        </form>
                      </Modal.Content>
                    </Modal>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Header icon>{loginStatus}</Header>
                  </Col>
                </Row>
              </Container> 
            </div> 
            <LoginFooter />
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
        {/* <Route */}
          {/* path="/adminDashBoard" */}
          {/* exact */}
          {/* component={AdminDashBoard} */}
          {/* // isAuth={isAuth} */}
        {/* /> */}
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
