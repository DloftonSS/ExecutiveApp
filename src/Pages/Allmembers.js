import {
  Card,
  Table,
  Icon,
  Checkbox,
  Modal,
  Button,
  Image,
  Header,
} from "semantic-ui-react";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import HeaderMain from "../components/header";
import { Link } from "react-router-dom";

function AllMembers() {
  const [memberList, setMemberList] = useState("");
  const [expiredMembers, setExpiredMembers] = useState("");
  const [expiringMembers, setExpiringMembers] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpen] = React.useState(false);
  const [openTwo, setOpenTwo] = React.useState(false);

  // const GetExpired = () => {
  //   Axios.get("http://localhost:3001/expiredMembers").then((response) => {
  //     setExpiredMembers(response.data);
  //   });
  // };

  useEffect(() => {
    Axios.get("https://executive-app.herokuapp.com/api/getAllMembers").then(
      (response) => {
        // Axios.get("http://localhost:3001/api/getAllMembers").then((response) => {
        setMemberList(response.data);
        // console.log(response.data);
      }
    );
    Axios.get("https://executive-app.herokuapp.com/expiredMembers").then(
      (response) => {
        // Axios.get("http://localhost:3001/expiredMembers").then((response) => {
        setExpiredMembers(response.data);
      }
    );
    Axios.get("https://executive-app.herokuapp.com/expiringMembers").then(
      (response) => {
        // Axios.get("http://localhost:3001/expiringMembers").then((response) => {
        setExpiringMembers(response.data);
      }
    );
  }, []);
  // fjkdls;
  return (
    <div>
      <HeaderMain />
      <div
        className="newMembers"
        style={{ padding: "1%", width: "100%", height: "100%" }}
      >
        <Card fluid style={{ marginRight: "10px", height: "100%" }}>
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
            <span style={{ position: "relative", float: "right" }}>
              <Modal
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                // onClick={() => GetExpired}
                open={open}
                trigger={<Button>Expired</Button>}
              >
                <Modal.Header>Expired Customers</Modal.Header>
                <input
                  type="text"
                  placeholder="Search First, Last, Phone, or Email"
                  style={{ width: "250px", height: "30px", marginLeft: "2%" }}
                  onChange={(event) => {
                    setSearchTerm(event.target.value);
                  }}
                ></input>
                <Card.Content style={{ overflowY: "scroll", height: "100%" }}>
                  <Table celled striped color="red">
                    <Table.Header>
                      <Table.Row>
                        <Table.HeaderCell>#</Table.HeaderCell>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Phone</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Address</Table.HeaderCell>
                        <Table.HeaderCell>Expiring</Table.HeaderCell>
                      </Table.Row>
                    </Table.Header>
                    <Table.Body>
                      {Object.keys(expiredMembers)
                        .filter((exp) => {
                          if (searchTerm == "") {
                            return exp;
                          } else if (
                            expiredMembers[exp].first_name
                              .toLowerCase()
                              .includes(searchTerm.toLowerCase()) ||
                            expiredMembers[exp].last_name
                              .toLowerCase()
                              .includes(searchTerm.toLowerCase())
                          ) {
                            return exp;
                          } else if (
                            expiredMembers[exp].email
                              .toLowerCase()
                              .includes(searchTerm.toLowerCase()) ||
                            expiredMembers[exp].phone
                              .toLowerCase()
                              .includes(searchTerm.toLowerCase()) ||
                            expiredMembers[exp].number
                              .toLowerCase()
                              .includes(searchTerm.toLowerCase())
                          ) {
                            return exp;
                          }
                        })
                        .map((exp, i) => {
                          return (
                            <Table.Row key={exp.id}>
                              <Table.Cell>
                                {expiredMembers[exp].number}
                              </Table.Cell>
                              <Table.Cell>
                                <Link
                                  style={{ color: "black" }}
                                  to={`/executiveAccount/${expiredMembers[exp].id}`}
                                >
                                  {expiredMembers[exp].first_name}
                                </Link>
                              </Table.Cell>
                              <Table.Cell>
                                {" "}
                                <Link
                                  style={{ color: "black" }}
                                  to={`/executiveAccount/${expiredMembers[exp].id}`}
                                >
                                  {expiredMembers[exp].last_name}
                                </Link>
                              </Table.Cell>
                              <Table.Cell>
                                {expiredMembers[exp].phone}
                              </Table.Cell>
                              <Table.Cell>
                                <a style={{ color: "black" }} href="mailto:">
                                  {expiredMembers[exp].email}
                                </a>
                              </Table.Cell>
                              <Table.Cell>
                                {expiredMembers[exp].address}
                              </Table.Cell>
                              <Table.Cell>
                                {expiredMembers[exp].expiring}
                              </Table.Cell>
                            </Table.Row>
                          );
                        })}
                    </Table.Body>
                  </Table>
                </Card.Content>
                <Modal.Content style={{ float: "center" }}></Modal.Content>
                <Modal.Actions>
                  <Button color="black" onClick={() => setOpen(false)}>
                    Done
                  </Button>
                  {/* <Button
                    content="Submit Change"
                    labelPosition="right"
                    icon="checkmark"
                    onClick={() => setOpen(false)}
                    positive
                  /> */}
                </Modal.Actions>
              </Modal>
              <Modal
                onClose={() => setOpenTwo(false)}
                onOpen={() => setOpenTwo(true)}
                // onClick={() => GetExpired}
                open={openTwo}
                trigger={<Button>Expiring</Button>}
              >
                <Modal.Header>Expiring Customers</Modal.Header>
                <input
                  type="text"
                  placeholder="Search First, Last, Phone, or Email"
                  style={{ width: "250px", height: "30px", marginLeft: "2%" }}
                  onChange={(event) => {
                    setSearchTerm(event.target.value);
                  }}
                ></input>
                <Card.Content style={{ overflowY: "scroll", height: "100%" }}>
                  <Table celled striped color="red">
                    <Table.Header>
                      <Table.Row>
                        <Table.HeaderCell>#</Table.HeaderCell>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Phone</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Address</Table.HeaderCell>
                        <Table.HeaderCell>Expiring</Table.HeaderCell>
                      </Table.Row>
                    </Table.Header>
                    <Table.Body>
                      {Object.keys(expiringMembers)
                        .filter((ing) => {
                          if (searchTerm == "") {
                            return ing;
                          } else if (
                            expiringMembers[ing].first_name
                              .toLowerCase()
                              .includes(searchTerm.toLowerCase()) ||
                            expiringMembers[ing].last_name
                              .toLowerCase()
                              .includes(searchTerm.toLowerCase())
                          ) {
                            return ing;
                          } else if (
                            expiringMembers[ing].email
                              .toLowerCase()
                              .includes(searchTerm.toLowerCase()) ||
                            expiringMembers[ing].phone
                              .toLowerCase()
                              .includes(searchTerm.toLowerCase()) ||
                            expiringMembers[ing].number
                              .toLowerCase()
                              .includes(searchTerm.toLowerCase())
                          ) {
                            return ing;
                          }
                        })
                        .map((ing, i) => {
                          return (
                            <Table.Row key={ing.id}>
                              <Table.Cell>
                                {expiringMembers[ing].number}
                              </Table.Cell>
                              <Table.Cell>
                                <Link
                                  style={{ color: "black" }}
                                  to={`/executiveAccount/${expiringMembers[ing].id}`}
                                >
                                  {expiringMembers[ing].first_name}
                                </Link>
                              </Table.Cell>
                              <Table.Cell>
                                {" "}
                                <Link
                                  style={{ color: "black" }}
                                  to={`/executiveAccount/${expiringMembers[ing].id}`}
                                >
                                  {expiringMembers[ing].last_name}
                                </Link>
                              </Table.Cell>
                              <Table.Cell>
                                {expiringMembers[ing].phone}
                              </Table.Cell>
                              <Table.Cell>
                                <a style={{ color: "black" }} href="mailto:">
                                  {expiringMembers[ing].email}
                                </a>
                              </Table.Cell>
                              <Table.Cell>
                                {expiringMembers[ing].address}
                              </Table.Cell>
                              <Table.Cell>
                                {expiringMembers[ing].expiring}
                              </Table.Cell>
                            </Table.Row>
                          );
                        })}
                    </Table.Body>
                  </Table>
                </Card.Content>
                <Modal.Content style={{ float: "center" }}></Modal.Content>
                <Modal.Actions>
                  <Button color="black" onClick={() => setOpenTwo(false)}>
                    Done
                  </Button>
                  {/* <Button
                    content="Submit Change"
                    labelPosition="right"
                    icon="checkmark"
                    onClick={() => setOpen(false)}
                    positive
                  /> */}
                </Modal.Actions>
              </Modal>

              {/* <Icon
                style={{ float: "right" }}
                color="red"
                name="edit outline"
              /> */}
              {/* </Link> */}
            </span>
          </Card.Content>
          <Card.Content style={{ overflowY: "scroll", height: "100%" }}>
            <Table celled striped color="red">
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>#</Table.HeaderCell>
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
                        .includes(searchTerm.toLowerCase()) ||
                      memberList[member].number
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
                    ) {
                      return member;
                    }
                  })
                  .map((member, i) => {
                    return (
                      <Table.Row key={member.id}>
                        <Table.Cell>{memberList[member].number}</Table.Cell>
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
