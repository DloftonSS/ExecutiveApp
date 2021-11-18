import { Card, Table, Button, Icon } from "semantic-ui-react";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

function NewMembers() {
  const [memberList, setMemberList] = useState("");
  const acknowledged = "Yes";

  const Responded = (id) => {
    Axios.put("https://executive-app.herokuapp.com/adminResponded", {
      // Axios.put("http://localhost:3001/adminResponded", {
      acknowledged: acknowledged,
      id: id,
    }).then(() => {
      // console.log("clicked");
    });
  };

  useEffect(() => {
    //OLD NOT USING ON DASHBOARD

    // Axios.get("https://executive-app.herokuapp.com/api/getMembers").then(
    //   (response) => {
    // Axios.get("http://localhost:3001/api/getMembers").then((response) => {
    // setMemberList(response.data);
    // console.log(response.data);
    // });

    //NEW PENDING CARD MEMBERS

    Axios.get("https://executive-app.herokuapp.com/PendingCardMembers").then(
      (response) => {
        // Axios.get("http://localhost:3001/PendingCardMembers").then((response) => {
        setMemberList(response.data);
        // console.log(response.data);
      }
    );
  }, []);

  return (
    <div className="newMembers" style={{ padding: "1%", width: "100%" }}>
      <Card fluid style={{ marginRight: "10px", height: "670px" }}>
        <Card.Content>
          <Card.Header>Pending Card</Card.Header>
        </Card.Content>
        <Card.Content style={{ overflowY: "scroll", height: "100%" }}>
          <Table celled striped color="red">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Initial Contact</Table.HeaderCell>
                <Table.HeaderCell>First Name</Table.HeaderCell>
                <Table.HeaderCell>Last Name</Table.HeaderCell>
                <Table.HeaderCell>Phone</Table.HeaderCell>
                <Table.HeaderCell>Email</Table.HeaderCell>
                <Table.HeaderCell>Card</Table.HeaderCell>
                <Table.HeaderCell>Date Joined</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {Object.keys(memberList).map((member, i) => {
                return (
                  <Table.Row key={member.id}>
                    <Table.Cell>
                      <Button
                        style={{
                          width: "100px",
                          heigth: "50px",
                          backgroundColor: "#768D94",
                          color: "white",
                        }}
                        onClick={() => {
                          Responded(memberList[member].id);
                        }}
                      >
                        {/* <Icon name="alarm"></Icon> */}
                        {memberList[member].acknowledged}
                      </Button>
                    </Table.Cell>
                    <Table.Cell>
                      <Link
                        style={{ color: "black" }}
                        to={`/executiveAccount/${memberList[member].id}`}
                      >
                        {memberList[member].first_name}
                      </Link>
                    </Table.Cell>
                    <Table.Cell>
                      <Link
                        style={{ color: "black" }}
                        to={`/executiveAccount/${memberList[member].id}`}
                      >
                        {memberList[member].last_name}
                      </Link>
                    </Table.Cell>
                    <Table.Cell>{memberList[member].phone}</Table.Cell>
                    <Table.Cell>{memberList[member].email}</Table.Cell>
                    <Table.Cell>{memberList[member].card}</Table.Cell>
                    <Table.Cell>{memberList[member].dateJoined}</Table.Cell>
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

export default NewMembers;
