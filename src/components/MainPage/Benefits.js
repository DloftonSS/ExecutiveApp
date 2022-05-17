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
            <p>NFA &amp; MEMBER ONLY ITEMS AVAILABLE</p>
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
      <div className="titleDiv">
        {" "}
        <h1>
          INVITATION<span> ONLY</span> MEMBERSHIP
        </h1>
      </div>
      <p className="underlineB"></p>
      <p style={{ height: "50px" }}></p>
      <p id="join">
        FOR MORE INFORMATION PLEASE VISIT OR CONTACT ONE OF OUR 9 SHOOT STRAIGHT
        LOCATIONS.
      </p>

      <div className="footer">
        <p className="footer-text">Shoot Straight Inc. Headquarters</p>
        <p className="footer-text">
          1349 South Orange Blossom Trail Apopka, FL 32703
        </p>
        <p className="footer-text">Shoot-Straight.com <Icon name="copyright outline"></Icon>
          Shoot Straight 2021</p>
        {/* <p className="footer-text">
          <Icon name="copyright outline"></Icon>
          Shoot Straight 2021
        </p> */}
      </div>
    </div>
  );
}

export default Benefits;
