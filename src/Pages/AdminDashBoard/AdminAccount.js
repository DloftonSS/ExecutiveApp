import React, { useState, useEffect } from "react";
import {
  Input,
  List,
  Button,
  Checkbox,
  Grid,
  Header,
  Icon,
  Feed,
  Image,
  Card,
  Popup,
  Form,
  Menu,
  Segment,
  Sidebar,
} from "semantic-ui-react";
import Axios from "axios";
// import API from "../utils/API";
// import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Alert } from "react-bootstrap";
import "./AdminAccount.css";
import Logo from "../images/ExecutiveAccess.png";
import MembersDashboard from "../MembersDashBoard/MembersDashboard";
import RequestDashboard from "../RequestsDashBoard/RequestDashboard";
import AddNewMember from "../AddMember/AddMember";
import AddAdminDashboard from "../AddAdmin/AddAdminDashboard";
import CatalogDashboard from "../CatalogDashboard/CatalogDashboard";
import CalendarDashbaord from "../CalendarDashboard/CalendarDashboard";
// import AllMembers from "../Allmembers";

// CHANGE DARK MODE

function AdminAccount() {
  //PENDING CARD FUNCTIONS
  const [pendingCardList, setPendingCardList] = useState("");
  const [contactNeeded, setContactNeeded] = useState("");
  const [decendingList, setDecendingList] = useState("");
  const [activeList, setActiveList] = useState("");
  const [requestList, setRequestList] = useState("");
  const [expiringMembers, setExpiringMembers] = useState("");

  const [notesList, setNotesList] = useState("");
  const acknowledged = "Yes";

  //
  const Responded = (id) => {
    Axios.put("https://executive-app.herokuapp.com/adminResponded", {
      // Axios.put("http://localhost:3001/adminResponded", {
      acknowledged: acknowledged,
      id: id,
    }).then(() => {
      // console.log("clicked");
      // Alert("Initial Contact Changed");
      getPending();
      GetChat();
      ActiveOnly();
      GetAllRequests();
      getExpiringnumber();
      NeedContact();
      GetNotes();
    });
  };

  //NEW PENDING CARD MEMBERS
  const getPending = () => {
    Axios.get("https://executive-app.herokuapp.com/PendingCardMembers").then(
      (response) => {
        // Axios.get("http://localhost:3001/PendingCardMembers").then((response) => {
        setPendingCardList(response.data);
        // console.log(response.data);
      }
    );
  };

  //GET CUSTOMER WHO NEED TO BE CONTACTED
  const NeedContact = () => {
    Axios.get("https://executive-app.herokuapp.com/getNeedContact").then(
      (response) => {
        // Axios.get("http://localhost:3001/getNeedContact").then((response) => {
        setContactNeeded(response.data);
        // console.log(response.data);
      }
    );
  };

  //GET EXPIRING MEMBERS
  const getExpiringnumber = () => {
    Axios.get("https://executive-app.herokuapp.com/expiringMembers").then(
      (response) => {
        // Axios.get("http://localhost:3001/expiringMembers").then((response) => {
        setExpiringMembers(response.data);
      }
    );
  };

  //GET ALL THE NOTES
  const GetNotes = () => {
    Axios.get("https://executive-app.herokuapp.com/api/get").then(
      (response) => {
        // Axios.get("http://localhost:3001/api/get").then((response) => {
        setNotesList(response.data);
        // console.log(response.data);
      }
    );
  };
  //DELETE NOTE
  const Deletenote = (id) => {
    Axios.delete(`https://executive-app.herokuapp.com/deleteNote/${id}`).then(
      () => {
        // Axios.delete(`http://localhost:3001/deleteNote/${id}`).then(() => {
        // console.log("deleted");
        GetNotes();
      }
    );
  };

  //CHAT FUNCTIONS
  const [chatTyped, setChatTyped] = useState("");
  const [chatList, setchatList] = useState("");

  const [adminName, setAdminName] = useState("");

  //SUBMIT chat
  const submitChat = (e) => {
    Axios.post("https://executive-app.herokuapp.com/postChat", {
      // Axios.post("http://localhost:3001/postChat", {
      chatTyped: chatTyped,
      adminName: adminName,
    }).then(() => {
      alert("sumbited");
      // reloadPage();
    });
  };

  const GetChat = () => {
    Axios.get("https://executive-app.herokuapp.com/chat").then((response) => {
      // Axios.get("http://localhost:3001/chat").then((response) => {
      setchatList(response.data);
      // console.log(response.data);
    });
  };

  //DELETE NOTE
  const DeleteChat = (id) => {
    Axios.delete(`https://executive-app.herokuapp.com/deleteChat/${id}`).then(
      () => {
        // Axios.delete(`http://localhost:3001/deleteChat/${id}`).then(() => {
        // console.log("deleted");
        GetChat();
      }
    );
  };
  //
  //
  //
  //GET ACTIVE ONLY MEMBERS
  const ActiveOnly = () => {
    Axios.get("https://executive-app.herokuapp.com/api/activeMembers").then(
      (response) => {
        // Axios.get("http://localhost:3001/api/activeMembers").then((response) => {
        setActiveList(response.data);
        // console.log(response.data);
      }
    );
  };
  //GET ALL ACTIVE REQUESTS
  const GetAllRequests = () => {
    Axios.get("https://executive-app.herokuapp.com/allRequests").then(
      (response) => {
        // Axios.get("http://localhost:3001/allRequests").then((response) => {
        setRequestList(response.data);
      }
    );
  };
  //
  //
  //
  // CONTROLLING THE SHOW / HIDE FEATURE OF THE NAV
  //
  //
  const ShowDashboard = () => {
    document.getElementById("dashboard-content").style.display = "block";
    document.getElementById("requests-content").style.display = "none";
    document.getElementById("members-content").style.display = "none";
    document.getElementById("catalog-content").style.display = "none";
    document.getElementById("calendar-content").style.display = "none";
    document.getElementById("addMember-content").style.display = "none";
    document.getElementById("addAdmin-content").style.display = "none";
  };
  const ShowMembers = () => {
    document.getElementById("members-content").style.display = "block";
    document.getElementById("dashboard-content").style.display = "none";
    document.getElementById("requests-content").style.display = "none";
    document.getElementById("addMember-content").style.display = "none";
    document.getElementById("catalog-content").style.display = "none";
    document.getElementById("calendar-content").style.display = "none";
    document.getElementById("addAdmin-content").style.display = "none";
  };
  const ShowRequests = () => {
    document.getElementById("requests-content").style.display = "block";
    document.getElementById("dashboard-content").style.display = "none";
    document.getElementById("members-content").style.display = "none";
    document.getElementById("addMember-content").style.display = "none";
    document.getElementById("catalog-content").style.display = "none";
    document.getElementById("calendar-content").style.display = "none";
    document.getElementById("addAdmin-content").style.display = "none";
  };
  const ShowCatalog = () => {
    document.getElementById("requests-content").style.display = "none";
    document.getElementById("dashboard-content").style.display = "none";
    document.getElementById("members-content").style.display = "none";
    document.getElementById("addMember-content").style.display = "none";
    document.getElementById("catalog-content").style.display = "block";
    document.getElementById("calendar-content").style.display = "none";
    document.getElementById("addAdmin-content").style.display = "none";
  };
  const ShowCalendar = () => {
    document.getElementById("requests-content").style.display = "none";
    document.getElementById("dashboard-content").style.display = "none";
    document.getElementById("members-content").style.display = "none";
    document.getElementById("addMember-content").style.display = "none";
    document.getElementById("catalog-content").style.display = "none";
    document.getElementById("calendar-content").style.display = "block";
    document.getElementById("addAdmin-content").style.display = "none";
  };
  const AddMember = () => {
    document.getElementById("requests-content").style.display = "none";
    document.getElementById("dashboard-content").style.display = "none";
    document.getElementById("members-content").style.display = "none";
    document.getElementById("addMember-content").style.display = "block";
    document.getElementById("catalog-content").style.display = "none";
    document.getElementById("calendar-content").style.display = "none";
    document.getElementById("addAdmin-content").style.display = "none";
  };
  const AddAdmin = () => {
    document.getElementById("requests-content").style.display = "none";
    document.getElementById("dashboard-content").style.display = "none";
    document.getElementById("members-content").style.display = "none";
    document.getElementById("addMember-content").style.display = "none";
    document.getElementById("catalog-content").style.display = "none";
    document.getElementById("calendar-content").style.display = "none";
    document.getElementById("addAdmin-content").style.display = "block";
  };

  //
  //
  //
  useEffect(() => {
    getPending();
    GetChat();
    ActiveOnly();
    GetAllRequests();
    getExpiringnumber();
    NeedContact();
    GetNotes();
  }, []);

  return (
    <div className="main-container">
      <Container className="header-container">
        <Row>
          <Col sm={2} className="img-container">
            <img src={Logo}></img>
          </Col>
          <Col sm={10} className="col-container">
            {/* sm=8 */}
            <Row className="nav-main">
              <Col sm={2} className="hello-name">
                HELLO
              </Col>
              <Col sm={6} className="nav-search">
                <input
                  placeholder="Search Unavailable"
                  className="member-search"
                ></input>
              </Col>
              <Col sm={2} className="nav-notifications">
                <Row>
                  <Col sm={4}>
                    <Popup
                      trigger={
                        <div>
                          {" "}
                          <Icon name="bell outline" size="large"></Icon>Alert
                        </div>
                      }
                      content={
                        <div>
                          Welcome to the new Shoot Straight Executive Access
                          Admin Dashboard!
                        </div>
                      }
                      position="bottom center"
                      inverted
                    />
                  </Col>
                  <Col sm={4}>
                    <a href="/" style={{ color: "white" }}>
                      <Icon name="sign-out" size="large"></Icon>Exit
                    </a>
                  </Col>
                </Row>
                {/* <p>.nav-notification</p> */}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      {/* MAIN DASH CONTAINER */}
      <Container className="contains-nav-master-dash">
        <Row className="middle-row">
          {/* SIDE NAVIGATION */}
          <Col sm={2} className="side-navigation">
            {/* .side-navigation */}
            <List className="nav-list">
              <List.Item
                className="menu-item"
                id="dashy"
                onClick={ShowDashboard}
              >
                <Icon className="icon" name="home"></Icon>DASHBOARD
              </List.Item>
              <List.Item className="menu-item" onClick={ShowMembers}>
                <Icon className="icon" name="users"></Icon>MEMBERS
              </List.Item>
              <List.Item className="menu-item" onClick={ShowRequests}>
                <Icon className="icon" name="heart"></Icon>
                REQUESTS
              </List.Item>
              <List.Item className="menu-item" onClick={ShowCatalog}>
                <Icon className="icon" name="list"></Icon>MARKET
              </List.Item>
              <List.Item className="menu-item" onClick={ShowCalendar}>
                <Icon className="icon" name="calendar alternate"></Icon>CALENDAR
              </List.Item>
              <List.Item className="menu-item" onClick={AddMember}>
                <Icon className="icon" name="user plus"></Icon>ADD MEMBER
              </List.Item>
              <List.Item className="menu-item" onClick={AddAdmin}>
                <Icon className="icon" name="user plus"></Icon>ADD ADMIN
              </List.Item>
            </List>
            {/* CHAT BELOW NAVIGATIONS */}
            <h3 className="chat-h3">
              <h2 className="chat-title">
                <Icon name="chat"></Icon> <span className="span">C</span>hat
              </h2>
            </h3>
            <p className="chat-line">___________________________________</p>
            <Container
              className="chat-container"
              style={{
                overflowY: "scroll",
                scrollbarWidth: "1px",
                width: "100%",
                // height: "80%",
                display: "flex",
                flexDirection: "column-reverse",
                marginBottom: "8%",
              }}
            >
              {/* .chat-container */}
              {/* <Feed
                style={{
                  overflowY: "scroll",
                  scrollbarWidth: "1px",
                  height: "80%",
                  display: "flex",
                  flexDirection: "column-reverse",
                  //   marginBottom: "8%",
                }}
              > */}
              {Object.keys(chatList).map((keyName, i) => {
                return (
                  // <p>{chatList[keyName].note}</p>;
                  <Feed.Event>
                    {/* <Feed.Label>
                        <Icon name="user circle" />
                      </Feed.Label> */}

                    <Feed.Content style={{ color: " rgb(129, 0, 0)" }}>
                      <Feed.Summary>
                        <Feed.User
                          style={{
                            cursor: "default",
                            color: " white",
                            fontSize: "15px",
                          }}
                        >
                          {chatList[keyName].adminName}
                        </Feed.User>
                        <Feed.Date style={{ color: "rgb(60, 60, 60)" }}>
                          {chatList[keyName].createdAt}
                        </Feed.Date>
                      </Feed.Summary>
                      {/* <Feed.Meta>
                      <Feed.User>Name of Customer</Feed.User>
                    </Feed.Meta> */}
                      <Feed.Extra
                        style={{
                          width: "100%",
                          color: "white",
                          fontSize: "15px",
                        }}
                      >
                        {" "}
                        {chatList[keyName].expression}
                      </Feed.Extra>
                      _______________________{" "}
                      <Icon
                        onClick={() => {
                          DeleteChat(chatList[keyName].id);
                        }}
                        name="x"
                        style={{ marginRight: "0px" }}
                      />{" "}
                    </Feed.Content>
                  </Feed.Event>
                );
              })}
              {/* </Feed> */}
            </Container>
            <Form>
              {" "}
              <input
                style={{ color: "white", backgroundColor: "rgb(60, 60, 60)" }}
                className="chat-input"
                placeholder="message"
                onChange={(e) => {
                  setChatTyped(e.target.value);
                }}
              ></input>
              <select
                onChange={(e) => {
                  setAdminName(e.target.value);
                }}
                style={{
                  height: "40px",
                  width: "100%",
                  color: "white",
                  backgroundColor: " #121212",
                  borderRadius: "5px",
                  border: "none",
                  border: "1px solid white",
                  marginBottom: "10px",
                }}
              >
                <option>Admin Name</option>
                <option value="Dillon H.">Dillon H.</option>
                <option value="Jose R. ">Jose R. </option>
                <option value="Derek L.">Derek L.</option>
                <option value="Chris A.">Chris A.</option>
                <option value="Michael N.">Michael N.</option>
                {/* <option value="Scopes">Scopes</option> */}
              </select>
              <Button
                basic
                inverted
                color="gray"
                className="chat-send-button"
                // onClick={submitChat}
                onClick={() => {
                  submitChat();
                }}
              >
                Send
              </Button>
            </Form>
          </Col>
          {/* ****************************************************************************************************/}
          {/*  */}
          {/* 
          THIS WILL CONSTANTLY CHANGE
          DEPENDING ON WHAT NAV MENU IS SELECTED.
          USING ID TAGS TO SHOW / HIDE DIFFERENT SECTIONS */}
          {/*  */}
          {/* ****************************************************************************************************/}
          <Col
            sm={10}
            id="members-content"
            style={{
              height: "100% !important",
              color: "black",
              backgroundColor: "white",
              boxShadow: "0px 0px 5px 3px rgb(129, 0, 0)",
            }}
            className="main-members"
          >
            <MembersDashboard />
            {/* <AllMembers /> */}
            {/* This is new info will be members page */}
          </Col>
          <Col
            sm={10}
            id="requests-content"
            style={{
              height: "100% !important",
              color: "black",
              backgroundColor: "white",
              boxShadow: "0px 0px 5px 3px rgb(129, 0, 0)",
            }}
            className="main-requests"
          >
            <RequestDashboard />
          </Col>
          <Col
            sm={10}
            id="catalog-content"
            style={{
              height: "100% !important",
              color: "black",
              backgroundColor: "white",
              boxShadow: "0px 0px 5px 3px rgb(129, 0, 0)",
            }}
            className="main-catalog"
          >
            <CatalogDashboard />
          </Col>
          <Col
            sm={10}
            id="calendar-content"
            style={{
              height: "100% !important",
              color: "black",
              backgroundColor: "white",
              boxShadow: "0px 0px 5px 3px rgb(129, 0, 0)",
            }}
            className="main-calendar"
          >
            <CalendarDashbaord />
          </Col>
          <Col
            sm={10}
            id="addMember-content"
            style={{
              height: "100% !important",
              color: "black",
              backgroundColor: "white",
              boxShadow: "0px 0px 5px 3px rgb(129, 0, 0)",
            }}
            className="main-addMember"
          >
            <AddNewMember />
          </Col>
          <Col
            sm={10}
            id="addAdmin-content"
            style={{
              height: "100% !important",
              color: "black",
              backgroundColor: "white",
              boxShadow: "0px 0px 5px 3px rgb(129, 0, 0)",
            }}
            className="main-addAdmin"
          >
            <AddAdminDashboard />
          </Col>

          {/* ****************************************************************************************************/}
          {/*  */}
          {/* MAIN DASH WITH STATS
           */}
          {/*  */}
          {/* ****************************************************************************************************/}
          <Col sm={10} id="dashboard-content" className="main-dashboard">
            {/* master Dash .main-dashboard */}
            <Row>
              <Col sm={2} className="stats-container">
                {/* .stats-container */}
                <Popup
                  trigger={
                    <div className="stats-box">
                      <h1 className="stat-number">{activeList.length}</h1>
                      <p>Members</p>
                    </div>
                  }
                  content="Total number of Active Members"
                  position="bottom center"
                  inverted
                />
              </Col>
              <Col sm={2} className="stats-container">
                {/* .stats-container */}
                <Popup
                  trigger={
                    <div className="stats-box">
                      {" "}
                      <h1 className="stat-number">{requestList.length}</h1>
                      <p>Requests</p>
                    </div>
                  }
                  content="Total number of Active Requests"
                  position="bottom center"
                  inverted
                />
              </Col>
              <Col sm={2} className="stats-container">
                {/* .stats-container */}
                <Popup
                  trigger={
                    <div className="stats-box">
                      {" "}
                      <h1 className="stat-number">{expiringMembers.length}</h1>
                      <p>Expiring</p>
                    </div>
                  }
                  content="Members Expiring in 30 or less"
                  position="bottom center"
                  inverted
                />
              </Col>
              <Col sm={2} className="stats-container">
                {/* .stats-container */}
                <Popup
                  trigger={
                    <div className="stats-box">
                      <h1 className="stat-number">{pendingCardList.length}</h1>
                      <p>Pending Card</p>
                    </div>
                  }
                  content={
                    <ul>
                      <p>Card NOT made.</p>
                      <p style={{ color: "rgb(129, 0, 0)" }}>
                        ________________________________
                      </p>
                      {Object.keys(pendingCardList).map((pendingCard, i) => {
                        return (
                          <ul key={pendingCard.id}>
                            <li>
                              {pendingCardList[pendingCard].first_name +
                                " " +
                                pendingCardList[pendingCard].last_name}
                            </li>
                          </ul>
                        );
                      })}
                    </ul>
                  }
                  position="bottom center"
                  inverted
                />
              </Col>
              <Col sm={2} className="stats-container">
                {/* .stats-container */}
                <Popup
                  trigger={
                    <div className="stats-box">
                      <h1 className="stat-number">{contactNeeded.length}</h1>
                      <p>Contact Req.</p>
                    </div>
                  }
                  content={
                    <ul>
                      <p>Have NOT been contacted</p>
                      <p style={{ color: "rgb(129, 0, 0)" }}>
                        ________________________________
                      </p>
                      {Object.keys(contactNeeded).map((ContactIsNo, i) => {
                        return (
                          <ul key={ContactIsNo.id}>
                            <li>
                              {contactNeeded[ContactIsNo].first_name +
                                " " +
                                contactNeeded[ContactIsNo].last_name}
                            </li>
                          </ul>
                        );
                      })}
                    </ul>
                  }
                  position="bottom center"
                  inverted
                />
              </Col>
            </Row>
            {/* PENDING CARD */}
            <Row className="dash-content">
              <Col sm={8} className="pending-card">
                <h2 className="card-title">
                  <span className="span">P</span>ending{" "}
                  <span className="span">C</span>ard
                </h2>{" "}
                {/* <div className="customer-card">
                  Customer Info .customer-card
                </div>
                <div className="customer-card">
                  Customer Info .customer-card
                </div>
                <div className="customer-card">
                  Customer Info .customer-card
                </div>
                <div className="customer-card">
                  Customer Info .customer-card
                </div> */}{" "}
                {Object.keys(pendingCardList).map((member, i) => {
                  let joinDate = new Date(pendingCardList[member].dateJoined)

                    .toUTCString()
                    .split(" ")
                    .slice(1, 4)
                    .join(" ");
                  return (
                    <Card
                      style={{
                        height: "200px",
                        width: "100%",
                        marginTop: "20px",
                        marginBottom: "20px",
                        borderRadius: "10px",
                        color: "black",
                        boxShadow: "0px 0px 5px 3px rgb(60, 60, 60)",
                      }}
                    >
                      <Card.Content>
                        <Row>
                          <Col>
                            <h2 style={{ color: "black" }}>
                              <Link
                                style={{ color: "black" }}
                                to={`/executiveAccount/${pendingCardList[member].id}`}
                              >
                                {" "}
                                {pendingCardList[member].first_name +
                                  " " +
                                  pendingCardList[member].last_name}
                              </Link>
                            </h2>
                            <Card.Meta style={{ color: "black" }}>
                              {" "}
                              Phone: {pendingCardList[member].phone}
                            </Card.Meta>
                            <Card.Description style={{ color: "darkGray" }}>
                              {" "}
                              Email: {pendingCardList[member].email}
                            </Card.Description>
                            <Card.Meta style={{ color: "black" }}>
                              {" "}
                              Card Status: {pendingCardList[member].card}
                            </Card.Meta>
                            <Card.Description style={{ color: "darkGray" }}>
                              {" "}
                              Joined: {joinDate}
                            </Card.Description>
                          </Col>
                          <Col>
                            <div
                              style={{
                                backgroundColor: "white",
                                color: "rgb(129, 0, 0)",
                                boxShadow: "0px 0px 5px 3px rgb(60, 60, 60)",
                                borderRadius: "10px",
                                padding: "5px",
                                position: "absolute",
                                float: "right",
                                marginTop: "10px",
                                height: "120px",
                                width: "120px",
                              }}
                            >
                              <Card.Header
                                style={{
                                  marginTop: "2%",
                                  textAlign: "center",
                                  fontSize: "17px",
                                }}
                              >
                                Initial Contact
                              </Card.Header>
                              <Button
                                style={{ width: "100%", marginTop: "25px" }}
                                // inverted
                                onClick={() => {
                                  Responded(pendingCardList[member].id);
                                }}
                              >
                                {pendingCardList[member].acknowledged}
                              </Button>
                            </div>
                          </Col>
                        </Row>
                      </Card.Content>
                    </Card>
                  );
                })}
              </Col>
              <Col sm={4} className="recent-activity">
                <h2 className="ra-title">
                  <span className="span">R</span>ecent{" "}
                  <span className="span">A</span>ctivity
                </h2>
                <p className="chat-line">
                  _____________________________________________________________
                </p>
                <div className="feed-container">
                  <Container
                    className="recent-activity-container"
                    style={{
                      overflowY: "scroll",
                      scrollbarWidth: "1px",
                      width: "100%",
                      maxHeight: "600px",
                      display: "flex",
                      flexDirection: "column-reverse",
                      marginBottom: "8%",
                    }}
                  >
                    {Object.keys(notesList).map((reActivity, i) => {
                      let created = new Date(notesList[reActivity].createdAt)

                        .toUTCString()
                        .split(" ")
                        .slice(1, 4)
                        .join(" ");
                      return (
                        <Feed.Event>
                          <Feed.Label>
                            {/* <Icon name="user circle" /> */}
                          </Feed.Label>

                          <Feed.Content style={{ color: " rgb(129, 0, 0)" }}>
                            <Feed.Summary>
                              <Feed.User
                                style={{
                                  cursor: "default",
                                  color: " black",
                                  fontSize: "15px",
                                }}
                              >
                                <Icon name="user circle" />{" "}
                                {notesList[reActivity].adminName}
                                {notesList[reActivity].noteHeader}
                              </Feed.User>
                              <Feed.Date>{created}</Feed.Date>
                            </Feed.Summary>
                            <Feed.Meta>
                              <Feed.User
                                style={{
                                  width: "300px",
                                  color: "black",
                                }}
                              >
                                {notesList[reActivity].memberName} {""}
                              </Feed.User>
                            </Feed.Meta>
                            <Feed.Extra
                              style={{
                                width: "300px",
                                color: "black",
                              }}
                            >
                              {" "}
                              {notesList[reActivity].note}
                              {notesList[reActivity].newFirst}
                              {notesList[reActivity].newMiddle}
                              {notesList[reActivity].newLast}
                              {notesList[reActivity].newPhone}
                              {notesList[reActivity].newEmail}
                              {notesList[reActivity].newAddress}
                              {notesList[reActivity].newPassword}
                              {notesList[reActivity].newCard}
                              {notesList[reActivity].newStore}
                              {notesList[reActivity].newCommunication}
                              {notesList[reActivity].newBorn}
                              {notesList[reActivity].newDob}
                              {notesList[reActivity].newSsn}
                              {notesList[reActivity].newEthnicity}
                              {notesList[reActivity].newRace}
                              <p
                                style={{
                                  color: "gray",
                                }}
                              >
                                {notesList[reActivity].requestNote}
                              </p>
                            </Feed.Extra>
                            ________________________________________________{" "}
                            <Icon
                              onClick={() => {
                                Deletenote(notesList[reActivity].id);
                              }}
                              name="x"
                              style={{ marginRight: "0px" }}
                            />{" "}
                          </Feed.Content>
                        </Feed.Event>
                      );
                    })}
                  </Container>
                </div>
              </Col>
            </Row>
            <Row className="below-pending"></Row>
          </Col>
        </Row>
      </Container>
      <div
        style={{ width: "100%", height: "1px", backgroundColor: "black" }}
      ></div>
    </div>
  );
}

export default AdminAccount;
