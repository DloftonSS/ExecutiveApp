import React from "react";
import Header from "../components/header";
// import Navigation from "../components/navigation";
import { Route, Redirect, withRouter } from "react-router-dom";
import NewMembers from "../components/newMembers";
import DashboardNotes from "../components/DashboardNotes";
import DashboardNewRequest from "../components/DashboardNewRequests";
import OldestRequests from "../components/oldestRequests";
import SideChat from "../components/SideChat";
import "./CSS/dashboard.css";
// import { useHistory } from "react-router-dom";
// import { useSelector } from "react-redux";

// import { Container } from "semantic-ui-react";
// import axios from "axios";

function AdminDashBoard() {
  return (
    <div
      className="main"
      style={{
        backgroundColor: "black",
      }}
    >
      <Header />

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
