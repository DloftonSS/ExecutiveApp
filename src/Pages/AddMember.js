import React from "react";
import Header from "../components/header";
import Navigation from "../components/navigation";
import { Button, Checkbox, Form } from "semantic-ui-react";

function AdminDashBoard() {
  return (
    <div>
      <Header />
      <Navigation />
      <div>This will be for adding the members to the Database.</div>
      <Form>
        <Form.Field>
          <label>First Name</label>
          <input placeholder="First Name" />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input placeholder="Last Name" />
        </Form.Field>
        <Form.Field>
          <Checkbox label="I agree to the Terms and Conditions" />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}

export default AdminDashBoard;
