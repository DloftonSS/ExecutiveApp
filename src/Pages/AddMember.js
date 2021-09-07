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
  const [dateJoined, setDateJoined] = useState("");
  const [renewDate, setRenewDate] = useState("");
  const [expiring, setExpiring] = useState("");
  const [preferredStore, setPreferredStore] = useState("");
  const [card, setCard] = useState("");

  const submitNewCustomer = () => {
    Axios.post("https://executive-app.herokuapp.com/addMember", {
      // Axios.post("http://localhost:3001/addMember", {
      customerFirst: customerFirst,
      customerLast: customerLast,
      customerPhone: customerPhone,
      customerEmail: customerEmail,
      customerAddress: customerAddress,
      // dateJoined: dateJoined,
      // renewDate: renewDate,
      // expiring: expiring,
      preferredStore: preferredStore,
      card: card,
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
        {/* <Form.Field>
          <label>Date Joined</label>
          <Input
            onChange={(e) => {
              setDateJoined(e.target.value);
            }}
            placeholder="MM-DD-YYYY"
          />
        </Form.Field>
        <Form.Field>
          <label>Renew Date</label>
          <Input
            onChange={(e) => {
              setRenewDate(e.target.value);
            }}
            placeholder="MM-DD-YYYY"
          />
        </Form.Field>
        <Form.Field>
          <label>Expiring Date</label>
          <Input
            onChange={(e) => {
              setExpiring(e.target.value);
            }}
            placeholder="MM-DD-YYYY"
          />
        </Form.Field> */}
        <Form.Field>
          <label>Preferred Store</label>
          <Input
            onChange={(e) => {
              setPreferredStore(e.target.value);
            }}
            placeholder="Apopka"
          />
        </Form.Field>
        <Form.Field>
          <label>Card</label>
          <Input
            onChange={(e) => {
              setCard(e.target.value);
            }}
            placeholder="YES OR NO"
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

export default AddMember;
