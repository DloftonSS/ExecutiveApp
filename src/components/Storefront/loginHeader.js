import "./loginHeader.css";
import logo from "../../Pages/images/ExecutiveAccess.png";
import Banner from "../../Pages/images/ExecutiveAccessClub_Web.png";
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

      <div styl={{ width: "900px", height: "110px", backgroundColor: "black" }}>
        <img className="loginLogo" src={Banner}></img>
      </div>

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
