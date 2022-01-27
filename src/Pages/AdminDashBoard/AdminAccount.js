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
import { Container, Row, Col } from "react-bootstrap";
import "./AdminAccount.css";
import Logo from "../images/ExecutiveAccess.png";

// CHANGE DARK MODE

function AdminAccount() {
  //PENDING CARD FUNCTIONS
  const [memberList, setMemberList] = useState("");
  const acknowledged = "Yes";

  //
  const Responded = (id) => {
    // Axios.put("https://executive-app.herokuapp.com/adminResponded", {
    Axios.put("http://localhost:3001/adminResponded", {
      acknowledged: acknowledged,
      id: id,
    }).then(() => {
      // console.log("clicked");
      getPending();
    });
  };

  //NEW PENDING CARD MEMBERS
  const getPending = () => {
    // Axios.get("https://executive-app.herokuapp.com/PendingCardMembers").then(
    //   (response) => {
    Axios.get("http://localhost:3001/PendingCardMembers").then((response) => {
      setMemberList(response.data);
      // console.log(response.data);
    });
  };

  //CHAT FUNCTIONS
  const [chatTyped, setChatTyped] = useState("");
  const [chatList, setchatList] = useState("");
  const [adminName, setAdminName] = useState("");

  //SUBMIT NOTE
  const submitChat = (e) => {
    // Axios.post("https://executive-app.herokuapp.com/postChat", {
    Axios.post("http://localhost:3001/postChat", {
      chatTyped: chatTyped,
      adminName: adminName,
    }).then(() => {
      GetChat();
      // console.log("successful chat post");
      // reloadPage();
    });
  };

  const GetChat = () => {
    // Axios.get("https://executive-app.herokuapp.com/chat").then((response) => {
    Axios.get("http://localhost:3001/chat").then((response) => {
      setchatList(response.data);
      // console.log(response.data);
    });
  };

  //DELETE NOTE
  const DeleteChat = (id) => {
    // Axios.delete(`https://executive-app.herokuapp.com/deleteChat/${id}`).then(
    //   () => {
    Axios.delete(`http://localhost:3001/deleteChat/${id}`).then(() => {
      console.log("deleted");
      GetChat();
    });
  };
  useEffect(() => {
    getPending();
    GetChat();
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
                Hello Derek
              </Col>
              <Col sm={6} className="nav-search">
                <input
                  placeholder="Search Members"
                  className="member-search"
                ></input>
              </Col>
              <Col sm={2} className="nav-notifications">
                <Row>
                  <Col sm={4}>
                    <Icon name="bell outline" size="large"></Icon>Alert
                  </Col>
                  <Col sm={4}>
                    <Icon name="sign-out" size="large"></Icon>Exit
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
              <List.Item className="menu-item">
                <Icon className="icon" name="home"></Icon>DASHBOARD
              </List.Item>
              <List.Item className="menu-item">
                <Icon className="icon" name="users"></Icon>MEMBERS
              </List.Item>
              <List.Item className="menu-item">
                <Icon className="icon" name="heart"></Icon>REQUESTS
              </List.Item>
              <List.Item className="menu-item">
                <Icon className="icon" name="list"></Icon>CATALOG
              </List.Item>
              <List.Item className="menu-item">
                <Icon className="icon" name="user plus"></Icon>ADD MEMBER
              </List.Item>
              <List.Item className="menu-item">
                <Icon className="icon" name="user plus"></Icon>ADD ADMIN
              </List.Item>
            </List>
            {/* CHAT BELOW NAVIGATIONS */}
            <h3 className="chat-h3">
              <h2 className="ra-title">
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
                            color: " rgb(129, 0, 0)",
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
                      __________________________{" "}
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
              <Input
                className="chat-input"
                placeholder="message "
                onChange={(e) => {
                  setChatTyped(e.target.value);
                }}
              ></Input>
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
                {/* <option value="Scopes">Scopes</option> */}
              </select>
              <Button
                basic
                inverted
                color="gray"
                className="chat-send-button"
                onClick={submitChat}
              >
                Send
              </Button>
            </Form>
          </Col>
          {/* MAIN DASH WITH STATS */}
          <Col sm={10} className="main-dashboard">
            {/* master Dash .main-dashboard */}
            <Row>
              <Col sm={2} className="stats-container">
                {/* .stats-container */}
                <Popup
                  trigger={
                    <div className="stats-box">
                      <h1 className="stat-number">373</h1>
                      <p>Members</p>
                    </div>
                  }
                  content="How many have expired this month"
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
                      <h1 className="stat-number">37</h1>
                      <p>Requests</p>
                    </div>
                  }
                  content="This will show active requests"
                  position="bottom center"
                  inverted
                />
              </Col>
              <Col sm={2} className="stats-container">
                {/* .stats-container */}
                <div className="stats-box">
                  <h1 className="stat-number">81</h1>
                  <p>Expiring</p>
                </div>
              </Col>
              <Col sm={2} className="stats-container">
                {/* .stats-container */}
                <Popup
                  trigger={
                    <div className="stats-box">
                      <h1 className="stat-number">5</h1>
                      <p>Pending Card</p>
                    </div>
                  }
                  content={
                    <ul>
                      <li>Juan</li>
                      <li>Hank</li>
                      <li>Diana</li>
                      <li>Mark</li>
                      <li>George</li>
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
                      <h1 className="stat-number">6</h1>
                      <p>Contact Req.</p>
                    </div>
                  }
                  content="I am positioned to the bottom center"
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
                {Object.keys(memberList).map((member, i) => {
                  return (
                    <Card
                      style={{
                        height: "200px",
                        width: "100%",
                        marginTop: "20px",
                        marginBottom: "20px",
                        backgroundColor: "#121212",
                        borderRadius: "10px",
                        color: "white",
                        boxShadow: "0px 0px 5px 3px rgb(60, 60, 60)",
                      }}
                    >
                      <Card.Content>
                        <Row>
                          <Col>
                            <h2 style={{ color: "white" }}>
                              <Link
                                style={{ color: "white" }}
                                to={`/executiveAccount/${memberList[member].id}`}
                              >
                                {" "}
                                {memberList[member].first_name +
                                  " " +
                                  memberList[member].last_name}
                              </Link>
                            </h2>
                            <Card.Meta style={{ color: "white" }}>
                              {" "}
                              Phone: {memberList[member].phone}
                            </Card.Meta>
                            <Card.Description style={{ color: "lightgray" }}>
                              {" "}
                              Email: {memberList[member].email}
                            </Card.Description>
                            <Card.Meta style={{ color: "white" }}>
                              {" "}
                              Card Status: {memberList[member].card}
                            </Card.Meta>
                            <Card.Description style={{ color: "lightgray" }}>
                              {" "}
                              Joined: {memberList[member].dateJoined}
                            </Card.Description>
                          </Col>
                          <Col>
                            <div
                              style={{
                                backgroundColor: "#121212",
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
                                inverted
                                onClick={() => {
                                  Responded(memberList[member].id);
                                }}
                              >
                                {memberList[member].acknowledged}
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
                <div className="feed-container"></div>
              </Col>
            </Row>
            <Row className="below-pending"></Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AdminAccount;
