// import logo from "../Pages/images/ExecutiveAccess.png";
import { Card, Button, Icon } from "semantic-ui-react";
// import { Button,  } from "@material-ui/core";

function Navigation() {
  return (
    <div className="Navigation">
      <div className="background">
        <Button color="red">
          <Icon disabled name="user plus"></Icon> Add Executive
        </Button>
        <Button color="red">
          <Icon disabled name="user plus"></Icon> Add Admin
        </Button>
      </div>
    </div>
  );
}

export default Navigation;
