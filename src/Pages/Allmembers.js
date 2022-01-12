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
  Segment,
  Grid,
} from "semantic-ui-react";
import React, { useEffect, useState } from "react";
import Axios from "axios";
import HeaderMain from "../components/header";
import { Link } from "react-router-dom";

function AllMembers() {
  const [memberList, setMemberList] = useState("");
  const [decendingList, setDecendingList] = useState("");
  const [activeList, setActiveList] = useState("");
  const [expiredMembers, setExpiredMembers] = useState("");
  const [expiringMembers, setExpiringMembers] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTerm3, setSearchTerm3] = useState("");
  const [searchTermTwo, setSearchTermTwo] = useState("");
  const [searchTermThree, setSearchTermThree] = useState("");
  const [searchTermFour, setSearchTermFour] = useState("");
  const [open, setOpen] = React.useState(false);
  const [openTwo, setOpenTwo] = React.useState(false);
  const [openThree, setOpenThree] = React.useState(false);
  const [openFive, setOpenFive] = React.useState(false);
  const [openControls, setOpenControls] = React.useState(false);
  const [openControlsEdit, setOpenControlsEdit] = React.useState(false);
  const [openControlsRenew, setOpenControlsRenew] = React.useState(false);
  const [newCardStatus, setNewCardStatus] = useState("");
  const [memberName, setMemberName] = useState("");
  const [newMemId, setNewMemId] = useState("");
  const [membershipDate, setMembershipDate] = useState("");

  // RENEW MEMBERSHIP
  const card = "Pending";
  const acknowledged = "No";
  //
  // CHANGE CARD STATUS
  const ChangeCard = (id) => {
    Axios.put("https://executive-app.herokuapp.com/cardStatusChange", {
      // Axios.put("http://localhost:3001/cardStatusChange", {
      card: newCardStatus,
      id: id,
    }).then((response) => {
      alert("Card Status Updated");
      getMemberInfo();
      console.log("card updated" + id);
    });
  };
  //
  //
  //RENEW CUSTOMER SET NEW DATE
  // const ChangeRenewal = (id) => {
  //   Axios.put("https://executive-app.herokuapp.com/changeRenewal", {
  //     Axios.put("http://localhost:3001/changeRenewal", {
  //     id: id,
  //   }).then((response) => {
  //     putPendingCard();
  //     alert("Membership Renewal Completed");
  //     getMemberInfo();
  //     THIS WILL UPDATE PENDING CARD AND ACKNOWWLDEGMENT
  //     console.log(response);
  //   });
  // };
  const putPendingCard = (id) => {
    Axios.put("https://executive-app.herokuapp.com/pendingCardRenew", {
      // Axios.put("http://localhost:3001/pendingCardRenew", {
      id: id,
      card: card,
      acknowledged: acknowledged,
    }).then((response) => {
      console.log("completed" + id);
      // getMemberInfo();
    });
  };
  const ChangeRenewal = (id) => {
    Axios.put("https://executive-app.herokuapp.com/changeRenewal", {
      // Axios.put("http://localhost:3001/changeRenewal", {
      id: id,
      card: card,
      acknowledged: acknowledged,
    }).then((response) => {
      // putPendingCard();
      // getMemberInfo();
      // THIS WILL UPDATE PENDING CARD AND ACKNOWWLDEGMENT
      // console.log(response);
      // Axios.put("https://executive-app.herokuapp.com/pendingCardRenew", {
      //   // Axios.put("http://localhost:3001/pendingCardRenew", {
      //   id: id,
      //   card: card,
      //   acknowledged: acknowledged,
      // }).then((response) => {
      alert("Membership Renewal Completed");
      //   // console.log("completed" + id);
      //   getMemberInfo();
      // });
    });
  };
  //
  const getMemberInfo = () => {
    // GET ALL MEMBERS
    Axios.get("https://executive-app.herokuapp.com/api/getAllMembers").then(
      (response) => {
        // Axios.get("http://localhost:3001/api/getAllMembers").then((response) => {
        setMemberList(response.data);
        // console.log(response.data.length);
      }
    );
  };

  //DELETE MEMBER
  const DeleteMember = (id) => {
    Axios.delete(`https://executive-app.herokuapp.com/deleteMember/${id}`).then(
      () => {
        // Axios.delete(`http://localhost:3001/deleteMember/${id}`).then(() => {
        // console.log("completed");
        alert("Account Deletion Completed");
        //make go to members page after deleted
        Axios.post("https://executive-app.herokuapp.com/deletedNotification", {
          // Axios.post("http://localhost:3001/deletedNotification", {
          // adminName: adminName,
          memberName: memberName,
          id: id,
        }).then(() => {});
      }
    );
  };
  //
  //  UPDATE MEMBER ID
  const ChangeMemId = (id) => {
    Axios.put("https://executive-app.herokuapp.com/changeMemId", {
      // Axios.put("http://localhost:3001/changeMemId", {
      memId: newMemId,
      id: id,
    }).then((response) => {
      // console.log("completed");
      alert("Member ID Changed");
      getMemberInfo();
      // detailChange();
    });
  };
  //
  // CHANGE MEMBERSHIP DATE
  const ChangeMembershipDate = (id) => {
    Axios.put("https://executive-app.herokuapp.com/changeMemDate", {
      // Axios.put("http://localhost:3001/changeMemDate", {
      membershipDate: membershipDate,
      id: id,
    }).then((response) => {
      // console.log("completed");
      alert("Member Expiration Date Changed");
      getMemberInfo();
      // getMemberNotes();
      // detailChange();
    });
  };
  //
  //
  useEffect(() => {
    // GET ALL MEMBERS
    getMemberInfo();
    // GET ALL MEMBERS DECENDING
    Axios.get("https://executive-app.herokuapp.com/getAllMembersDesc").then(
      (response) => {
        // Axios.get("http://localhost:3001/getAllMembersDesc").then((response) => {
        setDecendingList(response.data);
        // console.log(response);
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
        style={{
          padding: "1%",
          width: "100%",
          height: "100%",
          backgroundColor: "#F3F3FC",
        }}
      >
        <Card fluid style={{ marginRight: "10px", height: "100%" }}>
          <Card.Content>
            <Card.Header>Active Members</Card.Header>
            <p style={{ marginLeft: "25px" }}>
              Total Members: {activeList.length}
            </p>
            <input
              type="text"
              placeholder="Search First or Last Name"
              style={{ width: "250px", height: "30px" }}
              onChange={(event) => {
                setSearchTermFour(event.target.value);
              }}
            ></input>
            <span style={{ position: "relative", float: "right" }}>
              {/* START OF THE DECENDING LIST */}
              <Modal
                onClose={() => setOpenFive(false)}
                onOpen={() => setOpenFive(true)}
                // onClick={() => GetExpired}
                open={openFive}
                trigger={<Button>Decending Order</Button>}
                style={{
                  width: "100%",
                  height: "700px",
                  width: "1500px",
                  left: "5%",
                  top: "10%",
                }}
              >
                <Modal.Header>All Customer Decending</Modal.Header> {""}
                <p style={{ marginLeft: "25px" }}>
                  Total Members: {decendingList.length}
                </p>
                <Input
                  type="text"
                  placeholder="Search First or Last name"
                  style={{ width: "250px", height: "30px", marginLeft: "2%" }}
                  onChange={(event) => {
                    setSearchTerm3(event.target.value);
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
                        <Table.HeaderCell>Card</Table.HeaderCell>
                        <Table.HeaderCell>Date Expiring</Table.HeaderCell>
                      </Table.Row>
                    </Table.Header>
                    <Table.Body>
                      {Object.keys(decendingList)
                        .filter((decending) => {
                          if (searchTerm3 == "") {
                            return decending;
                          } else if (
                            decendingList[decending].first_name
                              .toLowerCase()
                              .includes(searchTerm3.toLowerCase()) ||
                            decendingList[decending].last_name
                              .toLowerCase()
                              .includes(searchTerm3.toLowerCase())
                          ) {
                            return decending;
                          }
                        })
                        .map((decending, i) => {
                          let joindate = new Date(
                            decendingList[decending].dateJoined
                          )
                            .toUTCString()
                            .split(" ")
                            .slice(0, 4)
                            .join(" ");
                          let expiredate = new Date(
                            decendingList[decending].expiring
                          )
                            .toUTCString()
                            .split(" ")
                            .slice(0, 4)
                            .join(" ");
                          return (
                            <Table.Row
                              style={{ overflowY: "scroll" }}
                              key={decending.id}
                            >
                              <Table.Cell>
                                {decendingList[decending].number}
                              </Table.Cell>
                              <Table.Cell>
                                <Link
                                  style={{ color: "black" }}
                                  to={`/executiveAccount/${decendingList[decending].id}`}
                                >
                                  {decendingList[decending].first_name}
                                </Link>
                              </Table.Cell>
                              <Table.Cell>
                                {" "}
                                <Link
                                  style={{ color: "black" }}
                                  to={`/executiveAccount/${decendingList[decending].id}`}
                                >
                                  {decendingList[decending].last_name}
                                </Link>
                              </Table.Cell>
                              <Table.Cell>
                                {decendingList[decending].phone}
                              </Table.Cell>
                              <Table.Cell>
                                <a style={{ color: "black" }} href="mailto:">
                                  {decendingList[decending].email}
                                </a>
                              </Table.Cell>
                              <Table.Cell>
                                {decendingList[decending].address}
                              </Table.Cell>
                              <Table.Cell>{joindate}</Table.Cell>
                              <Table.Cell>
                                {decendingList[decending].card}
                              </Table.Cell>
                              <Table.Cell>{expiredate}</Table.Cell>
                            </Table.Row>
                          );
                        })}
                    </Table.Body>
                  </Table>
                </Card.Content>
                <Modal.Content style={{ float: "center" }}></Modal.Content>
                <Modal.Actions>
                  <Button color="black" onClick={() => setOpenFive(false)}>
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
              {/* THIS IS WHERE THE All  MEMBERS MODAL STARTS */}
              <Modal
                onClose={() => setOpenThree(false)}
                onOpen={() => setOpenThree(true)}
                // onClick={() => GetExpired}
                open={openThree}
                trigger={<Button>All</Button>}
                style={{
                  width: "100%",
                  height: "700px",
                  width: "1500px",
                  left: "5%",
                  top: "10%",
                }}
              >
                <Modal.Header>Active Customers</Modal.Header> {""}
                <p style={{ marginLeft: "25px" }}>
                  Total Active Members: {memberList.length}
                </p>
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
                        <Table.HeaderCell>Card</Table.HeaderCell>
                        <Table.HeaderCell>Date Expiring</Table.HeaderCell>
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
                          }
                        })
                        .map((member, i) => {
                          let joindate = new Date(memberList[member].dateJoined)
                            .toUTCString()
                            .split(" ")
                            .slice(0, 4)
                            .join(" ");
                          let expiredate = new Date(memberList[member].expiring)
                            .toUTCString()
                            .split(" ")
                            .slice(0, 4)
                            .join(" ");
                          return (
                            <Table.Row
                              style={{ overflowY: "scroll" }}
                              key={member.id}
                            >
                              <Table.Cell>
                                {memberList[member].number}
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
                                {" "}
                                <Link
                                  style={{ color: "black" }}
                                  to={`/executiveAccount/${memberList[member].id}`}
                                >
                                  {memberList[member].last_name}
                                </Link>
                              </Table.Cell>
                              <Table.Cell>
                                {memberList[member].phone}
                              </Table.Cell>
                              <Table.Cell>
                                <a style={{ color: "black" }} href="mailto:">
                                  {memberList[member].email}
                                </a>
                              </Table.Cell>
                              <Table.Cell>
                                {memberList[member].address}
                              </Table.Cell>
                              <Table.Cell>{joindate}</Table.Cell>
                              <Table.Cell>{memberList[member].card}</Table.Cell>
                              <Table.Cell>{expiredate}</Table.Cell>
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
                style={{
                  width: "100%",
                  height: "700px",
                  width: "1500px",
                  left: "5%",
                  top: "10%",
                }}
              >
                <Modal.Header>Expiring Customers</Modal.Header>
                <p style={{ marginLeft: "25px" }}>
                  Total Expiring Members: {expiringMembers.length}
                </p>
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
                        <Table.HeaderCell>Card</Table.HeaderCell>
                        <Table.HeaderCell>Expiring</Table.HeaderCell>
                      </Table.Row>
                    </Table.Header>
                    <Table.Body>
                      {Object.keys(expiringMembers)
                        .filter((ing) => {
                          if (searchTermThree == "") {
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
                          }
                        })
                        .map((ing, i) => {
                          let expiredate2 = new Date(
                            expiringMembers[ing].expiring
                          )
                            .toUTCString()
                            .split(" ")
                            .slice(0, 4)
                            .join(" ");
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
                                {expiringMembers[ing].card}
                              </Table.Cell>
                              <Table.Cell>{expiredate2}</Table.Cell>
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
                style={{
                  width: "100%",
                  height: "700px",
                  width: "1500px",
                  left: "5%",
                  top: "10%",
                }}
              >
                <Modal.Header>Expired Customers</Modal.Header>
                <p style={{ marginLeft: "25px" }}>
                  Total Expired Members: {expiredMembers.length}
                </p>
                <Input
                  type="text"
                  placeholder="Search First or Last Name"
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
                        <Table.HeaderCell>Card</Table.HeaderCell>
                        <Table.HeaderCell>Date Expired</Table.HeaderCell>
                      </Table.Row>
                    </Table.Header>
                    <Table.Body>
                      {Object.keys(expiredMembers)
                        .filter((exp) => {
                          if (searchTermTwo == "") {
                            return exp;
                          } else if (
                            expiredMembers[exp].first_name
                              .toLowerCase()
                              .includes(searchTermTwo.toLowerCase()) ||
                            expiredMembers[exp].last_name
                              .toLowerCase()
                              .includes(searchTermTwo.toLowerCase())
                            // ) {
                            //   return exp;
                            // } else if (
                            // expiredMembers[exp].email
                            //   .toLowerCase()
                            //   .includes(searchTermTwo.toLowerCase())
                            //   ||
                            // expiredMembers[exp].phone
                            //   .toLowerCase()
                            //   .includes(searchTermTwo.toLowerCase()) ||
                            // expiredMembers[exp].address
                            //   .toLowerCase()
                            //   .includes(searchTermTwo.toLowerCase())
                            //   ||
                            // expiredMembers[exp].card
                            //   .toLowerCase()
                            //   .includes(searchTermTwo.toLowerCase())
                          ) {
                            return exp;
                          }
                        })
                        .map((exp, i) => {
                          let expiredate3 = new Date(
                            expiredMembers[exp].expiring
                          )
                            .toUTCString()
                            .split(" ")
                            .slice(0, 4)
                            .join(" ");
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
                                {expiredMembers[exp].card}
                              </Table.Cell>
                              <Table.Cell>{expiredate3}</Table.Cell>
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
          {/* 
// 
//  */}
          {/* ACTIVE MEMBERS ONLY */}
          {/* <Card.Content style={{ overflowY: "scroll", height: "1000px" }}>
            <Table celled striped color="red">
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>#</Table.HeaderCell>
                  <Table.HeaderCell>First Name</Table.HeaderCell>
                  <Table.HeaderCell>Last Name</Table.HeaderCell>
                  <Table.HeaderCell>Phone</Table.HeaderCell>
                  <Table.HeaderCell>Email</Table.HeaderCell>
                  <Table.HeaderCell>Address</Table.HeaderCell>
                  <Table.HeaderCell>Card</Table.HeaderCell>
                  <Table.HeaderCell>Store</Table.HeaderCell>
                  <Table.HeaderCell>UpDate Card</Table.HeaderCell>
                  <Table.HeaderCell>Date Expiring</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {Object.keys(memberList)
                  .filter((member) => {
                    if (searchTermFour == "") {
                      return member;
                    } else if (
                      memberList[member].first_name
                        .toLowerCase()
                        .includes(searchTermFour.toLowerCase()) ||
                      memberList[member].last_name
                        .toLowerCase()
                        .includes(searchTermFour.toLowerCase())
                    ) {
                      return member;
                    }
                  })
                  .map((member, i) => {
                    let joindate1 = new Date(memberList[member].dateJoined)
                      .toUTCString()
                      .split(" ")
                      .slice(0, 4)
                      .join(" ");
                    let expiredate = new Date(memberList[member].expiring)
                      .toUTCString()
                      .split(" ")
                      .slice(0, 4)
                      .join(" ");
                    return (
                      <Table.Row
                        style={{ overflowY: "scroll", width: "100%" }}
                        key={member.id}
                      >
                        <Table.Cell>
                          {memberList[member].number} */}

          {/* <br></br>
                          <Button
                            color="red"
                            inverted
                            onClick={() => {
                              DeleteMember(memberList[member].id);
                            }}
                          >
                            Delete Account
                          </Button> */}
          {/* </Table.Cell>
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
                        <Table.Cell>{memberList[member].card}</Table.Cell>
                        <Table.Cell>
                          {memberList[member].preferredStore}
                        </Table.Cell>
                        <Table.Cell>
                          <select
                            onChange={(i) => {
                              setNewCardStatus(i.target.value);
                            }}
                            style={{
                              height: "35px",
                              width: "50%",
                              backgroundColor: "lightGrey",
                              borderRadius: "5px",
                              border: "none",
                            }}
                          >
                            <option>Choose Card Status</option>
                            <option value="pending">Pending</option>
                            <option value="Yes Card">Yes Card</option>
                            <option value="Card Ordered">Card Ordered</option>
                            <option value="Card Expired">Card Expired</option>
                          </select> */}
          {/* <br></br> */}
          {/* <Button
                            style={{ margin: "10px" }}
                            size="mini"
                            color="black"
                            onClick={() => {
                              ChangeCard(memberList[member].id);
                            }}
                          >
                            Change Card
                          </Button>
                        </Table.Cell>
                        <Table.Cell>{expiredate}</Table.Cell>
                      </Table.Row>
                    );
                  })}
              </Table.Body>
            </Table>
          </Card.Content> */}

          {/* 
          START NEW MEMBERS CARDS
          */}
          <Segment
            style={{
              overflow: "auto",
              maxHeight: "1000px",
              width: "100%",

              boxShadow: "5px 10px 8px #F3F3FC",
            }}
          >
            {Object.keys(activeList)
              .filter((act) => {
                if (searchTermFour == "") {
                  return act;
                } else if (
                  activeList[act].first_name
                    .toLowerCase()
                    .includes(searchTermFour.toLowerCase()) ||
                  activeList[act].last_name
                    .toLowerCase()
                    .includes(searchTermFour.toLowerCase())
                ) {
                  return act;
                }
              })
              .map((act, i) => {
                let joindate1 = new Date(activeList[act].dateJoined)
                  .toUTCString()
                  .split(" ")
                  .slice(0, 4)
                  .join(" ");
                let expiredate = new Date(activeList[act].expiring)
                  .toUTCString()
                  .split(" ")
                  .slice(0, 4)
                  .join(" ");
                return (
                  <Card
                    style={{
                      width: "100%",
                      boxShadow: "5px 10px 8px black",
                      backgroundColor: "white",
                      border: "1px solid black",
                    }}
                  >
                    <Card.Content>
                      <Grid divided="vertically">
                        <Grid.Row columns={3}>
                          <Grid.Column style={{ paddingLeft: "25px" }}>
                            <h2 style={{ color: "black" }}>
                              <Link
                                style={{ color: "black" }}
                                to={`/executiveAccount/${activeList[act].id}`}
                              >
                                {activeList[act].first_name}{" "}
                                {activeList[act].last_name}
                              </Link>
                            </h2>
                            <Card.Meta>
                              {" "}
                              Suffix: {" " + activeList[act].suffix}
                            </Card.Meta>
                            <Card.Meta style={{ color: "black" }}>
                              {" "}
                              <Icon name="target" />
                              {" " + activeList[act].preferredStore}
                            </Card.Meta>
                            <Card.Meta>
                              {" "}
                              <Icon name="birthday cake" />{" "}
                              {" " + activeList[act].DOB}
                            </Card.Meta>
                            <Card.Meta style={{ color: "black" }}>
                              {" "}
                              <Icon name="phone" /> {activeList[act].phone}
                            </Card.Meta>
                            <Card.Meta>
                              {" "}
                              <Icon name="mail" />
                              {" " + activeList[act].email}
                            </Card.Meta>
                            <Card.Meta style={{ color: "black" }}>
                              {" "}
                              <Icon name="home" /> {activeList[act].address}
                            </Card.Meta>
                            <br></br>
                          </Grid.Column>
                          <Grid.Column>
                            <h3 style={{ color: "black" }}>
                              Membership Status
                            </h3>
                            <Card.Meta>
                              {" "}
                              Member Number: {activeList[act].number}
                            </Card.Meta>
                            <Card.Meta style={{ color: "black" }}>
                              {" "}
                              Card Status: {activeList[act].card}
                            </Card.Meta>
                            <Card.Meta>
                              {" "}
                              Initial Contact: {activeList[act].acknowledged}
                            </Card.Meta>

                            <select
                              onChange={(i) => {
                                setNewCardStatus(i.target.value);
                              }}
                              style={{
                                height: "35px",
                                width: "50%",
                                backgroundColor: "lightGrey",
                                borderRadius: "5px",
                                border: "none",
                              }}
                            >
                              <option>Choose Card Status</option>
                              <option value="pending">Pending</option>
                              <option value="Yes Card">Yes Card</option>
                              <option value="Card Ordered">Card Ordered</option>
                              <option value="Card Expired">Card Expired</option>
                            </select>
                            <Button
                              style={{ margin: "10px" }}
                              size="mini"
                              color="black"
                              onClick={() => {
                                ChangeCard(activeList[act].id);
                              }}
                            >
                              Change Card
                            </Button>
                            {/* 
                            ACCOUNT CONTROLS SECTION
                     */}
                            <Card.Description>
                              {" "}
                              Date Joined: {joindate1}
                            </Card.Description>
                            <Card.Description>
                              {" "}
                              Date Expiring: {expiredate}
                            </Card.Description>
                          </Grid.Column>
                          <Grid.Column>
                            <h3 style={{ color: "black" }}>Account Controls</h3>

                            <Modal
                              style={{
                                marginLeft: "25%",
                                marginTop: "10%",
                              }}
                              basic
                              onClose={() => setOpenControlsEdit(false)}
                              onOpen={() => setOpenControlsEdit(true)}
                              open={openControlsEdit[act]}
                              size="small"
                              trigger={
                                <Button color="green" inverted>
                                  Edit Account
                                </Button>
                              }
                            >
                              <Header icon>
                                <Icon name="edit" />
                                {/* ARE YOU SURE YOU WANT TO */}
                                EDIT {activeList[act].first_name.toUpperCase()}
                                'S ACCOUNT
                              </Header>
                              {/* 
                              START EDIT DETAILS 
                              */}
                              <Header>Member ID</Header>
                              <input
                                onChange={(o) => {
                                  setNewMemId(o.target.value);
                                }}
                                placeholder="1234"
                                style={{
                                  height: "30px",
                                  width: "300px",
                                  margin: "20px",
                                }}
                              ></input>

                              <Button
                                size="mini"
                                color="red"
                                inverted
                                onClick={() => {
                                  ChangeMemId(activeList[act].id);
                                }}
                              >
                                Change ID
                              </Button>
                              <Header>Membership Expiration Date</Header>
                              <input
                                onChange={(o) => {
                                  setMembershipDate(o.target.value);
                                }}
                                placeholder="2020-10-27 12:18:35"
                                style={{
                                  height: "30px",
                                  width: "300px",
                                  margin: "20px",
                                }}
                              ></input>

                              <Button
                                size="mini"
                                color="red"
                                inverted
                                onClick={() => {
                                  ChangeMembershipDate(activeList[act].id);
                                }}
                              >
                                Change Expiring Date
                              </Button>
                              {/* 
                              END EDIT DETAILS 
                              */}
                              <Modal.Actions>
                                <a href="/allMembers">
                                  <Button
                                    color="green"
                                    inverted
                                    onClick={() => setOpenControlsEdit(false)}
                                  >
                                    <Icon name="checkmark" /> Done
                                  </Button>
                                </a>
                              </Modal.Actions>
                            </Modal>
                            <Card.Meta
                              style={{
                                height: "20px",
                                backgroundColor: "white",
                              }}
                            ></Card.Meta>
                            <Modal
                              style={{
                                marginLeft: "25%",
                                marginTop: "10%",
                              }}
                              basic
                              onClose={() => setOpenControlsRenew(false)}
                              onOpen={() => setOpenControlsRenew(true)}
                              open={openControlsRenew[act]}
                              size="small"
                              trigger={
                                <Button color="yellow" inverted>
                                  Renew Membership
                                </Button>
                              }
                            >
                              <Header icon>
                                <Icon name="redo" />
                                RENEW {activeList[act].first_name.toUpperCase()}
                                'S MEMBERSHIP?
                              </Header>
                              <Modal.Content>
                                <p>
                                  Renewing this account will change the card
                                  status to "pending" and initial contact to
                                  "no" and will change the renewal date starting
                                  today.
                                </p>
                              </Modal.Content>

                              <Modal.Actions>
                                <a href="/allMembers">
                                  <Button
                                    basic
                                    color="red"
                                    inverted
                                    onClick={() => {
                                      ChangeRenewal(activeList[act].id);
                                    }}
                                  >
                                    <Icon name="remove" /> Yes, Renew Membership
                                  </Button>
                                </a>
                                <a href="/allMembers">
                                  <Button
                                    color="green"
                                    inverted
                                    onClick={() => setOpenControlsRenew(false)}
                                  >
                                    <Icon name="checkmark" /> No, Let Expire
                                  </Button>
                                </a>
                              </Modal.Actions>
                            </Modal>
                            <Card.Meta
                              style={{
                                height: "20px",
                                backgroundColor: "white",
                              }}
                            ></Card.Meta>
                            {/* <Modal
                              style={{
                                marginLeft: "25%",
                                marginTop: "10%",
                              }}
                              basic
                              onClose={() => setOpenControls(false)}
                              onOpen={() => setOpenControls(true)}
                              open={openControls[act]}
                              size="small"
                              trigger={
                                <Button color="red" inverted>
                                  Delete Account
                                </Button>
                              }
                            >
                              <Header icon>
                                <Icon name="user delete" />
                                DELETE{" "}
                                {activeList[act].first_name.toUpperCase()}'S
                                ACCOUNT?
                              </Header>
                              <Modal.Content>
                                <p>
                                  Deleting this account is a permanent action
                                  and will delete access to data pertaining to
                                  this account.
                                </p>
                              </Modal.Content>

                              <Modal.Actions>
                                <a href="/allMembers">
                                  <Button
                                    basic
                                    color="red"
                                    inverted
                                    onClick={() => {
                                      DeleteMember(activeList[act].id);
                                    }}
                                  >
                                    <Icon name="remove" /> Yes, Delete Account
                                  </Button>
                                </a>
                                <a href="/allMembers">
                                  <Button
                                    color="green"
                                    inverted
                                    onClick={() => setOpenControls(false)}
                                  >
                                    <Icon name="checkmark" /> No, Keep Account{" "}
                                  </Button>
                                </a>
                              </Modal.Actions>
                            </Modal> */}
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>
                    </Card.Content>
                  </Card>
                );
              })}
          </Segment>
        </Card>
      </div>
    </div>
  );
}

export default AllMembers;
