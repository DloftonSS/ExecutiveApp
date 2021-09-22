import "./header.css";
import logo from "../../Pages/images/ExecutiveAccess.png";
import { Container, Icon } from "semantic-ui-react";

function StoreHeader() {
  return (
    <div className="Navigation">
      <Container textAlign="center">
        <h2>Welcome To</h2>
        <a href="/">
          {" "}
          <img src={logo}></img>
        </a>
      </Container>

      <Container textAlign="center">
        <h3>Store Front Registration</h3>
      </Container>
      <Container textAlign="right"> </Container>
    </div>
  );
}

export default StoreHeader;
