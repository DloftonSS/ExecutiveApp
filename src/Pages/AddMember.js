import React, { useState } from "react";
import Header from "../components/header";
// import Navigation from "../components/navigation";
import { Button, Form, Input } from "semantic-ui-react";
import Axios from "axios";

import "./CSS/AddMember.css";

function AddMember() {
  const [customerFirst, setCustomerFirst] = useState("");
  const [customerLast, setCustomerLast] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");

  const submitNewCustomer = () => {
    Axios.post("https://executive-app.herokuapp.com/addMember", {
      // Axios.post("http://localhost:3001/addMember", {
      customerFirst: customerFirst,
      customerLast: customerLast,
      customerPhone: customerPhone,
      customerEmail: customerEmail,
      customerAddress: customerAddress,
    })
      .then((response, error) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  return (
    <div className="newMember">
      <Header />
      {/* <Navigation /> */}
      {/* <div>This will be for adding the members to the Database.</div> */}
      <Form className="form-contents">
        <h3>REGISTER A NEW EXECUTIVE MEMBER</h3>
        <Form.Field>
          <label>First Name</label>
          <Input
            onChange={(e) => {
              setCustomerFirst(e.target.value);
            }}
            placeholder="First Name"
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <Input
            onChange={(e) => {
              setCustomerLast(e.target.value);
            }}
            placeholder="Last Name"
          />
        </Form.Field>
        <Form.Field>
          <label>Phone Number</label>
          <Input
            onChange={(e) => {
              setCustomerPhone(e.target.value);
            }}
            placeholder="Phone Number"
          />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <Input
            onChange={(e) => {
              setCustomerEmail(e.target.value);
            }}
            placeholder="Email"
          />
        </Form.Field>
        <Form.Field>
          <label>Address</label>
          <Input
            onChange={(e) => {
              setCustomerAddress(e.target.value);
            }}
            placeholder="Address"
          />
        </Form.Field>
        <Form.Field>
          {/* <Checkbox label="I agree to the Terms and Conditions" /> */}
        </Form.Field>
        <Button type="reset" onClick={submitNewCustomer}>
          Register Executive
        </Button>
      </Form>
      <footer></footer>
    </div>
  );
}

export default AddMember;
