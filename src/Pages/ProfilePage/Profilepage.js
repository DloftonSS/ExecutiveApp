import React, { useState, useEffect, Input } from "react";
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
  Image,
  Form,
  Sidebar,
  Dropdown,
  Modal,
  Button,
  Feed,
} from "semantic-ui-react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

import Logo from "../images/exec catalog.png";
import Axios from "axios";
// import Logo from "./profileImage.jpg";
import Albert from "./profileImage.jpg";
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

  const [catalog, setCatalog] = useState("");
  const [likeTotal, setLikeTotal] = useState("");
  // const [newLikeTotal, setNewLikeTotal] = useState("");
  const newLikeTotal = "1";
  // const id = props.match.params.id;
  // const id = props.id;
  const { id } = useParams();
  // Category, Model, Make, Sku, Price;

  //ADD CATALOG ITEM TO REQUESTS
  const AddToRequests = (id) => {
    Axios.post("https://executive-app.herokuapp.com/marketCart", {
      // Axios.post("http://localhost:3001/marketCart", {
      // messageTyped: messageTyped,
      custName: custName,
      memberId: memberId,
      id: id,
    }).then((response) => {
      alert("Your order has been placed.");
      // LoadPage();
    });
  };
  //ADD CATALOG ITEM TO REQUESTS
  // const AddToRequests = (id) => {
  //   console.log();
  // };

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
        setLikeTotal(response.data.Likes);
        // console.log(response.data.length);
        // console.log(likeTotal);
      }
    );
  };
  // ******** CONTROL LIKE COUNTER **************
  // var likeNumber = likeTotal;
  const AddLike = (id) => {
    // setNewLikeTotal(likeTotal++);
    // console.log(newLikeTotal);
    Axios.post("https://executive-app.herokuapp.com/addALike", {
      // Axios.post("http://localhost:3001/addALike", {
      newLikeTotal: newLikeTotal,
      id: id,
    }).then(() => {});
  };

  const getMemberInfo = () => {
    Axios.get("https://executive-app.herokuapp.com/memberProfile").then(
      (response) => {
        // Axios.get("http://localhost:3001/memberProfile").then((response) => {
        // setMemberDetails(userID);
        const arrayMembers = response.data;
        const result = arrayMembers.filter(
          (arrayMembers) => arrayMembers.id == id
        );
        setMemberDetails(result[0]);
        setSenderName(result[0].first_name + " " + result[0].last_name);
        setCustName(result[0].first_name + " " + result[0].last_name);
        setMemberId(result[0].id);
        // console.log(result[0].id);
      }
    );
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
        // console.log("here" + returned);
      }
    );
  };
  //GETTING EVENTS
  const getEvents = () => {
    Axios.get("https://executive-app.herokuapp.com/events").then((response) => {
      // Axios.get("http://localhost:3001/events").then((response) => {
      setEvents(response.data);
      // console.log(events);
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

    // GET CUSTOMER REQUESTS
    // Axios.get("https://executive-app.herokuapp.com/member").then((response) => {
    // Axios.get("http://localhost:3001/member").then((response) => {
    //   setRequestList(response.data);
    // });
  }, []);

  return (
    <div className="profileMain" style={{ padding: "1%", width: "100%" }}>
      {/* ************************** start new profile page ************************* */}

      <Container fluid="md" style={{ maxHeight: "800px" }}>
        <Row>
          <Col sm={3}>
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
              <a style={{ color: "white" }} href="/">
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
                    style={{ color: "white" }}
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
          <Col sm={6}>
            <div className="center-section">
              <h3 className="section-titles" style={{ paddingTop: "5%" }}>
                CALENDAR
              </h3>
              <div className="table-container-div">
                <Table singleLine style={{ padding: "5%", width: "100%" }}>
                  {/* <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell style={{ width: "100px" }}>
                        Event
                      </Table.HeaderCell>
                      <Table.HeaderCell style={{ width: "100px" }}>
                        Time
                      </Table.HeaderCell>
                      <Table.HeaderCell style={{ width: "100px" }}>
                        Location
                      </Table.HeaderCell>
                    </Table.Row>
                  </Table.Header> */}
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
                          {/* <Table.Cell style={{}}>
                            <select
                              onChange={(e) => {
                                set(e.target.value.toUpperCase());
                              }}
                              style={{
                                height: "35px",
                                width: "100%",
                                backgroundColor: "white",
                                borderRadius: "5px",
                                border: "solid 1px rgb(129, 0, 0)",
                              }}
                            >
                              <option>Attendance</option>
                              <option value="Attending">Attending</option>
                              <option value="Maybe">Maybe</option>
                              <option value="Not Attending">
                                Not Attending
                              </option>
                            </select>
                          </Table.Cell> */}
                        </Table.Row>
                      );
                    })}
                  </Table.Body>
                </Table>
              </div>
              <h3 className="section-titles">MARKET</h3>
              <div>
                <div
                  className="card-catalog-container"
                  className="trythis"
                  style={{ backgroundColor: "white" }}
                >
                  {Object.keys(catalog).map((logs, i) => {
                    return (
                      <div className="card-catalog-container">
                        <Image wrapped ui={false} />{" "}
                        <img src={Product} className="img-height"></img>
                        <Card.Content style={{ marginLeft: "5%" }}>
                          <Card.Header style={{ fontSize: "20px" }}>
                            {catalog[logs].Make}
                          </Card.Header>
                          <Card.Meta>{catalog[logs].Category}</Card.Meta>
                          <Card.Meta>{catalog[logs].Model}</Card.Meta>
                          <Card.Description style={{ color: "red" }}>
                            <span className="date">{catalog[logs].Price}</span>
                          </Card.Description>
                          <Card.Description>
                            {catalog[logs].Sku}
                          </Card.Description>
                        </Card.Content>
                        <Row style={{ paddingLeft: "10%", paddingTop: "5%" }}>
                          <Col>
                            {" "}
                            <Icon
                              name="thumbs up"
                              className="catalog-options-icons"
                              onClick={() => {
                                AddLike(catalog[logs].id);
                              }}
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
              </div>
              {/* <h3 className="section-titles right-section-title gallery-text">
                Gallery
              </h3> */}
            </div>
          </Col>
          <Col sm={3}>
            <div className="right-side-section">
              <div>
                {" "}
                <h3 className="section-titles, right-section-title">
                  SPECIAL REQUESTS
                </h3>
                {/* <Table celled striped color="red"> */}
                {/* <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>Item</Table.HeaderCell>
                      <Table.HeaderCell>status</Table.HeaderCell>
                      <Table.HeaderCell>Modified</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header> */}
                {/* <Table.Body> */}
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
                      // <Table.Row key={request.id}>
                      //   <Table.Cell>{requestList[request].item}</Table.Cell>
                      //   <Table.Cell>{requestList[request].status}</Table.Cell>
                      //   <Table.Cell>{update}</Table.Cell>
                      // </Table.Row>
                      <div>
                        <Row style={{ color: "rgb(129, 0, 0)" }}>
                          ___________________________________________________________________
                        </Row>

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
                {/* </Table.Body> */}
                {/* </Table> */}
              </div>
              <div className="messages-div-section">
                <div style={{ height: "50px" }}></div>
                <h3 className="section-titles right-section-title messages-title">
                  MESSAGES
                </h3>
                <Feed
                  className="message-container"
                  style={{
                    width: "300px",
                    boxShadow: "0px 0px 5px 3px rgb(129, 0, 0)",
                  }}
                >
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
                        {/* <p style={{ color: "white" }}>{update}</p> */}
                        <p className="message">
                          {" "}
                          {messageList[message].Message}
                        </p>
                        <p className="message-underline">
                          ______________________________________________
                        </p>
                      </div>
                    );
                  })}
                </Feed>
                {/* <div style={{ width: "200px" }}> */}
                {/* <form className="message-textbox"> */}
                <Form>
                  <input
                    placeholder="Message"
                    className="message-textbox"
                    // style={{ width: "80%" }}
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
                </Form>
                <br></br>
                {/* </form> */}
                {/* </div> */}
              </div>
            </div>
          </Col>
        </Row>
        {/* <div className="footer">
          <Icon name="copyright outline" style={{ color: "white" }}></Icon>{" "}
          Shoot Straight 2021
        </div> */}
      </Container>

      {/* ************************** end new profile page ************************* */}
      {/*       

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
       
        </Card.Header>
        <Card.Content>
          <img
            onClick={() => {
              LoadPage();
            }}
            style={{ borderRadius: "100px" }}
            src={Albert}
          ></img>
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
        </Card.Content>
      </Card>
      <Card className="main" className="ui container center aligned">
        <Card.Content>
          <List divided relaxed>
            <List.Item>
              <List.Icon
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

      <div className="tree">
     
      </div> */}
    </div>
  );
};

export default Profile;
