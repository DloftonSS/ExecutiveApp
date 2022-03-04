import React, { useEffect, useState } from "react";
// import API from "../../utils/API";
import { Card, Table } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Axios from "axios";

// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";

function OldestRequests() {
  const [requestList, setRequestList] = useState("");

  useEffect(() => {
    Axios.get("https://executive-app.herokuapp.com/newRequests").then(
      (response) => {
        // Axios.get("http://localhost:3001/oldRequests").then((response) => {
        setRequestList(response.data);
        // console.log(response.data);
      }
    );
  }, []);

  return (
    <Card
      fluid
      style={{ marginRight: "10px", height: "350px", marginBottom: "3%" }}
    >
      <Card.Content>
        <Card.Header>Oldest Requests</Card.Header>
      </Card.Content>

      <Card.Content style={{ overflowY: "scroll", height: "100%" }}>
        <Table celled striped color="red">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Executive Name</Table.HeaderCell>
              {/* <Table.HeaderCell>Category</Table.HeaderCell> */}
              <Table.HeaderCell>Item</Table.HeaderCell>
              {/* <Table.HeaderCell>sku</Table.HeaderCell> */}
              <Table.HeaderCell>status</Table.HeaderCell>
              <Table.HeaderCell>Date</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {Object.keys(requestList).map((request, i) => {
              let created = new Date(requestList[request].date_created)

                .toUTCString()
                .split(" ")
                .slice(1, 4)
                .join(" ");
              return (
                <Table.Row key={request.id}>
                  <Table.Cell>
                    <Link
                      style={{ color: "white" }}
                      // to={`/executiveAccount/${requestList[request].id}`}
                    >
                      {requestList[request].memberName}
                    </Link>
                  </Table.Cell>

                  {/* <Table.Cell>{requestList[request].category}</Table.Cell> */}
                  <Table.Cell>{requestList[request].item}</Table.Cell>
                  {/* <Table.Cell>{requestList[request].sku}</Table.Cell> */}
                  <Table.Cell>{requestList[request].status}</Table.Cell>
                  <Table.Cell>{created}</Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </Card.Content>
    </Card>
  );
}

export default OldestRequests;
