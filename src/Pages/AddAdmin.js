import React, { useEffect, useState } from "react";
// import Header from "../components/header";

import HeaderMain from "../components/header";
// import Navigation from "../components/navigation";
import {
  Button,
  Form,
  Input,  
  Modal,
} from "semantic-ui-react";
import Axios from "axios";
// import Header from "../components/header";

// import "./CSS/AddAdmin.css";

function AddAdmin() {
  const [firstnameReg, setFirstNameReg] = useState("");
  const [lastnameReg, setLastNameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [roleReg, setRoleReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [storeReg, setStoreReg] = useState("");
  const [admins, setAdmins] = useState("");
  const [open, setOpen] = React.useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [newUsername, setNewUsername] = useState("");

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
      store: storeReg,
    })
      .then((response, error) => {
        // console.log(response);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  const GetAdmins = (e) => {
    Axios.get("https://executive-app.herokuapp.com/getAdmins", {})
      // Axios.get("http://localhost:3001/getAdmins", {})
      .then((response, error) => {
        setAdmins(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const ChangePassword = (id) => {
    Axios.put("https://executive-app.herokuapp.com/changeAdminPassword", {
      // Axios.put("http://localhost:3001/changeAdminPassword", {
      password: newPassword,
      id: id,
    }).then((response) => {
      // console.log("completed");
      alert("Your Password has been successfuly updated");

      GetAdmins();
    });
  };
  const ChangeUserName = (id) => {
    Axios.put("https://executive-app.herokuapp.com/changeUserName", {
      // Axios.put("http://localhost:3001/changeUserName", {
      email: newUsername,
      id: id,
    }).then((response) => {
      // console.log("completed");
      alert("Your Email has been successfuly updated");

      GetAdmins();
    });
  };
  useEffect(() => {
    GetAdmins();
  }, []);
  return (
    <div className="App" style={{ backgroundColor: "#F3F3FC" }}>
      {/* <Header /> */}
      <HeaderMain />
      <Form
        className="main-form"
        style={{
          marginTop: "3%",
          backgroundColor: "white",
          width: "80%",
          borderRadius: "5px",
          padding: "2%",
          boxShadow: "1px 2px 3px 2px black",
        }}
      >
        <h1>Registration</h1>{" "}
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
            <select
              onChange={(e) => {
                setRoleReg(e.target.value);
              }}
              style={{
                height: "35px",
                width: "100%",
                backgroundColor: "lightGrey",
                borderRadius: "5px",
                border: "none",
              }}
            >
              <option>Choose Role</option>
              <option value="Manager">Manager</option>
              <option value="Admin">Admin</option>
            </select>
          </Form.Field>
          <Form.Field width={4}>
            <label>Store</label>
            <select
              onChange={(e) => {
                setStoreReg(e.target.value.toUpperCase());
              }}
              style={{
                height: "35px",
                width: "100%",
                backgroundColor: "lightGrey",
                borderRadius: "5px",
                border: "none",
              }}
            >
              <option>Choose Store</option>
              <option value="Apopka">Apopka</option>
              <option value="Casselberry">Casselberry</option>
              <option value="Clearwater">Clearwater</option>
              <option value="Fort Lauderdale">Fort Lauderdale</option>
              <option value="Fort Myers">Fort Myers</option>
              <option value="Lakeland">Lakeland</option>
              <option value="Sarasota">Sarasota</option>
              <option value="Tampa">Tampa</option>
              <option value="West Palm Beach">West Palm Beach</option>
              <option value="All">All</option>
            </select>
            {/* <Input
              fluid
              placeholder="Apopka, Sarasota, Ft. Lauderdale"
              onChange={(e) => {
                setStoreReg(e.target.value);
              }}
            /> */}
          </Form.Field>
        </Form.Group>
        <Button type="reset" onClick={register}>
          Register Admin
        </Button>
        <p>* Managers will have Store front access only.</p>
        <p>* Admins will have backend access. </p>
      </Form>
      {/* <Segment
        style={{
          overflow: "auto",
          maxHeight: "500px",
          width: "500px",

          boxShadow: "5px 10px 8px gray",
        }}
      > */}{" "}
      <div
        style={{
          backgroundColor: "white",
          marginLeft: "5%",
          marginRigth: "5%",
          marginTop: "5%",
          boxShadow: "1px 2px 3px 1px black",
        }}
      >
        <h2>Users</h2>
        {Object.keys(admins).map((user, i) => {
          return (
            //
            <Modal
              style={{
                height: "450px",
                marginTop: "20%",
                marginLeft: "20%",
              }}
              onClose={() => setOpen(false)}
              onOpen={() => setOpen(true)}
              open={open[user]}
              trigger={
                <Button
                  style={{
                    margin: "1%",
                    padding: "1%",
                    boxShadow: "-1px 1px 1px 1px #888888",
                    // border: "1px solid #888888",
                    opacity: ".7",
                    borderRadius: "5px",
                  }}
                >
                  {" "}
                  {admins[user].first_name + " " + admins[user].last_name}
                </Button>
              }
            >
              <Modal.Content style={{ height: "350" }}>
                <h2>
                  {" "}
                  {admins[user].first_name + " " + admins[user].last_name}
                </h2>

                <p>Role: {admins[user].role}</p>

                <p>Location: {admins[user].store}</p>
                <Form>
                  <Form.Field>
                    <label>New User Name</label>
                    <input
                      onChange={(i) => {
                        setNewUsername(i.target.value);
                      }}
                      placeholder="Example@email.com"
                    />
                  </Form.Field>
                  <Button
                    onClick={() => {
                      ChangeUserName(admins[user].id);
                    }}
                    type="submit"
                  >
                    Change User Name
                  </Button>
                  <Form.Field>
                    <label>New Password</label>
                    <input type="password" placeholder="Password" />
                  </Form.Field>
                  <Form.Field>
                    <label>Verify New Password</label>
                    <input
                      onChange={(o) => {
                        setNewPassword(o.target.value);
                      }}
                      type="password"
                      placeholder="Password"
                    />
                  </Form.Field>

                  <Button
                    onClick={() => {
                      ChangePassword(admins[user].id);
                    }}
                    type="reset"
                  >
                    Change Password
                  </Button>
                </Form>
              </Modal.Content>
              <Modal.Actions>Click outside the box to close.</Modal.Actions>
            </Modal>
            //
          );
        })}
      </div>
      {/* </Segment> */}
      <footer
        style={{ backgroundColor: "#F3F3FC", height: "100px", width: "100%" }}
      ></footer>
    </div>
  );
}

export default AddAdmin;
