import "./header.css";
import logo from "../Pages/images/ExecutiveAccess.png";
import { Card, Button } from "semantic-ui-react";

function Header() {
  return (
    <div className="Navigation">
      <div className="background">
        <img src={logo} style={{ height: "100px" }}></img>
      </div>
    </div>
  );
}

export default Header;
