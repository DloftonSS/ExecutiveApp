import { Card, Table } from "semantic-ui-react";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import Header from "../components/header";

function AllMembers() {
  const [memberList, setMemberList] = useState("");

  useEffect(() => {
    Axios.get("https://executive-app.herokuapp.com/api/getMembers").then(
      (response) => {
        // Axios.get("http://localhost:3001/api/getAllMembers").then((response) => {
        setMemberList(response.data);
        console.log(response.data);
      }
    );
  }, []);

  return (
    <div>
      <Header />
      <div className="newMembers" style={{ padding: "1%", width: "100%" }}>
        <Card fluid style={{ marginRight: "10px", height: "570px" }}>
          <Card.Content>
            <Card.Header>All Members</Card.Header>
          </Card.Content>
          <Card.Content style={{ overflowY: "scroll", height: "100%" }}>
            <Table celled striped color="red">
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>First Name</Table.HeaderCell>
                  <Table.HeaderCell>Last Name</Table.HeaderCell>
                  <Table.HeaderCell>Phone</Table.HeaderCell>
                  <Table.HeaderCell>Email</Table.HeaderCell>
                  <Table.HeaderCell>Date Joined</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {Object.keys(memberList).map((member, i) => {
                  return (
                    <Table.Row key={member.id}>
                      <Table.Cell>{memberList[member].first_name}</Table.Cell>
                      <Table.Cell>{memberList[member].last_name}</Table.Cell>
                      <Table.Cell>{memberList[member].phone}</Table.Cell>
                      <Table.Cell>{memberList[member].email}</Table.Cell>
                      <Table.Cell>{memberList[member].address}</Table.Cell>
                    </Table.Row>
                  );
                })}
              </Table.Body>
            </Table>
          </Card.Content>
        </Card>
      </div>
    </div>
  );
}

export default AllMembers;
