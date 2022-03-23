import "./loginHeader.css";
import logo from "../../Pages/images/ExecutiveAccess.png";
import Banner from "../../Pages/images/ExecutiveAccessClub_Web.png";
import React, { useState, useEffect } from "react";
import { Container, Icon, Popup } from "semantic-ui-react";
import { Button, Col, Row } from "react-bootstrap";

function LoginHeader() {
  return (
    <div className="Navigation">
      {/* <Container textAlign="center"> */}
      {/* <h2>Welcome To</h2> */}
      {/* <p className="line"></p> */}
      {/* <a href="/">
          {" "} */}

      {/* <div
        style={{
          width: "900px",
          height: "300px",
          backgroundColor: "black",
          alignContent: "center",
          marginLeft: "25%",
          marginRight: "25%",
        }}
      > */}
      {/* <img className="loginLogo" src={Banner}></img> */}
      {/* </div> */}

      {/* </a> */}
      {/* </Container> */}

      {/* <Container textAlign="center"> */}
      {/* <h3>Store Front Registration</h3> */}
      {/* </Container> */}
      {/* <Container textAlign="right"> </Container> */}
      <Row>
        <Col></Col>
        <Col>
          <img className="loginLogo" src={Banner}></img>
        </Col>
        <Col
          style={{
            textAlign: "center",
            color: "rgb(192, 192, 192)",
            paddingTop: "2%",
          }}
        >
          {/* Join The Club */}
          {/* <Popup
            content={
              <ul>
                <li>Join The Club</li>
              </ul>
            }
            trigger={
              <Icon
                name="target"
                size="large"
                className="dropdown-arrow"
              ></Icon>
            }
          /> */}
        </Col>
      </Row>
    </div>
  );
}

export default LoginHeader;
