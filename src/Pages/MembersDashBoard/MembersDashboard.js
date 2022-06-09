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
import "./MemberDashboard.css";
import "../AdminDashBoard/AdminAccount.css";
import { useParams } from "react-router";

function MembersDashboard(props) {
  //MEMBER LISTS
  const [memberList, setMemberList] = useState("");
  const [decendingList, setDecendingList] = useState("");
  const [activeList, setActiveList] = useState("");
  const [expiredMembers, setExpiredMembers] = useState("");
  const [expiringMembers, setExpiringMembers] = useState("");
  // SEARCH TERMS
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTerm3, setSearchTerm3] = useState("");
  const [searchTermTwo, setSearchTermTwo] = useState("");
  const [searchTermThree, setSearchTermThree] = useState("");
  const [searchTermFour, setSearchTermFour] = useState("");
  //  OPEN AND CLOSE
  const [open, setOpen] = React.useState(false);
  const [openTwo, setOpenTwo] = React.useState(false);
  const [openThree, setOpenThree] = React.useState(false);
  const [openFive, setOpenFive] = React.useState(false);
  const [openControls, setOpenControls] = React.useState(false);
  const [openControlsEdit, setOpenControlsEdit] = React.useState(false);
  const [openControlsRenew, setOpenControlsRenew] = React.useState(false);
  // UPDATE TO CUSTOMER
  const [newCardStatus, setNewCardStatus] = useState("");
  const [memberName, setMemberName] = useState("");
  const [newMemId, setNewMemId] = useState("");
  const [membershipDate, setMembershipDate] = useState("");
  // VARIABLES FOR REQUESTS
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
  // RENEW MEMBERSHIP
  const card = "Pending";
  const acknowledged = "No";
  //
  // const userId = props.id;
  // const { id } = useParams();
  const [id, setId] = useState("");
  const [userId, setUserId] = useState("");

  //*****************************************  REQUEST FUNCTIONS ON CUSTOMER MODAL *************************** */
  //SUBMIT REQUEST
  const submitRequest = (e) => {
    Axios.post("https://executive-app.herokuapp.com/newRequested", {
      // Axios.post("http://localhost:3001/newRequested", {
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
      // getMemberRequests();
    });
  };
  //UPDATE REQUEST NOTE
  const updateNote = (id) => {
    Axios.put("https://executive-app.herokuapp.com/noteUpdate", {
      // Axios.put("http://localhost:3001/noteUpdate", {
      note: newNote,
      id: id,
    }).then((response) => {
      // getMemberRequests();
      // getMemberNotes();
      requestNote();
    });
  };
  const updateStatus = (id) => {
    Axios.put("https://executive-app.herokuapp.com/statusUpdate", {
      // Axios.put("http://localhost:3001/statusUpdate", {
      status: newStatus,
      id: id,
    }).then((response) => {
      // getMemberRequests();
    });
  };
  //SUBMIT REQUEST NOTE
  const requestNote = (id) => {
    Axios.post("https://executive-app.herokuapp.com/requestNote", {
      // Axios.post("http://localhost:3001/requestNote", {
      note: newNote,
      memberName: memberName,
      noteHeader: noteHeader,
      id: id,
    }).then(() => { });
  };
  //*****************************************  END REQUEST FUNCTIONS ON CUSTOMER MODAL *************************** */
  // CHANGE CARD STATUS
  const ChangeCard = (id) => {
    Axios.put("https://executive-app.herokuapp.com/cardStatusChange", {
      // Axios.put("http://localhost:3001/cardStatusChange", {
      card: newCardStatus,
      id: id,
    }).then((response) => {
      alert("Card Status Updated");
      getMemberInfo();
      getActiveMembers();
      getDecendingPeople();
      getExpiredPeople();
      getExpiringPeople();
      // console.log("card updated" + id);
    });
  };
  //
  //

  const putPendingCard = (id) => {
    Axios.put("https://executive-app.herokuapp.com/pendingCardRenew", {
      // Axios.put("http://localhost:3001/pendingCardRenew", {
      id: id,
      card: card,
      acknowledged: acknowledged,
    }).then((response) => {
      // console.log("completed" + id);
    });
  };
  const ChangeRenewal = (id) => {
    Axios.put("https://executive-app.herokuapp.com/changeRenewal", {
      // Axios.put("http://localhost:3001/changeRenewal", {
      id: id,
      card: card,
      acknowledged: acknowledged,
    }).then((response) => {
      alert("Membership Renewal Completed");
      getMemberInfo();
      getActiveMembers();
      getDecendingPeople();
      getExpiredPeople();
      getExpiringPeople();
    });
  };
  //
  const getMemberInfo  = async function () {
    // GET ALL MEMBERS
    Axios.get("https://executive-app.herokuapp.com/api/getAllMembers").then(
      (response) => {
        // Axios.get("http://localhost:3001/api/getAllMembers").then((response) => {
        setMemberList(response.data);
        // setMemberName(response.data.first_name + response.data.last_name);
      }
    );
  };

  //
  //  UPDATE MEMBER ID
  const ChangeMemId = (id) => {
    Axios.put("https://executive-app.herokuapp.com/changeMemId", {
      // Axios.put("http://localhost:3001/changeMemId", {
      memId: newMemId,
      id: id,
    }).then((response) => {
      alert("Member ID Changed");
      getMemberInfo();
      getActiveMembers();
      getDecendingPeople();
      getExpiredPeople();
      getExpiringPeople();
    });
  };
  //
  // CHANGE MEMBERSHIP DATE
  const ChangeMembershipDate = (id) => {
    Axios.put("https://executive-app.herokuapp.com/changeMemDate", {
      // Axios.put("http://localhost:3001/changeMemDate", {
      membershipDate: membershipDate,
      id: id,
    }).then((response) => {
      alert("Member Expiration Date Changed");
      getMemberInfo();
      getActiveMembers();
      getDecendingPeople();
      getExpiredPeople();
      getExpiringPeople();
    });
  };

  // ************************************************ CONTROLS THE HIDE /SHOW EFFECT WHEN CLICKING ON THE STAT MENUS ********************************************
  const ShowAllMembers  = async function () {
    document.getElementById("all-members").style.display = "block";
    document.getElementById("active-members").style.display = "none";
    document.getElementById("expiring-members").style.display = "none";
    document.getElementById("expired-members").style.display = "none";
    document.getElementById("decending-members").style.display = "none";
  };
  const ShowAllActive  = async function () {
    document.getElementById("active-members").style.display = "block";
    document.getElementById("all-members").style.display = "none";
    document.getElementById("expiring-members").style.display = "none";
    document.getElementById("expired-members").style.display = "none";
    document.getElementById("decending-members").style.display = "none";
    getActiveMembers();
  };
  const ShowAllExpiring  = async function () {
    document.getElementById("expiring-members").style.display = "block";
    document.getElementById("active-members").style.display = "none";
    document.getElementById("all-members").style.display = "none";
    document.getElementById("expired-members").style.display = "none";
    document.getElementById("decending-members").style.display = "none";
    getExpiringPeople();
  };
  const ShowAllExpired  = async function () {
    document.getElementById("expired-members").style.display = "block";
    document.getElementById("active-members").style.display = "none";
    document.getElementById("all-members").style.display = "none";
    document.getElementById("expiring-members").style.display = "none";
    document.getElementById("decending-members").style.display = "none";
    getExpiredPeople();
  };
  const ShowAllDecending  = async function () {
    document.getElementById("decending-members").style.display = "block";
    document.getElementById("active-members").style.display = "none";
    document.getElementById("all-members").style.display = "none";
    document.getElementById("expiring-members").style.display = "none";
    document.getElementById("expired-members").style.display = "none";
    getDecendingPeople();
  };
  // ************************************************************************************************************************************************************
  //
  //
  //**********************  SHOW SPECIFIC CUSTOMR ********************* */
  const ShowCustomerDetails  = async function () {
    document.getElementById("customer-portal-page").style.display = "block";
    document.getElementById("decending-members").style.display = "none";
    document.getElementById("active-members").style.display = "none";
    document.getElementById("all-members").style.display = "none";
    document.getElementById("expiring-members").style.display = "none";
    document.getElementById("expired-members").style.display = "none";
  };
  //
  //
  //GET ACTIVE ONLY MEMBERS
  const getActiveMembers  = async function () {
    Axios.get("https://executive-app.herokuapp.com/api/activeMembers").then(
      (response) => {
        // Axios.get("http://localhost:3001/api/activeMembers").then((response) => {
        setActiveList(response.data);
        // setMemberName(response.data[0].first_name);
        // console.log(response.data[0].first_name);
      }
    );
  };

  // GET ALL MEMBERS DECENDING
  const getDecendingPeople  = async function () {
    Axios.get("https://executive-app.herokuapp.com/getAllMembersDesc").then(
      (response) => {
        // Axios.get("http://localhost:3001/getAllMembersDesc").then((response) => {
        setDecendingList(response.data);
        // console.log(response);
      }
    );
  };

  // GET EXPIRED MEMBERS
  const getExpiredPeople = async function () {
    Axios.get("https://executive-app.herokuapp.com/expiredMembers").then(
      (response) => {
        // Axios.get("http://localhost:3001/expiredMembers").then((response) => {
        setExpiredMembers(response.data);
      }
    );
  };
  //GET EXPIRING MEMBER
  const getExpiringPeople = () => {
    Axios.get("https://executive-app.herokuapp.com/expiringMembers").then(
      (response) => {
        // Axios.get("http://localhost:3001/expiringMembers").then((response) => {
        setExpiringMembers(response.data);
      }
    );
  };
  //
  // ********** DOWNLAOD THE REQUEST LISTS ***********
  //
  const objectToCsv = function (data) {
    const csvRows = [];

    const headers = Object.keys(data[0]);
    csvRows.push(headers.join(","));

    for (const row of data) {
      const values = headers.map((header) => {
        const escaped = ("" + row[header]).replace(/"/g, '\\"');
        return `"${escaped}"`;
      });

      csvRows.push(values.join(","));
    }
    return csvRows.join("\n");
  };

  const download = function (data) {
    const blob = new Blob([data], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.setAttribute("hidden", "");
    a.setAttribute("href", url);
    a.setAttribute("download", "download.csv");
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const DownloadRequests = async function () {
    const jsonUrl = "https://executive-app.herokuapp.com/downloadMembers";
    const res = await fetch(jsonUrl);
    const json = await res.json();

    const data = json.map((row) => ({
      first_name: row.first_name,
      last_name: row.last_name,
      phone: row.phone,
      email: row.email,
      address: row.address,
      dateJoined: row.dateJoined,
      expiring: row.expiring,
      number: row.number,
    }));

    const csvData = objectToCsv(data);

    download(csvData);
  };

  const RefreshStats = async function () {
    getMemberInfo();
    getDecendingPeople();
    getActiveMembers();
    getExpiredPeople();
    getExpiringPeople();
  }
  //
  //***************** useEffect ******************** */
  //
  useEffect(() => {
    // getMemberInfo();
    // getDecendingPeople();
    getActiveMembers();
    // getExpiredPeople();
    // getExpiringPeople();
  }, []);
  //
  //***************** useEffect ******************** */
  //
  //
  //
  return (
    <div className="background">
      <Row>
        <Col sm={2} className="stats-container">
          {/* .stats-container */}
          <Popup
            trigger={
              <div className="stats-box" onClick={ShowAllMembers}>
                {" "}
                <h1 className="stat-number">{decendingList.length}</h1>
                <p>Members</p>
              </div>
            }
            content="Total number of members"
            position="bottom center"
            inverted
          />
        </Col>
        <Col sm={2} className="stats-container">
          {/* .stats-container */}
          <Popup
            trigger={
              <div className="stats-box" onClick={ShowAllActive}>
                {" "}
                <h1 className="stat-number">{activeList.length}</h1>
                <p>Actives</p>
              </div>
            }
            content="Total number of active members"
            position="bottom center"
            inverted
          />
        </Col>
        <Col sm={2} className="stats-container">
          {/* .stats-container */}
          <Popup
            trigger={
              <div className="stats-box" onClick={ShowAllExpiring}>
                {" "}
                <h1 className="stat-number">{expiringMembers.length}</h1>
                <p>Expiring</p>
              </div>
            }
            content="Total expiring in 30 days or less"
            position="bottom center"
            inverted
          />
        </Col>
        <Col sm={2} className="stats-container">
          {/* .stats-container */}
          <div className="stats-box" onClick={ShowAllExpired}>
            <h1 className="stat-number">{expiredMembers.length}</h1>
            <p>Expired</p>
          </div>
        </Col>
        <Col sm={2} className="stats-container">
          {/* .stats-container */}

          <div className="stats-box" onClick={ShowAllDecending}>
            <h1 className="stat-number">{decendingList.length}</h1>
            <p>Decending</p>
          </div>
        </Col>
      </Row>
      {/* ************************************************* THE BREAK FOR THE LIST OF CUSTOMER ************************************************* */}
      {/* ************************************ THIS IS GOING TO HIDE WHEN A STAT MENU IS CLICKED **************************************** */}
      <Row id="active-members">
        <button className="dnl-btn"
          onClick={DownloadRequests}
          style={{ width: "200px", height: "30px", marginLeft: "50px" }}
        >
          Download Members
        </button>
        <button className="dnl-btn"
          onClick={RefreshStats}
          style={{ width: "200px", height: "30px", marginLeft: "50px" }}
        >
          Refresh Stats
        </button>
        <h2 className="ra-title">
          <span className="span">A</span>ctive <span className="span">M</span>
          emebers
        </h2>
        <p className="dividing-line"></p>
        <br></br>

        <input
          type="text"
          placeholder="Search First or Last Name"
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
          {Object.keys(activeList)
            .filter((active) => {
              if (searchTerm == "") {
                return active;
              } else if (
                activeList[active].first_name
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase()) ||
                activeList[active].last_name
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
              ) {
                return active;
              }
            })
            .map((active, i) => {
              let joindate2 = new Date(activeList[active].dateJoined)
                .toUTCString()
                .split(" ")
                .slice(1, 4)
                .join(" ");
              let expiredate2 = new Date(activeList[active].expiring)
                .toUTCString()
                .split(" ")
                .slice(1, 4)
                .join(" ");
              let renewdate2 = new Date(activeList[active].renewal_date)
                .toUTCString()
                .split(" ")
                .slice(1, 4)
                .join(" ");
              return (
                <Card
                  key={active.id}
                  style={{
                    width: "100%",
                    boxShadow: "0px 0px 5px 3px rgb(60, 60, 60)",
                    backgroundColor: "white",
                    borderRadius: "10px",
                  }}
                >
                  <Card.Content>
                    <Grid divided="vertically">
                      <Grid.Row columns={3}>
                        <Grid.Column style={{ paddingLeft: "25px" }}>
                          <h2 style={{ color: "black" }}>
                            <Link
                              style={{ color: "black" }}
                              to={`/executiveAccount/${activeList[active].id}`}
                            >
                              {activeList[active].first_name}{" "}
                              {activeList[active].last_name}
                            </Link>
                          </h2>
                          {/* ********************* MODAL FOR CUSTOMER PORTAL  **********************/}
                          {/* <Modal
                            onClose={() => setOpen(false)}
                            onOpen={() => setOpen(true)}
                            open={open[active]}
                            trigger={
                              <h2 style={{ color: "black" }}>
                                {" "}
                                {activeList[active].first_name}{" "}
                                {activeList[active].last_name}
                              </h2>
                            
                            }
                            style={{
                              position: "absolute",
                              left: "50%",
                              right: "50%",
                              transform: "translate(-50%, 0%)",
                            }}
                          >
                            <Row>
                              <Col
                                className="personal-data"
                                style={{
                                  position: "absolute",
                                  left: "50%",
                                  right: "50%",
                                  transform: "translate(-50%, 0%)",
                                }}
                              >
                                <Row>
                                  <Col
                                    sm={5}
                                    className="picture"
                                    style={{
                                      // width: "200px",
                                      // height: "200px",
                                      backgroundColor: "darkred",
                                      padding: "5%",
                                    }}
                                  >
                                    456456
                                  </Col>
                                  <Col
                                    sm={7}
                                    className="member-stats"
                                    style={{
                                      left: "50%",
                                      right: "50%",
                                      textAlign: "center",
                                      marginTop: "5%",
                                    }}
                                  >
                                    <Row>
                                      <h1 style={{ marginBottom: "5%" }}>
                                        {" "}
                                        {activeList[active].first_name}{" "}
                                        {activeList[active].last_name}
                                      </h1>
                                      <p style={{ color: "rgb(129, 0, 0)" }}>
                                        ________________________________________________________________
                                      </p>
                                      <Row style={{ paddingBottom: "5%" }}>
                                        <Col>
                                          <Icon name="sticky note"></Icon>Send
                                          Message
                                        </Col>
                                        <Col>
                                          <Popup
                                            trigger={
                                              <p>
                                                {" "}
                                                <Icon name="user secret"></Icon>
                                                Demographics
                                              </p>
                                            }
                                            content={
                                              <div>
                                               
                                                <p
                                                  style={{
                                                    color: "rgb(129, 0, 0)",
                                                  }}
                                                >
                                                  ________________________________
                                                </p>
                                                <p>
                                                  Ethnicity:{" "}
                                                  {activeList[active].ethnicity}
                                                </p>
                                                <p>
                                                  Race:{" "}
                                                  {activeList[active].race}
                                                </p>
                                                <p>
                                                  SSN: {activeList[active].SSN}
                                                </p>
                                              </div>
                                            }
                                            position="bottom center"
                                            inverted
                                          />
                                        </Col>
                                        <Col>
                                          {" "}
                                          <Modal
                                            onClose={() => setOpenTwo(false)}
                                            onOpen={() => setOpenTwo(true)}
                                            open={openTwo}
                                            trigger={
                                              <p>
                                                <Icon name="edit"></Icon>Edit
                                                Account
                                              </p>
                                            }
                                            style={{
                                              height: "500px",
                                              position: "absolute",
                                              left: "50%",
                                              right: "50%",
                                              top: "25%",
                                              transform: "translate(-50%, 0%)",
                                            }}
                                          ></Modal>
                                        </Col>
                                      </Row>
                                      <Col className="personal-data-container">
                                        <p> {activeList[active].address}</p>
                                        <p> {activeList[active].email}</p>
                                        <p>{activeList[active].phone}</p>
                                        <p>{activeList[active].DOB}</p>
                                      </Col>
                                    </Row>
                                    <Row style={{ padding: "5%" }}>
                                      <Col>
                                        <Icon name="user" />{" "}
                                        {activeList[active].number}
                                      </Col>
                                      <Col>
                                        <Icon name="id card" />{" "}
                                        {activeList[active].card}
                                      </Col>
                                      <Col>
                                        <Icon name="building" />{" "}
                                        {activeList[active].preferredStore}
                                      </Col>
                                      <Col>
                                        <Icon name="handshake" />{" "}
                                        {activeList[active].communication}
                                      </Col>
                                    </Row>
                                    <Row className="personal-data-container">
                                      <Row>
                                        <Col>
                                          <h4>Join Date</h4>
                                        </Col>

                                        <Col>
                                          <h4>Renewal Date</h4>
                                        </Col>

                                        <Col>
                                          <h4>Expire Date</h4>
                                        </Col>
                                      </Row>
                                      <Row>
                                        <Col>{joindate2}</Col>

                                        <Col>{renewdate2}</Col>

                                        <Col>{expiredate2}</Col>
                                      </Row>
                                    </Row>
                                  </Col>
                                </Row> */}
                          {/* ******************************************* SUBMITTING REQUEST FORM ******************************************* */}
                          {/* <Row style={{ marginTop: "2%" }}> */}
                          {/* <Col>
                                    <Form
                                      style={{
                                        backgroundColor: "white",
                                        boxShadow:
                                          "0px 0px 5px 3px rgb(60, 60, 60)",
                                        border: "none",
                                        padding: "5%",
                                        borderRadius: "10px",
                                        marginLeft: "auto",
                                        marginRight: "auto",
                                        alignItems: "center",
                                        alignContent: "center",
                                      }}
                                    >
                                      <Form.Group widths="equal">
                                        <select
                                          onChange={(e) => {
                                            setCategory(
                                              e.target.value.toUpperCase()
                                            );
                                          }}
                                          style={{
                                            height: "40px",
                                            width: "95%",
                                            backgroundColor: "lightGrey",
                                            borderRadius: "5px",
                                            border: "none",
                                          }}
                                        >
                                          <option>Category</option>
                                          <option value="Accessories">
                                            Accessories
                                          </option>
                                          <option value="Ammunition">
                                            Ammunition
                                          </option>
                                          <option value="Class 3">
                                            Class 3
                                          </option>
                                          <option value="Firearms">
                                            Firearms
                                          </option>
                                          <option value="Scopes">Scopes</option>
                                          <option value="Other">Other</option>
                                        </select>
                                        <Form.Input
                                          onChange={(e) => {
                                            setBrand(
                                              e.target.value.toUpperCase()
                                            );
                                          }}
                                          placeholder="Make"
                                        />
                                      </Form.Group>
                                      <Form.Group
                                        widths="equal"
                                        style={{ height: "50px" }}
                                      >
                                        <Form.Input
                                          onChange={(e) => {
                                            setItem(
                                              e.target.value.toUpperCase()
                                            );
                                          }}
                                          placeholder="Model"
                                        />
                                        <Form.Input
                                          onChange={(e) => {
                                            setSku(
                                              e.target.value.toUpperCase()
                                            );
                                          }}
                                          placeholder="UPC / SKU"
                                        />
                                      </Form.Group>
                                      <Form.Group
                                        widths="equal"
                                        style={{ height: "50px" }}
                                      >
                                        <Form.Input
                                          onChange={(e) => {
                                            setQuantity(e.target.value);
                                          }}
                                          placeholder="Quantity"
                                        />

                                        <select
                                          onChange={(e) => {
                                            setStatus(
                                              e.target.value.toUpperCase()
                                            );
                                          }}
                                          style={{
                                            height: "40px",
                                            width: "95%",
                                            backgroundColor: "lightGrey",
                                            borderRadius: "5px",
                                            border: "none",
                                          }}
                                        >
                                          <option> Status</option>
                                          <option value="Pending">
                                            Pending
                                          </option>
                                          <option value="On Hold">
                                            On Hold
                                          </option>
                                          <option value="Ordered">
                                            Ordered
                                          </option>
                                          <option value="Back Order">
                                            Back Order
                                          </option>
                                          <option value="Completed">
                                            Completed
                                          </option>
                                          <option value="Canceled">
                                            Canceled
                                          </option>
                                        </select>
                                      </Form.Group>
                                      <Form.Group
                                        widths="equal"
                                        style={{ height: "50px" }}
                                      >
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
                                      <Form.Group
                                        widths="equal"
                                        style={{ height: "50px" }}
                                      >
                                        <input
                                          type="checkbox"
                                          id="name"
                                          name="fav_language"
                                          value={activeList[active].first_name}
                                          onChange={(e) => {
                                            setMemberName(e.target.value);
                                          }}
                                        ></input>
                                        <label
                                          for="name"
                                          style={{
                                            color: "black",
                                            width: "35%",
                                          }}
                                        >
                                          Verify Customer
                                        </label>
                                        <input
                                          type="checkbox"
                                          id="id"
                                          name="fav_language"
                                          value={activeList[active].id}
                                          onChange={(e) => {
                                            setUserId(e.target.value);
                                          }}
                                        ></input>
                                        <label
                                          for="id"
                                          style={{
                                            color: "black",
                                            width: "25%",
                                          }}
                                        >
                                          Verify Info
                                        </label>
                                        <p>{requestList.length}</p>
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
                                  </Col> */}
                          {/* ******************************************* END SUBMITTING REQUEST FORM ******************************************* */}
                          {/* ******************************************* START NOTE FORM ******************************************* */}
                          {/* <Col>
                                    {" "}
                                    <div
                                      style={{
                                        backgroundColor: "white",
                                        // height: "500px",
                                        boxShadow:
                                          "0px 0px 5px 3px rgb(60, 60, 60)",
                                        border: "none",
                                        // margin: "5%",
                                        borderRadius: "10px",
                                        marginLeft: "auto",
                                        marginRight: "auto",
                                        alignItems: "center",
                                        alignContent: "center",
                                      }}
                                    >
                                      hellow
                                    </div>
                                  </Col> */}
                          {/* </Row> */}
                          {/* ******************************************* END NOTE FORM ******************************************* */}
                          {/* ******************************************* START REQUESTS LIST  ******************************************* */}

                          {/* <Row
                                  style={{
                                    padding: "1%",
                                    marginTop: "1%",
                                  }}
                                >
                                  <div
                                    style={{
                                      backgroundColor: "white",
                                      height: "500px",
                                      boxShadow:
                                        "0px 0px 5px 3px rgb(60, 60, 60)",
                                      border: "none",
                                      // margin: "5%",
                                      borderRadius: "10px",
                                      marginLeft: "auto",
                                      marginRight: "auto",
                                      alignItems: "center",
                                      alignContent: "center",
                                      overflow: "scroll",
                                    }}
                                  >
                                    {Object.keys(requestList).map(
                                      (requests, i) => {
                                        return (
                                          <div
                                            style={{
                                              backgroundColor: "white",
                                              height: "200px",
                                              boxShadow:
                                                "0px 0px 5px 3px rgb(60, 60, 60)",
                                              border: "none",
                                              borderRadius: "10px",
                                              marginLeft: "auto",
                                              marginRight: "auto",
                                              alignItems: "center",
                                              alignContent: "center",
                                            }}
                                          >
                                            <p>{requestList[requests].id}</p>
                                            <p>
                                              {requestList[requests].memberName}
                                            </p>
                                          </div>
                                        );
                                      }
                                    )}
                                  </div>
                                </Row> */}
                          {/* ******************************************* END REQUESTS LIST  ******************************************* */}
                          {/* </Col> */}
                          {/* </Row> */}
                          {/* <Modal.Actions></Modal.Actions> */}
                          {/* </Modal> */}
                          {/* ********************* MODAL FOR CUSTOMER PORTAL  **********************/}
                          {/* <h2 style={{ color: "black" }}>
                            <div onClick={ShowCustomerDetails}>
                              {" "}
                              {activeList[active].first_name}{" "}
                              {activeList[active].last_name}
                            </div> */}
                          {/* <Link
                              style={{ color: "black" }}
                              to={`/executiveAccount/${activeList[active].id}`}
                            >
                              {activeList[active].first_name}{" "}
                              {activeList[active].last_name}
                            </Link> */}
                          {/* </h2> */}
                          <Card.Meta>
                            {" "}
                            Suffix: {" " + activeList[active].suffix}
                          </Card.Meta>
                          <Card.Meta style={{ color: "black" }}>
                            {" "}
                            <Icon name="target" />
                            {" " + activeList[active].preferredStore}
                          </Card.Meta>
                          <Card.Meta>
                            {" "}
                            <Icon name="birthday cake" />{" "}
                            {" " + activeList[active].DOB}
                          </Card.Meta>
                          <Card.Meta style={{ color: "black" }}>
                            {" "}
                            <Icon name="phone" /> {activeList[active].phone}
                          </Card.Meta>
                          <Card.Meta>
                            {" "}
                            <Icon name="mail" />
                            {" " + activeList[active].email}
                          </Card.Meta>
                          <Card.Meta style={{ color: "black" }}>
                            {" "}
                            <Icon name="home" /> {activeList[active].address}
                          </Card.Meta>
                          <br></br>
                        </Grid.Column>
                        <Grid.Column>
                          <h3 style={{ color: "black" }}>Membership Status</h3>
                          <Card.Meta>
                            {" "}
                            Member Number: {activeList[active].number}
                          </Card.Meta>
                          <Card.Meta style={{ color: "black" }}>
                            {" "}
                            Card Status: {activeList[active].card}
                          </Card.Meta>
                          <Card.Meta>
                            {" "}
                            Initial Contact: {activeList[active].acknowledged}
                          </Card.Meta>

                          <select
                            onChange={(i) => {
                              setNewCardStatus(i.target.value);
                            }}
                            style={{
                              height: "35px",
                              width: "50%",
                              backgroundColor: "lightGrey",
                              borderRadius: "5px",
                              border: "none",
                            }}
                          >
                            <option>Choose Card Status</option>
                            <option value="pending">Pending</option>
                            <option value="Yes Card">Yes Card</option>
                            <option value="Card Ordered">Card Ordered</option>
                            <option value="Card Expired">Card Expired</option>
                          </select>
                          <Button
                            style={{ margin: "10px" }}
                            size="mini"
                            color="black"
                            onClick={() => {
                              ChangeCard(activeList[active].id);
                            }}
                          >
                            Change Card
                          </Button>
                          {/* 
                            ACCOUNT CONTROLS SECTION
                     */}
                          <Card.Description>
                            {" "}
                            Date Joined: {joindate2}
                          </Card.Description>
                          <Card.Description>
                            {" "}
                            Date Expiring: {expiredate2}
                          </Card.Description>
                        </Grid.Column>
                        {/* **********************
                          
                          START OF THE MODALS
                          
                          ******************************** */}
                        <Grid.Column>
                          <h3 style={{ color: "black" }}>Account Controls</h3>
                          <Modal
                            style={{
                              marginLeft: "25%",
                              marginTop: "10%",
                            }}
                            basic
                            onClose={() => setOpenControlsEdit(false)}
                            onOpen={() => setOpenControlsEdit(true)}
                            open={openControlsEdit[active]}
                            size="small"
                            trigger={
                              <Button color="green" inverted>
                                Edit Account
                              </Button>
                            }
                          >
                            <Header icon>
                              <Icon name="edit" />
                              {/* ARE YOU SURE YOU WANT TO */}
                              EDIT {activeList[active].first_name.toUpperCase()}
                              'S ACCOUNT
                            </Header>
                            {/* 
                              START EDIT DETAILS 
                              */}
                            <Header>Member ID</Header>
                            <input
                              onChange={(o) => {
                                setNewMemId(o.target.value);
                              }}
                              placeholder="1234"
                              style={{
                                height: "30px",
                                width: "300px",
                                margin: "20px",
                              }}
                            ></input>

                            <Button
                              size="mini"
                              color="red"
                              inverted
                              onClick={() => {
                                ChangeMemId(activeList[active].id);
                              }}
                            >
                              Change ID
                            </Button>
                            <Header>Membership Expiration Date</Header>
                            <input
                              onChange={(o) => {
                                setMembershipDate(o.target.value);
                              }}
                              placeholder="2020-10-27 12:18:35"
                              style={{
                                height: "30px",
                                width: "300px",
                                margin: "20px",
                              }}
                            ></input>

                            <Button
                              size="mini"
                              color="red"
                              inverted
                              onClick={() => {
                                ChangeMembershipDate(activeList[active].id);
                              }}
                            >
                              Change Expiring Date
                            </Button>
                            {/* 
                              END EDIT DETAILS 
                              */}
                            <Modal.Actions>
                              {/* <a href="/allMembers"> */}
                              <Button
                                color="green"
                                inverted
                                onClick={() => setOpenControlsEdit(false)}
                              >
                                <Icon name="checkmark" /> Done
                              </Button>
                              {/* </a> */}
                            </Modal.Actions>
                          </Modal>
                          <Card.Meta
                            style={{
                              height: "20px",
                              backgroundColor: "white",
                            }}
                          ></Card.Meta>
                          <Modal
                            style={{
                              marginLeft: "25%",
                              marginTop: "10%",
                            }}
                            basic
                            onClose={() => setOpenControlsRenew(false)}
                            onOpen={() => setOpenControlsRenew(true)}
                            open={openControlsRenew[active]}
                            size="small"
                            trigger={
                              <Button color="yellow" inverted>
                                Renew Membership
                              </Button>
                            }
                          >
                            <Header icon>
                              <Icon name="redo" />
                              RENEW{" "}
                              {activeList[active].first_name.toUpperCase()}
                              'S MEMBERSHIP?
                            </Header>
                            <Modal.Content>
                              <p>
                                Renewing this account will change the card
                                status to "pending" and initial contact to "no"
                                and will change the renewal date starting today.
                              </p>
                            </Modal.Content>

                            <Modal.Actions>
                              {/* <a href="/allMembers"> */}
                              <Button
                                basic
                                color="red"
                                inverted
                                onClick={() => {
                                  ChangeRenewal(activeList[active].id);
                                }}
                              >
                                <Icon name="remove" /> Yes, Renew Membership
                              </Button>
                              {/* </a> */}
                              {/* <a href="/allMembers"> */}
                              <Button
                                color="green"
                                inverted
                                onClick={() => setOpenControlsRenew(false)}
                              >
                                <Icon name="checkmark" /> No, Let Expire
                              </Button>
                              {/* </a> */}
                            </Modal.Actions>
                          </Modal>
                          {/* **********************

                          END OF THE MODALS
                          
                          ******************************** */}
                          <Card.Meta
                            style={{
                              height: "20px",
                              backgroundColor: "white",
                            }}
                          ></Card.Meta>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Card.Content>
                </Card>
              );
            })}
        </Segment>
      </Row>
      {/* **************************************** END HIDE OF THE id="active-members" ******************************** */}
      {/*  */}
      {/* **************************************** START HIDE OF THE id="all-members" ******************************** */}
      {/*  */}
      <Row id="all-members">
        <h2 className="ra-title">
          <span className="span">A</span>ll <span className="span">M</span>
          emebers
        </h2>
        <p className="dividing-line"></p>
        <br></br>
        <input
          type="text"
          placeholder="Search First or Last Name"
          className="search-input"
          style={{ marginLeft: "25%", marginRight: "25%", width: "50%" }}
          onChange={(event) => {
            setSearchTermFour(event.target.value);
          }}
        ></input>
        <Segment
          style={{
            overflow: "auto",
            maxHeight: "605px",
            width: "100%",
          }}
        >
          {Object.keys(memberList)
            .filter((all) => {
              if (searchTermFour == "") {
                return all;
              } else if (
                memberList[all].first_name
                  .toLowerCase()
                  .includes(searchTermFour.toLowerCase()) ||
                memberList[all].last_name
                  .toLowerCase()
                  .includes(searchTermFour.toLowerCase())
              ) {
                return all;
              }
            })
            .map((all, i) => {
              let joindate3 = new Date(memberList[all].dateJoined)
                .toUTCString()
                .split(" ")
                .slice(1, 4)
                .join(" ");
              let expiredate3 = new Date(memberList[all].expiring)
                .toUTCString()
                .split(" ")
                .slice(1, 4)
                .join(" ");
              return (
                <Card
                  style={{
                    width: "100%",
                    boxShadow: "0px 0px 5px 3px rgb(60, 60, 60)",
                    backgroundColor: "white",
                    borderRadius: "10px",
                  }}
                >
                  <Card.Content>
                    <Grid divided="vertically">
                      <Grid.Row columns={3}>
                        <Grid.Column style={{ paddingLeft: "25px" }}>
                          <h2 style={{ color: "black" }}>
                            <Link
                              style={{ color: "black" }}
                              to={`/executiveAccount/${memberList[all].id}`}
                            >
                              {memberList[all].first_name}{" "}
                              {memberList[all].last_name}
                            </Link>
                          </h2>
                          <Card.Meta>
                            {" "}
                            Suffix: {" " + memberList[all].suffix}
                          </Card.Meta>
                          <Card.Meta style={{ color: "black" }}>
                            {" "}
                            <Icon name="target" />
                            {" " + memberList[all].preferredStore}
                          </Card.Meta>
                          <Card.Meta>
                            {" "}
                            <Icon name="birthday cake" />{" "}
                            {" " + memberList[all].DOB}
                          </Card.Meta>
                          <Card.Meta style={{ color: "black" }}>
                            {" "}
                            <Icon name="phone" /> {memberList[all].phone}
                          </Card.Meta>
                          <Card.Meta>
                            {" "}
                            <Icon name="mail" />
                            {" " + memberList[all].email}
                          </Card.Meta>
                          <Card.Meta style={{ color: "black" }}>
                            {" "}
                            <Icon name="home" /> {memberList[all].address}
                          </Card.Meta>
                          <br></br>
                        </Grid.Column>
                        <Grid.Column>
                          <h3 style={{ color: "black" }}>Membership Status</h3>
                          <Card.Meta>
                            {" "}
                            Member Number: {memberList[all].number}
                          </Card.Meta>
                          <Card.Meta style={{ color: "black" }}>
                            {" "}
                            Card Status: {memberList[all].card}
                          </Card.Meta>
                          <Card.Meta>
                            {" "}
                            Initial Contact: {memberList[all].acknowledged}
                          </Card.Meta>

                          <select
                            onChange={(i) => {
                              setNewCardStatus(i.target.value);
                            }}
                            style={{
                              height: "35px",
                              width: "50%",
                              backgroundColor: "lightGrey",
                              borderRadius: "5px",
                              border: "none",
                            }}
                          >
                            <option>Choose Card Status</option>
                            <option value="pending">Pending</option>
                            <option value="Yes Card">Yes Card</option>
                            <option value="Card Ordered">Card Ordered</option>
                            <option value="Card Expired">Card Expired</option>
                          </select>
                          <Button
                            style={{ margin: "10px" }}
                            size="mini"
                            color="black"
                            onClick={() => {
                              ChangeCard(memberList[all].id);
                            }}
                          >
                            Change Card
                          </Button>
                          {/* 
                            ACCOUNT CONTROLS SECTION
                     */}
                          <Card.Description>
                            {" "}
                            Date Joined: {joindate3}
                          </Card.Description>
                          <Card.Description>
                            {" "}
                            Date Expiring: {expiredate3}
                          </Card.Description>
                        </Grid.Column>
                        {/* **********************
                          
                          START OF THE MODALS
                          
                          ******************************** */}
                        <Grid.Column>
                          <h3 style={{ color: "black" }}>Account Controls</h3>
                          <Modal
                            style={{
                              marginLeft: "25%",
                              marginTop: "10%",
                            }}
                            basic
                            onClose={() => setOpenControlsEdit(false)}
                            onOpen={() => setOpenControlsEdit(true)}
                            open={openControlsEdit[all]}
                            size="small"
                            trigger={
                              <Button color="green" inverted>
                                Edit Account
                              </Button>
                            }
                          >
                            <Header icon>
                              <Icon name="edit" />
                              {/* ARE YOU SURE YOU WANT TO */}
                              EDIT {memberList[all].first_name.toUpperCase()}
                              'S ACCOUNT
                            </Header>
                            {/* 
                              START EDIT DETAILS 
                              */}
                            <Header>Member ID</Header>
                            <input
                              onChange={(o) => {
                                setNewMemId(o.target.value);
                              }}
                              placeholder="1234"
                              style={{
                                height: "30px",
                                width: "300px",
                                margin: "20px",
                              }}
                            ></input>

                            <Button
                              size="mini"
                              color="red"
                              inverted
                              onClick={() => {
                                ChangeMemId(memberList[all].id);
                              }}
                            >
                              Change ID
                            </Button>
                            <Header>Membership Expiration Date</Header>
                            <input
                              onChange={(o) => {
                                setMembershipDate(o.target.value);
                              }}
                              placeholder="2020-10-27 12:18:35"
                              style={{
                                height: "30px",
                                width: "300px",
                                margin: "20px",
                              }}
                            ></input>

                            <Button
                              size="mini"
                              color="red"
                              inverted
                              onClick={() => {
                                ChangeMembershipDate(memberList[all].id);
                              }}
                            >
                              Change Expiring Date
                            </Button>
                            {/* 
                              END EDIT DETAILS 
                              */}
                            <Modal.Actions>
                              {/* <a href="/allMembers"> */}
                              <Button
                                color="green"
                                inverted
                                onClick={() => setOpenControlsEdit(false)}
                              >
                                <Icon name="checkmark" /> Done
                              </Button>
                              {/* </a> */}
                            </Modal.Actions>
                          </Modal>
                          <Card.Meta
                            style={{
                              height: "20px",
                              backgroundColor: "white",
                            }}
                          ></Card.Meta>
                          <Modal
                            style={{
                              marginLeft: "25%",
                              marginTop: "10%",
                            }}
                            basic
                            onClose={() => setOpenControlsRenew(false)}
                            onOpen={() => setOpenControlsRenew(true)}
                            open={openControlsRenew[all]}
                            size="small"
                            trigger={
                              <Button color="yellow" inverted>
                                Renew Membership
                              </Button>
                            }
                          >
                            <Header icon>
                              <Icon name="redo" />
                              RENEW {memberList[all].first_name.toUpperCase()}
                              'S MEMBERSHIP?
                            </Header>
                            <Modal.Content>
                              <p>
                                Renewing this account will change the card
                                status to "pending" and initial contact to "no"
                                and will change the renewal date starting today.
                              </p>
                            </Modal.Content>

                            <Modal.Actions>
                              {/* <a href="/allMembers"> */}
                              <Button
                                basic
                                color="red"
                                inverted
                                onClick={() => {
                                  ChangeRenewal(memberList[all].id);
                                }}
                              >
                                <Icon name="remove" /> Yes, Renew Membership
                              </Button>
                              {/* </a> */}
                              {/* <a href="/allMembers"> */}
                              <Button
                                color="green"
                                inverted
                                onClick={() => setOpenControlsRenew(false)}
                              >
                                <Icon name="checkmark" /> No, Let Expire
                              </Button>
                              {/* </a> */}
                            </Modal.Actions>
                          </Modal>
                          {/* **********************

                          END OF THE MODALS
                          
                          ******************************** */}
                          <Card.Meta
                            style={{
                              height: "20px",
                              backgroundColor: "white",
                            }}
                          ></Card.Meta>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Card.Content>
                </Card>
              );
            })}
        </Segment>
      </Row>
      {/* **************************************** END HIDE OF THE id="all-members" ******************************** */}
      {/* **************************************** START HIDE OF THE id="expiring-members" ******************************** */}
      {/*  */}
      <Row id="expiring-members">
        <h2 className="ra-title">
          <span className="span">E</span>
          xpiring
        </h2>
        <p className="dividing-line"></p>
        <br></br>
        <input
          type="text"
          placeholder="Search First or Last Name"
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
          {Object.keys(expiringMembers)
            .filter((ing) => {
              if (searchTerm3 == "") {
                return ing;
              } else if (
                expiringMembers[ing].first_name
                  .toLowerCase()
                  .includes(searchTerm3.toLowerCase()) ||
                expiringMembers[ing].last_name
                  .toLowerCase()
                  .includes(searchTerm3.toLowerCase())
              ) {
                return ing;
              }
            })
            .map((ing, i) => {
              let joindate5 = new Date(expiringMembers[ing].dateJoined)
                .toUTCString()
                .split(" ")
                .slice(1, 4)
                .join(" ");
              let expiredate5 = new Date(expiringMembers[ing].expiring)
                .toUTCString()
                .split(" ")
                .slice(1, 4)
                .join(" ");
              return (
                <Card
                  style={{
                    width: "100%",
                    boxShadow: "0px 0px 5px 3px rgb(60, 60, 60)",
                    backgroundColor: "white",
                    borderRadius: "10px",
                  }}
                >
                  <Card.Content>
                    <Grid divided="vertically">
                      <Grid.Row columns={3}>
                        <Grid.Column style={{ paddingLeft: "25px" }}>
                          <h2 style={{ color: "black" }}>
                            <Link
                              style={{ color: "black" }}
                              to={`/executiveAccount/${expiringMembers[ing].id}`}
                            >
                              {expiringMembers[ing].first_name}{" "}
                              {expiringMembers[ing].last_name}
                            </Link>
                          </h2>
                          <Card.Meta>
                            {" "}
                            Suffix: {" " + expiringMembers[ing].suffix}
                          </Card.Meta>
                          <Card.Meta style={{ color: "black" }}>
                            {" "}
                            <Icon name="target" />
                            {" " + expiringMembers[ing].preferredStore}
                          </Card.Meta>
                          <Card.Meta>
                            {" "}
                            <Icon name="birthday cake" />{" "}
                            {" " + expiringMembers[ing].DOB}
                          </Card.Meta>
                          <Card.Meta style={{ color: "black" }}>
                            {" "}
                            <Icon name="phone" /> {expiringMembers[ing].phone}
                          </Card.Meta>
                          <Card.Meta>
                            {" "}
                            <Icon name="mail" />
                            {" " + expiringMembers[ing].email}
                          </Card.Meta>
                          <Card.Meta style={{ color: "black" }}>
                            {" "}
                            <Icon name="home" /> {expiringMembers[ing].address}
                          </Card.Meta>
                          <br></br>
                        </Grid.Column>
                        <Grid.Column>
                          <h3 style={{ color: "black" }}>Membership Status</h3>
                          <Card.Meta>
                            {" "}
                            Member Number: {expiringMembers[ing].number}
                          </Card.Meta>
                          <Card.Meta style={{ color: "black" }}>
                            {" "}
                            Card Status: {expiringMembers[ing].card}
                          </Card.Meta>
                          <Card.Meta>
                            {" "}
                            Initial Contact: {expiringMembers[ing].acknowledged}
                          </Card.Meta>

                          <select
                            onChange={(i) => {
                              setNewCardStatus(i.target.value);
                            }}
                            style={{
                              height: "35px",
                              width: "50%",
                              backgroundColor: "lightGrey",
                              borderRadius: "5px",
                              border: "none",
                            }}
                          >
                            <option>Choose Card Status</option>
                            <option value="pending">Pending</option>
                            <option value="Yes Card">Yes Card</option>
                            <option value="Card Ordered">Card Ordered</option>
                            <option value="Card Expired">Card Expired</option>
                          </select>
                          <Button
                            style={{ margin: "10px" }}
                            size="mini"
                            color="black"
                            onClick={() => {
                              ChangeCard(expiringMembers[ing].id);
                            }}
                          >
                            Change Card
                          </Button>
                          {/* 
                            ACCOUNT CONTROLS SECTION
                     */}
                          <Card.Description>
                            {" "}
                            Date Joined: {joindate5}
                          </Card.Description>
                          <Card.Description>
                            {" "}
                            Date Expiring: {expiredate5}
                          </Card.Description>
                        </Grid.Column>
                        {/* **********************
                          
                          START OF THE MODALS
                          
                          ******************************** */}
                        <Grid.Column>
                          <h3 style={{ color: "black" }}>Account Controls</h3>
                          <Modal
                            style={{
                              marginLeft: "25%",
                              marginTop: "10%",
                            }}
                            basic
                            onClose={() => setOpenControlsEdit(false)}
                            onOpen={() => setOpenControlsEdit(true)}
                            open={openControlsEdit[ing]}
                            size="small"
                            trigger={
                              <Button color="green" inverted>
                                Edit Account
                              </Button>
                            }
                          >
                            <Header icon>
                              <Icon name="edit" />
                              {/* ARE YOU SURE YOU WANT TO */}
                              EDIT{" "}
                              {expiringMembers[ing].first_name.toUpperCase()}
                              'S ACCOUNT
                            </Header>
                            {/* 
                              START EDIT DETAILS 
                              */}
                            <Header>Member ID</Header>
                            <input
                              onChange={(o) => {
                                setNewMemId(o.target.value);
                              }}
                              placeholder="1234"
                              style={{
                                height: "30px",
                                width: "300px",
                                margin: "20px",
                              }}
                            ></input>

                            <Button
                              size="mini"
                              color="red"
                              inverted
                              onClick={() => {
                                ChangeMemId(expiringMembers[ing].id);
                              }}
                            >
                              Change ID
                            </Button>
                            <Header>Membership Expiration Date</Header>
                            <input
                              onChange={(o) => {
                                setMembershipDate(o.target.value);
                              }}
                              placeholder="2020-10-27 12:18:35"
                              style={{
                                height: "30px",
                                width: "300px",
                                margin: "20px",
                              }}
                            ></input>

                            <Button
                              size="mini"
                              color="red"
                              inverted
                              onClick={() => {
                                ChangeMembershipDate(expiringMembers[ing].id);
                              }}
                            >
                              Change Expiring Date
                            </Button>
                            {/* 
                              END EDIT DETAILS 
                              */}
                            <Modal.Actions>
                              {/* <a href="/allMembers"> */}
                              <Button
                                color="green"
                                inverted
                                onClick={() => setOpenControlsEdit(false)}
                              >
                                <Icon name="checkmark" /> Done
                              </Button>
                              {/* </a> */}
                            </Modal.Actions>
                          </Modal>
                          <Card.Meta
                            style={{
                              height: "20px",
                              backgroundColor: "white",
                            }}
                          ></Card.Meta>
                          <Modal
                            style={{
                              marginLeft: "25%",
                              marginTop: "10%",
                            }}
                            basic
                            onClose={() => setOpenControlsRenew(false)}
                            onOpen={() => setOpenControlsRenew(true)}
                            open={openControlsRenew[ing]}
                            size="small"
                            trigger={
                              <Button color="yellow" inverted>
                                Renew Membership
                              </Button>
                            }
                          >
                            <Header icon>
                              <Icon name="redo" />
                              RENEW{" "}
                              {expiringMembers[ing].first_name.toUpperCase()}
                              'S MEMBERSHIP?
                            </Header>
                            <Modal.Content>
                              <p>
                                Renewing this account will change the card
                                status to "pending" and initial contact to "no"
                                and will change the renewal date starting today.
                              </p>
                            </Modal.Content>

                            <Modal.Actions>
                              {/* <a href="/allMembers"> */}
                              <Button
                                basic
                                color="red"
                                inverted
                                onClick={() => {
                                  ChangeRenewal(expiringMembers[ing].id);
                                }}
                              >
                                <Icon name="remove" /> Yes, Renew Membership
                              </Button>
                              {/* </a> */}
                              {/* <a href="/allMembers"> */}
                              <Button
                                color="green"
                                inverted
                                onClick={() => setOpenControlsRenew(false)}
                              >
                                <Icon name="checkmark" /> No, Let Expire
                              </Button>
                              {/* </a> */}
                            </Modal.Actions>
                          </Modal>
                          {/* **********************

                          END OF THE MODALS
                          
                          ******************************** */}
                          <Card.Meta
                            style={{
                              height: "20px",
                              backgroundColor: "white",
                            }}
                          ></Card.Meta>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Card.Content>
                </Card>
              );
            })}
        </Segment>
      </Row>
      {/* **************************************** END HIDE OF THE id="expiring-members" ******************************** */}{" "}
      {/* **************************************** START HIDE OF THE id="expired-members" ******************************** */}
      {/*  */}
      <Row id="expired-members">
        <h2 className="ra-title">
          <span className="span">E</span>
          xpired
        </h2>
        <p className="dividing-line"></p>
        <br></br>
        <input
          type="text"
          placeholder="Search First or Last Name"
          style={{ marginLeft: "25%", marginRight: "25%", width: "50%" }}
          onChange={(event) => {
            setSearchTermTwo(event.target.value);
          }}
        ></input>
        <Segment
          style={{
            overflow: "auto",
            maxHeight: "605px",
            width: "100%",
          }}
        >
          {Object.keys(expiredMembers)
            .filter((exp) => {
              if (searchTermTwo == "") {
                return exp;
              } else if (
                expiredMembers[exp].first_name
                  .toLowerCase()
                  .includes(searchTermTwo.toLowerCase()) ||
                expiredMembers[exp].last_name
                  .toLowerCase()
                  .includes(searchTermTwo.toLowerCase())
              ) {
                return exp;
              }
            })
            .map((exp, i) => {
              let joindate4 = new Date(expiredMembers[exp].dateJoined)
                .toUTCString()
                .split(" ")
                .slice(1, 4)
                .join(" ");
              let expiredate4 = new Date(expiredMembers[exp].expiring)
                .toUTCString()
                .split(" ")
                .slice(1, 4)
                .join(" ");
              return (
                <Card
                  style={{
                    width: "100%",
                    boxShadow: "0px 0px 5px 3px rgb(60, 60, 60)",
                    backgroundColor: "white",
                    borderRadius: "10px",
                  }}
                >
                  <Card.Content>
                    <Grid divided="vertically">
                      <Grid.Row columns={3}>
                        <Grid.Column style={{ paddingLeft: "25px" }}>
                          <h2 style={{ color: "black" }}>
                            <Link
                              style={{ color: "black" }}
                              to={`/executiveAccount/${expiredMembers[exp].id}`}
                            >
                              {expiredMembers[exp].first_name}{" "}
                              {expiredMembers[exp].last_name}
                            </Link>
                          </h2>
                          <Card.Meta>
                            {" "}
                            Suffix: {" " + expiredMembers[exp].suffix}
                          </Card.Meta>
                          <Card.Meta style={{ color: "black" }}>
                            {" "}
                            <Icon name="target" />
                            {" " + expiredMembers[exp].preferredStore}
                          </Card.Meta>
                          <Card.Meta>
                            {" "}
                            <Icon name="birthday cake" />{" "}
                            {" " + expiredMembers[exp].DOB}
                          </Card.Meta>
                          <Card.Meta style={{ color: "black" }}>
                            {" "}
                            <Icon name="phone" /> {expiredMembers[exp].phone}
                          </Card.Meta>
                          <Card.Meta>
                            {" "}
                            <Icon name="mail" />
                            {" " + expiredMembers[exp].email}
                          </Card.Meta>
                          <Card.Meta style={{ color: "black" }}>
                            {" "}
                            <Icon name="home" /> {expiredMembers[exp].address}
                          </Card.Meta>
                          <br></br>
                        </Grid.Column>
                        <Grid.Column>
                          <h3 style={{ color: "black" }}>Membership Status</h3>
                          <Card.Meta>
                            {" "}
                            Member Number: {expiredMembers[exp].number}
                          </Card.Meta>
                          <Card.Meta style={{ color: "black" }}>
                            {" "}
                            Card Status: {expiredMembers[exp].card}
                          </Card.Meta>
                          <Card.Meta>
                            {" "}
                            Initial Contact: {expiredMembers[exp].acknowledged}
                          </Card.Meta>

                          <select
                            onChange={(i) => {
                              setNewCardStatus(i.target.value);
                            }}
                            style={{
                              height: "35px",
                              width: "50%",
                              backgroundColor: "lightGrey",
                              borderRadius: "5px",
                              border: "none",
                            }}
                          >
                            <option>Choose Card Status</option>
                            <option value="pending">Pending</option>
                            <option value="Yes Card">Yes Card</option>
                            <option value="Card Ordered">Card Ordered</option>
                            <option value="Card Expired">Card Expired</option>
                          </select>
                          <Button
                            style={{ margin: "10px" }}
                            size="mini"
                            color="black"
                            onClick={() => {
                              ChangeCard(expiredMembers[exp].id);
                            }}
                          >
                            Change Card
                          </Button>
                          {/* 
                            ACCOUNT CONTROLS SECTION
                     */}
                          <Card.Description>
                            {" "}
                            Date Joined: {joindate4}
                          </Card.Description>
                          <Card.Description>
                            {" "}
                            Date Expiring: {expiredate4}
                          </Card.Description>
                        </Grid.Column>
                        {/* **********************
                          
                          START OF THE MODALS
                          
                          ******************************** */}
                        <Grid.Column>
                          <h3 style={{ color: "black" }}>Account Controls</h3>
                          <Modal
                            style={{
                              marginLeft: "25%",
                              marginTop: "10%",
                            }}
                            basic
                            onClose={() => setOpenControlsEdit(false)}
                            onOpen={() => setOpenControlsEdit(true)}
                            open={openControlsEdit[exp]}
                            size="small"
                            trigger={
                              <Button color="green" inverted>
                                Edit Account
                              </Button>
                            }
                          >
                            <Header icon>
                              <Icon name="edit" />
                              {/* ARE YOU SURE YOU WANT TO */}
                              EDIT{" "}
                              {expiredMembers[exp].first_name.toUpperCase()}
                              'S ACCOUNT
                            </Header>
                            {/* 
                              START EDIT DETAILS 
                              */}
                            <Header>Member ID</Header>
                            <input
                              onChange={(o) => {
                                setNewMemId(o.target.value);
                              }}
                              placeholder="1234"
                              style={{
                                height: "30px",
                                width: "300px",
                                margin: "20px",
                              }}
                            ></input>

                            <Button
                              size="mini"
                              color="red"
                              inverted
                              onClick={() => {
                                ChangeMemId(expiredMembers[exp].id);
                              }}
                            >
                              Change ID
                            </Button>
                            <Header>Membership Expiration Date</Header>
                            <input
                              onChange={(o) => {
                                setMembershipDate(o.target.value);
                              }}
                              placeholder="2020-10-27 12:18:35"
                              style={{
                                height: "30px",
                                width: "300px",
                                margin: "20px",
                              }}
                            ></input>

                            <Button
                              size="mini"
                              color="red"
                              inverted
                              onClick={() => {
                                ChangeMembershipDate(expiredMembers[exp].id);
                              }}
                            >
                              Change Expiring Date
                            </Button>
                            {/* 
                              END EDIT DETAILS 
                              */}
                            <Modal.Actions>
                              {/* <a href="/allMembers"> */}
                              <Button
                                color="green"
                                inverted
                                onClick={() => setOpenControlsEdit(false)}
                              >
                                <Icon name="checkmark" /> Done
                              </Button>
                              {/* </a> */}
                            </Modal.Actions>
                          </Modal>
                          <Card.Meta
                            style={{
                              height: "20px",
                              backgroundColor: "white",
                            }}
                          ></Card.Meta>
                          <Modal
                            style={{
                              marginLeft: "25%",
                              marginTop: "10%",
                            }}
                            basic
                            onClose={() => setOpenControlsRenew(false)}
                            onOpen={() => setOpenControlsRenew(true)}
                            open={openControlsRenew[exp]}
                            size="small"
                            trigger={
                              <Button color="yellow" inverted>
                                Renew Membership
                              </Button>
                            }
                          >
                            <Header icon>
                              <Icon name="redo" />
                              RENEW{" "}
                              {expiredMembers[exp].first_name.toUpperCase()}
                              'S MEMBERSHIP?
                            </Header>
                            <Modal.Content>
                              <p>
                                Renewing this account will change the card
                                status to "pending" and initial contact to "no"
                                and will change the renewal date starting today.
                              </p>
                            </Modal.Content>

                            <Modal.Actions>
                              {/* <a href="/allMembers"> */}
                              <Button
                                basic
                                color="red"
                                inverted
                                onClick={() => {
                                  ChangeRenewal(expiredMembers[exp].id);
                                }}
                              >
                                <Icon name="remove" /> Yes, Renew Membership
                              </Button>
                              {/* </a> */}
                              {/* <a href="/allMembers"> */}
                              <Button
                                color="green"
                                inverted
                                onClick={() => setOpenControlsRenew(false)}
                              >
                                <Icon name="checkmark" /> No, Let Expire
                              </Button>
                              {/* </a> */}
                            </Modal.Actions>
                          </Modal>
                          {/* **********************

                          END OF THE MODALS
                          
                          ******************************** */}
                          <Card.Meta
                            style={{
                              height: "20px",
                              backgroundColor: "white",
                            }}
                          ></Card.Meta>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Card.Content>
                </Card>
              );
            })}
        </Segment>
      </Row>
      {/* **************************************** END HIDE OF THE id="expired-members" ******************************** */}{" "}
      {/* **************************************** START HIDE OF THE id="decending-members" ******************************** */}
      {/*  */}
      <Row id="decending-members">
        <h2 className="ra-title">
          <span className="span">D</span>
          ecending <span className="span">O</span>rder
        </h2>
        <p className="dividing-line"></p>
        <br></br>
        <input
          type="text"
          placeholder="Search First or Last Name"
          style={{ marginLeft: "25%", marginRight: "25%", width: "50%" }}
          onChange={(event) => {
            setSearchTermThree(event.target.value);
          }}
        ></input>
        <Segment
          style={{
            overflow: "auto",
            maxHeight: "605px",
            width: "100%",
          }}
        >
          {Object.keys(decendingList)
            .filter((act) => {
              if (searchTermThree == "") {
                return act;
              } else if (
                decendingList[act].first_name
                  .toLowerCase()
                  .includes(searchTermThree.toLowerCase()) ||
                decendingList[act].last_name
                  .toLowerCase()
                  .includes(searchTermThree.toLowerCase())
              ) {
                return act;
              }
            })
            .map((act, i) => {
              let joindate1 = new Date(decendingList[act].dateJoined)
                .toUTCString()
                .split(" ")
                .slice(1, 4)
                .join(" ");
              let expiredate = new Date(decendingList[act].expiring)
                .toUTCString()
                .split(" ")
                .slice(1, 4)
                .join(" ");
              return (
                <Card
                  style={{
                    width: "100%",
                    boxShadow: "0px 0px 5px 3px rgb(60, 60, 60)",
                    backgroundColor: "white",
                    borderRadius: "10px",
                  }}
                >
                  <Card.Content>
                    <Grid divided="vertically">
                      <Grid.Row columns={3}>
                        <Grid.Column style={{ paddingLeft: "25px" }}>
                          <h2 style={{ color: "black" }}>
                            <div onClick={ShowCustomerDetails}>
                              {" "}
                              {decendingList[act].first_name}{" "}
                              {decendingList[act].last_name}
                            </div>
                            {/* <Link
                              style={{ color: "black" }}
                              to={`/executiveAccount/${decendingList[act].id}`}
                            >
                              {decendingList[act].first_name}{" "}
                              {decendingList[act].last_name}
                            </Link> */}
                          </h2>
                          <Card.Meta>
                            {" "}
                            Suffix: {" " + decendingList[act].suffix}
                          </Card.Meta>
                          <Card.Meta style={{ color: "black" }}>
                            {" "}
                            <Icon name="target" />
                            {" " + decendingList[act].preferredStore}
                          </Card.Meta>
                          <Card.Meta>
                            {" "}
                            <Icon name="birthday cake" />{" "}
                            {" " + decendingList[act].DOB}
                          </Card.Meta>
                          <Card.Meta style={{ color: "black" }}>
                            {" "}
                            <Icon name="phone" /> {decendingList[act].phone}
                          </Card.Meta>
                          <Card.Meta>
                            {" "}
                            <Icon name="mail" />
                            {" " + decendingList[act].email}
                          </Card.Meta>
                          <Card.Meta style={{ color: "black" }}>
                            {" "}
                            <Icon name="home" /> {decendingList[act].address}
                          </Card.Meta>
                          <br></br>
                        </Grid.Column>
                        <Grid.Column>
                          <h3 style={{ color: "black" }}>Membership Status</h3>
                          <Card.Meta>
                            {" "}
                            Member Number: {decendingList[act].number}
                          </Card.Meta>
                          <Card.Meta style={{ color: "black" }}>
                            {" "}
                            Card Status: {decendingList[act].card}
                          </Card.Meta>
                          <Card.Meta>
                            {" "}
                            Initial Contact: {decendingList[act].acknowledged}
                          </Card.Meta>

                          <select
                            onChange={(i) => {
                              setNewCardStatus(i.target.value);
                            }}
                            style={{
                              height: "35px",
                              width: "50%",
                              backgroundColor: "lightGrey",
                              borderRadius: "5px",
                              border: "none",
                            }}
                          >
                            <option>Choose Card Status</option>
                            <option value="pending">Pending</option>
                            <option value="Yes Card">Yes Card</option>
                            <option value="Card Ordered">Card Ordered</option>
                            <option value="Card Expired">Card Expired</option>
                          </select>
                          <Button
                            style={{ margin: "10px" }}
                            size="mini"
                            color="black"
                            onClick={() => {
                              ChangeCard(decendingList[act].id);
                            }}
                          >
                            Change Card
                          </Button>
                          {/* 
                            ACCOUNT CONTROLS SECTION
                     */}
                          <Card.Description>
                            {" "}
                            Date Joined: {joindate1}
                          </Card.Description>
                          <Card.Description>
                            {" "}
                            Date Expiring: {expiredate}
                          </Card.Description>
                        </Grid.Column>
                        {/* **********************
                          
                          START OF THE MODALS
                          
                          ******************************** */}
                        <Grid.Column>
                          <h3 style={{ color: "black" }}>Account Controls</h3>
                          <Modal
                            style={{
                              marginLeft: "25%",
                              marginTop: "10%",
                            }}
                            basic
                            onClose={() => setOpenControlsEdit(false)}
                            onOpen={() => setOpenControlsEdit(true)}
                            open={openControlsEdit[act]}
                            size="small"
                            trigger={
                              <Button color="green" inverted>
                                Edit Account
                              </Button>
                            }
                          >
                            <Header icon>
                              <Icon name="edit" />
                              {/* ARE YOU SURE YOU WANT TO */}
                              EDIT {decendingList[act].first_name.toUpperCase()}
                              'S ACCOUNT
                            </Header>
                            {/* 
                              START EDIT DETAILS 
                              */}
                            <Header>Member ID</Header>
                            <input
                              onChange={(o) => {
                                setNewMemId(o.target.value);
                              }}
                              placeholder="1234"
                              style={{
                                height: "30px",
                                width: "300px",
                                margin: "20px",
                              }}
                            ></input>

                            <Button
                              size="mini"
                              color="red"
                              inverted
                              onClick={() => {
                                ChangeMemId(decendingList[act].id);
                              }}
                            >
                              Change ID
                            </Button>
                            <Header>Membership Expiration Date</Header>
                            <input
                              onChange={(o) => {
                                setMembershipDate(o.target.value);
                              }}
                              placeholder="2020-10-27 12:18:35"
                              style={{
                                height: "30px",
                                width: "300px",
                                margin: "20px",
                              }}
                            ></input>

                            <Button
                              size="mini"
                              color="red"
                              inverted
                              onClick={() => {
                                ChangeMembershipDate(decendingList[act].id);
                              }}
                            >
                              Change Expiring Date
                            </Button>
                            {/* 
                              END EDIT DETAILS 
                              */}
                            <Modal.Actions>
                              {/* <a href="/allMembers"> */}
                              <Button
                                color="green"
                                inverted
                                onClick={() => setOpenControlsEdit(false)}
                              >
                                <Icon name="checkmark" /> Done
                              </Button>
                              {/* </a> */}
                            </Modal.Actions>
                          </Modal>
                          <Card.Meta
                            style={{
                              height: "20px",
                              backgroundColor: "white",
                            }}
                          ></Card.Meta>
                          <Modal
                            style={{
                              marginLeft: "25%",
                              marginTop: "10%",
                            }}
                            basic
                            onClose={() => setOpenControlsRenew(false)}
                            onOpen={() => setOpenControlsRenew(true)}
                            open={openControlsRenew[act]}
                            size="small"
                            trigger={
                              <Button color="yellow" inverted>
                                Renew Membership
                              </Button>
                            }
                          >
                            <Header icon>
                              <Icon name="redo" />
                              RENEW{" "}
                              {decendingList[act].first_name.toUpperCase()}
                              'S MEMBERSHIP?
                            </Header>
                            <Modal.Content>
                              <p>
                                Renewing this account will change the card
                                status to "pending" and initial contact to "no"
                                and will change the renewal date starting today.
                              </p>
                            </Modal.Content>

                            <Modal.Actions>
                              {/* <a href="/allMembers"> */}
                              <Button
                                basic
                                color="red"
                                inverted
                                onClick={() => {
                                  ChangeRenewal(decendingList[act].id);
                                }}
                              >
                                <Icon name="remove" /> Yes, Renew Membership
                              </Button>
                              {/* </a> */}
                              {/* <a href="/allMembers"> */}
                              <Button
                                color="green"
                                inverted
                                onClick={() => setOpenControlsRenew(false)}
                              >
                                <Icon name="checkmark" /> No, Let Expire
                              </Button>
                              {/* </a> */}
                            </Modal.Actions>
                          </Modal>
                          {/* **********************

                          END OF THE MODALS
                          
                          ******************************** */}
                          <Card.Meta
                            style={{
                              height: "20px",
                              backgroundColor: "white",
                            }}
                          ></Card.Meta>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Card.Content>
                </Card>
              );
            })}
        </Segment>
      </Row>
      {/* **************************************** END HIDE OF THE id="decending-members" ******************************** */}
      {/* **************************************** START HIDE OF THE id="decending-members" ******************************** */}
      <Row id="customer-portal-page">
        <h2 className="ra-title">
          <span className="span">C</span>
          ustomer <span className="span">P</span>age
        </h2>
        <p className="dividing-line"></p>
        <br></br>
        <Button onClick={ShowAllMembers}>Back</Button>
      </Row>
      {/* **************************************** END HIDE OF THE id="decending-members" ******************************** */}
      {/* ************************************ END HIDE WHEN A STAT MENU IS CLICKED **************************************** */}
      {/*  */}
      {/* ************************************************* END THE BREAK FOR THE LIST OF CUSTOMER ************************************************* */}
    </div>
  );
}

export default MembersDashboard;
