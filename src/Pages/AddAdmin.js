import React, { useState } from "react";
// import Header from "../components/header";

import HeaderMain from "../components/header";
// import Navigation from "../components/navigation";
import { Button, Form, Input } from "semantic-ui-react";
import Axios from "axios";
// import Header from "../components/header";

// import "./CSS/AddAdmin.css";

function AddAdmin() {
  const [firstnameReg, setFirstNameReg] = useState("");
  const [lastnameReg, setLastNameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [roleReg, setRoleReg] = useState("");
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
      role: roleReg,
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
      {/* <Header /> */}
      <HeaderMain />
      <Form className="main-form" style={{ marginTop: "3%" }}>
        {" "}
        <h1>Registration</h1>
        <Form.Group widths="equal">
          <Form.Field>
            <label>First name</label>
            <Input
              fluid
              placeholder="First name"
              onChange={(e) => {
                setFirstNameReg(e.target.value);
              }}
            />
          </Form.Field>

          <Form.Field>
            <label>Last name</label>
            <Input
              fluid
              placeholder="Last name"
              onChange={(e) => {
                setLastNameReg(e.target.value);
              }}
            />
          </Form.Field>
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field width={4}>
            <label>Email</label>
            <Input
              fluid
              placeholder="Email"
              onChange={(e) => {
                setEmailReg(e.target.value);
              }}
            />
          </Form.Field>
          <Form.Field width={4}>
            <label>Password</label>
            <Input
              fluid
              placeholder="Password"
              onChange={(e) => {
                setPasswordReg(e.target.value);
              }}
            />
          </Form.Field>
          <Form.Field width={4}>
            <label>Role</label>
            <Input
              fluid
              placeholder="manager or admin"
              onChange={(e) => {
                setRoleReg(e.target.value);
              }}
            />
          </Form.Field>
        </Form.Group>
        <Button type="reset" onClick={register}>
          Register Admin
        </Button>
        <p>* Managers will have Store front access only.</p>
        <p>* Admins will have backend access. </p>
      </Form>
    </div>
  );
}

export default AddAdmin;
