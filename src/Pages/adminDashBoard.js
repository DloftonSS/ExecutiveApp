import React, { useState, useEffect, Input, Form } from "react";
import { useParams } from "react-router";
import AdminHeader from "../components/header";
// import Navigation from "../components/navigation";
import { Route, Redirect, withRouter } from "react-router-dom";
import NewMembers from "../components/newMembers";
import DashboardNotes from "../components/DashboardNotes";
import DashboardNewRequest from "../components/DashboardNewRequests";
import OldestRequests from "../components/oldestRequests";
import SideChat from "../components/SideChat";
import "./CSS/dashboard.css";
import Axios from "axios";
import { Header, Icon, Modal, Button } from "semantic-ui-react";
// import { useHistory } from "react-router-dom";
// import { useSelector } from "react-redux";

// import { Container } from "semantic-ui-react";
// import axios from "axios";

function AdminDashBoard() {
  const [open, setOpen] = React.useState(false);
  // const [newFirstName, setNewFirstName] = useState("");
  // const [newLastName, setNewLastName] = useState("");
  // const [newEmail, setNewEmail] = useState("");
  // const [newPassword, setNewPassword] = useState("");
  // const [open, setOpen] = React.useState(false);
  // //GETTING DETAILS
  // const [adminDetails, setAdminDetails] = useState("");
  // const { id } = useParams();
  // const getAdminInfo = () => {
  //   // Axios.get("https://executive-app.herokuapp.com/adminData").then(
  //   //   (response) => {
  //   Axios.get("http://localhost:3001/adminData").then((response) => {
  //     const adminID = response.data[id];
  //     // console.log(id);
  //     // console.log(adminID);
  //     setAdminDetails(adminID);
  //   });
  // };

  // //CHANGE FIRST

  // const ChangeFirst = (id) => {
  //   // Axios.put("https://executive-app.herokuapp.com/changeAdminFirst", {
  //   Axios.put("http://localhost:3001/changeAdminFirst", {
  //     firstName: newFirstName,
  //     id: id,
  //   }).then((response) => {
  //     // console.log("completed");
  //     getAdminInfo();
  //   });
  // };

  // //CHANGE LAST
  // const ChangeLast = (id) => {
  //   // Axios.put("https://executive-app.herokuapp.com/changeAdminLast", {
  //   Axios.put("http://localhost:3001/changeAdminLast", {
  //     lastName: newLastName,
  //     id: id,
  //   }).then((response) => {
  //     // console.log("completed");
  //     getAdminInfo();
  //   });
  // };
  // //CHANGE EMAIL
  // const ChangeEmail = (id) => {
  //   // Axios.put("https://executive-app.herokuapp.com/changeAdminEmail", {
  //   Axios.put("http://localhost:3001/changeAdminEmail", {
  //     email: newEmail,
  //     id: id,
  //   }).then((response) => {
  //     // console.log("completed");
  //     getAdminInfo();
  //   });
  // };
  // //CHAGNE PASSWORD
  // const ChangePassword = (id) => {
  //   // Axios.put("https://executive-app.herokuapp.com/changeAdminPassword", {
  //   Axios.put("http://localhost:3001/changeAdminPassword", {
  //     password: newPassword,
  //     id: id,
  //   }).then((response) => {
  //     // console.log("completed");
  //     getAdminInfo();
  //   });
  // };

  useEffect(() => {
    //LOAD ADMIN DATA
    // getAdminInfo();
  }, []);

  return (
    <div
      className="main"
      style={{
        backgroundColor: "black",
      }}
    >
      {/* WHATS NEW MODAL */}
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button>Notifications</Button>}
        style={{ height: "400px" }}
      >
        <Modal.Header>What's New!</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Header>Update: October 26, 2021</Header>
            <h3>Member Account</h3>

            <p>. When creating a note the customer's name auto fills.</p>
            <p>. Hovering Customer Image reveals demographics.</p>

            <p>
              . Member Numbers can now be added manually on the member account
              page
            </p>
            <h3>Requests</h3>
            <p>
              . You can now specify the source a requested item is coming from.
            </p>
            <p>
              . A request note that is updated on the members account page will
              auto fill customer's name.
            </p>
            <h3>Customer Portal</h3>
            <p>
              . Customer can now see their requests, item, status, and last date
              modified.
            </p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          {/* <Button color="black" onClick={() => setOpen(false)}>
            Nope
          </Button> */}
          <Button
            content="OK , got it."
            labelPosition="right"
            icon="checkmark"
            onClick={() => setOpen(false)}
            positive
          />
        </Modal.Actions>
      </Modal>
      {/* HOLDING THE INFO FOR EDITING AND SHOWING ADMIN NAME */}
      {/* START EDIT ADMIN PROFILE */}
      {/* <div className="admin-info">
        <h3 style={{ float: "right", color: "white" }}>
          {adminDetails.first_name} {""} {adminDetails.last_name}
        </h3>
        <span
          style={{
            position: "relative",
            float: "right",
          }}
        >
          <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={
              <Icon name="edit" style={{ color: "white" }} size="large"></Icon>
            }
          >
            <Modal.Header>Edit Personal Details</Modal.Header>

            <Modal.Content style={{ float: "center" }}>
              <Header>First Name</Header>
              <input
                onChange={(e) => {
                  setNewFirstName(e.target.value);
                }}
                placeholder="first name"
                Value={adminDetails.first_name}
                style={{
                  height: "30px",
                  width: "300px",
                  marginBottom: "5px",
                }}
              ></input>
              <Button
                size="mini"
                color="black"
                onClick={() => {
                  ChangeFirst(adminDetails.id);
                }}
              >
                Change First
              </Button>

              <Header>Last Name</Header>
              <input
                onChange={(t) => {
                  setNewLastName(t.target.value);
                }}
                placeholder="last name"
                Value={adminDetails.last_name}
                style={{
                  height: "30px",
                  width: "300px",
                  marginBottom: "5px",
                }}
              ></input>
              <Button
                size="mini"
                color="black"
                onClick={() => {
                  ChangeLast(adminDetails.id);
                }}
              >
                Change Last
              </Button>
              <Header>Email</Header>
              <input
                onChange={(y) => {
                  setNewEmail(y.target.value);
                }}
                placeholder="example@email.com"
                Value={adminDetails.email}
                style={{
                  height: "30px",
                  width: "300px",
                  marginBottom: "5px",
                }}
              ></input>
              <Button
                size="mini"
                color="black"
                onClick={() => {
                  ChangeEmail(adminDetails.id);
                }}
              >
                Change Email
              </Button>

              <Header>Password</Header>
              <input
                onChange={(o) => {
                  setNewPassword(o.target.value);
                }}
                placeholder="********"
                style={{
                  height: "30px",
                  width: "300px",
                  marginBottom: "5px",
                }}
              ></input>

              <Button
                size="mini"
                color="black"
                onClick={() => {
                  ChangePassword(adminDetails.id);
                }}
              >
                Change Password
              </Button>
            </Modal.Content>
            <Modal.Actions>
              <Button
                content="Done"
                labelPosition="right"
                icon="checkmark"
                onClick={() => setOpen(false)}
                positive
              />
            </Modal.Actions>
          </Modal>
        </span>
      </div> */}
      {/* END EDIT ADMIN PROFILE */}
      <AdminHeader />
      <div
        style={{
          width: "100%",
          overflowY: "scroll",
          scrollbarWidth: "1px",
        }}
      >
        <div
          style={{
            display: "flex",
            padding: ".5rem",
            alignItems: "top",
            backgroundColor: "black",
          }}
        >
          <NewMembers />
          <DashboardNotes />
          {/* <SideChat /> */}
        </div>
        {/* Row Two */}
        <div style={{ display: "flex", padding: ".5rem", alignItems: "top" }}>
          <DashboardNewRequest />
        </div>
        <div style={{ display: "flex", padding: ".5rem", alignItems: "top" }}>
          <OldestRequests />
        </div>
      </div>
      {/* <Header /> */}
      {/* {/* <Navigation /> */}
      {/* <NewMembers /> */}
      {/* <DashboardNotes /> */}
      {/* <DashboardNewRequest /> */}
    </div>
  );
}

export default withRouter(AdminDashBoard);
