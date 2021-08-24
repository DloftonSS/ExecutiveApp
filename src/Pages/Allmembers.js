import { Card, Table } from "semantic-ui-react";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import Header from "../components/header";
import { Link } from "react-router-dom";

function AllMembers() {
  const [memberList, setMemberList] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    Axios.get("https://executive-app.herokuapp.com/api/getMembers").then(
      (response) => {
        // Axios.get("http://localhost:3001/api/getAllMembers").then((response) => {
        setMemberList(response.data);
        // console.log(response.data);
      }
    );
  }, []);
  // fjkdls;
  return (
    <div>
      <Header />
      <div className="newMembers" style={{ padding: "1%", width: "100%" }}>
        <Card fluid style={{ marginRight: "10px", height: "570px" }}>
          <Card.Content>
            <Card.Header>All Members</Card.Header>
            <input
              type="text"
              placeholder="Search First, Last, Phone, or Email"
              style={{ width: "250px", height: "30px" }}
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            ></input>
          </Card.Content>
          <Card.Content style={{ overflowY: "scroll", height: "100%" }}>
            <Table celled striped color="red">
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>First Name</Table.HeaderCell>
                  <Table.HeaderCell>Last Name</Table.HeaderCell>
                  <Table.HeaderCell>Phone</Table.HeaderCell>
                  <Table.HeaderCell>Email</Table.HeaderCell>
                  <Table.HeaderCell>Address</Table.HeaderCell>
                  <Table.HeaderCell>Date Joined</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {Object.keys(memberList)
                  .filter((member) => {
                    if (searchTerm == "") {
                      return member;
                    } else if (
                      memberList[member].first_name
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                      memberList[member].last_name
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
                    ) {
                      return member;
                    } else if (
                      memberList[member].email
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                      memberList[member].phone
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
                    ) {
                      return member;
                    }
                  })
                  .map((member, i) => {
                    return (
                      <Table.Row key={member.id}>
                        <Table.Cell>
                          <Link
                            style={{ color: "black" }}
                            to={`/executiveAccount/${memberList[member].id}`}
                          >
                            {memberList[member].first_name}
                          </Link>
                        </Table.Cell>
                        <Table.Cell>
                          {" "}
                          <Link
                            style={{ color: "black" }}
                            to={`/executiveAccount/${memberList[member].id}`}
                          >
                            {memberList[member].last_name}
                          </Link>
                        </Table.Cell>
                        <Table.Cell>{memberList[member].phone}</Table.Cell>
                        <Table.Cell>
                          <a style={{ color: "black" }} href="mailto:">
                            {memberList[member].email}
                          </a>
                        </Table.Cell>
                        <Table.Cell>{memberList[member].address}</Table.Cell>
                        <Table.Cell>{memberList[member].dateJoined}</Table.Cell>
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
