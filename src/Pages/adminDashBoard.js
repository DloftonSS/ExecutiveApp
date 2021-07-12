import React from "react";
import Navigation from "../components/navigation";
import NewMembers from "../components/newMembers";
import DashboardNotes from "../components/DashboardNotes";

function AdminDashBoard() {
  return (
    <div>
      <Navigation />
      Dashboard
      <NewMembers />
      <DashboardNotes />
    </div>
  );
}

export default AdminDashBoard;
