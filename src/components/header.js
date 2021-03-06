import "../Pages/CSS/dashboard.css";
// import { Link } from "react-router-dom";
import logo from "../Pages/images/ExecutiveAccess.png";
// import { Container, Icon } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import SideChat from "../components/SideChat";
import React, { useStat, useEffect, Input, Form } from "react";
import {
  Card,
  Container,
  Checkbox,
  Grid,
  Header,
  List,
  Icon,
  Table,
  Link,
  Menu,
  Segment,
  Sidebar,
  Dropdown,
  Modal,
  Button,
  Feed,
} from "semantic-ui-react";
import { useParams } from "react-router";
import Axios from "axios";

function AdminHeader() {
  let history = useHistory();

  useEffect(() => {}, []);
  return (
    <div className="Navigation" style={{ height: "250px" }}>
      <Container textAlign="center">
        {" "}
        <a href="/adminDashBoard">
          {" "}
          <img src={logo} style={{ height: "100%", width: "45%" }}></img>
        </a>
      </Container>

      <Container textAlign="center">
        {" "}
        <ul>
          <li>
            <a href="/adminDashboard">
              <Icon disabled name="home"></Icon> Home
            </a>
          </li>
          <li>
            <a href="/addMember">
              <Icon disabled name="user plus"></Icon> Add Executive
            </a>
          </li>
          <li>
            {" "}
            <a href="/allMembers">
              {" "}
              <Icon disabled name="users"></Icon> All Members
            </a>
          </li>
          <li>
            {" "}
            <a href="/allRequests">
              {" "}
              <Icon disabled name="heart"></Icon> All Requests
            </a>
          </li>
          <li>
            {" "}
            <a href="/catalog">
              {" "}
              <Icon disabled name="list"></Icon> Catalog
            </a>
          </li>
          <li>
            {" "}
            <a href="/addAdmin">
              {" "}
              <Icon disabled name="user plus"></Icon> Add Admin
            </a>
          </li>
          <li>
            {" "}
            <a href="/">
              {" "}
              <Icon disabled name="sign out"></Icon> Sign Out
            </a>
          </li>
          <li> </li>
        </ul>
      </Container>
      <Container textAlign="right"> </Container>
      {/* <div className="background">
        <img src={logo} style={{ height: "100px" }}></img>
      </div>
      <div
        style={{
          color: "white",
          height: "200px",
          width: "500px",
          backgroundColor: "red",
          display: "flex",
          alignItem: "right",
          justifyContent: "rigth",
        }}
      >
        new header
      </div> */}
    </div>
  );
}

export default AdminHeader;
