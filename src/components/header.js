import "./header.css";
// import { Link } from "react-router-dom";
import logo from "../Pages/images/ExecutiveAccess.png";
import { Container, Icon } from "semantic-ui-react";

function Header() {
  return (
    <div className="Navigation">
      <Container textAlign="center">
        {" "}
        <a href="/adminDashBoard">
          {" "}
          <img src={logo} style={{ height: "150px" }}></img>
        </a>
      </Container>

      <Container textAlign="center">
        {" "}
        <ul>
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
            <a href="...">
              {" "}
              <Icon disabled name="heart"></Icon> All Requests
            </a>
          </li>
          <li>
            {" "}
            <a href="...">
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

export default Header;
