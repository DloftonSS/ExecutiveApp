import React, { useState } from "react";
// import Navigation from "../components/navigation";
import { Button, Form, Input } from "semantic-ui-react";
import Axios from "axios";
import StoreHeader from "../components/Storefront/header";

import "../components/Storefront/addMember.css";

function StoreFront() {
  const [customerFirst, setCustomerFirst] = useState("");
  const [customerLast, setCustomerLast] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [dateJoined, setDateJoined] = useState("");
  const [preferredStore, setPreferredStore] = useState("");

  const submitNewCustomer = () => {
    Axios.post("https://executive-app.herokuapp.com/addMember", {
      // Axios.post("http://localhost:3001/addMember", {
      customerFirst: customerFirst,
      customerLast: customerLast,
      customerPhone: customerPhone,
      customerEmail: customerEmail,
      customerAddress: customerAddress,
      dateJoined: dateJoined,
      preferredStore: preferredStore,
    })
      .then((response, error) => {
        // console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="newMember">
      <StoreHeader />
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
            placeholder="000-867-5309"
          />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <Input
            onChange={(e) => {
              setCustomerEmail(e.target.value);
            }}
            placeholder="executive@email.com"
          />
        </Form.Field>
        <Form.Field>
          <label>Address</label>
          <Input
            onChange={(e) => {
              setCustomerAddress(e.target.value);
            }}
            placeholder="3149 S Orange Blossom Tr. Apopka, FL 32703"
          />
        </Form.Field>
        <Form.Field>
          <label>Date Joined</label>
          <Input
            onChange={(e) => {
              setDateJoined(e.target.value);
            }}
            placeholder="MM-DD-YYY"
          />
        </Form.Field>
        <Form.Field>
          <label>Preferred Store</label>
          <Input
            onChange={(e) => {
              setPreferredStore(e.target.value);
            }}
            placeholder="Apopka"
          />
        </Form.Field>

        <Button type="reset" onClick={submitNewCustomer}>
          Register Executive
        </Button>
      </Form>
      <footer></footer>
    </div>
  );
}

export default StoreFront;
