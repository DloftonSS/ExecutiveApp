import React, { useState } from "react";
import Header from "../components/header";
// import Navigation from "../components/navigation";
import { Button, Form, Input } from "semantic-ui-react";
import Axios from "axios";
// import Header from "../components/header";

import "./CSS/AddAdmin.css";

function AddAdmin() {
  const [firstnameReg, setFirstNameReg] = useState("");
  const [lastnameReg, setLastNameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [emailReg, setEmailReg] = useState("");

  //   const [username, setUsername] = useState("");
  //   const [password, setPassword] = useState("");

  const register = (e) => {
    Axios.post("https://executive-app.herokuapp.com/register", {
      // Axios.post("http://localhost:3001/register", {
      firstName: firstnameReg,
      lastName: lastnameReg,
      email: emailReg,
      password: passwordReg,
    })
      .then((response, error) => {
        // console.log(response);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  return (
    <div className="App">
      <Header />

      <Form className="form-contents">
        <h3>REGISTER A NEW ADMIN</h3>
        <Form.Field>
          <label>First Name</label>
          <Input
            style={{ width: "90%" }}
            placeholder="First Name"
            type="text"
            onChange={(e) => {
              setFirstNameReg(e.target.value);
            }}
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <Input
            style={{ width: "90%" }}
            placeholder="Last Name"
            type="text"
            onChange={(e) => {
              setLastNameReg(e.target.value);
            }}
          />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <Input
            style={{ width: "90%" }}
            placeholder="email"
            type="text"
            onChange={(e) => {
              setEmailReg(e.target.value);
            }}
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <Input
            style={{ width: "90%" }}
            placeholder="Create Password"
            type="text"
            onChange={(e) => {
              setPasswordReg(e.target.value);
            }}
          />
        </Form.Field>

        <Form.Field>
          {/* <Checkbox label="I agree to the Terms and Conditions" /> */}
        </Form.Field>
        <Button type="reset" onClick={register}>
          Register Admin
        </Button>
      </Form>
    </div>
  );
}

export default AddAdmin;
