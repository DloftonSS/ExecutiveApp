import React, { useState, useEffect } from "react";
import {
  Button,
  Form,
  Input,
  Card,
  Table,
  Icon,
  Modal,
  Header,
  Popup,
} from "semantic-ui-react";
import Axios from "axios";
import StoreHeader from "../components/Storefront/header";
import { useParams } from "react-router";
import "../components/Storefront/addMember.css";

function StoreFront() {
  const [customerFirst, setCustomerFirst] = useState("");
  const [customerMiddle, setCustomerMiddle] = useState("");
  const [customerLast, setCustomerLast] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [communication, setCommunication] = useState("");
  const [preferredStore, setPreferredStore] = useState("");
  // const [card, setCard] = useState("");
  // const [memberNumber, setMemberNumber] = useState("");
  const [placeBorn, setPlaceBorn] = useState("");
  const [dob, setDob] = useState("");
  const [ssn, setSsn] = useState("");
  const [ethnicity, setEthnicity] = useState("");
  const [race, setRace] = useState("");
  const [associate, setAssociate] = useState("");
  const [clerk, setClerk] = useState("");

  // FIND ALL MEMBERS

  const [memberList, setMemberList] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpen] = React.useState(true);

  //LOGGED IN USER
  const { id } = useParams();
  const [managerDetails, setManagerDetails] = useState("");
  const getManager = () => {
    Axios.get("https://executive-app.herokuapp.com/managerData").then(
      (response) => {
        // Axios.get("http://localhost:3001/managerData").then((response) => {
        const userID = response.data[id];
        setManagerDetails(userID);
        setClerk(userID.first_name);
        console.log(clerk);
      }
    );
  };
  //REGISTER CUSTOMER
  const submitNewCustomer = () => {
    Axios.post("https://executive-app.herokuapp.com/addMember", {
      // Axios.post("http://localhost:3001/addMember", {
      customerFirst: customerFirst,
      customerMiddle: customerMiddle,
      customerLast: customerLast,
      customerPhone: customerPhone,
      customerEmail: customerEmail,
      customerAddress: customerAddress,
      communication: communication,
      preferredStore: preferredStore,
      ssn: ssn,
      placeBorn: placeBorn,
      dob: dob,
      ethnicity: ethnicity,
      race: race,
    })
      .then((response, error) => {
        console.log("submited");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // GET ALL MEMBERS
  Axios.get("https://executive-app.herokuapp.com/api/getAllMembers").then(
    (response) => {
      // Axios.get("http://localhost:3001/api/getAllMembers").then((response) => {
      setMemberList(response.data);
      // console.log(response.data);
    }
  );

  useEffect(() => {
    getManager();
  }, []);

  return (
    <div className="newMember">
      <StoreHeader />
      {/* <div>This will be for adding the members to the Database.</div> */}

      {/* NEW STORE FRONT ADD MEMBER */}
      <h1 style={{ marginLeft: "10%" }}>Hello {managerDetails.first_name}</h1>
      <Form className="main-form" style={{ marginTop: "-3%" }}>
        {" "}
        <h1>Registration</h1>
        <Form.Group widths="equal">
          <Form.Field>
            <label>First name</label>
            <Input
              fluid
              placeholder="First name"
              onChange={(e) => {
                setCustomerFirst(e.target.value);
              }}
            />
          </Form.Field>
          <Form.Field>
            <label>Middle name</label>
            <Input
              fluid
              placeholder="Middle name"
              onChange={(e) => {
                setCustomerMiddle(e.target.value);
              }}
            />
          </Form.Field>
          <Form.Field>
            <label>Last name</label>
            <Input
              fluid
              placeholder="Last name"
              onChange={(e) => {
                setCustomerLast(e.target.value);
              }}
            />
          </Form.Field>
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field>
            <label>Email</label>
            <Input
              fluid
              placeholder="Email"
              onChange={(e) => {
                setCustomerEmail(e.target.value);
              }}
            />
          </Form.Field>
          <Form.Field>
            <label>Address</label>
            <Input
              fluid
              placeholder="Address"
              onChange={(e) => {
                setCustomerAddress(e.target.value);
              }}
            />
          </Form.Field>
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field width={4}>
            <label>Phone</label>
            <Input
              fluid
              placeholder="Phone"
              onChange={(e) => {
                setCustomerPhone(e.target.value);
              }}
            />
          </Form.Field>
          <Form.Field width={2}>
            <label>Contact</label>
            <Input
              fluid
              placeholder="Phone, Email, Both"
              onChange={(e) => {
                setCommunication(e.target.value);
              }}
            />
          </Form.Field>
          <Form.Field width={3}>
            <label>Preferred Store</label>
            <Input
              fluid
              placeholder="Apopka"
              onChange={(e) => {
                setPreferredStore(e.target.value);
              }}
            />
          </Form.Field>
          {/* <Form.Field width={2}>
            <label>Card</label>
            <Input
              fluid
              placeholder="Yes or No"
              onChange={(e) => {
                setCard(e.target.value);
              }}
            />
          </Form.Field> */}
          {/* <Form.Field width={3}>
            <label>Member Number</label>
            <Input
              fluid
              placeholder="123"
              onChange={(e) => {
                setMemberNumber(e.target.value);
              }}
            />
          </Form.Field> */}
          <Form.Field width={4}>
            <label>Place of Birth</label>
            <Input
              fluid
              placeholder="Orlando, FL USA"
              onChange={(e) => {
                setPlaceBorn(e.target.value);
              }}
            />
          </Form.Field>
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field width={4}>
            <label>D.O.B.</label>
            <Input
              fluid
              placeholder="July, 4th 1776 "
              onChange={(e) => {
                setDob(e.target.value);
              }}
            />
          </Form.Field>
          <Form.Field width={4}>
            <label>SSN</label>
            <Input
              fluid
              type="password"
              placeholder=" Optional ***-**-****"
              onChange={(e) => {
                setSsn(e.target.value);
              }}
            />
          </Form.Field>
          <Form.Field width={4}>
            <label>Ethnicity</label>
            <Input
              fluid
              placeholder="Japanese American, Cuban American, European"
              onChange={(e) => {
                setEthnicity(e.target.value);
              }}
            />
          </Form.Field>
          <Form.Field width={4}>
            <label>Race</label>
            <Input
              fluid
              placeholder="Black, Hispanic, White"
              onChange={(e) => {
                setRace(e.target.value);
              }}
            />
          </Form.Field>
        </Form.Group>
        {/* <Form.Group>
          <Form.Field width={4}>
            <label>Clerk</label>
            <Input
              fluid
              // Value={managerDetails.first_name}
              placeholder={
                managerDetails.first_name + " " + managerDetails.last_name
              }
              onChange={(e) => {
                setClerk(e.target.value);
              }}
            />
          </Form.Field>
        </Form.Group> */}
        <Button type="reset" onClick={submitNewCustomer}>
          Register Executive
        </Button>
      </Form>
      {/* END REGISTRATION */}
      {/* START CUSTOMER LOOK UP */}

      <h1 style={{ marginLeft: "10%" }}>Customer Look up</h1>
      <Input
        type="text"
        placeholder="Search First or Last Name"
        style={{
          width: "250px",
          height: "40px",
          marginLeft: "10%",
        }}
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      ></Input>
      <Card style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}>
        <Card.Content
          style={{ overflowY: "scroll", height: "200px", marginBottom: "5%" }}
        >
          <Table celled striped color="red">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Details</Table.HeaderCell>
                <Table.HeaderCell>First Name</Table.HeaderCell>
                <Table.HeaderCell>Last Name</Table.HeaderCell>
                {/* <Table.HeaderCell>Phone</Table.HeaderCell> */}
                {/* <Table.HeaderCell>Email</Table.HeaderCell> */}
                {/* <Table.HeaderCell>Address</Table.HeaderCell> */}
                <Table.HeaderCell>Date Joined</Table.HeaderCell>
                <Table.HeaderCell>Date Expiring</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {Object.keys(memberList)
                .filter((member) => {
                  if (searchTerm == "" || searchTerm == null) {
                    return "";
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
                  let joindate1 = new Date(memberList[member].dateJoined)
                    .toUTCString()
                    .split(" ")
                    .slice(0, 4)
                    .join(" ");
                  let expiring = new Date(memberList[member].expiring)
                    .toUTCString()
                    .split(" ")
                    .slice(0, 4)
                    .join(" ");
                  return (
                    <Table.Row
                      style={{ overflowY: "scroll", width: "100%" }}
                      key={member.id}
                    >
                      {/* <Table.Cell>{memberList[member].number}</Table.Cell> */}
                      <Table.Cell>
                        {" "}
                        <Modal
                          trigger={
                            <Button
                              color="gray"
                              content="View"
                              style={{ float: "left" }}
                              // onClick={() => {
                              //   ChangeRenewal(memberDetails.id);
                              // }}
                            />
                          }
                        >
                          <Modal.Header>
                            Member Number: {memberList[member].number}
                          </Modal.Header>
                          <Modal.Content image>
                            <Modal.Description>
                              <Header>
                                {memberList[member].first_name}{" "}
                                {memberList[member].last_name}
                              </Header>
                              <p>{memberList[member].phone}</p>
                              <p>{memberList[member].email}</p>
                              <p>{memberList[member].address}</p>
                              <p>Date Joined: {joindate1}</p>
                              <p>Date Expiring: {expiring}</p>
                            </Modal.Description>
                          </Modal.Content>

                          <Modal.Actions>
                            <Button
                              color="yellow"
                              style={{ float: "left" }}
                              // onClick={() => setOpen(false)}
                            >
                              Renew
                            </Button>

                            <Button
                              content="Done"
                              labelPosition="right"
                              icon="checkmark"
                              onClick={() => setOpen(false)}
                              positive
                            />
                          </Modal.Actions>
                        </Modal>
                      </Table.Cell>
                      <Table.Cell>{memberList[member].first_name}</Table.Cell>

                      <Table.Cell> {memberList[member].last_name}</Table.Cell>

                      <Table.Cell>{joindate1}</Table.Cell>
                      <Table.Cell>{expiring}</Table.Cell>
                    </Table.Row>
                  );
                })}
            </Table.Body>
          </Table>
        </Card.Content>
      </Card>
      <br></br>
    </div>
  );
}

export default StoreFront;
