import React, { useState } from "react";
import Header from "../components/header";
// import Navigation from "../components/navigation";
import { Button, Form, Input } from "semantic-ui-react";
import Axios from "axios";

import "./CSS/AddMember.css";

function AddMember() {
  const [customerFirst, setCustomerFirst] = useState("");
  const [customerMiddle, setCustomerMiddle] = useState("");
  const [customerLast, setCustomerLast] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [communication, setCommunication] = useState("");
  const [preferredStore, setPreferredStore] = useState("");
  const [card, setCard] = useState("");
  const [memberNumber, setMemberNumber] = useState("");

  const submitNewCustomer = () => {
    Axios.post("https://executive-app.herokuapp.com/addMember", {
      // Axios.post("http://localhost:3001/addMember", {
      customerFirst: customerFirst,
      customerMiddle: customerMiddle,
      customerLast: customerLast,
      customerPhone: customerPhone,
      customerEmail: customerEmail,
      customerAddress: customerAddress,
      communication: communication,
      preferredStore: preferredStore,
      card: card,
      memberNumber: memberNumber,
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

      {/* NEW ADD MEMBER FORM */}
      <Form className="main-form">
        <Form.Group widths="equal">
          <Form.Field>
            <label>First name</label>
            <Input
              fluid
              placeholder="First name"
              onChange={(e) => {
                setCustomerFirst(e.target.value);
              }}
            />
          </Form.Field>
          <Form.Field>
            <label>Middle name</label>
            <Input
              fluid
              placeholder="Middle name"
              onChange={(e) => {
                setCustomerMiddle(e.target.value);
              }}
            />
          </Form.Field>
          <Form.Field>
            <label>Last name</label>
            <Input
              fluid
              placeholder="Last name"
              onChange={(e) => {
                setCustomerLast(e.target.value);
              }}
            />
          </Form.Field>
        </Form.Group>

        <Form.Group widths="equal">
          <Form.Field>
            <label>Email</label>
            <Input
              fluid
              placeholder="Email"
              onChange={(e) => {
                setCustomerEmail(e.target.value);
              }}
            />
          </Form.Field>
          <Form.Field>
            <label>Address</label>
            <Input
              fluid
              placeholder="Address"
              onChange={(e) => {
                setCustomerAddress(e.target.value);
              }}
            />
          </Form.Field>
        </Form.Group>

        <Form.Group widths="equal">
          <Form.Field width={4}>
            <label>Phone</label>
            <Input
              fluid
              placeholder="Phone"
              onChange={(e) => {
                setCustomerPhone(e.target.value);
              }}
            />
          </Form.Field>
          <Form.Field width={2}>
            <label>Communication Style</label>
            <Input
              fluid
              placeholder="Phone, Email, Both"
              onChange={(e) => {
                setCommunication(e.target.value);
              }}
            />
          </Form.Field>
          <Form.Field width={4}>
            <label>Preferred Store</label>
            <Input
              fluid
              placeholder="Apopka"
              onChange={(e) => {
                setPreferredStore(e.target.value);
              }}
            />
          </Form.Field>
          <Form.Field width={2}>
            <label>Card</label>
            <Input
              fluid
              placeholder="Yes or No"
              onChange={(e) => {
                setCard(e.target.value);
              }}
            />
          </Form.Field>
          <Form.Field width={4}>
            <label>Member Number</label>
            <Input
              fluid
              placeholder="123"
              onChange={(e) => {
                setMemberNumber(e.target.value);
              }}
            />
          </Form.Field>
        </Form.Group>
        <Button type="reset" onClick={submitNewCustomer}>
          Register Executive
        </Button>
      </Form>
      <footer></footer>
    </div>
  );
}

export default AddMember;
