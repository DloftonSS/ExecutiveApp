import React, { useEffect, useState } from "react";
import Header from "../components/header";
// import Navigation from "../components/navigation";
import NewMembers from "../components/newMembers";
import DashboardNotes from "../components/DashboardNotes";
import DashboardNewRequest from "../components/DashboardNewRequests";

import { Container } from "semantic-ui-react";
// import axios from "axios";

function AdminDashBoard() {
  return (
    <div>
      <Header />
      <div
        style={{
          width: "100%",
          overflowY: "scroll",
          scrollbarWidth: "1px",
        }}
      >
        <div style={{ display: "flex", padding: ".5rem", alignItems: "top" }}>
          <NewMembers />
          <DashboardNotes />
        </div>
        {/* Row Two */}
        <div style={{ display: "flex", padding: ".5rem", alignItems: "top" }}>
          <DashboardNewRequest />
        </div>
        {/* Row Three */}
        <div
          style={{ display: "flex", padding: ".5rem", alignItems: "top" }}
        ></div>
      </div>

      {/* <Header /> */}
      {/* {/* <Navigation /> */}
      {/* <NewMembers /> */}
      {/* <DashboardNotes /> */}
      {/* <DashboardNewRequest /> */}
    </div>
  );
}

export default AdminDashBoard;
