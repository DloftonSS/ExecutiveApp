import React, { useEffect } from "react"; 
import AdminHeader from "../components/header"; 
import { withRouter } from "react-router-dom"; 
import DashboardNotes from "../components/DashboardNotes";
import DashboardNewRequest from "../components/DashboardNewRequests";
import Stats from "../Pages/DashboardStats/Stats";
import AdminChat from "../components/Chat/Chat"; 
import "../Pages/CSS/dashboard.css"; 
import { Header, Modal, Button } from "semantic-ui-react"; 

function AdminDashBoard() {
  const [open, setOpen] = React.useState(false);

  useEffect(() => {}, []);

  return (
    <div
      className="main"
      style={{
        backgroundColor: "#F3F3FC", 
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
            <Header>Update: December 24, 2021</Header>
            <h3>Dashboard</h3>

            <p>
              . Hover over active users shows number needing initial contact
            </p>
            <p> </p>
            <h3>Members and Requests</h3>
            <p>. New layout for members and requests.</p>

            <p>. Quick edit for members account on All Members page.</p>
            <h3>Store Front</h3>
            <p>
              . Member registraction now has dropdowns for communication style
              and preferred store.
            </p>
            <p>
              . Warning to sign out and in to see newly registered customers
            </p>
            
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          
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
            backgroundColor: "#F3F3FC",
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
      
    </div>
  );
}

export default withRouter(AdminDashBoard);
