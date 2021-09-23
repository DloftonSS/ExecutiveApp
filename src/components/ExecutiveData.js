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
import React, { useState, useEffect, Input, Form } from "react";
import Axios from "axios";
import API from "../utils/API";
import { useLocation } from "react-router-dom";

function ExecutiveData(props) {
  const [memberDetails, setMemberDetails] = useState("");
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newAddress, setNewAddress] = useState("");

  const [memberId, setMemberId] = useState("");

  const [open, setOpen] = React.useState(false);

  // const [customerFirst, setCustomerFirst] = useState("");

  const id = props.id;

  const UpdateDetails = (memberDetails) => {
    // Axios.get("https://executive-app.herokuapp.com/updateDetails", {
    Axios.put("http://localhost:3001/updateDetails", {
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
    // Axios.get(`http://localhost:3001/member/${id}`).then((response) => {
    //   console.log(response);
    // });
    Axios.get("https://executive-app.herokuapp.com/member").then((response) => {
      // Axios.get("http://localhost:3001/member").then((response) => {
      const userID = response.data[id];
      setMemberDetails(userID);
      // console.log(response.data);
      setMemberId(memberDetails.id);
      // console.log("member ID is" + " " + memberDetails.id);
    });
  }, []);

  return (
    <div
      style={{
        padding: "1%",
        width: "100%",
        backgroundColor: "black",
      }}
    >
      <Card
        fluid
        style={{ width: "100%", marginRight: "10px", height: "100%" }}
      >
        <Card.Content>
          <Card.Header>
            {memberDetails.first_name} {memberDetails.last_name}{" "}
            <span style={{ position: "relative", float: "right" }}>
              <Modal
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                trigger={<Button>Edit Details</Button>}
              >
                <Modal.Header>Edit Customer Data</Modal.Header>
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
          </Card.Header>
          <Card.Meta>{memberDetails.address} </Card.Meta>
          <Card.Meta>
            {/* <span className="date">{memberDetails.address}</span> */}
          </Card.Meta>
        </Card.Content>

        <Card.Content extra>
          <Icon name="phone" style={{ margin: "0 5px" }} />

          {memberDetails.phone
            ? memberDetails.phone
            : "No phone number provided"}
          <Icon name="mail" style={{ margin: "0 5px" }} />

          <a href={"mailto:"}>{memberDetails.email}</a>
        </Card.Content>
        <Card.Content>
          <Table celled striped color="red">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell colSpan="3">
                  Account Info{" "}
                  <Card.Meta>Member Number: {memberDetails.number} </Card.Meta>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <Icon name="calendar check outline" /> Join Date
                </Table.Cell>
                <Table.Cell>{memberDetails.dateJoined}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  {" "}
                  <Icon name="calendar check outline" />
                  Renewal Date
                </Table.Cell>
                <Table.Cell>{memberDetails.renewal_date}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Icon name="calendar times outline" />
                  Expiring Date
                </Table.Cell>
                <Table.Cell>{memberDetails.expiring}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Icon name="building outline" /> Preferred Store
                </Table.Cell>
                <Table.Cell>{memberDetails.preferredStore}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Icon name="id card outline" /> Card Status
                </Table.Cell>
                <Table.Cell>
                  {memberDetails.card}
                  {/* <Icon
                    name="id card outline"
                    color="green"
                    size="large"
                    style={{ margin: "0 auto" }}
                  /> */}
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Icon name="handshake outline" />
                  Communication Method
                </Table.Cell>
                <Table.Cell>
                  {/* <Checkbox toggle defaultChecked /> */}
                  {memberDetails.communication}
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Card.Content>
      </Card>
    </div>
  );
}

export default ExecutiveData;
