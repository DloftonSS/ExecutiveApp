import React, { useState, useEffect } from "react";
import {
  Input,
  List,
  Button,
  Checkbox,
  Grid,
  Header,
  Icon,
  Feed,
  Image,
  Modal,
  Card,
  Popup,
  Form,
  Menu,
  Segment,
  Sidebar,
} from "semantic-ui-react";
import Axios from "axios";
// import API from "../utils/API";
// import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "./AddMember.css";
// import "../AdminDashBoard/AdminAccount.css";

function AddNewMember() {
  const [customerFirst, setCustomerFirst] = useState("");
  const [customerMiddle, setCustomerMiddle] = useState("");
  const [customerLast, setCustomerLast] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [communication, setCommunication] = useState("");
  const [preferredStore, setPreferredStore] = useState("");
  const [placeBorn, setPlaceBorn] = useState("");
  const [dob, setDob] = useState("");
  const [ssn, setSsn] = useState("");
  const [ethnicity, setEthnicity] = useState("");
  const [race, setRace] = useState("");
  const [memberNumber, setMemberNumber] = useState("");
  const [associate, setAssociate] = useState("");
  const [clerk, setClerk] = useState("");
  const card = "Pending";
  const acknowledged = "No";

  const submitNewCustomer = () => {
    Axios.post("https://executive-app.herokuapp.com/addMember", {
      // Axios.post("http://localhost:3001/adminAddMember", {
      customerFirst: customerFirst,
      customerMiddle: customerMiddle,
      customerLast: customerLast,
      customerPhone: customerPhone,
      customerEmail: customerEmail,
      customerAddress: customerAddress,
      communication: communication,
      preferredStore: preferredStore,
      ssn: ssn,
      placeBorn: placeBorn,
      dob: dob,
      ethnicity: ethnicity,
      race: race,
      memberNumber: memberNumber,
      card: card,
      acknowledged: acknowledged,
    })
      .then((response, error) => {
        console.log("submited");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      {" "}
      <br></br>
      <Row id="active-requests">
        <h2 className="ra-title">
          <span className="span">R</span>egister <span className="span">M</span>
          ember
        </h2>
        <p className="dividing-line"></p>
        <br></br>
      </Row>
      <Row>
        {" "}
        <div className="ddd">
          {/* NEW ADD MEMBER FORM */}
          <Form className="main-form" style={{ marginTop: "3%" }}>
            {" "}
            <h1>Registration</h1>
            <Form.Group widths="equal">
              <Form.Field width={3}>
                <label>First name</label>
                <Input
                  fluid
                  placeholder="First name"
                  onChange={(e) => {
                    setCustomerFirst(e.target.value);
                  }}
                />
              </Form.Field>
              <Form.Field width={3}>
                <label>Middle name</label>
                <Input
                  fluid
                  placeholder="Middle name"
                  onChange={(e) => {
                    setCustomerMiddle(e.target.value);
                  }}
                />
              </Form.Field>
              <Form.Field width={3}>
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
              <Form.Field width={2}>
                <label>Email</label>
                <Input
                  fluid
                  placeholder="Email"
                  onChange={(e) => {
                    setCustomerEmail(e.target.value);
                  }}
                />
              </Form.Field>
              <Form.Field width={2}>
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
                <label>Contact</label>
                <Input
                  fluid
                  placeholder="Phone, Email, Both"
                  onChange={(e) => {
                    setCommunication(e.target.value);
                  }}
                />
              </Form.Field>
              <Form.Field width={3}>
                <label>Preferred Store</label>
                <Input
                  fluid
                  placeholder="Apopka"
                  onChange={(e) => {
                    setPreferredStore(e.target.value);
                  }}
                />
              </Form.Field>
              {/* <Form.Field width={2}>
            <label>Card</label>
            <Input
              fluid
              placeholder="Yes or No"
              onChange={(e) => {
                setCard(e.target.value);
              }}
            />
          </Form.Field> */}
              {/* <Form.Field width={3}>
            <label>Member Number</label>
            <Input
              fluid
              placeholder="123"
              onChange={(e) => {
                setMemberNumber(e.target.value);
              }}
            />
          </Form.Field> */}
              <Form.Field width={4}>
                <label>Place of Birth</label>
                <Input
                  fluid
                  placeholder="Orlando, FL USA"
                  onChange={(e) => {
                    setPlaceBorn(e.target.value);
                  }}
                />
              </Form.Field>
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Field width={3}>
                <label>D.O.B.</label>
                <Input
                  fluid
                  placeholder="July, 4th 1776 "
                  onChange={(e) => {
                    setDob(e.target.value);
                  }}
                />
              </Form.Field>
              <Form.Field width={3}>
                <label>SSN</label>
                <Input
                  fluid
                  type="password"
                  placeholder=" Optional ***-**-****"
                  onChange={(e) => {
                    setSsn(e.target.value);
                  }}
                />
              </Form.Field>
              <Form.Field width={4}>
                <label>Ethnicity</label>
                <Input
                  fluid
                  placeholder="Japanese American, Cuban American, European"
                  onChange={(e) => {
                    setEthnicity(e.target.value);
                  }}
                />
              </Form.Field>
              <Form.Field width={3}>
                <label>Race</label>
                <Input
                  fluid
                  placeholder="Black, Hispanic, White"
                  onChange={(e) => {
                    setRace(e.target.value);
                  }}
                />
              </Form.Field>
              <Form.Field width={3}>
                <label>Member ID *</label>
                <Input
                  fluid
                  placeholder="1234"
                  onChange={(e) => {
                    setMemberNumber(e.target.value);
                  }}
                />
              </Form.Field>
            </Form.Group>
            <p>
              * If you are not sure what member number to enter, leave blank and
              edit the customer number later from the profile page.
            </p>
            {/* <Form.Group>
          <Form.Field width={4}>
            <label>Clerk</label>
            <Input
              fluid
              // Value={managerDetails.first_name}
              placeholder={
                managerDetails.first_name + " " + managerDetails.last_name
              }
              onChange={(e) => {
                setClerk(e.target.value);
              }}
            />
          </Form.Field>
        </Form.Group> */}
            <Button type="reset" onClick={submitNewCustomer}>
              Register Executive
            </Button>
          </Form>
          <footer></footer>
        </div>
      </Row>
    </div>
  );
}

export default AddNewMember;
