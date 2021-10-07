import { Icon } from "semantic-ui-react";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container } from "react-bootstrap";
import Axios from "axios";
import "./Benefits.css";

function Benefits() {
  return (
    <div className="MainContainer">
      {/* <p>
        the Executive Access Club gives you exlusive acces to services and
        products typically unavailable to members of the public as well as
        access to special discounts and fast access.
      </p> */}
      <div className="titleDiv">
        {" "}
        <h1>
          WHAT KIND OF BENEFITS DO <span>YOU</span> GET?{" "}
        </h1>
      </div>
      <p className="underlineB"></p>

      <br></br>
      <p></p>
      <p></p>
      <Container>
        <Row>
          <Col className="BenCol">
            <h3>1</h3>
            <p>PRIORITY ACCESS TO FIREARMS &amp; MORE</p>
          </Col>
          <Col className="BenCol">
            <h3>2</h3>
            <p>NFA &amp; MEMBER ONLY ITEMS</p>
          </Col>
        </Row>
        <Row>
          <Col className="BenCol">
            <h3>3</h3>
            <p>UNLIMITED RANGE TIME &amp; FAST ACCESS</p>
          </Col>
          <Col className="BenCol">
            <h3>4</h3>
            <p>PERSONALIZED IN-STORE SHOPPING</p>
          </Col>
        </Row>
      </Container>
      <div className="titleDiv">
        {" "}
        <h1>
          <span>PRIORITY ACCESS</span> TO NEW RELEASES, RESTOCKED ITEMS &amp;
          MORE{" "}
        </h1>
      </div>
      <p className="underlineC"></p>
      <p style={{ height: "50px" }}></p>

      <div className="footer">
        <h3>Shoot Straight Inc. Headquarters</h3>
        <p>1349 South Orange Blossom Trail Apopka, FL 32703</p>
        <h2>Shoot-Straight.com</h2>
        <p>
          <Icon name="copyright outline"></Icon>Shoot Straight 2021
        </p>
      </div>
    </div>
  );
}

export default Benefits;
