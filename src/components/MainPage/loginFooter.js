import { Icon } from "semantic-ui-react";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container } from "react-bootstrap";
// import Axios from "axios";
import "./loginFooter.css";

function LoginFooter() {
  return (
    <div className="MainContainer">
      <div className="titleDiv">
        {" "}
        <h1>
          NOT A MEMBER? CLICK{" "}
          <span className="login-title-emphasis">
            <a
              href="https://www.shoot-straight.com/executive-access-club/"
              target="_blank"
            >
              HERE
            </a>
          </span>{" "}
          TO FIND OUT MORE
        </h1>
      </div>
      <p className="underline"></p>
      <div className="footer">
        <p className="footer-text">Shoot Straight, Inc.</p>
        <p className="footer-text">
          1349 South Orange Blossom Trail Apopka, FL 32703
        </p>
        <p className="footer-text">
          <Icon name="copyright outline"></Icon>
          Shoot Straight 2022
        </p>
      </div>
    </div>
  );
}

export default LoginFooter;
