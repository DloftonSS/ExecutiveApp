import {
  Card,
  // Link,
  Checkbox,
  Table,
  Icon,
  Feed,
  Input,
  Button,
  // Item,
} from "semantic-ui-react";
import React, { useState, useEffect } from "react";

import Header from "../components/header";

import ExectuiveNotes from "../components/ExecutiveNotes";
import ExecutiveData from "../components/ExecutiveData";
// import AddExNote from "../components/AddExecutiveNote";
// import DashboardNewRequest from "../components/DashboardNewRequests";
import ExecutiveRequests from "../components/ExecutiveRequests";

function ExecutiveAccount(props) {
  const id = props.match.params.id;

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
        <div
          style={{
            display: "flex",
            padding: ".5rem",
            alignItems: "top",
          }}
        >
          <ExecutiveData id={id} />
          {/* <DashboardNotes /> */}
          <ExectuiveNotes />
        </div>
        {/* Row Two */}
        <div style={{ display: "flex", padding: ".5rem", alignItems: "top" }}>
          <ExecutiveRequests />

          {/* <AddExNote /> */}
        </div>
        {/* Row Three */}
        {/* <ExectuiveNotes /> */}
        <div
          style={{ display: "flex", padding: ".5rem", alignItems: "top" }}
        ></div>
      </div>
    </div>
  );
}

export default ExecutiveAccount;
