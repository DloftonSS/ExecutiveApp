import {
  Card,
  Table,
  Icon,
  Checkbox,
  Modal,
  Button,
  Image,
  Header,
  Input,
} from "semantic-ui-react";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import HeaderMain from "../components/header";
import { Link } from "react-router-dom";

function AllMembers() {
  const [memberList, setMemberList] = useState("");
  const [activeList, setActiveList] = useState("");
  const [expiredMembers, setExpiredMembers] = useState("");
  const [expiringMembers, setExpiringMembers] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTermTwo, setSearchTermTwo] = useState("");
  const [searchTermThree, setSearchTermThree] = useState("");
  const [searchTermFour, setSearchTermFour] = useState("");
  const [open, setOpen] = React.useState(false);
  const [openTwo, setOpenTwo] = React.useState(false);
  const [openThree, setOpenThree] = React.useState(false);

  useEffect(() => {
    // GET ALL MEMBERS
    Axios.get("https://executive-app.herokuapp.com/api/getAllMembers").then(
      (response) => {
        // Axios.get("http://localhost:3001/api/getAllMembers").then((response) => {
        setMemberList(response.data);
        // console.log(response.data);
      }
    );

    //GET ACTIVE ONLY MEMBERS
    Axios.get("https://executive-app.herokuapp.com/api/activeMembers").then(
      (response) => {
        // Axios.get("http://localhost:3001/api/activeMembers").then((response) => {
        setActiveList(response.data);
        // console.log(response.data);
      }
    );

    // GET EXPIRED MEMBERS
    Axios.get("https://executive-app.herokuapp.com/expiredMembers").then(
      (response) => {
        // Axios.get("http://localhost:3001/expiredMembers").then((response) => {
        setExpiredMembers(response.data);
      }
    );

    //GET EXPIRING MEMBERS
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
            <Input
              type="text"
              placeholder="Search First, Last, Phone, or Email"
              style={{ width: "250px", height: "30px" }}
              onChange={(event) => {
                setSearchTermFour(event.target.value);
              }}
            ></Input>
            <span style={{ position: "relative", float: "right" }}>
              {/* THIS IS WHERE THE ACTIVE ONLY MEMBERS MODAL STARTS */}
              <Modal
                onClose={() => setOpenThree(false)}
                onOpen={() => setOpenThree(true)}
                // onClick={() => GetExpired}
                open={openThree}
                trigger={<Button>Active</Button>}
                style={{ width: "1100px" }}
              >
                <Modal.Header>Active Customers</Modal.Header>
                <Input
                  type="text"
                  placeholder="Search First, Last, Phone, or Email"
                  style={{ width: "250px", height: "30px", marginLeft: "2%" }}
                  onChange={(event) => {
                    setSearchTerm(event.target.value);
                  }}
                ></Input>
                <Card.Content
                  style={{
                    overflowY: "scroll",
                    height: "500px",
                  }}
                >
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
                        <Table.HeaderCell>Date Expiring</Table.HeaderCell>
                      </Table.Row>
                    </Table.Header>
                    <Table.Body>
                      {Object.keys(activeList)
                        .filter((act) => {
                          if (searchTerm == "" || searchTerm == null) {
                            return act;
                          } else if (
                            activeList[act].first_name
                              .toLowerCase()
                              .includes(searchTerm.toLowerCase()) ||
                            activeList[act].last_name
                              .toLowerCase()
                              .includes(searchTerm.toLowerCase())
                          ) {
                            return act;
                          } else if (
                            activeList[act].email
                              .toLowerCase()
                              .includes(searchTerm.toLowerCase()) ||
                            activeList[act].phone
                              .toLowerCase()
                              .includes(searchTerm.toLowerCase()) ||
                            activeList[act].number
                              .toLowerCase()
                              .includes(searchTerm.toLowerCase())
                          ) {
                            return act;
                          }
                        })
                        .map((act, i) => {
                          return (
                            <Table.Row
                              style={{ overflowY: "scroll" }}
                              key={act.id}
                            >
                              <Table.Cell>{activeList[act].number}</Table.Cell>
                              <Table.Cell>
                                <Link
                                  style={{ color: "black" }}
                                  to={`/executiveAccount/${activeList[act].id}`}
                                >
                                  {activeList[act].first_name}
                                </Link>
                              </Table.Cell>
                              <Table.Cell>
                                {" "}
                                <Link
                                  style={{ color: "black" }}
                                  to={`/executiveAccount/${activeList[act].id}`}
                                >
                                  {activeList[act].last_name}
                                </Link>
                              </Table.Cell>
                              <Table.Cell>{activeList[act].phone}</Table.Cell>
                              <Table.Cell>
                                <a style={{ color: "black" }} href="mailto:">
                                  {activeList[act].email}
                                </a>
                              </Table.Cell>
                              <Table.Cell>{activeList[act].address}</Table.Cell>
                              <Table.Cell>
                                {activeList[act].dateJoined}
                              </Table.Cell>
                              <Table.Cell>
                                {activeList[act].expiring}
                              </Table.Cell>
                            </Table.Row>
                          );
                        })}
                    </Table.Body>
                  </Table>
                </Card.Content>
                <Modal.Content style={{ float: "center" }}></Modal.Content>
                <Modal.Actions>
                  <Button color="black" onClick={() => setOpenThree(false)}>
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

              {/* START OF THE EXPIRING MODAL  */}
              <Modal
                onClose={() => setOpenTwo(false)}
                onOpen={() => setOpenTwo(true)}
                // onClick={() => GetExpired}
                open={openTwo}
                trigger={<Button>Expiring</Button>}
                style={{ width: "1100px" }}
              >
                <Modal.Header>Expiring Customers</Modal.Header>
                <Input
                  type="text"
                  placeholder="Search First, Last, Phone, or Email"
                  style={{ width: "250px", height: "30px", marginLeft: "2%" }}
                  onChange={(event) => {
                    setSearchTermThree(event.target.value);
                  }}
                ></Input>
                <Card.Content style={{ overflowY: "scroll", height: "500px" }}>
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
                          if (
                            searchTermThree == "" ||
                            searchTermThree == null
                          ) {
                            return ing;
                          } else if (
                            expiringMembers[ing].first_name
                              .toLowerCase()
                              .includes(searchTermThree.toLowerCase()) ||
                            expiringMembers[ing].last_name
                              .toLowerCase()
                              .includes(searchTermThree.toLowerCase())
                          ) {
                            return ing;
                          } else if (
                            expiringMembers[ing].email
                              .toLowerCase()
                              .includes(searchTermThree.toLowerCase()) ||
                            expiringMembers[ing].phone
                              .toLowerCase()
                              .includes(searchTermThree.toLowerCase()) ||
                            expiringMembers[ing].number
                              .toLowerCase()
                              .includes(searchTermThree.toLowerCase())
                          ) {
                            return ing;
                          }
                        })
                        .map((ing, i) => {
                          return (
                            <Table.Row
                              style={{ overflowY: "scroll", width: "100%" }}
                              key={ing.id}
                            >
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
              {/* THIS IS WHERE THE EXPIRED CUSTOMERS MODAL STARTS */}
              <Modal
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                // onClick={() => GetExpired}
                open={open}
                trigger={<Button>Expired</Button>}
                style={{ width: "1100px" }}
              >
                <Modal.Header>Expired Customers</Modal.Header>
                <Input
                  type="text"
                  placeholder="Search First, Last, Phone, or Email"
                  style={{ width: "250px", height: "30px", marginLeft: "2%" }}
                  onChange={(event) => {
                    setSearchTermTwo(event.target.value);
                  }}
                ></Input>
                <Card.Content style={{ overflowY: "scroll", height: "500px" }}>
                  <Table celled striped color="red">
                    <Table.Header>
                      <Table.Row>
                        <Table.HeaderCell>#</Table.HeaderCell>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Phone</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Address</Table.HeaderCell>
                        <Table.HeaderCell>Date Expired</Table.HeaderCell>
                      </Table.Row>
                    </Table.Header>
                    <Table.Body>
                      {Object.keys(expiredMembers)
                        .filter((exp) => {
                          if (searchTermTwo == "" || searchTermTwo == null) {
                            return exp;
                          } else if (
                            expiredMembers[exp].first_name
                              .toLowerCase()
                              .includes(searchTermTwo.toLowerCase()) ||
                            expiredMembers[exp].last_name
                              .toLowerCase()
                              .includes(searchTermTwo.toLowerCase()) ||
                            expiredMembers[exp].email
                              .toLowerCase()
                              .includes(searchTermTwo.toLowerCase()) ||
                            expiredMembers[exp].phone
                              .toLowerCase()
                              .includes(searchTermTwo.toLowerCase())
                            // ||
                            // expiredMembers[exp].number
                            //   .toLowerCase()
                            //   .includes(searchTermTwo.toLowerCase())
                          ) {
                            return exp;
                          }
                        })
                        .map((exp, i) => {
                          return (
                            <Table.Row
                              style={{ overflowY: "scroll" }}
                              key={exp.id}
                            >
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
                    if (searchTermFour == "" || searchTermFour == null) {
                      return member;
                    } else if (
                      memberList[member].first_name
                        .toLowerCase()
                        .includes(searchTermFour.toLowerCase()) ||
                      memberList[member].last_name
                        .toLowerCase()
                        .includes(searchTermFour.toLowerCase()) ||
                      memberList[member].email
                        .toLowerCase()
                        .includes(searchTermFour.toLowerCase()) ||
                      memberList[member].phone
                        .toLowerCase()
                        .includes(searchTermFour.toLowerCase())
                      //   ||
                      // memberList[member].number
                      //   .toLowerCase()
                      //   .includes(searchTermFour.toLowerCase())
                    ) {
                      return member;
                    }
                  })
                  .map((member, i) => {
                    return (
                      <Table.Row
                        style={{ overflowY: "scroll", width: "100%" }}
                        key={member.id}
                      >
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
