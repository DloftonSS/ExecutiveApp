import React, { useState, useEffect, Input, Form } from "react";
import { useParams } from "react-router";
import AdminHeader from "../components/header";
// import Navigation from "../components/navigation";
import { Route, Redirect, withRouter } from "react-router-dom";
import NewMembers from "../components/newMembers";
import DashboardNotes from "../components/DashboardNotes";
import DashboardNewRequest from "../components/DashboardNewRequests";
import Stats from "../Pages/DashboardStats/Stats";
import AdminChat from "../components/Chat/Chat";
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
        // backgroundColor: "#CAD5E2",
      }}
    >
      {/* WHATS NEW MODAL */}
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={
          <Button style={{ margin: "25px", backgroundColor: "lightgreen" }}>
            Notifications
          </Button>
        }
        style={{ height: "400px", marginTop: "10%", marginLeft: "25%" }}
      >
        <Modal.Header>What's New!</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Header>Update: November 18, 2021</Header>
            <h3>Dashboard</h3>

            <p>. Dashboard new Look</p>
            <p>. Admin Chat Coming soon.</p>

            <p>. Quantity totals at top of page for easy reference.</p>
            <h3>Store Front</h3>
            <p>
              . Store front page allows for submitting new members and renewing
              memberships.
            </p>
            {/* <h3>All Requests</h3>
            <p>. New Status option "Offered".</p>
            <p></p>
            <h3>All Members</h3>
            <p>. Now shows card status and can update it.</p>
            <p></p> */}
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

      {/* END EDIT ADMIN PROFILE */}
      <AdminHeader />
      <div
        style={{
          width: "100%",
          overflowY: "scroll",
          scrollbarWidth: "1px",
        }}
      >
        {" "}
        <Stats />
        <div
          style={{
            display: "flex",
            padding: ".5rem",
            alignItems: "top",
            backgroundColor: "black",
          }}
        >
          {/* <NewMembers /> */}

          <DashboardNewRequest />
          {/* <SideChat /> */}
        </div>
        {/* Row Two */}
        <div style={{ display: "flex", padding: ".5rem", alignItems: "top" }}>
          <DashboardNotes />
          <AdminChat />
        </div>
        <div style={{ display: "flex", padding: ".5rem", alignItems: "top" }}>
          {/* <OldestRequests /> */}
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
