import React, { useEffect, useState } from "react";
// import API from "../../utils/API";
import { Card, Table, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Axios from "axios";
import NewMembers from "../components/newMembers";

// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";

async function DashboardNewRequest() {
  const [requestList, setRequestList] = useState("");
  const [requestListOld, setRequestListOld] = useState("");
  useEffect(() => {
    Axios.get("https://executive-app.herokuapp.com/newRequests").then(
      (response) => {
        // Axios.get("http://localhost:3001/newRequests").then((response) => {
        setRequestList(response.data);
        // console.log(response.data);
      }
    );

    Axios.get("https://executive-app.herokuapp.com/oldRequests").then(
      (response) => {
        // Axios.get("http://localhost:3001/oldRequests").then((response) => {
        setRequestListOld(response.data);
        // console.log(response.data);
      }
    );
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridGap: 20,
        backgroundColor: "white",
        width: "100%",
        margin: "1%",
        padding: "1%",
        borderRadius: "5px",
      }}
    >
      <div>
        {" "}
        <h3>Pending Card</h3>
        <NewMembers />
      </div>
      <div style={{ border: "none" }}>
        {" "}
        <h3>Newest Requests</h3>
        <Segment
          style={{
            overflow: "auto",
            maxHeight: "500px",
            width: "500px",

            boxShadow: "5px 10px 8px #F3F3FC",
          }}
        >
          {" "}
          {Object.keys(requestList).map((request, i) => {
            let created = new Date(requestList[request].date_created)

              .toUTCString()
              .split(" ")
              .slice(1, 4)
              .join(" ");
            return (
              <Card
                style={{
                  width: "500px",
                  boxShadow: "5px 10px 8px black",
                  backgroundColor: "black",
                  border: "1px solid black",
                }}
              >
                <Card.Content>
                  <h2 style={{ color: "white" }}>
                    {requestList[request].memberName}
                  </h2>
                  <Card.Meta style={{ color: "white" }}>
                    {" "}
                    Item: {requestList[request].item}
                  </Card.Meta>
                  <Card.Description style={{ color: "lightgray" }}>
                    {" "}
                    Sku: {requestList[request].sku}
                  </Card.Description>
                  <Card.Meta style={{ color: "white" }}>
                    {" "}
                    Status: {requestList[request].status}
                  </Card.Meta>
                  <Card.Description style={{ color: "lightgray" }}>
                    {" "}
                    Created: {created}
                  </Card.Description>
                </Card.Content>
              </Card>
            );
          })}
        </Segment>
      </div>
      <div>
        {" "}
        <h3>Oldest Requests</h3>
        <Segment
          style={{
            overflow: "auto",
            maxHeight: "500px",
            width: "500px",

            boxShadow: "5px 10px 8px #F3F3FC",
          }}
        >
          {" "}
          {Object.keys(requestListOld).map((old, i) => {
            let oldcreated = new Date(requestListOld[old].date_created)

              .toUTCString()
              .split(" ")
              .slice(1, 4)
              .join(" ");
            return (
              <Card
                style={{
                  width: "500px",
                  boxShadow: "5px 10px 8px black",
                  backgroundColor: "black",
                  border: "1px solid black",
                }}
              >
                <Card.Content>
                  <h2 style={{ color: "white" }}>
                    {requestListOld[old].memberName}
                  </h2>
                  <Card.Meta style={{ color: "white" }}>
                    {" "}
                    Item: {requestListOld[old].item}
                  </Card.Meta>
                  <Card.Description style={{ color: "lightgray" }}>
                    {" "}
                    Sku: {requestListOld[old].sku}
                  </Card.Description>
                  <Card.Meta style={{ color: "white" }}>
                    {" "}
                    Status: {requestListOld[old].status}
                  </Card.Meta>
                  <Card.Description style={{ color: "lightgray" }}>
                    {" "}
                    Created: {oldcreated}
                  </Card.Description>
                </Card.Content>
              </Card>
            );
          })}
        </Segment>
      </div>
    </div>
  );
}

export default DashboardNewRequest;
