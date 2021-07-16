// import React, { useEffect, useState } from "react";
// import API from "../../utils/API";
import { Card, Table } from "semantic-ui-react";
// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";

function DashboardNewRequest() {
  //   const [newRequests, setNewRequests] = useState("");
  //   const { token } = useSelector((state) => state.auth);

  //   async function loadRequests() {
  //     const options = {
  //       headers: {
  //         token: token,
  //       },
  //     };
  //     const requests = await API.loadNewRequests(options);

  //     setNewRequests(requests.data[0]);
  //   }
  //   useEffect(() => {
  //     loadRequests();
  //   }, []);

  return (
    <Card fluid style={{ marginRight: "10px", height: "350px" }}>
      <Card.Content>
        <Card.Header>New Requests</Card.Header>
      </Card.Content>

      <Card.Content style={{ overflowY: "scroll", height: "100%" }}>
        <Table celled striped color="red">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Executive Name</Table.HeaderCell>
              <Table.HeaderCell>Item</Table.HeaderCell>
              <Table.HeaderCell>Concierge</Table.HeaderCell>
              <Table.HeaderCell>Date</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body></Table.Body>
        </Table>
      </Card.Content>
    </Card>
  );
}

export default DashboardNewRequest;
