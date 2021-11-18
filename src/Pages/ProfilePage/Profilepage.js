import React, { useState, useEffect, Input, Form } from "react";
import { useParams } from "react-router";
import {
  Card,
  Checkbox,
  Grid,
  Header,
  List,
  Icon,
  Table,
  Link,
  Menu,
  Segment,
  Sidebar,
  Dropdown,
  Modal,
  Button,
  Feed,
} from "semantic-ui-react";

import Axios from "axios";
// import Albert from "./profileImage.jpg";
import Albert from "./profileImage.jpg";

import "./Profilepage.css";

const Profile = (props) => {
  const [visible, setVisible] = React.useState(false);
  const [memberDetails, setMemberDetails] = useState("");
  const [newFirstName, setNewFirstName] = useState("");
  const [newMiddleName, setNewMiddleName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newAddress, setNewAddress] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [memberId, setMemberId] = useState("");
  const [requestList, setRequestList] = useState("");
  const [open, setOpen] = React.useState(false);
  const [item, setItem] = useState("");
  const [status, setStatus] = useState("");
  const [dateUpdated, setDateUpdated] = useState("");
  // const id = props.match.params.id;
  // const id = props.id;
  const { id } = useParams();

  const getMemberInfo = () => {
    // Axios.get("https://executive-app.herokuapp.com/memberProfile").then(
    //   (response) => {
    Axios.get("http://localhost:3001/memberProfile").then((response) => {
      // const userID = response.data[id];
      // setMemberDetails(userID);
      const arrayMembers = response.data;
      const result = arrayMembers.filter(
        (arrayMembers) => arrayMembers.id == id
      );
      setMemberDetails(result[0]);
      // console.log(result[0]);
    });
  };

  const ChangeFirst = (id) => {
    Axios.put("https://executive-app.herokuapp.com/changeFirst", {
      // Axios.put("http://localhost:3001/changeFirst", {
      firstName: newFirstName,
      id: id,
    }).then((response) => {
      // console.log("completed");
      getMemberInfo();
    });
  };
  const ChangeMiddle = (id) => {
    Axios.put("https://executive-app.herokuapp.com/changeMiddle", {
      // Axios.put("http://localhost:3001/changeMiddle", {
      middleName: newMiddleName,
      id: id,
    }).then((response) => {
      // console.log("completed");
      getMemberInfo();
    });
  };
  const ChangeLast = (id) => {
    Axios.put("https://executive-app.herokuapp.com/changeLast", {
      // Axios.put("http://localhost:3001/changeLast", {
      lastName: newLastName,
      id: id,
    }).then((response) => {
      // console.log("completed");
      getMemberInfo();
    });
  };
  const ChangeEmail = (id) => {
    Axios.put("https://executive-app.herokuapp.com/changeEmail", {
      // Axios.put("http://localhost:3001/changeEmail", {
      email: newEmail,
      id: id,
    }).then((response) => {
      // console.log("completed");
      getMemberInfo();
    });
  };
  const ChangePhone = (id) => {
    Axios.put("https://executive-app.herokuapp.com/changePhone", {
      // Axios.put("http://localhost:3001/changePhone", {
      phone: newPhone,
      id: id,
    }).then((response) => {
      // console.log("completed");
      getMemberInfo();
    });
  };
  const ChangeAddress = (id) => {
    Axios.put("https://executive-app.herokuapp.com/changeAddress", {
      // Axios.put("http://localhost:3001/changeAddress", {
      address: newAddress,
      id: id,
    }).then((response) => {
      // console.log("completed");
      getMemberInfo();
    });
  };
  const ChangePassword = (id) => {
    Axios.put("https://executive-app.herokuapp.com/changePassword", {
      // Axios.put("http://localhost:3001/changePassword", {
      password: newPassword,
      id: id,
    }).then((response) => {
      // console.log("completed");
      getMemberInfo();
    });
  };
  //GETTING SPECIFIC REQUESTS
  const getMemberRequests = () => {
    Axios.get("https://executive-app.herokuapp.com/membersRequests").then(
      (response) => {
        // Axios.get("http://localhost:3001/membersRequests").then((response) => {
        const arrayRequests = response.data;
        const result = arrayRequests.filter(
          (arrayRequests) => arrayRequests.memberIdentity == id
        );
        setRequestList(result);
      }
    );
  };

  const LoadPage = () => {
    getMemberRequests();
    getMemberInfo();
  };
  useEffect(() => {
    //LOAD PROFILE DATA
    getMemberInfo();
    getMemberRequests();

    // GET CUSTOMER REQUESTS
    // Axios.get("https://executive-app.herokuapp.com/member").then((response) => {
    // Axios.get("http://localhost:3001/member").then((response) => {
    //   setRequestList(response.data);
    // });
  }, []);

  return (
    <div className="profileMain" style={{ padding: "1%", width: "100%" }}>
      <div className="tree">
        {/* <h1 className="heading"> Welcome {memberDetails.first_name}</h1> */}
        {/* <p className="slant"></p>
        <p className="plant"></p> */}
      </div>

      <Card
        className="main"
        className="ui container center aligned"
        style={{
          background: "rgba(255,255,255, 0.0)",
          color: "white",
          boxShadow: "none",
          fontFamily: "Open Sans, sans-serif",
          fontSize: "15px",
        }}
      >
        <Card.Header style={{ background: "rgba(255,255,255, 0.5)" }}>
          {/* Welcome {memberDetails.first_name} */}
        </Card.Header>
        <Card.Content>
          <img
            onClick={() => {
              LoadPage();
            }}
            style={{ borderRadius: "100px" }}
            src={Albert}
          ></img>
          {/* <p className="editImage">Edit</p> */}
        </Card.Content>
        <Header
          style={{
            color: "white",
            fontFamily: "Open Sans, sans-serif",
          }}
        >
          {memberDetails.suffix} {memberDetails.first_name}{" "}
          {memberDetails.middle_name} {memberDetails.last_name}
        </Header>
        <Card.Meta style={{ color: "white" }}>
          Member ID: {memberDetails.number}
        </Card.Meta>
        <Card.Description>
          Preferred Store: {memberDetails.preferredStore}
        </Card.Description>
        <Card.Description>{memberDetails.address}</Card.Description>
        <Card.Description>{memberDetails.email}</Card.Description>
        <Card.Description>{memberDetails.phone}</Card.Description>
        <Card.Content>
          <span style={{ float: "right" }}>
            <a style={{ color: "white" }} href="/">
              <Icon name="sign out alternate" size="large"></Icon>
            </a>
          </span>
          <span
            style={{
              position: "relative",
              float: "left",
            }}
          >
            <Modal
              onClose={() => setOpen(false)}
              onOpen={() => setOpen(true)}
              open={open}
              trigger={
                <Icon
                  name="edit"
                  style={{ color: "white" }}
                  size="large"
                ></Icon>
              }
            >
              <Modal.Header>Edit Personal Details</Modal.Header>

              <Modal.Content style={{ float: "center" }}>
                {/* <Header>First Name</Header>
                <input
                  onChange={(e) => {
                    setNewFirstName(e.target.value);
                  }}
                  placeholder="first name"
                  Value={memberDetails.first_name}
                  style={{
                    height: "30px",
                    width: "300px",
                    marginBottom: "5px",
                  }}
                ></input>
                <Button
                  size="mini"
                  color="black"
                  onClick={() => {
                    ChangeFirst(memberDetails.id);
                  }}
                >
                  Change First
                </Button>
                <Header>Middle Name</Header>
                <input
                  onChange={(r) => {
                    setNewMiddleName(r.target.value);
                  }}
                  placeholder="first name"
                  Value={memberDetails.middle_name}
                  style={{
                    height: "30px",
                    width: "300px",
                    marginBottom: "5px",
                  }}
                ></input>
                <Button
                  size="mini"
                  color="black"
                  onClick={() => {
                    ChangeMiddle(memberDetails.id);
                  }}
                >
                  Change Middle
                </Button>
                <Header>Last Name</Header>
                <input
                  onChange={(t) => {
                    setNewLastName(t.target.value);
                  }}
                  placeholder="last name"
                  Value={memberDetails.last_name}
                  style={{
                    height: "30px",
                    width: "300px",
                    marginBottom: "5px",
                  }}
                ></input>
                <Button
                  size="mini"
                  color="black"
                  onClick={() => {
                    ChangeLast(memberDetails.id);
                  }}
                >
                  Change Last
                </Button> */}
                <Header>Email</Header>
                <input
                  onChange={(y) => {
                    setNewEmail(y.target.value);
                  }}
                  placeholder="example@email.com"
                  Value={memberDetails.email}
                  style={{
                    height: "30px",
                    width: "300px",
                    marginBottom: "5px",
                  }}
                ></input>
                <Button
                  size="mini"
                  color="black"
                  onClick={() => {
                    ChangeEmail(memberDetails.id);
                  }}
                >
                  Change Email
                </Button>
                <Header>Phone</Header>
                <input
                  onChange={(u) => {
                    setNewPhone(u.target.value);
                  }}
                  placeholder="000-000-0000"
                  Value={memberDetails.phone}
                  style={{
                    height: "30px",
                    width: "300px",
                    marginBottom: "5px",
                  }}
                ></input>
                <Button
                  size="mini"
                  color="black"
                  onClick={() => {
                    ChangePhone(memberDetails.id);
                  }}
                >
                  Change Phone
                </Button>
                <Header>Address</Header>
                <input
                  onChange={(i) => {
                    setNewAddress(i.target.value);
                  }}
                  placeholder="123 Main Street Orlando, FL 32808"
                  Value={memberDetails.address}
                  style={{
                    height: "30px",
                    width: "300px",
                    marginBottom: "5px",
                  }}
                ></input>
                <Button
                  size="mini"
                  color="black"
                  onClick={() => {
                    ChangeAddress(memberDetails.id);
                  }}
                >
                  Change Address
                </Button>
                <Header>Password</Header>
                <input
                  onChange={(o) => {
                    setNewPassword(o.target.value);
                  }}
                  placeholder="********"
                  style={{
                    height: "30px",
                    width: "300px",
                    marginBottom: "5px",
                  }}
                ></input>

                <Button
                  size="mini"
                  color="black"
                  onClick={() => {
                    ChangePassword(memberDetails.id);
                  }}
                >
                  Change Password
                </Button>
              </Modal.Content>
              <Modal.Actions>
                {/* <Button color="black" onClick={() => setOpen(false)}>
                  Cancel
                </Button> */}
                <Button
                  content="Done"
                  labelPosition="right"
                  icon="checkmark"
                  // onClick={() => {
                  //   UpdateDetails(memberDetails.id);
                  // }}

                  onClick={() => setOpen(false)}
                  positive
                />
              </Modal.Actions>
            </Modal>
          </span>
        </Card.Content>
      </Card>
      <Card className="main" className="ui container center aligned">
        <Card.Content>
          <List divided relaxed>
            <List.Item>
              <List.Icon
                // name="chevron right"
                size="large"
                verticalAlign="middle"
              />
              <List.Content>
                <List.Header as="a">REQUESTS</List.Header>
                <List.Description as="a">Updated 10 mins ago</List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon
                // name="chevron right"
                size="large"
                verticalAlign="middle"
              />
              <List.Content>
                <List.Header as="a">MESSAGES</List.Header>
                <List.Description as="a">Updated 22 mins ago</List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon
                // name="chevron right"
                size="large"
                verticalAlign="middle"
              />
              <List.Content>
                <List.Header as="a">CATALOG</List.Header>
                <List.Description as="a">Updated 34 mins ago</List.Description>
              </List.Content>
            </List.Item>
          </List>
        </Card.Content>
      </Card>
      <Card className="main" className="ui container center aligned">
        <Card.Content>
          <Card.Header style={{ fontFamily: "Open Sans, sans-serif" }}>
            MY REQUESTS{" "}
          </Card.Header>
        </Card.Content>
        <Card.Content
          style={{
            overflowY: "scroll",
            maxHeight: "400px",
            fontFamily: "Open Sans, sans-serif",
          }}
        >
          <Table celled striped color="red">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Item</Table.HeaderCell>
                <Table.HeaderCell>status</Table.HeaderCell>
                <Table.HeaderCell>Modified</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {Object.keys(requestList).map((request, i) => {
                let update = new Date(requestList[request].date_updated)
                  .toUTCString()
                  .split(" ")
                  .slice(0, 4)
                  .join(" ");
                return (
                  <Table.Row key={request.id}>
                    <Table.Cell>{requestList[request].item}</Table.Cell>
                    <Table.Cell>{requestList[request].status}</Table.Cell>
                    <Table.Cell>{update}</Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table>
        </Card.Content>
      </Card>
      {/* new card */}

      <div className="tree">
        {/* <p className="spat"></p>
        <p className="plat"></p> */}
      </div>
    </div>
  );
};

export default Profile;
