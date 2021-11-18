import React, { useState, useEffect, useRef } from "react";
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
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
init("user_9MrgO9HIeQQan5hAG15a2");

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
  const [store, setStore] = useState("");
  const form = useRef();
  const card = "Pending";
  const acknowledged = "No";
  // FIND ALL MEMBERS

  const [memberList, setMemberList] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpen] = React.useState(false);

  //LOGGED IN USER
  const { id } = useParams();
  const [managerDetails, setManagerDetails] = useState("");
  const getManager = () => {
    Axios.get("https://executive-app.herokuapp.com/managerData").then(
      (response) => {
        // Axios.get("http://localhost:3001/managerData").then((response) => {
        const userID = response.data;
        const result = userID.filter((userID) => userID.id == id);
        setManagerDetails(result[0]);
        setClerk(result[0].first_name + " " + result[0].last_name);
        setStore(result[0].store);
        // console.log(result);
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
      clerk: clerk,
      card: card,
      acknowledged: acknowledged,
    })
      .then((response, error) => {
        // console.log("submited");
        GetAllmembers();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //SENDING EMAIL NOTIFICATION OF EXEC SIGN UP
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gt7pfpe",
        "template_u1hvb2j",
        form.current,
        "user_9MrgO9HIeQQan5hAG15a2"
      )
      .then(
        (result) => {
          // console.log(result.text);
        },
        (error) => {
          // console.log(error.text);
        }
      );
    e.target.reset();
  };
  // GET ALL MEMBERS
  const GetAllmembers = () => {
    Axios.get("https://executive-app.herokuapp.com/api/getAllMembers").then(
      (response) => {
        // Axios.get("http://localhost:3001/api/getAllMembers").then((response) => {
        setMemberList(response.data);
        // console.log(response.data);
        // console.log(id);
      }
    );
  };

  useEffect(() => {
    getManager();
    GetAllmembers();
  }, []);

  return (
    <div className="newMember">
      <StoreHeader />
      {/* <div>This will be for adding the members to the Database.</div> */}

      {/* NEW STORE FRONT ADD MEMBER */}
      <h1 style={{ marginLeft: "10%" }}>Hello {clerk}</h1>

      <form
        ref={form}
        onSubmit={sendEmail}
        style={{ marginLeft: "10%", marginRigth: "10%", width: "1500px" }}
      >
        {" "}
        <h2>Sign Up Form</h2>
        <input
          style={{
            color: "black",
            border: "1px solid",
            borderRadius: "5px",
            padding: "10px",
            boxShadow: "1px 5px 3px 5px #888888",
            marginBottom: "30px",
            marginRight: "10px",
            width: "350px",
          }}
          type="text"
          placeholder="First name"
          name="user_name"
          onChange={(e) => {
            setCustomerFirst(e.target.value);
          }}
        />
        <input
          style={{
            color: "black",
            border: "1px solid",
            borderRadius: "5px",
            padding: "10px",
            boxShadow: "1px 5px 3px 5px #888888",
            marginBottom: "30px",
            marginRight: "10px",
            width: "350px",
          }}
          type="text"
          placeholder="Middle name"
          name="user_middle"
          onChange={(e) => {
            setCustomerMiddle(e.target.value);
          }}
        />
        <input
          style={{
            color: "black",
            border: "1px solid",
            borderRadius: "5px",
            padding: "10px",
            boxShadow: "1px 5px 3px 5px #888888",
            marginBottom: "30px",
            marginRight: "10px",
            width: "350px",
          }}
          placeholder="Last name"
          type="text"
          name="user_last"
          onChange={(e) => {
            setCustomerLast(e.target.value);
          }}
        />
        <input
          style={{
            color: "black",
            border: "1px solid",
            borderRadius: "5px",
            padding: "10px",
            boxShadow: "1px 5px 3px 5px #888888",
            marginBottom: "30px",
            marginRight: "10px",
            width: "350px",
          }}
          placeholder="Email"
          type="email"
          name="user_email"
          onChange={(e) => {
            setCustomerEmail(e.target.value);
          }}
        />
        <br></br>
        <input
          style={{
            color: "black",
            border: "1px solid",
            borderRadius: "5px",
            padding: "10px",
            boxShadow: "1px 5px 3px 5px #888888",
            marginBottom: "30px",
            marginRight: "10px",
            width: "350px",
          }}
          type="text"
          placeholder="Phone Number"
          name="user_phone"
          onChange={(e) => {
            setCustomerPhone(e.target.value);
          }}
        />
        <input
          style={{
            color: "black",
            border: "1px solid",
            borderRadius: "5px",
            padding: "10px",
            boxShadow: "1px 5px 3px 5px #888888",
            marginBottom: "30px",
            marginRight: "10px",
            width: "350px",
          }}
          type="text"
          placeholder="Address"
          name="user_address"
          onChange={(e) => {
            setCustomerAddress(e.target.value);
          }}
        />
        <input
          style={{
            color: "black",
            border: "1px solid",
            borderRadius: "5px",
            padding: "10px",
            boxShadow: "1px 5px 3px 5px #888888",
            marginBottom: "30px",
            marginRight: "10px",
            width: "350px",
          }}
          type="text"
          placeholder="Phone, Email, Both"
          name="user_contact"
          onChange={(e) => {
            setCommunication(e.target.value);
          }}
        />
        <input
          style={{
            color: "black",
            border: "1px solid",
            borderRadius: "5px",
            padding: "10px",
            boxShadow: "1px 5px 3px 5px #888888",
            marginBottom: "30px",
            marginRight: "10px",
            width: "350px",
          }}
          type="text"
          placeholder="Preferred Store: Apopka"
          name="user_store"
          onChange={(e) => {
            setPreferredStore(e.target.value);
          }}
        />
        <br></br>
        <input
          style={{
            color: "black",
            border: "1px solid",
            borderRadius: "5px",
            padding: "10px",
            boxShadow: "1px 5px 3px 5px #888888",
            marginBottom: "30px",
            marginRight: "10px",
            width: "350px",
          }}
          type="text"
          placeholder="Place of Birth: Orlando, Florida USA"
          name="user_birthPlace"
          onChange={(e) => {
            setPlaceBorn(e.target.value);
          }}
        />
        <input
          style={{
            color: "black",
            border: "1px solid",
            borderRadius: "5px",
            padding: "10px",
            boxShadow: "1px 5px 3px 5px #888888",
            marginBottom: "30px",
            marginRight: "10px",
            width: "350px",
          }}
          type="text"
          placeholder="D.O.B. July 4, 1977"
          name="user_birth"
          onChange={(e) => {
            setDob(e.target.value);
          }}
        />
        <input
          style={{
            color: "black",
            border: "1px solid",
            borderRadius: "5px",
            padding: "10px",
            boxShadow: "1px 5px 3px 5px #888888",
            marginBottom: "30px",
            marginRight: "10px",
            width: "350px",
          }}
          type="text"
          placeholder="SSN: Optional"
          name="user_ssn"
          onChange={(e) => {
            setSsn(e.target.value);
          }}
        />
        <input
          style={{
            color: "black",
            border: "1px solid",
            borderRadius: "5px",
            padding: "10px",
            boxShadow: "1px 5px 3px 5px #888888",
            marginBottom: "30px",
            marginRight: "10px",
            width: "350px",
          }}
          type="text"
          placeholder="Ethnicity: Japanese American, African American, European"
          name="user_ethnicity"
          onChange={(e) => {
            setEthnicity(e.target.value);
          }}
        />
        <br></br>
        <input
          style={{
            color: "black",
            border: "1px solid",
            borderRadius: "5px",
            padding: "10px",
            boxShadow: "1px 5px 3px 5px #888888",
            marginBottom: "30px",
            marginRight: "10px",
            width: "350px",
          }}
          type="text"
          placeholder="Race: Black, Hispanic, White"
          name="user_race"
          onChange={(e) => {
            setRace(e.target.value);
          }}
        />
        <input
          style={{
            color: "black",
            border: "1px solid",
            borderRadius: "5px",
            padding: "10px",
            boxShadow: "1px 5px 3px 5px #888888",
            marginBottom: "30px",
            marginRight: "10px",
            width: "350px",
          }}
          name="clerk"
          // value={clerk}
          placeholder="Associate Name"
        />
        <input
          style={{
            color: "black",
            border: "1px solid",
            borderRadius: "5px",
            padding: "10px",
            boxShadow: "1px 5px 3px 5px #888888",
            marginBottom: "30px",
            marginRight: "10px",
            width: "350px",
          }}
          name="store"
          value={store}
          onChange={(e) => {
            setClerk(e.target.value);
          }}
        />
        <input
          style={{
            color: "black",
            backgroundColor: "lightgreen",
            border: "1px solid",
            borderRadius: "5px",
            padding: "10px",
            boxShadow: "1px 5px 3px 5px darkgreen",
            marginBottom: "30px",
            marginRight: "10px",
            width: "350px",
          }}
          type="submit"
          value="Register Customer"
          onClick={submitNewCustomer}
        />
        <p>* Verify all information is correct. </p>
        <p>* Clerk name required to receive credit for sign up. </p>
      </form>

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
                      <Table.Cell>
                        {" "}
                        <Modal
                          onClose={() => setOpen(false)}
                          onOpen={() => setOpen(true)}
                          open={open}
                          style={{
                            marginLeft: "25%",
                            height: "350px",
                            marginTop: "10%",
                          }}
                          trigger={
                            <Button
                              color="gray"
                              content="View"
                              style={{ float: "center" }}
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
