import {
  Card,
  Table,
  Icon,
  Checkbox,
  Modal,
  Button,
  Feed,
  Header,
  Popup,
  Form,
  Image,
} from "semantic-ui-react";
import React, { useState, useEffect, Input } from "react";
import Axios from "axios";
import API from "../utils/API";
import { useParams } from "react-router";
import { useLocation } from "react-router-dom";
import ProfileImage from "../Pages/ProfilePage/profileImage.jpg";

function ExecutiveData(props) {
  //EXECUTIVE DATA VARIABLES
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
  const [newPlaceBorn, setNewPlaceBorn] = useState("");
  const [newDob, setNewDob] = useState("");
  const [newSsn, setNewSsn] = useState("");
  const [newEthnicity, setNewEthnicity] = useState("");
  const [newRace, setNewRace] = useState("");

  const [newMemId, setNewMemId] = useState("");
  // VARIABLES FOR THE NOTES

  const [noteTyped, setNoteTyped] = useState("");
  const [adminName, setAdminName] = useState("");
  const [memberName, setMemberName] = useState("");
  // const memberName = id.memberName;
  const [notesList, setNotesList] = useState("");
  //UNUSED MEMBER ID
  const [memberId, setMemberId] = useState("");
  //MODAL OPEN CLOSE
  const [open, setOpen] = React.useState(false);
  // VARIABLES FOR REQUESTS
  const [requestList, setRequestList] = useState("");
  const [category, setCategory] = useState("");
  const [item, setItem] = useState("");
  const [brand, setBrand] = useState("");
  const [quantity, setQuantity] = useState("");
  const [status, setStatus] = useState("");
  const [newStatus, setNewStatus] = useState("");
  const [sku, setSku] = useState("");
  const [note, setNote] = useState("");
  const [source, setSource] = useState("");
  const [newNote, setNewNote] = useState("");
  const noteHeader = "Request Note";
  // const [memberName, setMemberName] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const userId = props.id;

  // const [customerFirst, setCustomerFirst] = useState("");

  // const id = props.id;
  const { id } = useParams();

  //GET MEMBER DETAILS
  const getMemberInfo = () => {
    Axios.get("https://executive-app.herokuapp.com/member").then((response) => {
      // Axios.get("http://localhost:3001/member").then((response) => {
      // console.log(response);
      // console.log(response.data[id]);
      const arrayMembers = response.data;
      const result = arrayMembers.filter(
        (arrayMembers) => arrayMembers.id == id
      );
      setMemberDetails(result[0]);
      // console.log(result[0]);
      // const userID = response.data[id];
      // setMemberDetails(userID);
      // setMemberId(memberDetails.id);

      setMemberName(result[0].first_name + " " + result[0].last_name);
      // console.log(result[0].first_name + " " + result[0].last_name);
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
  const ChangeMemId = (id) => {
    Axios.put("https://executive-app.herokuapp.com/changeMembId", {
      // Axios.put("http://localhost:3001/changeMemId", {
      memId: newMemId,
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
  const ChangePlaceBorn = (id) => {
    Axios.put("https://executive-app.herokuapp.com/changePlaceBorn", {
      // Axios.put("http://localhost:3001/changePlaceBorn", {
      placeBorn: newPlaceBorn,
      id: id,
    }).then((response) => {
      // console.log("completed");
      getMemberInfo();
    });
  };
  const ChangeDob = (id) => {
    Axios.put("https://executive-app.herokuapp.com/changeDob", {
      // Axios.put("http://localhost:3001/changeDob", {
      dob: newDob,
      id: id,
    }).then((response) => {
      // console.log("completed");
      getMemberInfo();
    });
  };
  const ChangeSsn = (id) => {
    Axios.put("https://executive-app.herokuapp.com/ChangeSsn", {
      // Axios.put("http://localhost:3001/ChangeSsn", {
      ssn: newSsn,
      id: id,
    }).then((response) => {
      // console.log("completed");
      getMemberInfo();
    });
  };
  const ChangeEthnicity = (id) => {
    Axios.put("https://executive-app.herokuapp.com/changeEthnicity", {
      // Axios.put("http://localhost:3001/changeEthnicity", {
      ethnicity: newEthnicity,
      id: id,
    }).then((response) => {
      // console.log("completed");
      getMemberInfo();
    });
  };
  const ChangeRace = (id) => {
    Axios.put("https://executive-app.herokuapp.com/changeRace", {
      // Axios.put("http://localhost:3001/changeRace", {
      race: newRace,
      id: id,
    }).then((response) => {
      // console.log("completed");
      getMemberInfo();
    });
  };
  //END UPDATING MEMBER DETAILS

  //GET USER NOTES
  const getMemberNotes = () => {
    Axios.get("https://executive-app.herokuapp.com/userNotes").then(
      (response) => {
        // Axios.get("http://localhost:3001/userNotes").then((response) => {
        const arrayNotes = response.data;
        const result = arrayNotes.filter(
          (arrayNotes) => arrayNotes.memberIdentity == id
        );
        setNotesList(result);
        // console.log(result);
      }
    );
  };
  //SUBMIT NOTE
  const submitNote = (e) => {
    Axios.post("https://executive-app.herokuapp.com/newDashboardNote", {
      // Axios.post("http://localhost:3001/newDashboardNote", {
      noteTyped: noteTyped,
      adminName: adminName,
      memberName: memberName,
      id: id,
    }).then(() => {
      getMemberNotes();
    });
  };

  //DELETE NOTE
  const Deletenote = (id) => {
    Axios.delete(`https://executive-app.herokuapp.com/deleteNote/${id}`).then(
      () => {
        // Axios.delete(`http://localhost:3001/deleteNote/${id}`).then(() => {
        getMemberNotes();
      }
    );
  };
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
  //
  // MEMBER REQUEST FUNCTIONS
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
        console.log(result);
      }
    );
  };

  const submitRequest = (e) => {
    Axios.post("https://executive-app.herokuapp.com/requsted", {
      // Axios.post("http://localhost:3001/requsted", {
      category: category,
      item: item,
      brand: brand,
      quantity: quantity,
      status: status,
      userId: userId,
      sku: sku,
      note: note,
      source: source,
      memberName: memberName,
      id: id,
    }).then(() => {
      // console.log("requested");
      getMemberRequests();
    });
  };

  //UPDATE REQUEST NOTE
  const updateNote = (id) => {
    Axios.put("https://executive-app.herokuapp.com/noteUpdate", {
      // Axios.put("http://localhost:3001/noteUpdate", {
      note: newNote,
      id: id,
    }).then((response) => {
      getMemberRequests();
      getMemberNotes();
      requestNote();
    });
  };
  // const updateSource = (id) => {
  //   // Axios.put("https://executive-app.herokuapp.com/sourceUpdate", {
  //   Axios.put("http://localhost:3001/sourceUpdate", {
  //     source: newSource,
  //     id: id,
  //   }).then((response) => {
  //     getMemberRequests();
  //   });
  // };

  const updateStatus = (id) => {
    Axios.put("https://executive-app.herokuapp.com/statusUpdate", {
      // Axios.put("http://localhost:3001/statusUpdate", {
      status: newStatus,
      id: id,
    }).then((response) => {
      getMemberRequests();
    });
  };
  //SUBMIT REQUEST NOTE
  const requestNote = (id) => {
    Axios.post("https://executive-app.herokuapp.com/newDashboardNote", {
      // Axios.post("http://localhost:3001/requestNote", {
      note: newNote,
      memberName: memberName,
      noteHeader: noteHeader,
      id: id,
    }).then(() => {});
  };
  // ***** END FUNCTIONS****
  // START USE EFFECT
  useEffect(() => {
    getMemberInfo();
    getMemberNotes();
    getMemberRequests();
  }, []);

  return (
    <div
      style={{
        padding: "1%",
        width: "100%",
        backgroundColor: "black",
      }}
    >
      {/* BEGIN THE CUSTOMER DATA CARD */}
      <div style={{ display: "flex", padding: ".5rem", alignItems: "top" }}>
        <div
          style={{
            display: "flex",
            width: "50%",
            padding: ".5rem",
            alignItems: "top",
          }}
        >
          <Card
            fluid
            style={{ width: "100%", marginRight: "10px", height: "100%" }}
          >
            <Card.Content>
              <Card.Header>
                {memberDetails.first_name} {memberDetails.middle_name}{" "}
                {memberDetails.last_name} {/* BEGIN MODAL CONTENT */}
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
                    {/* MODAL CONENT COLLAPSE  */}
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
                      <Header>Location Born</Header>
                      <input
                        onChange={(o) => {
                          setNewPlaceBorn(o.target.value);
                        }}
                        placeholder="Billings, Montana"
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
                          ChangePlaceBorn(memberDetails.id);
                        }}
                      >
                        Change Location Born
                      </Button>
                      <Header>D.O.B.</Header>
                      <input
                        onChange={(o) => {
                          setNewDob(o.target.value);
                        }}
                        placeholder="December 31, 1999"
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
                          ChangeDob(memberDetails.id);
                        }}
                      >
                        Change D.O.B.
                      </Button>
                      <Header>SSN</Header>
                      <input
                        onChange={(o) => {
                          setNewSsn(o.target.value);
                        }}
                        placeholder="*********"
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
                          ChangeSsn(memberDetails.id);
                        }}
                      >
                        Change SSN
                      </Button>
                      <Header>Ethnicity</Header>
                      <input
                        onChange={(o) => {
                          setNewEthnicity(o.target.value);
                        }}
                        placeholder="Native-American, African-American"
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
                          ChangeEthnicity(memberDetails.id);
                        }}
                      >
                        Change Ethnicity
                      </Button>
                      <Header>Race</Header>
                      <input
                        onChange={(o) => {
                          setNewRace(o.target.value);
                        }}
                        placeholder="Black, White, Asian"
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
                          ChangeRace(memberDetails.id);
                        }}
                      >
                        Change Race
                      </Button>
                      <Header>Member ID</Header>
                      <input
                        onChange={(o) => {
                          setNewMemId(o.target.value);
                        }}
                        placeholder="1234"
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
                          ChangeMemId(memberDetails.id);
                        }}
                      >
                        Change ID
                      </Button>
                    </Modal.Content>
                    <Modal.Actions>
                      {/* END MODAL CONENT COLLAPSE  */}
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
                {/* END MODAL CONTENT */}
              </Card.Header>
              <Card.Meta>{memberDetails.address} </Card.Meta>
              <Card.Meta>
                {/* <span className="date">{memberDetails.address}</span> */}
              </Card.Meta>
            </Card.Content>

            <Card.Content extra>
              <Icon name="phone" style={{ margin: "0 20px" }} />

              {memberDetails.phone
                ? memberDetails.phone
                : "No phone number provided"}
              <Icon name="mail" style={{ margin: "0 20px" }} />

              <a href={"mailto:"}>{memberDetails.email}</a>
              <Icon name="birthday cake" style={{ margin: "0 20px" }} />

              {memberDetails.DOB}
              <Icon name="home" style={{ margin: "0 20px" }} />

              {memberDetails.placeBorn}
            </Card.Content>
            <Card.Content>
              <Table celled striped color="red">
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell colSpan="3">
                      Account Info{" "}
                      <Card.Meta>
                        Member Number: {memberDetails.number}{" "}
                      </Card.Meta>
                      <Popup
                        trigger={
                          <Image
                            size="small"
                            src={ProfileImage}
                            style={{
                              float: "right",
                              top: "-20px",
                              border: "1px solid black",
                            }}
                          />
                        }
                      >
                        <Popup.Header>Demographics</Popup.Header>
                        <Popup.Content>
                          <Card.Meta>
                            Ethnicity: {memberDetails.ethnicity}
                          </Card.Meta>
                          <Card.Meta>Race: {memberDetails.race}</Card.Meta>
                          <Card.Meta>SSN: {memberDetails.SSN}</Card.Meta>
                        </Popup.Content>
                      </Popup>
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
                  {/* <Table.Row>
                    <Table.HeaderCell colSpan="3">
                      Demographics{" "}
                    </Table.HeaderCell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Ethnicity</Table.Cell>
                    <Table.Cell>{memberDetails.ethnicity}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Race</Table.Cell>
                    <Table.Cell>{memberDetails.race}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Race</Table.Cell>
                    <Table.Cell>{memberDetails.SSN}</Table.Cell>
                  </Table.Row> */}
                </Table.Body>
              </Table>
            </Card.Content>
          </Card>
        </div>
        <div
          style={{
            display: "flex",
            width: "50%",
            padding: ".5rem",
            alignItems: "top",
          }}
        >
          <Card fluid style={{ height: "600px" }}>
            <Card.Content>
              <Card.Header>Notes</Card.Header>
            </Card.Content>
            <Card.Content
              style={{
                overflowY: "scroll",
                scrollbarWidth: "1px",
                height: "100%",
                display: "flex",
                flexDirection: "column-reverse",
              }}
            >
              <Feed>
                {Object.keys(notesList).map((keyName, i) => {
                  let date = new Date(notesList[keyName].createdAt)
                    .toUTCString()
                    .split(" ")
                    .slice(0, 4)
                    .join(" ");
                  return (
                    <Feed.Event>
                      <Feed.Label>
                        <Icon name="user circle" />
                      </Feed.Label>

                      <Feed.Content style={{ color: "red" }}>
                        <Feed.Summary>
                          <Feed.User
                            style={{ cursor: "default", color: "#DB2828" }}
                          >
                            {notesList[keyName].adminName}
                            {/* {notesList[keyName].noteHeader} */}
                          </Feed.User>
                          <Feed.Date>{date}</Feed.Date>
                        </Feed.Summary>
                        <Feed.Meta>
                          <Feed.User>
                            {notesList[keyName].memberName} {""}
                            {/* {notesList[keyName].memberIdentity} */}
                          </Feed.User>
                        </Feed.Meta>
                        <Feed.Extra style={{ width: "300px" }}>
                          {" "}
                          {notesList[keyName].note}
                          <p
                            style={{
                              textAlign: "right",
                            }}
                          >
                            {notesList[keyName].requestNote}
                          </p>
                        </Feed.Extra>
                        ________________________________________________________________{" "}
                        <Icon
                          name="x"
                          style={{ marginRight: "0px" }}
                          onClick={() => {
                            Deletenote(notesList[keyName].id);
                          }}
                        />{" "}
                      </Feed.Content>
                    </Feed.Event>
                  );
                })}
              </Feed>
            </Card.Content>

            <Card.Content>
              <Form
                style={{
                  backgroundColor: "white",
                  border: "none",
                  padding: "0px",
                  marginLeft: "0",
                  width: "100%",
                }}
              >
                <Form.Group widths="equal" style={{ height: "50px" }}>
                  <Form.Input
                    onChange={(e) => {
                      setAdminName(e.target.value);
                    }}
                    icon="user circle"
                    iconPosition="left"
                    placeholder="Admin Frist and Last"
                  />
                  {/* <Form.Input
                    onChange={(e) => {
                      setMemberName(e.target.value);
                    }}
                    icon="user circle"
                    iconPosition="left"
                    placeholder="Member First and Last"
                  /> */}
                </Form.Group>

                <textarea
                  onChange={(e) => {
                    setNoteTyped(e.target.value);
                  }}
                  style={{ margin: "1px", width: "88%", height: "100px" }}
                  icon="sticky note outline"
                  iconPosition="left"
                  placeholder="Add Note..."
                />
                <Button type="reset" onClick={submitNote}>
                  Submit
                </Button>
              </Form>
            </Card.Content>
          </Card>
        </div>
      </div>
      {/* ******** */}
      {/*  START REQUESTS */}
      {/* ******** */}
      <div
        style={{
          display: "flex",
          padding: ".5rem",
          alignItems: "top",
        }}
      >
        <Card fluid style={{ marginRight: "10px", height: "550px" }}>
          <Card.Content>
            <Card.Header>Requests</Card.Header>
          </Card.Content>
          <Card.Content>
            <Form
              style={{
                backgroundColor: "white",
                border: "none",
                padding: "0px",
                width: "50%",
                marginLeft: "auto",
                marginRight: "auto",
                alignItems: "center",
                alignContent: "center",
              }}
            >
              <Form.Group widths="equal">
                {/* <Form.Input
                  onChange={(e) => {
                    setMemberName(e.target.value.toUpperCase());
                  }}
                  placeholder="Member Name"
                /> */}
                <select
                  onChange={(e) => {
                    setCategory(e.target.value.toUpperCase());
                  }}
                  style={{
                    height: "40px",
                    width: "100%",
                    backgroundColor: "lightGrey",
                    borderRadius: "5px",
                    border: "none",
                  }}
                >
                  <option>Category</option>
                  <option value="Accessories">Accessories</option>
                  <option value="Ammunition">Ammunition</option>
                  <option value="Class 3">Class 3</option>
                  <option value="Firearms">Firearms</option>
                  {/* <option value="Scopes">Scopes</option> */}
                </select>

                <Form.Input
                  onChange={(e) => {
                    setBrand(e.target.value.toUpperCase());
                  }}
                  placeholder="Make"
                />
                <Form.Input
                  onChange={(e) => {
                    setItem(e.target.value.toUpperCase());
                  }}
                  placeholder="Model"
                />
                <Form.Input
                  onChange={(e) => {
                    setSku(e.target.value.toUpperCase());
                  }}
                  placeholder="UPC / SKU"
                />
              </Form.Group>
              <Form.Group widths="equal" style={{ height: "50px" }}>
                <Form.Input
                  onChange={(e) => {
                    setQuantity(e.target.value);
                  }}
                  placeholder="Quantity"
                />

                <select
                  onChange={(e) => {
                    setStatus(e.target.value.toUpperCase());
                  }}
                  style={{
                    height: "40px",
                    width: "100%",
                    backgroundColor: "lightGrey",
                    borderRadius: "5px",
                    border: "none",
                  }}
                >
                  <option> Status</option>
                  <option value="Pending">Pending</option>
                  <option value="On Hold">On Hold</option>
                  <option value="Ordered">Ordered</option>
                  <option value="Back Order">Back Order</option>
                  <option value="Completed">Completed</option>
                  <option value="Canceled">Canceled</option>
                </select>
                <Form.Input
                  onChange={(e) => {
                    setNote(e.target.value);
                  }}
                  placeholder="Note"
                />
                <Form.Input
                  onChange={(e) => {
                    setSource(e.target.value);
                  }}
                  placeholder="Source"
                />
              </Form.Group>

              <Button
                type="reset"
                onClick={submitRequest}
                style={{
                  width: "100%",
                  marginLeft: "auto",
                  marginRight: "auto",
                  alignItems: "center",
                  alignContent: "center",
                }}
              >
                Submit Request
              </Button>
            </Form>
          </Card.Content>
          <Card.Content style={{ overflowY: "scroll", height: "100%" }}>
            <Table celled striped color="red">
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Member Name</Table.HeaderCell>
                  <Table.HeaderCell>Category</Table.HeaderCell>
                  <Table.HeaderCell>Item</Table.HeaderCell>
                  <Table.HeaderCell>UPC / SKU</Table.HeaderCell>
                  <Table.HeaderCell>Quantity</Table.HeaderCell>
                  <Table.HeaderCell>Status</Table.HeaderCell>
                  <Table.HeaderCell>Update Status</Table.HeaderCell>
                  <Table.HeaderCell>Source</Table.HeaderCell>
                  <Table.HeaderCell>Note</Table.HeaderCell>
                  <Table.HeaderCell>Update Note</Table.HeaderCell>
                  {/* <Table.HeaderCell>Update Source</Table.HeaderCell> */}
                  <Table.HeaderCell>Date Updated</Table.HeaderCell>
                  {/* <Table.HeaderCell>ID</Table.HeaderCell> */}
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {Object.keys(requestList).map((request, i) => {
                  let created = new Date(requestList[request].date_created)
                    .toUTCString()
                    .split(" ")
                    .slice(0, 4)
                    .join(" ");
                  let update = new Date(requestList[request].date_updated)
                    .toUTCString()
                    .split(" ")
                    .slice(0, 4)
                    .join(" ");
                  return (
                    <Table.Row key={request.id}>
                      <Table.Cell>{requestList[request].memberName}</Table.Cell>
                      <Table.Cell>{requestList[request].category}</Table.Cell>

                      <Table.Cell>{requestList[request].item}</Table.Cell>
                      <Table.Cell>{requestList[request].sku}</Table.Cell>
                      <Table.Cell>{requestList[request].quantity}</Table.Cell>
                      <Table.Cell> {requestList[request].status}</Table.Cell>
                      <Table.Cell>
                        <Form.Group
                          style={{ backgroundColor: "none", border: "none" }}
                        >
                          <select
                            onChange={(e) => {
                              setNewStatus(e.target.value.toUpperCase());
                            }}
                            style={{
                              height: "35px",
                              width: "100%",
                              backgroundColor: "lightGrey",
                              borderRadius: "5px",
                              border: "none",
                            }}
                          >
                            <option>Choose Status</option>
                            <option value="Pending">Pending</option>
                            <option value="On Hold">On Hold</option>
                            <option value="Back Order">Back Order</option>
                            <option value="Ordered">Ordered</option>
                            <option value="Completed">Completed</option>
                            <option value="Canceled">Canceled</option>
                          </select>
                          <Button
                            onClick={() => {
                              updateStatus(requestList[request].id);
                            }}
                            style={{ width: "100%", marginTop: "10px" }}
                          >
                            Update
                            <Icon
                              style={{ marginLeft: "10px" }}
                              name="edit outline"
                            ></Icon>
                          </Button>
                        </Form.Group>{" "}
                      </Table.Cell>
                      <Table.Cell>{requestList[request].source}</Table.Cell>
                      <Table.Cell style={{ maxWidth: "300px" }}>
                        {" "}
                        {requestList[request].note}
                      </Table.Cell>
                      <Table.Cell>
                        <textarea
                          onChange={(e) => {
                            setNewNote(e.target.value);
                          }}
                          placeholder="Update Note"
                        ></textarea>
                        <Button
                          onClick={() => {
                            updateNote(requestList[request].id);
                          }}
                          style={{ marginLeft: "20px" }}
                        >
                          Update
                          <Icon name="edit outline"></Icon>
                        </Button>
                      </Table.Cell>
                      {/* <Table.Cell>
                        <textarea
                          onChange={(e) => {
                            setNewSource(e.target.value);
                          }}
                          placeholder="Update Source"
                        ></textarea>
                        <Button
                          onClick={() => {
                            updateSource(requestList[request].id);
                          }}
                          style={{ marginLeft: "20px" }}
                        >
                          Update
                          <Icon name="edit outline"></Icon>
                        </Button>
                      </Table.Cell> */}

                      <Table.Cell>{update}</Table.Cell>
                      {/* <Table.Cell></Table.Cell> */}
                    </Table.Row>
                  );
                })}
              </Table.Body>
            </Table>
          </Card.Content>
        </Card>
      </div>

      {/* END THE CUSTOMER DATA CARD */}
    </div>
  );
}

export default ExecutiveData;
