import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import {
  Card,
  Header,
  Icon,
  Table,
  Image,
  Modal,
  Button,
  Feed,
} from "semantic-ui-react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

import Axios from "axios";
import NoImage from "./no-product-found.png";
import Product from "../images/ProductPlaceholderImage.png";

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
  const [messageList, setMessageList] = useState("");
  const [open, setOpen] = React.useState(false);
  const [item, setItem] = useState("");
  const [status, setStatus] = useState("");
  const [dateUpdated, setDateUpdated] = useState("");
  const [events, setEvents] = useState("");
  const [messageTyped, setMessageTyped] = useState("");
  const [senderName, setSenderName] = useState("");
  const [custName, setCustName] = useState("");
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("");
  const [catalog, setCatalog] = useState("");
  const { id } = useParams();

  //ADD CATALOG ITEM TO REQUESTS
  const AddToRequests = (id) => {
    Axios.post("https://executive-app.herokuapp.com/marketCart", {
      // Axios.post("http://localhost:3001/marketCart", {
      custName: custName,
      memberId: memberId,
      id: id,
    }).then(() => {
      alert("Your order has been placed.");
    });
  };
  //ADD CATALOG ITEM TO REQUESTS

  //SUBMIT NOTE
  const submitMessage = (e) => {
    Axios.post("https://executive-app.herokuapp.com/sendMessageProfile", {
      // Axios.post("http://localhost:3001/sendMessageProfile", {
      messageTyped: messageTyped,
      senderName: senderName,
      id: id,
    }).then(() => {
      alert("Your message has been submited");
      LoadPage();
    });
  };
  const GetCatalog = () => {
    Axios.get("https://executive-app.herokuapp.com/getCatalogNow").then(
      (response) => {
        // Axios.get("http://localhost:3001/getCatalogNow").then((response) => {
        setCatalog(response.data);
      }
    );
  };
  // ******** CONTROL LIKE COUNTER **************
  const AddLike = (id) => {
    // setNewLikeTotal(likeTotal++);
    // console.log(newLikeTotal);
    Axios.post("https://executive-app.herokuapp.com/addALike", {
      // Axios.post("http://localhost:3001/addALike", {
      id: id,
    }).then(() => {});
  };

  const getMemberInfo = () => {
    Axios.get("https://executive-app.herokuapp.com/memberProfile").then(
      (response) => {
        // Axios.get("http://localhost:3001/memberProfile").then((response) => {
        const arrayMembers = response.data;
        const result = arrayMembers.filter(
          (arrayMembers) => arrayMembers.id == id
        );
        setMemberDetails(result[0]);
        setSenderName(result[0].first_name + " " + result[0].last_name);
        setCustName(result[0].first_name + " " + result[0].last_name);
        setMemberId(result[0].id);
      }
    );
  };

  const ChangeFirst = (id) => {
    Axios.put("https://executive-app.herokuapp.com/changeFirst", {
      // Axios.put("http://localhost:3001/changeFirst", {
      firstName: newFirstName,
      id: id,
    }).then((response) => {
      getMemberInfo();
    });
  };
  const ChangeMiddle = (id) => {
    Axios.put("https://executive-app.herokuapp.com/changeMiddle", {
      // Axios.put("http://localhost:3001/changeMiddle", {
      middleName: newMiddleName,
      id: id,
    }).then((response) => {
      getMemberInfo();
    });
  };
  const ChangeLast = (id) => {
    Axios.put("https://executive-app.herokuapp.com/changeLast", {
      // Axios.put("http://localhost:3001/changeLast", {
      lastName: newLastName,
      id: id,
    }).then((response) => {
      getMemberInfo();
    });
  };
  const ChangeEmail = (id) => {
    Axios.put("https://executive-app.herokuapp.com/changeEmail", {
      // Axios.put("http://localhost:3001/changeEmail", {
      email: newEmail,
      id: id,
    }).then((response) => {
      getMemberInfo();
    });
  };
  const ChangePhone = (id) => {
    Axios.put("https://executive-app.herokuapp.com/changePhone", {
      // Axios.put("http://localhost:3001/changePhone", {
      phone: newPhone,
      id: id,
    }).then((response) => {
      getMemberInfo();
    });
  };
  const ChangeAddress = (id) => {
    Axios.put("https://executive-app.herokuapp.com/changeAddress", {
      // Axios.put("http://localhost:3001/changeAddress", {
      address: newAddress,
      id: id,
    }).then((response) => {
      getMemberInfo();
    });
  };
  const ChangePassword = (id) => {
    Axios.put("https://executive-app.herokuapp.com/changePassword", {
      // Axios.put("http://localhost:3001/changePassword", {
      password: newPassword,
      id: id,
    }).then((response) => {
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
  //GETTING SPECIFIC MESSAGES
  const getMemberMessages = () => {
    Axios.get("https://executive-app.herokuapp.com/memberMessages").then(
      (response) => {
        // Axios.get("http://localhost:3001/memberMessages").then((response) => {
        const arrayMessages = response.data;
        const returned = arrayMessages.filter(
          (arrayMessages) => arrayMessages.memberIdentity == id
        );
        setMessageList(returned);
      }
    );
  };
  //GETTING EVENTS
  const getEvents = () => {
    Axios.get("https://executive-app.herokuapp.com/events").then((response) => {
      // Axios.get("http://localhost:3001/events").then((response) => {
      setEvents(response.data);
    });
  };

  const LoadPage = () => {
    getMemberRequests();
    getMemberInfo();
    getMemberMessages();
  };
  useEffect(() => {
    //LOAD PROFILE DATA
    getMemberInfo();
    getMemberRequests();
    getMemberMessages();
    GetCatalog();
    getEvents();
  }, []);

  return (
    <div className="profileMain">
      {/* ************************** start new profile page ************************* */}

      {/* ************************************************************************************************************ end new profile page ************************************************************************************************************************* */}
      <Container fluid="md">
        <Row className="info-message-requests">
          <Col>
            {" "}
            <div
              style={{
                alignContent: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              {" "}
              <img src={Product} className="header-logo"></img>
            </div>
            <span style={{ float: "right", paddingRight: "10%" }}>
              <a style={{ color: "black" }} href="/">
                <Icon name="sign out alternate" size="large"></Icon>
              </a>
            </span>
            <span
              style={{
                position: "relative",
                float: "left",
                paddingLeft: "10%",
              }}
            >
              <Modal
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
                style={{
                  margin: "0 auto",
                  height: "80%",
                  marginLeft: "5%",
                }}
              >
                <Modal.Header>Edit Personal Details</Modal.Header>

                <Modal.Content style={{ float: "center" }}>
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
                  <Header>Profile Picture</Header>
                  <form action="/" method="POST" encType="multiport/form-data">
                    <input
                      type="file"
                      name="samepleFile"
                      accept="image/*"
                    ></input>
                    <input type="submit" class="btn btn-primary"></input>
                  </form>
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
            <div className="personal-info-container">
              <h2 className="customer-name">
                {memberDetails.first_name} {memberDetails.middle_name}{" "}
                {memberDetails.last_name}
              </h2>
              <p className="peronal-info-inline">
                Member ID: {memberDetails.number}
              </p>
              <p className="peronal-info-inline">
                Preferred Store: {memberDetails.preferredStore}
              </p>
              <p className="peronal-info-inline">{memberDetails.address}</p>
              <p className="peronal-info-inline">{memberDetails.email}</p>
              <p className="peronal-info-inline">{memberDetails.phone}</p>
            </div>
          </Col>
          <Col>
            {" "}
            <div className="request-div-section">
              {" "}
              <div style={{ height: "50px" }}></div>
              <h3 className="section-titles right-section-title requests-title">
                SPECIAL REQUESTS
              </h3>
              <div className="request-container">
                <Row>
                  <Col>
                    <p className="request-style">Item</p>
                  </Col>
                  <Col>
                    <p className="request-style">Status</p>
                  </Col>
                  <Col>
                    <p className="request-style">Modified</p>
                  </Col>
                </Row>
                <div className="request-scroll">
                  {Object.keys(requestList).map((request, i) => {
                    let update = new Date(requestList[request].date_updated)
                      .toUTCString()
                      .split(" ")
                      .slice(0, 4)
                      .join(" ");
                    return (
                      <div className="request-item-row">
                        <Row className="message-underline"></Row>

                        <Row key={request.id}>
                          <Col>
                            <p className="request-style">
                              {requestList[request].item}
                            </p>
                          </Col>
                          <Col>
                            <p className="request-style">
                              {" "}
                              {requestList[request].status}
                            </p>
                          </Col>
                          <Col>
                            <p className="request-style">{update}</p>
                          </Col>
                        </Row>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="messages-div-section">
              <div style={{ height: "50px" }}></div>
              <h3 className="section-titles right-section-title messages-title">
                MESSAGES
              </h3>
              <Feed className="message-container">
                {Object.keys(messageList).map((message, i) => {
                  let update = new Date(messageList[message].Date)
                    .toUTCString()
                    .split(" ")
                    .slice(0, 4)
                    .join(" ");
                  return (
                    <div className="message-div">
                      <p className="message-name-date">
                        {" "}
                        <Icon
                          size="large"
                          name="user circle"
                          className="message-icon"
                        />{" "}
                        {messageList[message].SenderName}
                      </p>
                      <span style={{ color: "lightgray" }}> {update}</span>

                      <p className="message"> {messageList[message].Message}</p>
                      <p className="message-underline"></p>
                    </div>
                  );
                })}
              </Feed>

              <form>
                <input
                  placeholder="Message"
                  className="message-textbox"
                  onChange={(e) => {
                    setMessageTyped(e.target.value);
                  }}
                ></input>
                <br></br>
                <button
                  className="message-button"
                  type="reset"
                  onClick={submitMessage}
                >
                  Send Message
                </button>
              </form>
              <br></br>
            </div>
          </Col>
        </Row>
        {/* <Row className="market-calendar-section">
          {" "}
          <h3 className="section-titles">MARKET</h3>
          <div className="card-catalog-container trythis">
            {Object.keys(catalog).map((logs, i) => {
              return (
                <div className="card-catalog-container">
                  <Image wrapped ui={false} />{" "}
                  <img src={NoImage} className="img-height"></img>
                  <Card.Content style={{ marginLeft: "5%" }}>
                    <Card.Header style={{ fontSize: "20px" }}>
                      {catalog[logs].Make}
                    </Card.Header>
                    <Card.Meta>{catalog[logs].Category}</Card.Meta>
                    <Card.Meta>{catalog[logs].Model}</Card.Meta>
                    <Card.Description style={{ color: "red" }}>
                      <span className="date">{catalog[logs].Price}</span>
                    </Card.Description>
                    <Card.Description>{catalog[logs].Sku}</Card.Description>
                  </Card.Content>
                  <Row style={{ paddingLeft: "10%", paddingTop: "5%" }}>
                    <Col>
                      {" "}
                      <Icon
                        name="thumbs up"
                        className="catalog-options-icons"
                      />
                      {catalog[logs].Likes}
                    </Col>
                    <Col>
                      <p className="catalog-options-icons">
                        {" "}
                        Avail: {catalog[logs].Quantity}
                      </p>
                    </Col>
                    <Col>
                      <Icon
                        name="cart"
                        className="catalog-options-icons"
                        onClick={() => {
                          AddToRequests(catalog[logs].id);
                        }}
                      />
                    </Col>
                  </Row>
                </div>
              );
            })}
          </div>
          <Row>
            <Col></Col>
            <Col>
              <Icon name="arrow left" size="large"></Icon>
            </Col>
            <Col>
              <Icon
                name="arrow right"
                size="large"
                style={{ float: "right" }}
              ></Icon>
            </Col>
            <Col></Col>
          </Row>
        </Row> */}
        <Row>
          {" "}
          <div className="center-section">
            <h3 className="section-titles" style={{ paddingTop: "5%" }}>
              CALENDAR
            </h3>
            <div className="table-container-div">
              <Table singleLine style={{ padding: "5%" }}>
                <Table.Body
                  className="scroll-hidden"
                  style={{ overflow: "scroll" }}
                >
                  {Object.keys(events).map((allEvents, i) => {
                    return (
                      <Table.Row>
                        <Table.Cell style={{}}>
                          {events[allEvents].Title}
                        </Table.Cell>
                        <Table.Cell style={{}}>
                          {events[allEvents].Date}
                        </Table.Cell>
                        <Table.Cell style={{}}>
                          {events[allEvents].location}
                        </Table.Cell>
                      </Table.Row>
                    );
                  })}
                </Table.Body>
              </Table>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Profile;
