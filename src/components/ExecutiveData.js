import {
  Card,
  Table,
  Icon,
  Checkbox,
  Modal,
  Button,
  Image,
  Header,
  Popup,
  Grid,
} from "semantic-ui-react";
import React, { useState, useEffect, Input, Form } from "react";
import Axios from "axios";
import API from "../utils/API";
import { useLocation } from "react-router-dom";

function ExecutiveData(props) {
  const [memberDetails, setMemberDetails] = useState("");
  const [newFirstName, setNewFirstName] = useState("");
  const [newMiddleName, setNewMiddleName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newAddress, setNewAddress] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newCardStatus, setNewCardStatus] = useState("");
  const [newPreferredStore, setNewPreferredStore] = useState("");
  const [newCommunication, setNewCommunication] = useState("");

  const [memberId, setMemberId] = useState("");

  const [open, setOpen] = React.useState(false);

  // const [customerFirst, setCustomerFirst] = useState("");

  const id = props.id;

  //GET MEMBER DETAILS
  const getMemberInfo = () => {
    Axios.get("https://executive-app.herokuapp.com/member").then((response) => {
      // Axios.get("http://localhost:3001/member").then((response) => {
      const userID = response.data[id];
      setMemberDetails(userID);
      // console.log(response.data);
      setMemberId(memberDetails.id);
      // console.log("member ID is" + " " + memberDetails.id);
      //  let date = new Date(memberDetails.date)
      //    .toUTCString()
      //    .split(" ")
      //    .slice(0, 4)
      //    .join(" ");
    });
  };

  //UPDATING MEMBER DETAILS
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
  const ChangeCard = (id) => {
    Axios.put("https://executive-app.herokuapp.com/changeCard", {
      // Axios.put("http://localhost:3001/changeCard", {
      card: newCardStatus,
      id: id,
    }).then((response) => {
      // console.log("completed");
      getMemberInfo();
    });
  };
  const ChangeStore = (id) => {
    Axios.put("https://executive-app.herokuapp.com/changeStore", {
      // Axios.put("http://localhost:3001/changeStore", {
      store: newPreferredStore,
      id: id,
    }).then((response) => {
      // console.log("completed");
      getMemberInfo();
    });
  };
  const ChangeCommunication = (id) => {
    Axios.put("https://executive-app.herokuapp.com/changeCommunication", {
      // Axios.put("http://localhost:3001/changeCommunication", {
      communication: newCommunication,
      id: id,
    }).then((response) => {
      // console.log("completed");
      getMemberInfo();
    });
  };
  //END UPDATING MEMBER DETAILS
  //
  //RENEW MEMBERSHIP BUTTON
  const ChangeRenewal = (id) => {
    Axios.put("https://executive-app.herokuapp.com/changeRenewal", {
      // Axios.put("http://localhost:3001/changeRenewal", {
      id: id,
    }).then((response) => {
      // console.log(response);
      getMemberInfo();
    });
  };

  useEffect(() => {
    getMemberInfo();
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
            {memberDetails.first_name} {memberDetails.middle_name}{" "}
            {memberDetails.last_name}{" "}
            <span style={{ position: "relative", float: "right" }}>
              <Modal
                style={{ height: "700px", left: "25%", top: "10%" }}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                trigger={
                  <Icon
                    name="edit"
                    style={{ color: "black" }}
                    size="large"
                  ></Icon>
                }
              >
                <Modal.Header>Edit Personal Details</Modal.Header>

                <Modal.Content style={{ marginLeft: "50px" }}>
                  <Header>First Name</Header>
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
                    placeholder="middle name"
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
                  </Button>
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
                  <Header>Card</Header>
                  <input
                    onChange={(i) => {
                      setNewCardStatus(i.target.value);
                    }}
                    placeholder="YES or NO"
                    Value={memberDetails.card}
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
                      ChangeCard(memberDetails.id);
                    }}
                  >
                    Change Card
                  </Button>
                  <Header>Preferred Store</Header>
                  <input
                    onChange={(i) => {
                      setNewPreferredStore(i.target.value);
                    }}
                    placeholder="Apopka"
                    Value={memberDetails.store}
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
                      ChangeStore(memberDetails.id);
                    }}
                  >
                    Change Store
                  </Button>
                  <Header>Communication Method</Header>
                  <input
                    onChange={(i) => {
                      setNewCommunication(i.target.value);
                    }}
                    placeholder="Email Only"
                    Value={memberDetails.communication}
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
                      ChangeCommunication(memberDetails.id);
                    }}
                  >
                    Change Communication
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
                    color="red"
                    onClick={() => {
                      ChangePassword(memberDetails.id);
                    }}
                  >
                    Change Password
                  </Button>
                </Modal.Content>
                <Modal.Actions>
                  <Button
                    content="Done"
                    labelPosition="right"
                    icon="checkmark"
                    onClick={() => setOpen(false)}
                    positive
                  />
                </Modal.Actions>
              </Modal>
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
                <Table.Cell>
                  {memberDetails.renewal_date}

                  <Popup
                    trigger={
                      <Button
                        color="yellow"
                        content="Renew Now"
                        style={{ float: "right" }}
                        onClick={() => {
                          ChangeRenewal(memberDetails.id);
                        }}
                      />
                    }
                    content="This Action can NOT be undone."
                    position="top right"
                    size="tiny"
                    inverted
                  />
                  {/* <Button
                    onClick={() => {
                      ChangeRenewal(memberDetails.id);
                    }}
                    style={{ float: "right" }}
                  >
                    Renew Now
                  </Button> */}
                </Table.Cell>
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
