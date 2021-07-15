import React from "react";
import Header from "../components/header";
import Navigation from "../components/navigation";
import NewMembers from "../components/newMembers";
import DashboardNotes from "../components/DashboardNotes";
import DashboardNewRequest from "../components/DashboardNewRequests";

function AdminDashBoard() {
  return (
    <div>
      <Header />
      <Navigation />
      <NewMembers />
      <DashboardNotes />
      <DashboardNewRequest />
    </div>
  );
}

export default AdminDashBoard;
