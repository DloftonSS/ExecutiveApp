import React, { useEffect, useState } from "react";
// import API from "../../utils/API";
import { Card, Table, Button, Dropdown, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Axios from "axios";
import Header from "../components/header";

// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";

function AllRequests() {
  const [requestList, setRequestList] = useState("");

  const options = [
    { key: 1, text: "Pending ", value: 1 },
    { key: 2, text: "On Hold", value: 2 },
    { key: 3, text: "Returned", value: 3 },
    { key: 4, text: "Completed", value: 4 },
  ];

  useEffect(() => {
    Axios.get("https://executive-app.herokuapp.com/newRequests").then(
      (response) => {
        // Axios.get("http://localhost:3001/newRequests").then((response) => {
        setRequestList(response.data);
        console.log(response.data);
      }
    );
  }, []);

  return (
    <div>
      <Header />
      <Card fluid style={{ marginRight: "10px", height: "350px" }}>
        <Card.Content>
          <Card.Header>All Requests</Card.Header>
        </Card.Content>

        <Card.Content style={{ overflowY: "scroll", height: "100%" }}>
          <Table celled striped color="red">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Executive Name</Table.HeaderCell>
                <Table.HeaderCell>Item</Table.HeaderCell>
                <Table.HeaderCell>Concierge</Table.HeaderCell>
                <Table.HeaderCell>Status</Table.HeaderCell>
                <Table.HeaderCell>Date Created</Table.HeaderCell>
                <Table.HeaderCell>Date Updated</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {Object.keys(requestList).map((request, i) => {
                return (
                  <Table.Row key={request.id}>
                    <Table.Cell>
                      <Link
                        style={{ color: "black" }}
                        to={`/executiveAccount/${requestList[request].id}`}
                      >
                        {requestList[request].first_name +
                          " " +
                          requestList[request].last_name}
                      </Link>
                    </Table.Cell>

                    <Table.Cell>{requestList[request].item}</Table.Cell>
                    <Table.Cell>
                      {requestList[request].admin_first +
                        " " +
                        requestList[request].admin_last}
                    </Table.Cell>
                    <Table.Cell>
                      <Dropdown clearable options={options} selection />
                      {requestList[request].status}
                    </Table.Cell>
                    <Table.Cell>{requestList[request].date_created}</Table.Cell>
                    <Table.Cell>{requestList[request].date_updated}</Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table>
        </Card.Content>
      </Card>
    </div>
  );
}

export default AllRequests;
