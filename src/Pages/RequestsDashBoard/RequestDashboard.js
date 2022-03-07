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
  Modal,
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
import "./RequestDashboard.css";
// import "../AdminDashBoard/AdminAccount.css";

function RequestDashboard() {
  const [requestList, setRequestList] = useState("");
  const [concludedList, setConcludedList] = useState("");
  const [onholdRequest, setOnholdRequest] = useState("");
  const [totalRequests, setTotalRequests] = useState("");
  const [pendingRequests, setPendingRequests] = useState("");
  const [backorderRequest, setBackorderRequest] = useState("");
  const [newNote, setNewNote] = useState("");
  const [newSource, setNewSource] = useState("");
  const [newStatus, setNewStatus] = useState("");

  const [searchTerm, setSearchTerm] = useState("");
  const [searchTerm1, setSearchTerm1] = useState("");
  const [searchTerm2, setSearchTerm2] = useState("");
  const [searchTerm3, setSearchTerm3] = useState("");
  const [searchTerm4, setSearchTerm4] = useState("");

  //GET ALL ACTIVE REQUESTS
  const GetAllRequests = () => {
    Axios.get("https://executive-app.herokuapp.com/allRequests").then(
      (response) => {
        // Axios.get("http://localhost:3001/allRequests").then((response) => {
        setRequestList(response.data);
        console.log(requestList.length);
      }
    );
  };
  //GET PENDING REQUESTS
  const GetPendingRequests = () => {
    Axios.get("https://executive-app.herokuapp.com/pendingRequests").then(
      (response) => {
        // Axios.get("http://localhost:3001/pendingRequests").then((response) => {
        setPendingRequests(response.data);
        // console.log(response.data);
      }
    );
  };
  //GET ALL CONCLUDED REQUESTS
  const GetAllConcluded = () => {
    Axios.get("https://executive-app.herokuapp.com/allConcluded").then(
      (response) => {
        // Axios.get("http://localhost:3001/allConcluded").then((response) => {
        setConcludedList(response.data);
        // GetAllConcluded();
      }
    );
  };
  //GET ON HOLD REQUESTS
  const GetOnholdRequests = () => {
    Axios.get("https://executive-app.herokuapp.com/onholdRequests").then(
      (response) => {
        // Axios.get("http://localhost:3001/onholdRequests").then((response) => {
        setOnholdRequest(response.data);
        console.log(response.data);
      }
    );
  };
  //GET BACK ORDERED REQUESTS
  const GetBackorderedRequests = () => {
    Axios.get("https://executive-app.herokuapp.com/backorderedRequests").then(
      (response) => {
        // Axios.get("http://localhost:3001/backorderedRequests").then((response) => {
        setBackorderRequest(response.data);
        // console.log(response.data);
      }
    );
  };
  //UPDATE REQUEST STATUS
  const updateStatus = (id) => {
    Axios.put("https://executive-app.herokuapp.com/statusUpdate", {
      // Axios.put("http://localhost:3001/statusUpdate", {
      status: newStatus,
      id: id,
    }).then((response) => {
      GetAllRequests();
      GetAllConcluded();
      GetOnholdRequests();
      GetBackorderedRequests();
      GetPendingRequests();
    });
  };
  //UPDATE REQUEST NOTE
  const updateNote = (id) => {
    Axios.put("https://executive-app.herokuapp.com/noteUpdate", {
      // Axios.put("http://localhost:3001/noteUpdate", {
      note: newNote,
      id: id,
    }).then((response) => {
      GetAllRequests();
      GetAllConcluded();
      GetOnholdRequests();
      GetBackorderedRequests();
      GetPendingRequests();
    });
  };
  //UPDATE SOURCE
  const updateSource = (id) => {
    Axios.put("https://executive-app.herokuapp.com/sourceUpdate", {
      // Axios.put("http://localhost:3001/sourceUpdate", {
      source: newSource,
      id: id,
    }).then((response) => {
      GetAllRequests();
      GetAllConcluded();
      GetOnholdRequests();
      GetBackorderedRequests();
      GetPendingRequests();
    });
  };

  const DownloadRequests = () => {
    // Axios.Get("https://executive-app.herokuapp.com/downloadRequests", {

    // }).then((response) => {
    //     const url = window.URL.createObjectURL(new Blob([response.data]));
    //     const link = document.createElement("a");
    //     link.href = url;
    //     link.setAttribute("download", "file.pdf"); //or any other extension
    //     document.body.appendChild(link);
    //     link.click();
    // });
    Axios({
      url: "https://executive-app.herokuapp.com/downloadRequests", //your url
      method: "GET",
      responseType: "blob", // important
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "download.csv"); //or any other extension
      document.body.appendChild(link);
      link.click();
    });
  };
  useEffect(() => {
    GetAllRequests();
    // GetAllConcluded();
    GetOnholdRequests();
    GetBackorderedRequests();
    GetPendingRequests();
  }, []);

  // ************************************************ CONTROLS THE HIDE /SHOW EFFECT WHEN CLICKING ON THE STAT MENUS ********************************************
  const ShowActiveRequests = () => {
    document.getElementById("active-requests").style.display = "block";
    document.getElementById("concluded-requests").style.display = "none";
    document.getElementById("onHold-requests").style.display = "none";
    document.getElementById("pending-requests").style.display = "none";
    document.getElementById("backordered-requests").style.display = "none";
  };
  const ShowConcludedRequests = () => {
    document.getElementById("concluded-requests").style.display = "block";
    document.getElementById("active-requests").style.display = "none";
    document.getElementById("onHold-requests").style.display = "none";
    document.getElementById("pending-requests").style.display = "none";
    document.getElementById("backordered-requests").style.display = "none";
    GetAllConcluded();
  };
  const ShowOnhold = () => {
    document.getElementById("onHold-requests").style.display = "block";
    document.getElementById("concluded-requests").style.display = "none";
    document.getElementById("active-requests").style.display = "none";
    document.getElementById("pending-requests").style.display = "none";
    document.getElementById("backordered-requests").style.display = "none";
  };
  const ShowAllPending = () => {
    document.getElementById("pending-requests").style.display = "block";
    document.getElementById("concluded-requests").style.display = "none";
    document.getElementById("active-requests").style.display = "none";
    document.getElementById("onHold-requests").style.display = "none";
    document.getElementById("backordered-requests").style.display = "none";
  };
  const ShowBackordered = () => {
    document.getElementById("backordered-requests").style.display = "block";
    document.getElementById("concluded-requests").style.display = "none";
    document.getElementById("active-requests").style.display = "none";
    document.getElementById("onHold-requests").style.display = "none";
    document.getElementById("pending-requests").style.display = "none";
  };
  // ************************************************************************************************************************************************************
  //
  return (
    <div className="background">
      <Row>
        <Col sm={2} className="stats-container">
          {/* .stats-container */}
          <Popup
            trigger={
              <div className="stats-box" onClick={ShowActiveRequests}>
                {" "}
                <h1 className="stat-number">{requestList.length}</h1>
                <p>Actives</p>
              </div>
            }
            content="Pending, On Hold, and Ordered"
            position="bottom center"
            inverted
          />
        </Col>
        <Col sm={2} className="stats-container">
          {/* .stats-container */}
          <Popup
            trigger={
              <div className="stats-box" onClick={ShowAllPending}>
                {" "}
                <h1 className="stat-number">{pendingRequests.length}</h1>
                <p>Pending</p>
              </div>
            }
            content="Total Pending Requests"
            position="bottom center"
            inverted
          />
        </Col>
        <Col sm={2} className="stats-container">
          {/* .stats-container */}
          <Popup
            trigger={
              <div className="stats-box" onClick={ShowOnhold}>
                {" "}
                <h1 className="stat-number">{onholdRequest.length}</h1>
                <p>OnHold</p>
              </div>
            }
            content="Total On Hold Requests"
            position="bottom center"
            inverted
          />
        </Col>
        <Col sm={2} className="stats-container">
          {/* .stats-container */}
          <Popup
            trigger={
              <div className="stats-box" onClick={ShowConcludedRequests}>
                {" "}
                <h1 className="stat-number">{concludedList.length}</h1>
                <p>Concluded</p>
              </div>
            }
            content="Completed, Offered, and Canceled"
            position="bottom center"
            inverted
          />
        </Col>
        <Col sm={2} className="stats-container">
          {/* .stats-container */}
          <Popup
            trigger={
              <div className="stats-box" onClick={ShowBackordered}>
                {" "}
                <h1 className="stat-number">{backorderRequest.length}</h1>
                <p>BackOrdered</p>
              </div>
            }
            content="Total of all Back Ordered"
            position="bottom center"
            inverted
          />
        </Col>
      </Row>
      <Row id="active-requests">
        <button onClick={DownloadRequests}>Download Requests</button>
        <h2 className="ra-title">
          <span className="span">A</span>ctive <span className="span">R</span>
          equests
        </h2>
        <p className="dividing-line"></p>
        <br></br>
        <input
          type="text"
          placeholder="Search First or Last Name"
          className="search-input"
          style={{ marginLeft: "25%", marginRight: "25%", width: "50%" }}
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        ></input>
        <Segment
          style={{
            overflow: "auto",
            maxHeight: "605px",
            width: "100%",
          }}
        >
          {Object.keys(requestList)
            .filter((request) => {
              if (searchTerm == "") {
                return request;
              } else if (
                requestList[request].status
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase()) ||
                requestList[request].category
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase()) ||
                requestList[request].sku
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase()) ||
                requestList[request].memberName
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase()) ||
                requestList[request].brand
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase()) ||
                requestList[request].note
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase()) ||
                requestList[request].item
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
              ) {
                return request;
              }
            })
            .map((request, i) => {
              let reqCreated = new Date(requestList[request].date_created)

                .toUTCString()
                .split(" ")
                .slice(1, 4)
                .join(" ");
              let reqUpdated = new Date(requestList[request].date_updated)

                .toUTCString()
                .split(" ")
                .slice(1, 4)
                .join(" ");
              return (
                <Card
                  style={{
                    width: "100%",
                    boxShadow: "5px 10px 8px black",
                    backgroundColor: "white",
                    border: "1px solid black",
                  }}
                >
                  <Card.Content>
                    <Grid divided="vertically">
                      <Grid.Row columns={3}>
                        <Grid.Column style={{ paddingLeft: "20px" }}>
                          <h2 style={{ color: "black" }}>
                            {requestList[request].memberName}
                          </h2>
                          <Card.Meta>
                            {" "}
                            Request #: {" " + requestList[request].id}
                          </Card.Meta>

                          <Card.Meta style={{ color: "black" }}>
                            Created:
                            {" " + reqCreated}
                          </Card.Meta>
                          <Card.Meta>
                            Updated:
                            {" " + reqUpdated}
                          </Card.Meta>

                          <br></br>
                        </Grid.Column>
                        <Grid.Column style={{ marginLeft: "-100px" }}>
                          <Grid divided="vertically">
                            <Grid.Row columns={2}>
                              <Grid.Column>
                                <h2 style={{ color: "black" }}>Details</h2>
                                <Card.Meta>
                                  {" "}
                                  Status:
                                  {" " + requestList[request].status}
                                </Card.Meta>
                                <Card.Meta style={{ color: "black" }}>
                                  Category:{" "}
                                  {" " + requestList[request].category}
                                </Card.Meta>
                                <Card.Meta>
                                  Brand: {" " + requestList[request].brand}
                                </Card.Meta>
                                <Card.Meta style={{ color: "black" }}>
                                  SKU: {" " + requestList[request].sku}
                                </Card.Meta>
                                <Card.Meta>
                                  Item: {" " + requestList[request].item}
                                </Card.Meta>
                                <Card.Meta style={{ color: "black" }}>
                                  Qty: {" " + requestList[request].quantity}
                                </Card.Meta>
                                <Card.Meta>
                                  Price: {" " + requestList[request].price}
                                </Card.Meta>
                              </Grid.Column>
                              <Grid.Column>
                                <h2 style={{ color: "black" }}>Notes</h2>
                                <Card.Meta>
                                  Source: {" " + requestList[request].source}
                                </Card.Meta>
                                <Card.Meta style={{ color: "black" }}>
                                  Note: {" " + requestList[request].note}
                                </Card.Meta>
                              </Grid.Column>
                            </Grid.Row>
                          </Grid>
                        </Grid.Column>
                        <Grid.Column>
                          <Grid divided="vertically">
                            <Grid.Row columns={2}>
                              <Grid.Column>
                                <h2 style={{ color: "black" }}>Edit</h2>
                                <select
                                  onChange={(e) => {
                                    setNewStatus(e.target.value.toUpperCase());
                                  }}
                                  style={{
                                    height: "35px",
                                    width: "150px",
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
                                  <option value="Offered">Offered</option>
                                </select>
                                <br></br>
                                <Button
                                  onClick={() => {
                                    updateStatus(requestList[request].id);
                                  }}
                                  style={{
                                    width: "150px",
                                    marginTop: "10px",
                                    color: "white",
                                    backgroundColor: "black",
                                  }}
                                >
                                  Update
                                  <Icon
                                    style={{ marginLeft: "10px" }}
                                    name="edit outline"
                                  ></Icon>
                                </Button>
                                <Form style={{ marginLeft: "0px" }}>
                                  <Input
                                    onChange={(e) => {
                                      setNewSource(e.target.value);
                                    }}
                                    placeholder="Update Source"
                                    style={{
                                      marginTop: "10px",
                                      width: "150px",
                                    }}
                                  ></Input>
                                  <Button
                                    type="reset"
                                    onClick={() => {
                                      updateSource(requestList[request].id);
                                    }}
                                    style={{
                                      marginTop: "10px",
                                      color: "white",
                                      backgroundColor: "black",
                                      width: "150px",
                                    }}
                                  >
                                    Submit
                                    <Icon
                                      style={{ paddingLeft: "20px" }}
                                      name="edit outline"
                                    ></Icon>
                                  </Button>
                                </Form>
                              </Grid.Column>

                              <Grid.Column>
                                <h2 style={{ height: "30px" }}></h2>
                                <Form style={{ marginLeft: "20px" }}>
                                  <textarea
                                    onChange={(e) => {
                                      setNewNote(e.target.value);
                                    }}
                                    placeholder="Update Note"
                                    style={{
                                      width: "200px",
                                      height: "121px",
                                    }}
                                  ></textarea>
                                  <Button
                                    onClick={() => {
                                      updateNote(requestList[request].id);
                                    }}
                                    type="reset"
                                    style={{
                                      marginTop: "20px",
                                      color: "white",
                                      backgroundColor: "black",
                                      width: "200px",
                                    }}
                                  >
                                    Submit
                                    <Icon
                                      style={{
                                        paddingLeft: "10px",
                                      }}
                                      name="edit outline"
                                    ></Icon>
                                  </Button>
                                </Form>
                              </Grid.Column>
                            </Grid.Row>
                          </Grid>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Card.Content>
                </Card>
              );
            })}
        </Segment>
      </Row>
      <Row id="concluded-requests">
        <h2 className="ra-title">
          <span className="span">C</span>oncluded{" "}
          <span className="span">R</span>
          equests
        </h2>
        <p className="dividing-line"></p>
        <br></br>
        <input
          type="text"
          placeholder="Search First or Last Name"
          className="search-input"
          style={{ marginLeft: "25%", marginRight: "25%", width: "50%" }}
          onChange={(event) => {
            setSearchTerm1(event.target.value);
          }}
        ></input>
        <Segment
          style={{
            overflow: "auto",
            maxHeight: "605px",
            width: "100%",
          }}
        >
          {Object.keys(concludedList)
            .filter((concluded) => {
              if (searchTerm1 == "") {
                return concluded;
              } else if (
                concludedList[concluded].status
                  .toLowerCase()
                  .includes(searchTerm1.toLowerCase()) ||
                concludedList[concluded].category
                  .toLowerCase()
                  .includes(searchTerm1.toLowerCase()) ||
                concludedList[concluded].sku
                  .toLowerCase()
                  .includes(searchTerm1.toLowerCase()) ||
                concludedList[concluded].memberName
                  .toLowerCase()
                  .includes(searchTerm1.toLowerCase()) ||
                concludedList[concluded].brand
                  .toLowerCase()
                  .includes(searchTerm1.toLowerCase()) ||
                concludedList[concluded].note
                  .toLowerCase()
                  .includes(searchTerm1.toLowerCase()) ||
                concludedList[concluded].item
                  .toLowerCase()
                  .includes(searchTerm1.toLowerCase())
              ) {
                return concluded;
              }
            })
            .map((concluded, i) => {
              let createConcluded = new Date(
                concludedList[concluded].date_created
              )

                .toUTCString()
                .split(" ")
                .slice(1, 4)
                .join(" ");
              let updateConcluded = new Date(
                concludedList[concluded].date_updated
              )

                .toUTCString()
                .split(" ")
                .slice(1, 4)
                .join(" ");
              return (
                <Card
                  style={{
                    width: "100%",
                    boxShadow: "5px 10px 8px black",
                    backgroundColor: "white",
                    border: "1px solid black",
                  }}
                >
                  <Card.Content>
                    <Grid divided="vertically">
                      <Grid.Row columns={3}>
                        <Grid.Column style={{ paddingLeft: "20px" }}>
                          <h2 style={{ color: "black" }}>
                            {concludedList[concluded].memberName}
                          </h2>
                          <Card.Meta>
                            {" "}
                            Request #: {" " + concludedList[concluded].id}
                          </Card.Meta>

                          <Card.Meta style={{ color: "black" }}>
                            Created:
                            {" " + createConcluded}
                          </Card.Meta>
                          <Card.Meta>
                            Updated:
                            {" " + updateConcluded}
                          </Card.Meta>

                          <br></br>
                        </Grid.Column>
                        <Grid.Column style={{ marginLeft: "-100px" }}>
                          <Grid divided="vertically">
                            <Grid.Row columns={2}>
                              <Grid.Column>
                                <h2 style={{ color: "black" }}>Details</h2>
                                <Card.Meta>
                                  {" "}
                                  Status:
                                  {" " + concludedList[concluded].status}
                                </Card.Meta>
                                <Card.Meta style={{ color: "black" }}>
                                  Category:{" "}
                                  {" " + concludedList[concluded].category}
                                </Card.Meta>
                                <Card.Meta>
                                  Brand: {" " + concludedList[concluded].brand}
                                </Card.Meta>
                                <Card.Meta style={{ color: "black" }}>
                                  SKU: {" " + concludedList[concluded].sku}
                                </Card.Meta>
                                <Card.Meta>
                                  Item: {" " + concludedList[concluded].item}
                                </Card.Meta>
                                <Card.Meta style={{ color: "black" }}>
                                  Qty: {" " + concludedList[concluded].quantity}
                                </Card.Meta>
                                <Card.Meta>
                                  Price: {" " + concludedList[concluded].price}
                                </Card.Meta>
                              </Grid.Column>
                              <Grid.Column>
                                <h2 style={{ color: "black" }}>Notes</h2>
                                <Card.Meta>
                                  Source:{" "}
                                  {" " + concludedList[concluded].source}
                                </Card.Meta>
                                <Card.Meta style={{ color: "black" }}>
                                  Note: {" " + concludedList[concluded].note}
                                </Card.Meta>
                              </Grid.Column>
                            </Grid.Row>
                          </Grid>
                        </Grid.Column>
                        <Grid.Column>
                          <Grid divided="vertically">
                            <Grid.Row columns={2}>
                              <Grid.Column>
                                <h2 style={{ color: "black" }}>Edit</h2>
                                <select
                                  onChange={(e) => {
                                    setNewStatus(e.target.value.toUpperCase());
                                  }}
                                  style={{
                                    height: "35px",
                                    width: "150px",
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
                                  <option value="Offered">Offered</option>
                                </select>
                                <br></br>
                                <Button
                                  onClick={() => {
                                    updateStatus(concludedList[concluded].id);
                                  }}
                                  style={{
                                    width: "150px",
                                    marginTop: "10px",
                                    color: "white",
                                    backgroundColor: "black",
                                  }}
                                >
                                  Update
                                  <Icon
                                    style={{ marginLeft: "10px" }}
                                    name="edit outline"
                                  ></Icon>
                                </Button>
                                <Form style={{ marginLeft: "0px" }}>
                                  <Input
                                    onChange={(e) => {
                                      setNewSource(e.target.value);
                                    }}
                                    placeholder="Update Source"
                                    style={{
                                      marginTop: "10px",
                                      width: "150px",
                                    }}
                                  ></Input>
                                  <Button
                                    type="reset"
                                    onClick={() => {
                                      updateSource(concludedList[concluded].id);
                                    }}
                                    style={{
                                      marginTop: "10px",
                                      color: "white",
                                      backgroundColor: "black",
                                      width: "150px",
                                    }}
                                  >
                                    Submit
                                    <Icon
                                      style={{ paddingLeft: "20px" }}
                                      name="edit outline"
                                    ></Icon>
                                  </Button>
                                </Form>
                              </Grid.Column>

                              <Grid.Column>
                                <h2 style={{ height: "30px" }}></h2>
                                <Form style={{ marginLeft: "20px" }}>
                                  <textarea
                                    onChange={(e) => {
                                      setNewNote(e.target.value);
                                    }}
                                    placeholder="Update Note"
                                    style={{
                                      width: "200px",
                                      height: "121px",
                                    }}
                                  ></textarea>
                                  <Button
                                    onClick={() => {
                                      updateNote(concludedList[concluded].id);
                                    }}
                                    type="reset"
                                    style={{
                                      marginTop: "20px",
                                      color: "white",
                                      backgroundColor: "black",
                                      width: "200px",
                                    }}
                                  >
                                    Submit
                                    <Icon
                                      style={{
                                        paddingLeft: "10px",
                                      }}
                                      name="edit outline"
                                    ></Icon>
                                  </Button>
                                </Form>
                              </Grid.Column>
                            </Grid.Row>
                          </Grid>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Card.Content>
                </Card>
              );
            })}
        </Segment>
      </Row>
      <Row id="onHold-requests">
        <h2 className="ra-title">
          <span className="span">O</span>n Hold <span className="span">R</span>
          equests
        </h2>
        <p className="dividing-line"></p>
        <br></br>
        <input
          type="text"
          placeholder="Search First or Last Name"
          className="search-input"
          style={{ marginLeft: "25%", marginRight: "25%", width: "50%" }}
          onChange={(event) => {
            setSearchTerm2(event.target.value);
          }}
        ></input>
        <Segment
          style={{
            overflow: "auto",
            maxHeight: "605px",
            width: "100%",
          }}
        >
          {Object.keys(onholdRequest)
            .filter((hold) => {
              if (searchTerm2 == "") {
                return hold;
              } else if (
                onholdRequest[hold].status
                  .toLowerCase()
                  .includes(searchTerm2.toLowerCase()) ||
                onholdRequest[hold].category
                  .toLowerCase()
                  .includes(searchTerm2.toLowerCase()) ||
                onholdRequest[hold].sku
                  .toLowerCase()
                  .includes(searchTerm2.toLowerCase()) ||
                onholdRequest[hold].memberName
                  .toLowerCase()
                  .includes(searchTerm2.toLowerCase()) ||
                onholdRequest[hold].brand
                  .toLowerCase()
                  .includes(searchTerm2.toLowerCase()) ||
                onholdRequest[hold].note
                  .toLowerCase()
                  .includes(searchTerm2.toLowerCase()) ||
                onholdRequest[hold].item
                  .toLowerCase()
                  .includes(searchTerm2.toLowerCase())
              ) {
                return hold;
              }
            })
            .map((hold, i) => {
              let createhold = new Date(onholdRequest[hold].date_created)

                .toUTCString()
                .split(" ")
                .slice(1, 4)
                .join(" ");
              let updatehold = new Date(onholdRequest[hold].date_updated)

                .toUTCString()
                .split(" ")
                .slice(1, 4)
                .join(" ");
              return (
                <Card
                  style={{
                    width: "100%",
                    boxShadow: "5px 10px 8px black",
                    backgroundColor: "white",
                    border: "1px solid black",
                  }}
                >
                  <Card.Content>
                    <Grid divided="vertically">
                      <Grid.Row columns={3}>
                        <Grid.Column style={{ paddingLeft: "20px" }}>
                          <h2 style={{ color: "black" }}>
                            {onholdRequest[hold].memberName}
                          </h2>
                          <Card.Meta>
                            {" "}
                            Request #: {" " + onholdRequest[hold].id}
                          </Card.Meta>

                          <Card.Meta style={{ color: "black" }}>
                            Created:
                            {" " + createhold}
                          </Card.Meta>
                          <Card.Meta>
                            Updated:
                            {" " + updatehold}
                          </Card.Meta>

                          <br></br>
                        </Grid.Column>
                        <Grid.Column style={{ marginLeft: "-100px" }}>
                          <Grid divided="vertically">
                            <Grid.Row columns={2}>
                              <Grid.Column>
                                <h2 style={{ color: "black" }}>Details</h2>
                                <Card.Meta>
                                  {" "}
                                  Status:
                                  {" " + onholdRequest[hold].status}
                                </Card.Meta>
                                <Card.Meta style={{ color: "black" }}>
                                  Category: {" " + onholdRequest[hold].category}
                                </Card.Meta>
                                <Card.Meta>
                                  Brand: {" " + onholdRequest[hold].brand}
                                </Card.Meta>
                                <Card.Meta style={{ color: "black" }}>
                                  SKU: {" " + onholdRequest[hold].sku}
                                </Card.Meta>
                                <Card.Meta>
                                  Item: {" " + onholdRequest[hold].item}
                                </Card.Meta>
                                <Card.Meta style={{ color: "black" }}>
                                  Qty: {" " + onholdRequest[hold].quantity}
                                </Card.Meta>
                                <Card.Meta>
                                  Price: {" " + onholdRequest[hold].price}
                                </Card.Meta>
                              </Grid.Column>
                              <Grid.Column>
                                <h2 style={{ color: "black" }}>Notes</h2>
                                <Card.Meta>
                                  Source: {" " + onholdRequest[hold].source}
                                </Card.Meta>
                                <Card.Meta style={{ color: "black" }}>
                                  Note: {" " + onholdRequest[hold].note}
                                </Card.Meta>
                              </Grid.Column>
                            </Grid.Row>
                          </Grid>
                        </Grid.Column>
                        <Grid.Column>
                          <Grid divided="vertically">
                            <Grid.Row columns={2}>
                              <Grid.Column>
                                <h2 style={{ color: "black" }}>Edit</h2>
                                <select
                                  onChange={(e) => {
                                    setNewStatus(e.target.value.toUpperCase());
                                  }}
                                  style={{
                                    height: "35px",
                                    width: "150px",
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
                                  <option value="Offered">Offered</option>
                                </select>
                                <br></br>
                                <Button
                                  onClick={() => {
                                    updateStatus(onholdRequest[hold].id);
                                  }}
                                  style={{
                                    width: "150px",
                                    marginTop: "10px",
                                    color: "white",
                                    backgroundColor: "black",
                                  }}
                                >
                                  Update
                                  <Icon
                                    style={{ marginLeft: "10px" }}
                                    name="edit outline"
                                  ></Icon>
                                </Button>
                                <Form style={{ marginLeft: "0px" }}>
                                  <Input
                                    onChange={(e) => {
                                      setNewSource(e.target.value);
                                    }}
                                    placeholder="Update Source"
                                    style={{
                                      marginTop: "10px",
                                      width: "150px",
                                    }}
                                  ></Input>
                                  <Button
                                    type="reset"
                                    onClick={() => {
                                      updateSource(onholdRequest[hold].id);
                                    }}
                                    style={{
                                      marginTop: "10px",
                                      color: "white",
                                      backgroundColor: "black",
                                      width: "150px",
                                    }}
                                  >
                                    Submit
                                    <Icon
                                      style={{ paddingLeft: "20px" }}
                                      name="edit outline"
                                    ></Icon>
                                  </Button>
                                </Form>
                              </Grid.Column>

                              <Grid.Column>
                                <h2 style={{ height: "30px" }}></h2>
                                <Form style={{ marginLeft: "20px" }}>
                                  <textarea
                                    onChange={(e) => {
                                      setNewNote(e.target.value);
                                    }}
                                    placeholder="Update Note"
                                    style={{
                                      width: "200px",
                                      height: "121px",
                                    }}
                                  ></textarea>
                                  <Button
                                    onClick={() => {
                                      updateNote(onholdRequest[hold].id);
                                    }}
                                    type="reset"
                                    style={{
                                      marginTop: "20px",
                                      color: "white",
                                      backgroundColor: "black",
                                      width: "200px",
                                    }}
                                  >
                                    Submit
                                    <Icon
                                      style={{
                                        paddingLeft: "10px",
                                      }}
                                      name="edit outline"
                                    ></Icon>
                                  </Button>
                                </Form>
                              </Grid.Column>
                            </Grid.Row>
                          </Grid>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Card.Content>
                </Card>
              );
            })}
        </Segment>
      </Row>
      <Row id="pending-requests">
        <h2 className="ra-title">
          <span className="span">P</span>ending <span className="span">R</span>
          equests
        </h2>
        <p className="dividing-line"></p>
        <br></br>
        <input
          type="text"
          placeholder="Search First or Last Name"
          className="search-input"
          style={{ marginLeft: "25%", marginRight: "25%", width: "50%" }}
          onChange={(event) => {
            setSearchTerm3(event.target.value);
          }}
        ></input>
        <Segment
          style={{
            overflow: "auto",
            maxHeight: "605px",
            width: "100%",
          }}
        >
          {Object.keys(pendingRequests)
            .filter((pend) => {
              if (searchTerm3 == "") {
                return pend;
              } else if (
                pendingRequests[pend].status
                  .toLowerCase()
                  .includes(searchTerm3.toLowerCase()) ||
                pendingRequests[pend].category
                  .toLowerCase()
                  .includes(searchTerm3.toLowerCase()) ||
                pendingRequests[pend].sku
                  .toLowerCase()
                  .includes(searchTerm3.toLowerCase()) ||
                pendingRequests[pend].memberName
                  .toLowerCase()
                  .includes(searchTerm3.toLowerCase()) ||
                pendingRequests[pend].brand
                  .toLowerCase()
                  .includes(searchTerm3.toLowerCase()) ||
                pendingRequests[pend].note
                  .toLowerCase()
                  .includes(searchTerm3.toLowerCase()) ||
                pendingRequests[pend].item
                  .toLowerCase()
                  .includes(searchTerm3.toLowerCase())
              ) {
                return pend;
              }
            })
            .map((pend, i) => {
              let createpend = new Date(pendingRequests[pend].date_created)

                .toUTCString()
                .split(" ")
                .slice(1, 4)
                .join(" ");
              let updatepend = new Date(pendingRequests[pend].date_updated)

                .toUTCString()
                .split(" ")
                .slice(1, 4)
                .join(" ");
              return (
                <Card
                  style={{
                    width: "100%",
                    boxShadow: "5px 10px 8px black",
                    backgroundColor: "white",
                    border: "1px solid black",
                  }}
                >
                  <Card.Content>
                    <Grid divided="vertically">
                      <Grid.Row columns={3}>
                        <Grid.Column style={{ paddingLeft: "20px" }}>
                          <h2 style={{ color: "black" }}>
                            {pendingRequests[pend].memberName}
                          </h2>
                          <Card.Meta>
                            {" "}
                            Request #: {" " + pendingRequests[pend].id}
                          </Card.Meta>

                          <Card.Meta style={{ color: "black" }}>
                            Created:
                            {" " + createpend}
                          </Card.Meta>
                          <Card.Meta>
                            Updated:
                            {" " + updatepend}
                          </Card.Meta>

                          <br></br>
                        </Grid.Column>
                        <Grid.Column style={{ marginLeft: "-100px" }}>
                          <Grid divided="vertically">
                            <Grid.Row columns={2}>
                              <Grid.Column>
                                <h2 style={{ color: "black" }}>Details</h2>
                                <Card.Meta>
                                  {" "}
                                  Status:
                                  {" " + pendingRequests[pend].status}
                                </Card.Meta>
                                <Card.Meta style={{ color: "black" }}>
                                  Category:{" "}
                                  {" " + pendingRequests[pend].category}
                                </Card.Meta>
                                <Card.Meta>
                                  Brand: {" " + pendingRequests[pend].brand}
                                </Card.Meta>
                                <Card.Meta style={{ color: "black" }}>
                                  SKU: {" " + pendingRequests[pend].sku}
                                </Card.Meta>
                                <Card.Meta>
                                  Item: {" " + pendingRequests[pend].item}
                                </Card.Meta>
                                <Card.Meta style={{ color: "black" }}>
                                  Qty: {" " + pendingRequests[pend].quantity}
                                </Card.Meta>
                                <Card.Meta>
                                  Price: {" " + pendingRequests[pend].price}
                                </Card.Meta>
                              </Grid.Column>
                              <Grid.Column>
                                <h2 style={{ color: "black" }}>Notes</h2>
                                <Card.Meta>
                                  Source: {" " + pendingRequests[pend].source}
                                </Card.Meta>
                                <Card.Meta style={{ color: "black" }}>
                                  Note: {" " + pendingRequests[pend].note}
                                </Card.Meta>
                              </Grid.Column>
                            </Grid.Row>
                          </Grid>
                        </Grid.Column>
                        <Grid.Column>
                          <Grid divided="vertically">
                            <Grid.Row columns={2}>
                              <Grid.Column>
                                <h2 style={{ color: "black" }}>Edit</h2>
                                <select
                                  onChange={(e) => {
                                    setNewStatus(e.target.value.toUpperCase());
                                  }}
                                  style={{
                                    height: "35px",
                                    width: "150px",
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
                                  <option value="Offered">Offered</option>
                                </select>
                                <br></br>
                                <Button
                                  onClick={() => {
                                    updateStatus(pendingRequests[pend].id);
                                  }}
                                  style={{
                                    width: "150px",
                                    marginTop: "10px",
                                    color: "white",
                                    backgroundColor: "black",
                                  }}
                                >
                                  Update
                                  <Icon
                                    style={{ marginLeft: "10px" }}
                                    name="edit outline"
                                  ></Icon>
                                </Button>
                                <Form style={{ marginLeft: "0px" }}>
                                  <Input
                                    onChange={(e) => {
                                      setNewSource(e.target.value);
                                    }}
                                    placeholder="Update Source"
                                    style={{
                                      marginTop: "10px",
                                      width: "150px",
                                    }}
                                  ></Input>
                                  <Button
                                    type="reset"
                                    onClick={() => {
                                      updateSource(pendingRequests[pend].id);
                                    }}
                                    style={{
                                      marginTop: "10px",
                                      color: "white",
                                      backgroundColor: "black",
                                      width: "150px",
                                    }}
                                  >
                                    Submit
                                    <Icon
                                      style={{ paddingLeft: "20px" }}
                                      name="edit outline"
                                    ></Icon>
                                  </Button>
                                </Form>
                              </Grid.Column>

                              <Grid.Column>
                                <h2 style={{ height: "30px" }}></h2>
                                <Form style={{ marginLeft: "20px" }}>
                                  <textarea
                                    onChange={(e) => {
                                      setNewNote(e.target.value);
                                    }}
                                    placeholder="Update Note"
                                    style={{
                                      width: "200px",
                                      height: "121px",
                                    }}
                                  ></textarea>
                                  <Button
                                    onClick={() => {
                                      updateNote(pendingRequests[pend].id);
                                    }}
                                    type="reset"
                                    style={{
                                      marginTop: "20px",
                                      color: "white",
                                      backgroundColor: "black",
                                      width: "200px",
                                    }}
                                  >
                                    Submit
                                    <Icon
                                      style={{
                                        paddingLeft: "10px",
                                      }}
                                      name="edit outline"
                                    ></Icon>
                                  </Button>
                                </Form>
                              </Grid.Column>
                            </Grid.Row>
                          </Grid>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Card.Content>
                </Card>
              );
            })}
        </Segment>
      </Row>
      <Row id="backordered-requests">
        <h2 className="ra-title">
          <span className="span">B</span>ack Ordered
          <span className="span"> R</span>
          equests
        </h2>
        <p className="dividing-line"></p>
        <br></br>
        <input
          type="text"
          placeholder="Search First or Last Name"
          className="search-input"
          style={{ marginLeft: "25%", marginRight: "25%", width: "50%" }}
          onChange={(event) => {
            setSearchTerm4(event.target.value);
          }}
        ></input>
        <Segment
          style={{
            overflow: "auto",
            maxHeight: "605px",
            width: "100%",
          }}
        >
          {Object.keys(backorderRequest)
            .filter((back) => {
              if (searchTerm4 == "") {
                return back;
              } else if (
                backorderRequest[back].status
                  .toLowerCase()
                  .includes(searchTerm4.toLowerCase()) ||
                backorderRequest[back].category
                  .toLowerCase()
                  .includes(searchTerm4.toLowerCase()) ||
                backorderRequest[back].sku
                  .toLowerCase()
                  .includes(searchTerm4.toLowerCase()) ||
                backorderRequest[back].memberName
                  .toLowerCase()
                  .includes(searchTerm4.toLowerCase()) ||
                backorderRequest[back].brand
                  .toLowerCase()
                  .includes(searchTerm4.toLowerCase()) ||
                backorderRequest[back].note
                  .toLowerCase()
                  .includes(searchTerm4.toLowerCase()) ||
                backorderRequest[back].item
                  .toLowerCase()
                  .includes(searchTerm4.toLowerCase())
              ) {
                return back;
              }
            })
            .map((back, i) => {
              let createback = new Date(backorderRequest[back].date_created)

                .toUTCString()
                .split(" ")
                .slice(1, 4)
                .join(" ");
              let updatedback = new Date(backorderRequest[back].date_updated)

                .toUTCString()
                .split(" ")
                .slice(1, 4)
                .join(" ");
              return (
                <Card
                  style={{
                    width: "100%",
                    boxShadow: "5px 10px 8px black",
                    backgroundColor: "white",
                    border: "1px solid black",
                  }}
                >
                  <Card.Content>
                    <Grid divided="vertically">
                      <Grid.Row columns={3}>
                        <Grid.Column style={{ paddingLeft: "20px" }}>
                          <h2 style={{ color: "black" }}>
                            {backorderRequest[back].memberName}
                          </h2>
                          <Card.Meta>
                            {" "}
                            Request #: {" " + backorderRequest[back].id}
                          </Card.Meta>

                          <Card.Meta style={{ color: "black" }}>
                            Created:
                            {" " + createback}
                          </Card.Meta>
                          <Card.Meta>
                            Updated:
                            {" " + updatedback}
                          </Card.Meta>

                          <br></br>
                        </Grid.Column>
                        <Grid.Column style={{ marginLeft: "-100px" }}>
                          <Grid divided="vertically">
                            <Grid.Row columns={2}>
                              <Grid.Column>
                                <h2 style={{ color: "black" }}>Details</h2>
                                <Card.Meta>
                                  {" "}
                                  Status:
                                  {" " + backorderRequest[back].status}
                                </Card.Meta>
                                <Card.Meta style={{ color: "black" }}>
                                  Category:{" "}
                                  {" " + backorderRequest[back].category}
                                </Card.Meta>
                                <Card.Meta>
                                  Brand: {" " + backorderRequest[back].brand}
                                </Card.Meta>
                                <Card.Meta style={{ color: "black" }}>
                                  SKU: {" " + backorderRequest[back].sku}
                                </Card.Meta>
                                <Card.Meta>
                                  Item: {" " + backorderRequest[back].item}
                                </Card.Meta>
                                <Card.Meta style={{ color: "black" }}>
                                  Qty: {" " + backorderRequest[back].quantity}
                                </Card.Meta>
                                <Card.Meta>
                                  Price: {" " + backorderRequest[back].price}
                                </Card.Meta>
                              </Grid.Column>
                              <Grid.Column>
                                <h2 style={{ color: "black" }}>Notes</h2>
                                <Card.Meta>
                                  Source: {" " + backorderRequest[back].source}
                                </Card.Meta>
                                <Card.Meta style={{ color: "black" }}>
                                  Note: {" " + backorderRequest[back].note}
                                </Card.Meta>
                              </Grid.Column>
                            </Grid.Row>
                          </Grid>
                        </Grid.Column>
                        <Grid.Column>
                          <Grid divided="vertically">
                            <Grid.Row columns={2}>
                              <Grid.Column>
                                <h2 style={{ color: "black" }}>Edit</h2>
                                <select
                                  onChange={(e) => {
                                    setNewStatus(e.target.value.toUpperCase());
                                  }}
                                  style={{
                                    height: "35px",
                                    width: "150px",
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
                                  <option value="Offered">Offered</option>
                                </select>
                                <br></br>
                                <Button
                                  onClick={() => {
                                    updateStatus(backorderRequest[back].id);
                                  }}
                                  style={{
                                    width: "150px",
                                    marginTop: "10px",
                                    color: "white",
                                    backgroundColor: "black",
                                  }}
                                >
                                  Update
                                  <Icon
                                    style={{ marginLeft: "10px" }}
                                    name="edit outline"
                                  ></Icon>
                                </Button>
                                <Form style={{ marginLeft: "0px" }}>
                                  <Input
                                    onChange={(e) => {
                                      setNewSource(e.target.value);
                                    }}
                                    placeholder="Update Source"
                                    style={{
                                      marginTop: "10px",
                                      width: "150px",
                                    }}
                                  ></Input>
                                  <Button
                                    type="reset"
                                    onClick={() => {
                                      updateSource(backorderRequest[back].id);
                                    }}
                                    style={{
                                      marginTop: "10px",
                                      color: "white",
                                      backgroundColor: "black",
                                      width: "150px",
                                    }}
                                  >
                                    Submit
                                    <Icon
                                      style={{ paddingLeft: "20px" }}
                                      name="edit outline"
                                    ></Icon>
                                  </Button>
                                </Form>
                              </Grid.Column>

                              <Grid.Column>
                                <h2 style={{ height: "30px" }}></h2>
                                <Form style={{ marginLeft: "20px" }}>
                                  <textarea
                                    onChange={(e) => {
                                      setNewNote(e.target.value);
                                    }}
                                    placeholder="Update Note"
                                    style={{
                                      width: "200px",
                                      height: "121px",
                                    }}
                                  ></textarea>
                                  <Button
                                    onClick={() => {
                                      updateNote(backorderRequest[back].id);
                                    }}
                                    type="reset"
                                    style={{
                                      marginTop: "20px",
                                      color: "white",
                                      backgroundColor: "black",
                                      width: "200px",
                                    }}
                                  >
                                    Submit
                                    <Icon
                                      style={{
                                        paddingLeft: "10px",
                                      }}
                                      name="edit outline"
                                    ></Icon>
                                  </Button>
                                </Form>
                              </Grid.Column>
                            </Grid.Row>
                          </Grid>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Card.Content>
                </Card>
              );
            })}
        </Segment>
      </Row>
    </div>
  );
}
export default RequestDashboard;
