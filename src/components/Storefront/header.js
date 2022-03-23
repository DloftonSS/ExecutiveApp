import "./header.css";
import logo from "../../Pages/images/ExecutiveAccess.png";
import { Container, Icon } from "semantic-ui-react";
import React, { useState, useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";

function StoreHeader() {
  return (
    <div className="Navigation">
      <Row>
        <Col>
          <img
            className="header-img"
            // style={{ height: "300px", width: "850px" }}
            src={logo}
          ></img>
        </Col>
        <Col className="title-col">
          {" "}
          <h2 className="title-header">Welcome To</h2>
          <h3 className="title-header">Store Access</h3>
        </Col>
        <Col></Col>
      </Row>
      {/* <Container textAlign="center">
        <h2>Welcome To</h2>
        <a href="/">
          {" "}
          <img
            className="header-img"
            // style={{ height: "300px", width: "850px" }}
            src={logo}
          ></img>
        </a>
      </Container>

      <Container textAlign="center">
        <h3>Store Access</h3>
      </Container> */}
      {/* <Container textAlign="right">
        {" "}
        <a href="/">
          <button className="logoutNow">Logout</button>
        </a>
      </Container> */}
    </div>
  );
}

export default StoreHeader;
