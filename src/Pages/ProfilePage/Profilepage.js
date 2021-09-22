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
import Albert from "./profileImage.jpg";

import "./Profilepage.css";

const Profile = (props) => {
  const [visible, setVisible] = React.useState(false);
  const [memberDetails, setMemberDetails] = useState("");
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newAddress, setNewAddress] = useState("");
  const [memberId, setMemberId] = useState("");
  const [requestList, setRequestList] = useState("");
  const [open, setOpen] = React.useState(false);
  // const id = props.match.params.id;
  // const id = props.id;
  const { id } = useParams();

  const UpdateDetails = (memberDetails) => {
    Axios.get("https://executive-app.herokuapp.com/updateDetails", {
      // Axios.put("http://localhost:3001/updateDetails", {
      firstName: newFirstName,
      lastName: newLastName,
      phone: newPhone,
      email: newEmail,
      address: newAddress,
      userID: memberDetails,
    }).then((response) => {
      console.log(response);
    });
  };

  useEffect(() => {
    //LOAD PROFILE DATA
    Axios.get("https://executive-app.herokuapp.com/memberProfile").then(
      (response) => {
        // Axios.get("http://localhost:3001/memberProfile").then((response) => {
        const userID = response.data[id];
        setMemberDetails(userID);
        // console.log(response.data[id]);
        console.log(response.data[id]);
        // setMemberId(memberDetails.id);
        // console.log("member ID is" + " " + memberDetails.id);
      }
    );

    // GET CUSTOMER REQUESTS
    Axios.get("https://executive-app.herokuapp.com/member").then((response) => {
      // Axios.get("http://localhost:3001/member").then((response) => {
      setRequestList(response.data);
    });
  }, []);

  return (
    <div className="newMembers" style={{ padding: "1%", width: "100%" }}>
      <div className="tree">
        <p className="slant"></p>
        <p className="plant"></p>
      </div>

      <Card className="main" className="ui container center aligned">
        <Card.Header>Welcome {memberDetails.first_name}</Card.Header>
        <Card.Content>
          <img src={Albert}></img>
        </Card.Content>
        <Header>
          {memberDetails.first_name} {memberDetails.last_name}
        </Header>
        <Card.Meta>Member ID: {memberDetails.number}</Card.Meta>
        <Card.Description>{memberDetails.address}</Card.Description>
        <Card.Description>{memberDetails.email}</Card.Description>
        <Card.Description>{memberDetails.phone}</Card.Description>
        <Card.Content>
          <span style={{ float: "right" }}>
            <a style={{ color: "black" }} href="/">
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
              trigger={<Icon name="edit" size="large"></Icon>}
            >
              <Modal.Header>Edit Personal Details</Modal.Header>
              {/* <Modal.Content image>
                  <Image
                    size="medium"
                    src="/images/avatar/large/rachel.png"
                    wrapped
                  />
                  <Modal.Description>
                    <Header>Default Profile Image</Header>
                    <p>
                      We've found the following gravatar image associated with
                      your e-mail address.
                    </p>
                    <p>Is it okay to use this photo?</p>
                  </Modal.Description>
                </Modal.Content> */}
              <Modal.Content style={{ float: "center" }}>
                <Header>First Name</Header>
                <input
                  onChange={(e) => {
                    setNewFirstName(e.target.value);
                  }}
                  placeholder="first name"
                  style={{ height: "30px", width: "300px" }}
                ></input>
                <Header>Last Name</Header>
                <input
                  onChange={(e) => {
                    setNewLastName(e.target.value);
                  }}
                  placeholder="last name"
                  style={{ height: "30px", width: "300px" }}
                ></input>
                <Header>Email</Header>
                <input
                  onChange={(e) => {
                    setNewEmail(e.target.value);
                  }}
                  placeholder="example@email.com"
                  style={{ height: "30px", width: "300px" }}
                ></input>
                <Header>Phone</Header>
                <input
                  onChange={(e) => {
                    setNewPhone(e.target.value);
                  }}
                  placeholder="000-000-0000"
                  style={{ height: "30px", width: "300px" }}
                ></input>
                <Header>Address</Header>
                <input
                  onChange={(e) => {
                    setNewAddress(e.target.value);
                  }}
                  placeholder="123 Main Street Orlando, FL 32808"
                  style={{ height: "30px", width: "300px" }}
                ></input>
              </Modal.Content>
              <Modal.Actions>
                <Button color="black" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
                <Button
                  content="Submit Change"
                  labelPosition="right"
                  icon="checkmark"
                  onClick={() => {
                    UpdateDetails(memberDetails);
                  }}
                  onClick={() => setOpen(false)}
                  positive
                />
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
                <List.Header as="a">Requests</List.Header>
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
                <List.Header as="a">Messages</List.Header>
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
                <List.Header as="a">Catalog</List.Header>
                <List.Description as="a">Updated 34 mins ago</List.Description>
              </List.Content>
            </List.Item>
          </List>
        </Card.Content>
      </Card>
      <Card className="main" className="ui container center aligned">
        <Card.Content>
          <Card.Header>My Requests</Card.Header>
        </Card.Content>
        <Card.Content style={{ overflowY: "scroll", maxHeight: "400px" }}>
          <Table celled striped color="red">
            <Table.Header>
              {/* <Table.Row>
                <Table.HeaderCell>Item</Table.HeaderCell>
                <Table.HeaderCell>status</Table.HeaderCell>
                <Table.HeaderCell>Date</Table.HeaderCell>
              </Table.Row> */}
            </Table.Header>
            <Table.Body>
              {Object.keys(requestList).map((request, i) => {
                return (
                  <Table.Row key={request.id}>
                    <Table.Cell>{requestList[request].item}some gun</Table.Cell>
                    <Table.Cell>
                      {requestList[request].status} PENDING
                    </Table.Cell>
                    <Table.Cell>
                      {requestList[request].date_updated} 2021/02/20 17:15;15
                    </Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table>
        </Card.Content>
      </Card>
      <div className="tree">
        <p className="spat"></p>
        <p className="plat"></p>
      </div>
    </div>
  );
};

export default Profile;
