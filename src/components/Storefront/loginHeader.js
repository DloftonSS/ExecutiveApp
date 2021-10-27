import "./loginHeader.css";
import logo from "../../Pages/images/ExecutiveAccess.png";
import Banner from "../../Pages/images/EAAppBanner.jpg";
import React, { useState, useEffect } from "react";
import { Container, Icon } from "semantic-ui-react";

function LoginHeader() {
  return (
    <div className="Navigation">
      {/* <Container textAlign="center"> */}
      {/* <h2>Welcome To</h2> */}
      {/* <p className="line"></p> */}
      {/* <a href="/">
          {" "} */}

      <img className="loginLogo" src={Banner}></img>

      {/* </a> */}
      {/* </Container> */}

      {/* <Container textAlign="center"> */}
      {/* <h3>Store Front Registration</h3> */}
      {/* </Container> */}
      {/* <Container textAlign="right"> </Container> */}
    </div>
  );
}

export default LoginHeader;
