import "./loginHeader.css";
import logo from "../../Pages/images/ExecutiveAccess.png";
import Banner from "../../Pages/images/ExecutiveAccessClub_Web.png";
import React, { useState, useEffect } from "react";
import { Container, Icon, Popup } from "semantic-ui-react";
import { Button, Col, Row } from "react-bootstrap";

function LoginHeader() {
  return (
    <div className="Navigation">
      <Row className="g-0">
        <Col></Col>
        <Col>
          <img className="loginLogo" src={Banner}></img>
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
}

export default LoginHeader;
