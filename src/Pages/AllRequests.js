import React, { useEffect, useState } from "react";
// import API from "../../utils/API";
import {
  Card,
  Table,
  Button,
  Dropdown,
  Menu,
  Input,
  Icon,
  Form,
  Modal,
  Segment,
  Grid,
} from "semantic-ui-react";
import { Link, useParams } from "react-router-dom";
import Axios from "axios"; 
import "./CSS/AllRequests.css";

// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";

function AllRequests(props) {
  const userId = props.id;

  const [requestList, setRequestList] = useState("");
  const [pendingRequests, setPendingRquests] = useState("");
  const [onholdRequest, setOnholdRequest] = useState("");
  const [backorderRequest, setBackorderRequest] = useState("");
  const [orderedRequest, setOrderedRequest] = useState("");
  const [completedRequest, setCompletedRequest] = useState("");
  const [canceledRequest, setCanceledRequest] = useState("");
  const [offeredRequest, setOfferedRequest] = useState("");
  const [category, setCategory] = useState("");
  const [item, setItem] = useState("");
  const [brand, setBrand] = useState("");
  const [quantity, setQuantity] = useState("");
  const [status, setStatus] = useState("");
  const [newStatus, setNewStatus] = useState("");
  const [sku, setSku] = useState("");
  const [note, setNote] = useState("");
  const [newNote, setNewNote] = useState("");
  const [newSource, setNewSource] = useState("");
  const [memberName, setMemberName] = useState("");
  const [searchTermFour, setSearchTermFour] = useState("");
  const [searchTermFive, setSearchTermFive] = useState("");

  const [mostRecent, setMostRecent] = useState("");
  const noteHeader = "Request Note";
  const rNoteName = requestList.memberName;

  const [searchTerm, setSearchTerm] = useState("");
  const [searchTerm2, setSearchTerm2] = useState("");
  const [searchTerm3, setSearchTerm3] = useState("");
  const [searchTerm4, setSearchTerm4] = useState("");
  const [searchTerm5, setSearchTerm5] = useState("");
  const [searchTerm6, setSearchTerm6] = useState("");
  const [searchTerm7, setSearchTerm7] = useState("");

  const [openThree, setOpenThree] = React.useState(false);
  const [openFour, setOpenFour] = React.useState(false);
  const [openFive, setOpenFive] = React.useState(false);
  const [openSix, setOpenSix] = React.useState(false);
  const [openSeven, setOpenSeven] = React.useState(false);
  const [openEight, setOpenEight] = React.useState(false);
  const [openNine, setOpenNine] = React.useState(false);

  const { id } = useParams();

  //GET ALL ACTIVE REQUESTS
  const GetAllRequests = () => {
    Axios.get("https://executive-app.herokuapp.com/allRequests").then(
      (response) => {
        // Axios.get("http://localhost:3001/allRequests").then((response) => {
        setRequestList(response.data);
      }
    );
  };
  //GET PENDING REQUESTS
  const GetPendingRequests = () => {
    Axios.get("https://executive-app.herokuapp.com/pendingRequests").then(
      (response) => {
        // Axios.get("http://localhost:3001/pendingRequests").then((response) => {
        setPendingRquests(response.data);
        // console.log(response.data);
      }
    );
  };
  //GET ON HOLD REQUESTS
  const GetOnholdRequests = () => {
    Axios.get("https://executive-app.herokuapp.com/onholdRequests").then(
      (response) => {
        // Axios.get("http://localhost:3001/onholdRequests").then((response) => {
        setOnholdRequest(response.data);
        // console.log(response.data);
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
  //GET ORDERED REQUESTS
  const GetOrderedRequests = () => {
    Axios.get("https://executive-app.herokuapp.com/orderedRequests").then(
      (response) => {
        // Axios.get("http://localhost:3001/orderedRequests").then((response) => {
        setOrderedRequest(response.data);
        // console.log(response.data);
      }
    );
  };
  //GET COMPLETED REQUESTS
  const GetCompletedRequests = () => {
    Axios.get("https://executive-app.herokuapp.com/completedRequests").then(
      (response) => {
        // Axios.get("http://localhost:3001/completedRequests").then((response) => {
        setCompletedRequest(response.data);
        // console.log(response.data);
      }
    );
  };
  //GET CANCELED REQUESTS
  const GetCanceledRequests = () => {
    Axios.get("https://executive-app.herokuapp.com/canceledRequests").then(
      (response) => {
        // Axios.get("http://localhost:3001/canceledRequests").then((response) => {
        setCanceledRequest(response.data);
        // console.log(response.data);
      }
    );
  };
  //GET OFFERED REQUESTS
  const GetOfferedRequests = () => {
    Axios.get("https://executive-app.herokuapp.com/offeredRequests").then(
      (response) => {
        // Axios.get("http://localhost:3001/offeredRequests").then((response) => {
        setOfferedRequest(response.data);
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
    });
  };
  //UPDATE REQUEST NOTE
  const updateNote = (id) => {
    Axios.put("https://executive-app.herokuapp.com/noteUpdate", {
      // Axios.put("http://localhost:3001/noteUpdate", {
      note: newNote,
      id: id,
    }).then((response) => {
      // DateChange();
      GetAllRequests();
      // requestNote(id);
      // console.log("this is the id " + id);
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
    });
  };
  //****** DISALBED TILL FURTHER NOTICE  ******/
  //SUBMIT REQUEST NOTE TO THE DASHBOARD NOTES
  // const requestNote = (id) => {
  //   // Axios.post("https://executive-app.herokuapp.com/newDashboardNote", {
  //   Axios.post("http://localhost:3001/requestNote", {
  //     note: newNote,
  //     memberName: rNoteName,
  //     noteHeader: noteHeader,
  //     id: id,
  //   }).then(() => {});
  // };

  useEffect(() => {
    GetAllRequests();
    GetPendingRequests();
    GetOnholdRequests();
    GetBackorderedRequests();
    GetOrderedRequests();
    GetCompletedRequests();
    GetCanceledRequests();
    GetOfferedRequests();
  }, []);

  return (
    <div>
      {/* <Header /> */}
      <div
        className="newMembers"
        style={{ padding: "1%", width: "100%", backgroundColor: "#F3F3FC" }}
      >
        <Card fluid style={{ marginRight: "10px", height: "1300px" }}>
          <Card.Content>
            <Card.Header>All Active Requests</Card.Header>
            <p style={{ marginLeft: "25px" }}>
              Total Requests: {requestList.length}
            </p>
            <input
              type="text"
              placeholder="Search Name, Category, Brand, Sku, Item, Status, or Note"
              style={{ width: "400px", height: "30px" }}
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            ></input>
            {/* START OF THE PENDING MODAL */}
            <span style={{ position: "relative", float: "right" }}>
              {/* THIS IS WHERE THE ACTIVE ONLY MEMBERS MODAL STARTS */}
              <Modal
                onClose={() => setOpenThree(false)}
                onOpen={() => setOpenThree(true)}
                // onClick={() => GetExpired}
                open={openThree}
                trigger={<Button color="violet">Pending</Button>}
                style={{
                  width: "100%",
                  height: "700px",
                  width: "1500px",
                  left: "5%",
                  top: "10%",
                }}
              >
                <Modal.Header>Pending Requests</Modal.Header> {""}
                <p style={{ marginLeft: "25px" }}>
                  Total Pending Requests: {pendingRequests.length}
                </p>
                <Input
                  type="text"
                  placeholder="Search First, Last, Phone, or Email"
                  style={{ width: "250px", height: "30px", marginLeft: "2%" }}
                  onChange={(event) => {
                    setSearchTerm2(event.target.value);
                  }}
                ></Input>
                <Card.Content
                  style={{
                    overflowY: "scroll",
                    height: "500px",
                  }}
                >
                  <Table celled striped color="violet">
                    <Table.Header>
                      <Table.Row>
                        <Table.HeaderCell>Request #</Table.HeaderCell>
                        <Table.HeaderCell>Member Name</Table.HeaderCell>
                        <Table.HeaderCell>Category</Table.HeaderCell>
                        <Table.HeaderCell>Brand</Table.HeaderCell>
                        <Table.HeaderCell>Sku</Table.HeaderCell>
                        <Table.HeaderCell>Item</Table.HeaderCell>
                        <Table.HeaderCell>Qty</Table.HeaderCell>
                        <Table.HeaderCell>Status</Table.HeaderCell>
                        <Table.HeaderCell>Change Status</Table.HeaderCell>
                        <Table.HeaderCell>Note</Table.HeaderCell>
                        <Table.HeaderCell>Source</Table.HeaderCell>
                        <Table.HeaderCell>Edit Note</Table.HeaderCell>
                        <Table.HeaderCell>Update Source</Table.HeaderCell>
                        <Table.HeaderCell>Date Created</Table.HeaderCell>
                        <Table.HeaderCell>Date Updated</Table.HeaderCell>
                      </Table.Row>
                    </Table.Header>
                    <Table.Body>
                      {Object.keys(pendingRequests)
                        .filter((pending) => {
                          if (searchTerm2 == "") {
                            return pending;
                          } else if (
                            pendingRequests[pending].status
                              .toLowerCase()
                              .includes(searchTerm2.toLowerCase()) ||
                            pendingRequests[pending].category
                              .toLowerCase()
                              .includes(searchTerm2.toLowerCase()) ||
                            // ) {
                            //   return request;
                            // } else if (
                            pendingRequests[pending].sku
                              .toLowerCase()
                              .includes(searchTerm2.toLowerCase()) ||
                            pendingRequests[pending].memberName
                              .toLowerCase()
                              .includes(searchTerm2.toLowerCase()) ||
                            pendingRequests[pending].brand
                              .toLowerCase()
                              .includes(searchTerm2.toLowerCase()) ||
                            pendingRequests[pending].note
                              .toLowerCase()
                              .includes(searchTerm2.toLowerCase()) ||
                            pendingRequests[pending].item
                              .toLowerCase()
                              .includes(searchTerm2.toLowerCase())
                            //****** SEARCH SOURCE *****/
                            //   ||
                            // requestList[request].source
                            //   .toLowerCase()
                            //   .includes(searchTerm2.toLowerCase())
                          ) {
                            return pending;
                          }
                        })
                        .map((pending, i) => {
                          let pendingCreated = new Date(
                            pendingRequests[pending].date_created
                          )

                            .toUTCString()
                            .split(" ")
                            .slice(1, 4)
                            .join(" ");
                          let pendingUpdated = new Date(
                            pendingRequests[pending].date_updated
                          )

                            .toUTCString()
                            .split(" ")
                            .slice(1, 4)
                            .join(" ");
                          return (
                            <Table.Row
                              style={{ overflowY: "scroll" }}
                              key={pending.id}
                            >
                              <Table.Cell>
                                {pendingRequests[pending].id}
                              </Table.Cell>
                              <Table.Cell>
                                {pendingRequests[pending].memberName}
                              </Table.Cell>
                              <Table.Cell>
                                {/* <Link
                          style={{ color: "black" }}
                          to={`/executiveAccount/${pendingRequests[pending].id}`}
                        > */}
                                {pendingRequests[pending].category}
                                {/* </Link> */}
                              </Table.Cell>

                              <Table.Cell>
                                {pendingRequests[pending].brand}
                              </Table.Cell>
                              <Table.Cell>
                                {pendingRequests[pending].sku}
                              </Table.Cell>
                              <Table.Cell>
                                {pendingRequests[pending].item}
                              </Table.Cell>
                              <Table.Cell>
                                {pendingRequests[pending].quantity}
                              </Table.Cell>

                              <Table.Cell>
                                {" "}
                                {pendingRequests[pending].status}
                              </Table.Cell>
                              <Table.Cell>
                                <Form.Group
                                  style={{
                                    backgroundColor: "none",
                                    border: "none",
                                  }}
                                >
                                  <select
                                    onChange={(e) => {
                                      setNewStatus(
                                        e.target.value.toUpperCase()
                                      );
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
                                    <option value="Back Order">
                                      Back Order
                                    </option>
                                    <option value="Ordered">Ordered</option>
                                    <option value="Completed">Completed</option>
                                    <option value="Canceled">Canceled</option>
                                    <option value="Offered">Offered</option>
                                  </select>
                                  <Button
                                    onClick={() => {
                                      updateStatus(pendingRequests[pending].id);
                                    }}
                                    style={{
                                      width: "100%",
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
                                </Form.Group>{" "}
                              </Table.Cell>
                              <Table.Cell>
                                {pendingRequests[pending].note}
                              </Table.Cell>
                              <Table.Cell>
                                {pendingRequests[pending].source}
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
                                    updateNote(pendingRequests[pending].id);
                                  }}
                                  style={{
                                    marginLeft: "20px",
                                    color: "white",
                                    backgroundColor: "black",
                                  }}
                                >
                                  Update
                                  <Icon name="edit outline"></Icon>
                                </Button>
                              </Table.Cell>
                              {/* <Table.Cell>{pendingRequests[pending].source}</Table.Cell> */}
                              <Table.Cell>
                                <textarea
                                  onChange={(e) => {
                                    setNewSource(e.target.value);
                                  }}
                                  placeholder="Update Source"
                                ></textarea>
                                <Button
                                  type="reset"
                                  onClick={() => {
                                    updateSource(pendingRequests[pending].id);
                                  }}
                                  style={{
                                    marginLeft: "20px",
                                    color: "white",
                                    backgroundColor: "black",
                                  }}
                                >
                                  Update
                                  <Icon name="edit outline"></Icon>
                                </Button>
                              </Table.Cell>
                              <Table.Cell>{pendingCreated}</Table.Cell>
                              <Table.Cell> {pendingUpdated}</Table.Cell>
                            </Table.Row>
                          );
                        })}
                    </Table.Body>
                  </Table>
                </Card.Content>
                <Modal.Content style={{ float: "center" }}></Modal.Content>
                <Modal.Actions>
                  <Button color="black" onClick={() => setOpenThree(false)}>
                    Done
                  </Button>
                  {/* <Button
                    content="Submit Change"
                    labelPosition="right"
                    icon="checkmark"
                    onClick={() => setOpen(false)}
                    positive
                  /> */}
                </Modal.Actions>
              </Modal>
            </span>
            {/* END OF THE PENDING MODAL */}
            {/* START OF ON HOLD MODAL */}
            <span style={{ position: "relative", float: "right" }}>
              {/* THIS IS WHERE THE ACTIVE ONLY MEMBERS MODAL STARTS */}
              <Modal
                onClose={() => setOpenFour(false)}
                onOpen={() => setOpenFour(true)}
                // onClick={() => GetExpired}
                open={openFour}
                trigger={<Button color="orange">On Hold</Button>}
                style={{
                  width: "100%",
                  height: "700px",
                  width: "1500px",
                  left: "5%",
                  top: "10%",
                }}
              >
                <Modal.Header>On Hold Requests</Modal.Header> {""}
                <p style={{ marginLeft: "25px" }}>
                  Total On Hold Requests: {onholdRequest.length}
                </p>
                <Input
                  type="text"
                  placeholder="Search First, Last, Phone, or Email"
                  style={{ width: "250px", height: "30px", marginLeft: "2%" }}
                  onChange={(event) => {
                    setSearchTerm3(event.target.value);
                  }}
                ></Input>
                <Card.Content
                  style={{
                    overflowY: "scroll",
                    height: "500px",
                  }}
                >
                  <Table celled striped color="orange">
                    <Table.Header>
                      <Table.Row>
                        <Table.HeaderCell>Request #</Table.HeaderCell>
                        <Table.HeaderCell>Member Name</Table.HeaderCell>
                        <Table.HeaderCell>Category</Table.HeaderCell>
                        <Table.HeaderCell>Brand</Table.HeaderCell>
                        <Table.HeaderCell>Sku</Table.HeaderCell>
                        <Table.HeaderCell>Item</Table.HeaderCell>
                        <Table.HeaderCell>Qty</Table.HeaderCell>
                        <Table.HeaderCell>Status</Table.HeaderCell>
                        <Table.HeaderCell>Change Status</Table.HeaderCell>
                        <Table.HeaderCell>Note</Table.HeaderCell>
                        <Table.HeaderCell>Source</Table.HeaderCell>
                        <Table.HeaderCell>Edit Note</Table.HeaderCell>
                        <Table.HeaderCell>Update Source</Table.HeaderCell>
                        <Table.HeaderCell>Date Created</Table.HeaderCell>
                        <Table.HeaderCell>Date Updated</Table.HeaderCell>
                      </Table.Row>
                    </Table.Header>
                    <Table.Body>
                      {Object.keys(onholdRequest)
                        .filter((hold) => {
                          if (searchTerm3 == "") {
                            return hold;
                          } else if (
                            onholdRequest[hold].status
                              .toLowerCase()
                              .includes(searchTerm3.toLowerCase()) ||
                            onholdRequest[hold].category
                              .toLowerCase()
                              .includes(searchTerm3.toLowerCase()) ||
                            // ) {
                            //   return request;
                            // } else if (
                            onholdRequest[hold].sku
                              .toLowerCase()
                              .includes(searchTerm3.toLowerCase()) ||
                            onholdRequest[hold].memberName
                              .toLowerCase()
                              .includes(searchTerm3.toLowerCase()) ||
                            onholdRequest[hold].brand
                              .toLowerCase()
                              .includes(searchTerm3.toLowerCase()) ||
                            onholdRequest[hold].note
                              .toLowerCase()
                              .includes(searchTerm3.toLowerCase()) ||
                            onholdRequest[hold].item
                              .toLowerCase()
                              .includes(searchTerm3.toLowerCase())
                            //****** SEARCH SOURCE *****/
                            //   ||
                            // requestList[request].source
                            //   .toLowerCase()
                            //   .includes(searchTerm3.toLowerCase())
                          ) {
                            return hold;
                          }
                        })
                        .map((hold, i) => {
                          let holdCreated = new Date(
                            onholdRequest[hold].date_created
                          )

                            .toUTCString()
                            .split(" ")
                            .slice(1, 4)
                            .join(" ");
                          let holdUpdated = new Date(
                            onholdRequest[hold].date_updated
                          )

                            .toUTCString()
                            .split(" ")
                            .slice(1, 4)
                            .join(" ");
                          return (
                            <Table.Row
                              style={{ overflowY: "scroll" }}
                              key={hold.id}
                            >
                              <Table.Cell>{onholdRequest[hold].id}</Table.Cell>
                              <Table.Cell>
                                {onholdRequest[hold].memberName}
                              </Table.Cell>
                              <Table.Cell>
                                {/* <Link
                          style={{ color: "black" }}
                          to={`/executiveAccount/${onholdRequest[hold].id}`}
                        > */}
                                {onholdRequest[hold].category}
                                {/* </Link> */}
                              </Table.Cell>

                              <Table.Cell>
                                {onholdRequest[hold].brand}
                              </Table.Cell>
                              <Table.Cell>{onholdRequest[hold].sku}</Table.Cell>
                              <Table.Cell>
                                {onholdRequest[hold].item}
                              </Table.Cell>
                              <Table.Cell>
                                {onholdRequest[hold].quantity}
                              </Table.Cell>

                              <Table.Cell>
                                {" "}
                                {onholdRequest[hold].status}
                              </Table.Cell>
                              <Table.Cell>
                                <Form.Group
                                  style={{
                                    backgroundColor: "none",
                                    border: "none",
                                  }}
                                >
                                  <select
                                    onChange={(e) => {
                                      setNewStatus(
                                        e.target.value.toUpperCase()
                                      );
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
                                    <option value="Back Order">
                                      Back Order
                                    </option>
                                    <option value="Ordered">Ordered</option>
                                    <option value="Completed">Completed</option>
                                    <option value="Canceled">Canceled</option>
                                    <option value="Offered">Offered</option>
                                  </select>
                                  <Button
                                    onClick={() => {
                                      updateStatus(onholdRequest[hold].id);
                                    }}
                                    style={{
                                      width: "100%",
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
                                </Form.Group>{" "}
                              </Table.Cell>
                              <Table.Cell>
                                {onholdRequest[hold].note}
                              </Table.Cell>
                              <Table.Cell>
                                {onholdRequest[hold].source}
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
                                    updateNote(onholdRequest[hold].id);
                                  }}
                                  style={{
                                    marginLeft: "20px",
                                    color: "white",
                                    backgroundColor: "black",
                                  }}
                                >
                                  Update
                                  <Icon name="edit outline"></Icon>
                                </Button>
                              </Table.Cell>
                              {/* <Table.Cell>{onholdRequest[hold].source}</Table.Cell> */}
                              <Table.Cell>
                                <textarea
                                  onChange={(e) => {
                                    setNewSource(e.target.value);
                                  }}
                                  placeholder="Update Source"
                                ></textarea>
                                <Button
                                  type="reset"
                                  onClick={() => {
                                    updateSource(onholdRequest[hold].id);
                                  }}
                                  style={{
                                    marginLeft: "20px",
                                    color: "white",
                                    backgroundColor: "black",
                                  }}
                                >
                                  Update
                                  <Icon name="edit outline"></Icon>
                                </Button>
                              </Table.Cell>
                              <Table.Cell>{holdCreated}</Table.Cell>
                              <Table.Cell> {holdUpdated}</Table.Cell>
                            </Table.Row>
                          );
                        })}
                    </Table.Body>
                  </Table>
                </Card.Content>
                <Modal.Content style={{ float: "center" }}></Modal.Content>
                <Modal.Actions>
                  <Button color="black" onClick={() => setOpenFour(false)}>
                    Done
                  </Button>
                  {/* <Button
                    content="Submit Change"
                    labelPosition="right"
                    icon="checkmark"
                    onClick={() => setOpen(false)}
                    positive
                  /> */}
                </Modal.Actions>
              </Modal>
            </span>
            {/* END OF ON HOLD MODAL */}
            {/* START OF THE  BACK ORDER MODAL*/}
            <span style={{ position: "relative", float: "right" }}>
              {/* THIS IS WHERE THE ACTIVE ONLY MEMBERS MODAL STARTS */}
              <Modal
                onClose={() => setOpenFive(false)}
                onOpen={() => setOpenFive(true)}
                // onClick={() => GetExpired}
                open={openFive}
                trigger={<Button color="yellow">Back Ordered</Button>}
                style={{
                  width: "100%",
                  height: "700px",
                  width: "1500px",
                  left: "5%",
                  top: "10%",
                }}
              >
                <Modal.Header>Back Ordered Requests</Modal.Header> {""}
                <p style={{ marginLeft: "25px" }}>
                  Total Back Ordered Requests: {backorderRequest.length}
                </p>
                <Input
                  type="text"
                  placeholder="Search First, Last, Phone, or Email"
                  style={{ width: "250px", height: "30px", marginLeft: "2%" }}
                  onChange={(event) => {
                    setSearchTerm4(event.target.value);
                  }}
                ></Input>
                <Card.Content
                  style={{
                    overflowY: "scroll",
                    height: "500px",
                  }}
                >
                  <Table celled striped color="yellow">
                    <Table.Header>
                      <Table.Row>
                        <Table.HeaderCell>Request #</Table.HeaderCell>
                        <Table.HeaderCell>Member Name</Table.HeaderCell>
                        <Table.HeaderCell>Category</Table.HeaderCell>
                        <Table.HeaderCell>Brand</Table.HeaderCell>
                        <Table.HeaderCell>Sku</Table.HeaderCell>
                        <Table.HeaderCell>Item</Table.HeaderCell>
                        <Table.HeaderCell>Qty</Table.HeaderCell>
                        <Table.HeaderCell>Status</Table.HeaderCell>
                        <Table.HeaderCell>Change Status</Table.HeaderCell>
                        <Table.HeaderCell>Note</Table.HeaderCell>
                        <Table.HeaderCell>Source</Table.HeaderCell>
                        <Table.HeaderCell>Edit Note</Table.HeaderCell>
                        <Table.HeaderCell>Update Source</Table.HeaderCell>
                        <Table.HeaderCell>Date Created</Table.HeaderCell>
                        <Table.HeaderCell>Date Updated</Table.HeaderCell>
                      </Table.Row>
                    </Table.Header>
                    <Table.Body>
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
                            // ) {
                            //   return request;
                            // } else if (
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
                            //****** SEARCH SOURCE *****/
                            //   ||
                            // requestList[request].source
                            //   .toLowerCase()
                            //   .includes(searchTerm4.toLowerCase())
                          ) {
                            return back;
                          }
                        })
                        .map((back, i) => {
                          let backCreated = new Date(
                            backorderRequest[back].date_created
                          )

                            .toUTCString()
                            .split(" ")
                            .slice(1, 4)
                            .join(" ");
                          let backUpdated = new Date(
                            backorderRequest[back].date_updated
                          )

                            .toUTCString()
                            .split(" ")
                            .slice(1, 4)
                            .join(" ");
                          return (
                            <Table.Row
                              style={{ overflowY: "scroll" }}
                              key={back.id}
                            >
                              <Table.Cell>
                                {backorderRequest[back].id}
                              </Table.Cell>
                              <Table.Cell>
                                {backorderRequest[back].memberName}
                              </Table.Cell>
                              <Table.Cell>
                                {/* <Link
                          style={{ color: "black" }}
                          to={`/executiveAccount/${backorderRequest[back].id}`}
                        > */}
                                {backorderRequest[back].category}
                                {/* </Link> */}
                              </Table.Cell>

                              <Table.Cell>
                                {backorderRequest[back].brand}
                              </Table.Cell>
                              <Table.Cell>
                                {backorderRequest[back].sku}
                              </Table.Cell>
                              <Table.Cell>
                                {backorderRequest[back].item}
                              </Table.Cell>
                              <Table.Cell>
                                {backorderRequest[back].quantity}
                              </Table.Cell>

                              <Table.Cell>
                                {" "}
                                {backorderRequest[back].status}
                              </Table.Cell>
                              <Table.Cell>
                                <Form.Group
                                  style={{
                                    backgroundColor: "none",
                                    border: "none",
                                  }}
                                >
                                  <select
                                    onChange={(e) => {
                                      setNewStatus(
                                        e.target.value.toUpperCase()
                                      );
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
                                    <option value="Back Order">
                                      Back Order
                                    </option>
                                    <option value="Ordered">Ordered</option>
                                    <option value="Completed">Completed</option>
                                    <option value="Canceled">Canceled</option>
                                    <option value="Offered">Offered</option>
                                  </select>
                                  <Button
                                    onClick={() => {
                                      updateStatus(backorderRequest[back].id);
                                    }}
                                    style={{
                                      width: "100%",
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
                                </Form.Group>{" "}
                              </Table.Cell>
                              <Table.Cell>
                                {backorderRequest[back].note}
                              </Table.Cell>
                              <Table.Cell>
                                {backorderRequest[back].source}
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
                                    updateNote(backorderRequest[back].id);
                                  }}
                                  style={{
                                    marginLeft: "20px",
                                    color: "white",
                                    backgroundColor: "black",
                                  }}
                                >
                                  Update
                                  <Icon name="edit outline"></Icon>
                                </Button>
                              </Table.Cell>
                              {/* <Table.Cell>{backorderRequest[back].source}</Table.Cell> */}
                              <Table.Cell>
                                <textarea
                                  onChange={(e) => {
                                    setNewSource(e.target.value);
                                  }}
                                  placeholder="Update Source"
                                ></textarea>
                                <Button
                                  type="reset"
                                  onClick={() => {
                                    updateSource(backorderRequest[back].id);
                                  }}
                                  style={{
                                    marginLeft: "20px",
                                    color: "white",
                                    backgroundColor: "black",
                                  }}
                                >
                                  Update
                                  <Icon name="edit outline"></Icon>
                                </Button>
                              </Table.Cell>
                              <Table.Cell>{backCreated}</Table.Cell>
                              <Table.Cell> {backUpdated}</Table.Cell>
                            </Table.Row>
                          );
                        })}
                    </Table.Body>
                  </Table>
                </Card.Content>
                <Modal.Content style={{ float: "center" }}></Modal.Content>
                <Modal.Actions>
                  <Button color="black" onClick={() => setOpenFive(false)}>
                    Done
                  </Button>
                  {/* <Button
                    content="Submit Change"
                    labelPosition="right"
                    icon="checkmark"
                    onClick={() => setOpen(false)}
                    positive
                  /> */}
                </Modal.Actions>
              </Modal>
            </span>
            {/* END BACK ORDER MODAL */}
            {/* START ORDERED REQUESTS*/}
            <span style={{ position: "relative", float: "right" }}>
              {/* THIS IS WHERE THE ACTIVE ONLY MEMBERS MODAL STARTS */}
              <Modal
                onClose={() => setOpenSix(false)}
                onOpen={() => setOpenSix(true)}
                // onClick={() => GetExpired}
                open={openSix}
                trigger={<Button color="pink">Ordered</Button>}
                style={{
                  width: "100%",
                  height: "700px",
                  width: "1500px",
                  left: "5%",
                  top: "10%",
                }}
              >
                <Modal.Header>Ordered Requests</Modal.Header> {""}
                <p style={{ marginLeft: "25px" }}>
                  Total Ordered Requests: {orderedRequest.length}
                </p>
                <Input
                  type="text"
                  placeholder="Search First, Last, Phone, or Email"
                  style={{ width: "250px", height: "30px", marginLeft: "2%" }}
                  onChange={(event) => {
                    setSearchTerm5(event.target.value);
                  }}
                ></Input>
                <Card.Content
                  style={{
                    overflowY: "scroll",
                    height: "500px",
                  }}
                >
                  <Table celled striped color="pink">
                    <Table.Header>
                      <Table.Row>
                        <Table.HeaderCell>Request #</Table.HeaderCell>
                        <Table.HeaderCell>Member Name</Table.HeaderCell>
                        <Table.HeaderCell>Category</Table.HeaderCell>
                        <Table.HeaderCell>Brand</Table.HeaderCell>
                        <Table.HeaderCell>Sku</Table.HeaderCell>
                        <Table.HeaderCell>Item</Table.HeaderCell>
                        <Table.HeaderCell>Qty</Table.HeaderCell>
                        <Table.HeaderCell>Status</Table.HeaderCell>
                        <Table.HeaderCell>Change Status</Table.HeaderCell>
                        <Table.HeaderCell>Note</Table.HeaderCell>
                        <Table.HeaderCell>Source</Table.HeaderCell>
                        <Table.HeaderCell>Edit Note</Table.HeaderCell>
                        <Table.HeaderCell>Update Source</Table.HeaderCell>
                        <Table.HeaderCell>Date Created</Table.HeaderCell>
                        <Table.HeaderCell>Date Updated</Table.HeaderCell>
                      </Table.Row>
                    </Table.Header>
                    <Table.Body>
                      {Object.keys(orderedRequest)
                        .filter((ordered) => {
                          if (searchTerm5 == "") {
                            return ordered;
                          } else if (
                            orderedRequest[ordered].status
                              .toLowerCase()
                              .includes(searchTerm5.toLowerCase()) ||
                            orderedRequest[ordered].category
                              .toLowerCase()
                              .includes(searchTerm5.toLowerCase()) ||
                            // ) {
                            //   return request;
                            // } else if (
                            orderedRequest[ordered].sku
                              .toLowerCase()
                              .includes(searchTerm5.toLowerCase()) ||
                            orderedRequest[ordered].memberName
                              .toLowerCase()
                              .includes(searchTerm5.toLowerCase()) ||
                            orderedRequest[ordered].brand
                              .toLowerCase()
                              .includes(searchTerm5.toLowerCase()) ||
                            orderedRequest[ordered].note
                              .toLowerCase()
                              .includes(searchTerm5.toLowerCase()) ||
                            orderedRequest[ordered].item
                              .toLowerCase()
                              .includes(searchTerm5.toLowerCase())
                            //****** SEARCH SOURCE *****/
                            //   ||
                            // requestList[request].source
                            //   .toLowerCase()
                            //   .includes(searchTerm5.toLowerCase())
                          ) {
                            return ordered;
                          }
                        })
                        .map((ordered, i) => {
                          let orderedCreated = new Date(
                            orderedRequest[ordered].date_created
                          )

                            .toUTCString()
                            .split(" ")
                            .slice(1, 4)
                            .join(" ");
                          let orderedUpdated = new Date(
                            orderedRequest[ordered].date_updated
                          )

                            .toUTCString()
                            .split(" ")
                            .slice(1, 4)
                            .join(" ");
                          return (
                            <Table.Row
                              style={{ overflowY: "scroll" }}
                              key={ordered.id}
                            >
                              <Table.Cell>
                                {orderedRequest[ordered].id}
                              </Table.Cell>
                              <Table.Cell>
                                {orderedRequest[ordered].memberName}
                              </Table.Cell>
                              <Table.Cell>
                                {/* <Link
                          style={{ color: "black" }}
                          to={`/executiveAccount/${orderedRequest[ordered].id}`}
                        > */}
                                {orderedRequest[ordered].category}
                                {/* </Link> */}
                              </Table.Cell>

                              <Table.Cell>
                                {orderedRequest[ordered].brand}
                              </Table.Cell>
                              <Table.Cell>
                                {orderedRequest[ordered].sku}
                              </Table.Cell>
                              <Table.Cell>
                                {orderedRequest[ordered].item}
                              </Table.Cell>
                              <Table.Cell>
                                {orderedRequest[ordered].quantity}
                              </Table.Cell>

                              <Table.Cell>
                                {" "}
                                {orderedRequest[ordered].status}
                              </Table.Cell>
                              <Table.Cell>
                                <Form.Group
                                  style={{
                                    backgroundColor: "none",
                                    border: "none",
                                  }}
                                >
                                  <select
                                    onChange={(e) => {
                                      setNewStatus(
                                        e.target.value.toUpperCase()
                                      );
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
                                    <option value="Back Order">
                                      Back Order
                                    </option>
                                    <option value="Ordered">Ordered</option>
                                    <option value="Completed">Completed</option>
                                    <option value="Canceled">Canceled</option>
                                    <option value="Offered">Offered</option>
                                  </select>
                                  <Button
                                    onClick={() => {
                                      updateStatus(orderedRequest[ordered].id);
                                    }}
                                    style={{
                                      width: "100%",
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
                                </Form.Group>{" "}
                              </Table.Cell>
                              <Table.Cell>
                                {orderedRequest[ordered].note}
                              </Table.Cell>
                              <Table.Cell>
                                {orderedRequest[ordered].source}
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
                                    updateNote(orderedRequest[ordered].id);
                                  }}
                                  style={{
                                    marginLeft: "20px",
                                    color: "white",
                                    backgroundColor: "black",
                                  }}
                                >
                                  Update
                                  <Icon name="edit outline"></Icon>
                                </Button>
                              </Table.Cell>
                              {/* <Table.Cell>{orderedRequest[ordered].source}</Table.Cell> */}
                              <Table.Cell>
                                <textarea
                                  onChange={(e) => {
                                    setNewSource(e.target.value);
                                  }}
                                  placeholder="Update Source"
                                ></textarea>
                                <Button
                                  type="reset"
                                  onClick={() => {
                                    updateSource(orderedRequest[ordered].id);
                                  }}
                                  style={{
                                    marginLeft: "20px",
                                    color: "white",
                                    backgroundColor: "black",
                                  }}
                                >
                                  Update
                                  <Icon name="edit outline"></Icon>
                                </Button>
                              </Table.Cell>
                              <Table.Cell>{orderedCreated}</Table.Cell>
                              <Table.Cell> {orderedUpdated}</Table.Cell>
                            </Table.Row>
                          );
                        })}
                    </Table.Body>
                  </Table>
                </Card.Content>
                <Modal.Content style={{ float: "center" }}></Modal.Content>
                <Modal.Actions>
                  <Button color="black" onClick={() => setOpenSix(false)}>
                    Done
                  </Button>
                  {/* <Button
                    content="Submit Change"
                    labelPosition="right"
                    icon="checkmark"
                    onClick={() => setOpen(false)}
                    positive
                  /> */}
                </Modal.Actions>
              </Modal>
            </span>
            {/* END ORDERED REQUESTS */}
            {/* START COMPLETED REQUESTS */}
            <span style={{ position: "relative", float: "right" }}>
              {/* THIS IS WHERE THE ACTIVE ONLY MEMBERS MODAL STARTS */}
              <Modal
                onClose={() => setOpenSeven(false)}
                onOpen={() => setOpenSeven(true)}
                // onClick={() => GetExpired}
                open={openSeven}
                trigger={<Button color="green">Completed</Button>}
                style={{
                  width: "100%",
                  height: "700px",
                  width: "1500px",
                  left: "5%",
                  top: "10%",
                }}
              >
                <Modal.Header>Completed Requests</Modal.Header> {""}
                <p style={{ marginLeft: "25px" }}>
                  Total Completed Requests: {completedRequest.length}
                </p>
                <Input
                  type="text"
                  placeholder="Search First, Last, Phone, or Email"
                  style={{ width: "250px", height: "30px", marginLeft: "2%" }}
                  onChange={(event) => {
                    setSearchTerm6(event.target.value);
                  }}
                ></Input>
                <Card.Content
                  style={{
                    overflowY: "scroll",
                    height: "500px",
                  }}
                >
                  <Table celled striped color="green">
                    <Table.Header>
                      <Table.Row>
                        <Table.HeaderCell>Request #</Table.HeaderCell>
                        <Table.HeaderCell>Member Name</Table.HeaderCell>
                        <Table.HeaderCell>Category</Table.HeaderCell>
                        <Table.HeaderCell>Brand</Table.HeaderCell>
                        <Table.HeaderCell>Sku</Table.HeaderCell>
                        <Table.HeaderCell>Item</Table.HeaderCell>
                        <Table.HeaderCell>Qty</Table.HeaderCell>
                        <Table.HeaderCell>Status</Table.HeaderCell>
                        <Table.HeaderCell>Change Status</Table.HeaderCell>
                        <Table.HeaderCell>Note</Table.HeaderCell>
                        <Table.HeaderCell>Source</Table.HeaderCell>
                        <Table.HeaderCell>Edit Note</Table.HeaderCell>
                        <Table.HeaderCell>Update Source</Table.HeaderCell>
                        <Table.HeaderCell>Date Created</Table.HeaderCell>
                        <Table.HeaderCell>Date Updated</Table.HeaderCell>
                      </Table.Row>
                    </Table.Header>
                    <Table.Body>
                      {Object.keys(completedRequest)
                        .filter((ordered) => {
                          if (searchTerm6 == "") {
                            return ordered;
                          } else if (
                            completedRequest[ordered].status
                              .toLowerCase()
                              .includes(searchTerm6.toLowerCase()) ||
                            completedRequest[ordered].category
                              .toLowerCase()
                              .includes(searchTerm6.toLowerCase()) ||
                            // ) {
                            //   return request;
                            // } else if (
                            completedRequest[ordered].sku
                              .toLowerCase()
                              .includes(searchTerm6.toLowerCase()) ||
                            completedRequest[ordered].memberName
                              .toLowerCase()
                              .includes(searchTerm6.toLowerCase()) ||
                            completedRequest[ordered].brand
                              .toLowerCase()
                              .includes(searchTerm6.toLowerCase()) ||
                            completedRequest[ordered].note
                              .toLowerCase()
                              .includes(searchTerm6.toLowerCase()) ||
                            completedRequest[ordered].item
                              .toLowerCase()
                              .includes(searchTerm6.toLowerCase())
                            //****** SEARCH SOURCE *****/
                            //   ||
                            // requestList[request].source
                            //   .toLowerCase()
                            //   .includes(searchTerm6.toLowerCase())
                          ) {
                            return ordered;
                          }
                        })
                        .map((ordered, i) => {
                          let completeCreated = new Date(
                            completedRequest[ordered].date_created
                          )

                            .toUTCString()
                            .split(" ")
                            .slice(1, 4)
                            .join(" ");
                          let completeUpdated = new Date(
                            completedRequest[ordered].date_updated
                          )

                            .toUTCString()
                            .split(" ")
                            .slice(1, 4)
                            .join(" ");
                          return (
                            <Table.Row
                              style={{ overflowY: "scroll" }}
                              key={ordered.id}
                            >
                              <Table.Cell>
                                {completedRequest[ordered].id}
                              </Table.Cell>
                              <Table.Cell>
                                {completedRequest[ordered].memberName}
                              </Table.Cell>
                              <Table.Cell>
                                {/* <Link
                          style={{ color: "black" }}
                          to={`/executiveAccount/${completedRequest[ordered].id}`}
                        > */}
                                {completedRequest[ordered].category}
                                {/* </Link> */}
                              </Table.Cell>

                              <Table.Cell>
                                {completedRequest[ordered].brand}
                              </Table.Cell>
                              <Table.Cell>
                                {completedRequest[ordered].sku}
                              </Table.Cell>
                              <Table.Cell>
                                {completedRequest[ordered].item}
                              </Table.Cell>
                              <Table.Cell>
                                {completedRequest[ordered].quantity}
                              </Table.Cell>

                              <Table.Cell>
                                {" "}
                                {completedRequest[ordered].status}
                              </Table.Cell>
                              <Table.Cell>
                                <Form.Group
                                  style={{
                                    backgroundColor: "none",
                                    border: "none",
                                  }}
                                >
                                  <select
                                    onChange={(e) => {
                                      setNewStatus(
                                        e.target.value.toUpperCase()
                                      );
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
                                    <option value="Back Order">
                                      Back Order
                                    </option>
                                    <option value="Ordered">Ordered</option>
                                    <option value="Completed">Completed</option>
                                    <option value="Canceled">Canceled</option>
                                    <option value="Offered">Offered</option>
                                  </select>
                                  <Button
                                    onClick={() => {
                                      updateStatus(
                                        completedRequest[ordered].id
                                      );
                                    }}
                                    style={{
                                      width: "100%",
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
                                </Form.Group>{" "}
                              </Table.Cell>
                              <Table.Cell>
                                {completedRequest[ordered].note}
                              </Table.Cell>
                              <Table.Cell>
                                {completedRequest[ordered].source}
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
                                    updateNote(completedRequest[ordered].id);
                                  }}
                                  style={{
                                    marginLeft: "20px",
                                    color: "white",
                                    backgroundColor: "black",
                                  }}
                                >
                                  Update
                                  <Icon name="edit outline"></Icon>
                                </Button>
                              </Table.Cell>
                              {/* <Table.Cell>{completedRequest[ordered].source}</Table.Cell> */}
                              <Table.Cell>
                                <textarea
                                  onChange={(e) => {
                                    setNewSource(e.target.value);
                                  }}
                                  placeholder="Update Source"
                                ></textarea>
                                <Button
                                  type="reset"
                                  onClick={() => {
                                    updateSource(completedRequest[ordered].id);
                                  }}
                                  style={{
                                    marginLeft: "20px",
                                    color: "white",
                                    backgroundColor: "black",
                                  }}
                                >
                                  Update
                                  <Icon name="edit outline"></Icon>
                                </Button>
                              </Table.Cell>
                              <Table.Cell>{completeCreated}</Table.Cell>
                              <Table.Cell> {completeUpdated}</Table.Cell>
                            </Table.Row>
                          );
                        })}
                    </Table.Body>
                  </Table>
                </Card.Content>
                <Modal.Content style={{ float: "center" }}></Modal.Content>
                <Modal.Actions>
                  <Button color="black" onClick={() => setOpenSeven(false)}>
                    Done
                  </Button>
                  {/* <Button
                    content="Submit Change"
                    labelPosition="right"
                    icon="checkmark"
                    onClick={() => setOpen(false)}
                    positive
                  /> */}
                </Modal.Actions>
              </Modal>
            </span>
            {/* END COMPLETED REQUESTS */}
            {/* START OFFERED REQUESTS */}
            <span style={{ position: "relative", float: "right" }}>
              {/* THIS IS WHERE THE ACTIVE ONLY MEMBERS MODAL STARTS */}
              <Modal
                onClose={() => setOpenNine(false)}
                onOpen={() => setOpenNine(true)}
                // onClick={() => GetExpired}
                open={openNine}
                trigger={<Button color="brown">Offered</Button>}
                style={{
                  width: "100%",
                  height: "700px",
                  width: "1500px",
                  left: "5%",
                  top: "10%",
                }}
              >
                <Modal.Header>Offered Requests</Modal.Header> {""}
                <p style={{ marginLeft: "25px" }}>
                  Total Offered Requests: {offeredRequest.length}
                </p>
                <Input
                  type="text"
                  placeholder="Search First, Last, Phone, or Email"
                  style={{ width: "250px", height: "30px", marginLeft: "2%" }}
                  onChange={(event) => {
                    setSearchTermFive(event.target.value);
                  }}
                ></Input>
                <Card.Content
                  style={{
                    overflowY: "scroll",
                    height: "500px",
                  }}
                >
                  <Segment
                    style={{
                      overflow: "auto",
                      maxHeight: "1000px",
                      width: "100%",
                      position: "absolute",
                      marginTop: "150px",
                      boxShadow: "5px 10px 8px #F3F3FC",
                    }}
                  >
                    {Object.keys(offeredRequest)
                      .filter((offered) => {
                        if (searchTermFive == "") {
                          return offered;
                        } else if (
                          offeredRequest[offered].status
                            .toLowerCase()
                            .includes(searchTermFive.toLowerCase()) ||
                          offeredRequest[offered].category
                            .toLowerCase()
                            .includes(searchTermFive.toLowerCase()) ||
                          offeredRequest[offered].sku
                            .toLowerCase()
                            .includes(searchTermFive.toLowerCase()) ||
                          offeredRequest[offered].memberName
                            .toLowerCase()
                            .includes(searchTermFive.toLowerCase()) ||
                          offeredRequest[offered].brand
                            .toLowerCase()
                            .includes(searchTermFive.toLowerCase()) ||
                          offeredRequest[offered].note
                            .toLowerCase()
                            .includes(searchTermFive.toLowerCase()) ||
                          offeredRequest[offered].item
                            .toLowerCase()
                            .includes(searchTermFive.toLowerCase())
                        ) {
                          return offered;
                        }
                      })
                      .map((offered, i) => {
                        let offeredCreated = new Date(
                          offeredRequest[offered].date_created
                        )

                          .toUTCString()
                          .split(" ")
                          .slice(1, 4)
                          .join(" ");
                        let offeredUpdated = new Date(
                          offeredRequest[offered].date_updated
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
                                  <Grid.Column style={{ paddingLeft: "25px" }}>
                                    <h2 style={{ color: "black" }}>
                                      {offeredRequest[offered].memberName}
                                    </h2>
                                    <Card.Meta>
                                      {" "}
                                      Request #:{" "}
                                      {" " + offeredRequest[offered].id}
                                    </Card.Meta>

                                    <Card.Meta style={{ color: "black" }}>
                                      Created:
                                      {" " + offeredCreated}
                                    </Card.Meta>
                                    <Card.Meta>
                                      Updated:
                                      {" " + offeredUpdated}
                                    </Card.Meta>

                                    <br></br>
                                  </Grid.Column>
                                  <Grid.Column>
                                    <Grid divided="vertically">
                                      <Grid.Row columns={2}>
                                        <Grid.Column>
                                          <h2>Details</h2>
                                          <Card.Meta>
                                            {" "}
                                            Status:
                                            {" " +
                                              offeredRequest[offered].status}
                                          </Card.Meta>
                                          <Card.Meta style={{ color: "black" }}>
                                            Category:{" "}
                                            {" " +
                                              offeredRequest[offered].category}
                                          </Card.Meta>
                                          <Card.Meta>
                                            Brand:{" "}
                                            {" " +
                                              offeredRequest[offered].brand}
                                          </Card.Meta>
                                          <Card.Meta style={{ color: "black" }}>
                                            SKU:{" "}
                                            {" " + offeredRequest[offered].sku}
                                          </Card.Meta>
                                          <Card.Meta>
                                            Item:{" "}
                                            {" " + offeredRequest[offered].item}
                                          </Card.Meta>
                                          <Card.Meta style={{ color: "black" }}>
                                            Qty:{" "}
                                            {" " +
                                              offeredRequest[offered].quantity}
                                          </Card.Meta>
                                        </Grid.Column>
                                        <Grid.Column>
                                          <h2>Notes</h2>
                                          <Card.Meta>
                                            Source:{" "}
                                            {" " +
                                              offeredRequest[offered].source}
                                          </Card.Meta>
                                          <Card.Meta style={{ color: "black" }}>
                                            Note:{" "}
                                            {" " + offeredRequest[offered].note}
                                          </Card.Meta>
                                        </Grid.Column>
                                      </Grid.Row>
                                    </Grid>
                                  </Grid.Column>
                                  <Grid.Column>
                                    <Grid divided="vertically">
                                      <Grid.Row columns={2}>
                                        <Grid.Column>
                                          <h2>Edit</h2>
                                          <select
                                            onChange={(e) => {
                                              setNewStatus(
                                                e.target.value.toUpperCase()
                                              );
                                            }}
                                            style={{
                                              height: "35px",
                                              width: "200px",
                                              backgroundColor: "lightGrey",
                                              borderRadius: "5px",
                                              border: "none",
                                            }}
                                          >
                                            <option>Choose Status</option>
                                            <option value="Pending">
                                              Pending
                                            </option>
                                            <option value="On Hold">
                                              On Hold
                                            </option>
                                            <option value="Back Order">
                                              Back Order
                                            </option>
                                            <option value="Ordered">
                                              Ordered
                                            </option>
                                            <option value="Completed">
                                              Completed
                                            </option>
                                            <option value="Canceled">
                                              Canceled
                                            </option>
                                            <option value="Offered">
                                              Offered
                                            </option>
                                          </select>
                                          <br></br>
                                          <Button
                                            onClick={() => {
                                              updateStatus(
                                                offeredRequest[offered].id
                                              );
                                            }}
                                            style={{
                                              width: "200px",
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
                                          <Form>
                                            <Input
                                              onChange={(e) => {
                                                setNewSource(e.target.value);
                                              }}
                                              placeholder="Update Source"
                                              style={{
                                                marginTop: "10px",
                                                width: "200px",
                                              }}
                                            ></Input>
                                            <Button
                                              type="reset"
                                              onClick={() => {
                                                updateSource(
                                                  offeredRequest[offered].id
                                                );
                                              }}
                                              style={{
                                                marginTop: "10px",
                                                color: "white",
                                                backgroundColor: "black",
                                                width: "200px",
                                              }}
                                            >
                                              Submit
                                              <Icon
                                                style={{ paddingLeft: "10px" }}
                                                name="edit outline"
                                              ></Icon>
                                            </Button>
                                          </Form>
                                        </Grid.Column>
                                        <Grid.Column>
                                          <h2 style={{ height: "30px" }}></h2>
                                          <Form>
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
                                                updateNote(
                                                  offeredRequest[offered].id
                                                );
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
                </Card.Content>
                <Modal.Content style={{ float: "center" }}></Modal.Content>
                <Modal.Actions>
                  <Button color="black" onClick={() => setOpenNine(false)}>
                    Done
                  </Button>
                  {/* <Button
                    content="Submit Change"
                    labelPosition="right"
                    icon="checkmark"
                    onClick={() => setOpen(false)}
                    positive
                  /> */}
                </Modal.Actions>
              </Modal>
            </span>
            {/* START CANCELED REQUESTS */}
            <span style={{ position: "relative", float: "right" }}>
              {/* THIS IS WHERE THE ACTIVE ONLY MEMBERS MODAL STARTS */}
              <Modal
                onClose={() => setOpenEight(false)}
                onOpen={() => setOpenEight(true)}
                // onClick={() => GetExpired}
                open={openEight}
                trigger={<Button color="red">Canceled</Button>}
                style={{
                  width: "100%",
                  height: "700px",
                  width: "1500px",
                  left: "5%",
                  top: "10%",
                }}
              >
                <Modal.Header>Canceled Requests</Modal.Header> {""}
                <p style={{ marginLeft: "25px" }}>
                  Total Canceled Requests: {canceledRequest.length}
                </p>
                <Input
                  type="text"
                  placeholder="Search First, Last, Phone, or Email"
                  style={{ width: "250px", height: "30px", marginLeft: "2%" }}
                  onChange={(event) => {
                    setSearchTerm7(event.target.value);
                  }}
                ></Input>
                <Card.Content
                  style={{
                    overflowY: "scroll",
                    height: "500px",
                  }}
                >
                  <Table celled striped color="red">
                    <Table.Header>
                      <Table.Row>
                        <Table.HeaderCell>Request #</Table.HeaderCell>
                        <Table.HeaderCell>Member Name</Table.HeaderCell>
                        <Table.HeaderCell>Category</Table.HeaderCell>
                        <Table.HeaderCell>Brand</Table.HeaderCell>
                        <Table.HeaderCell>Sku</Table.HeaderCell>
                        <Table.HeaderCell>Item</Table.HeaderCell>
                        <Table.HeaderCell>Qty</Table.HeaderCell>
                        <Table.HeaderCell>Status</Table.HeaderCell>
                        <Table.HeaderCell>Change Status</Table.HeaderCell>
                        <Table.HeaderCell>Note</Table.HeaderCell>
                        <Table.HeaderCell>Source</Table.HeaderCell>
                        <Table.HeaderCell>Edit Note</Table.HeaderCell>
                        <Table.HeaderCell>Update Source</Table.HeaderCell>
                        <Table.HeaderCell>Date Created</Table.HeaderCell>
                        <Table.HeaderCell>Date Updated</Table.HeaderCell>
                      </Table.Row>
                    </Table.Header>
                    <Table.Body>
                      {Object.keys(canceledRequest)
                        .filter((canceled) => {
                          if (searchTerm7 == "") {
                            return canceled;
                          } else if (
                            canceledRequest[canceled].status
                              .toLowerCase()
                              .includes(searchTerm7.toLowerCase()) ||
                            canceledRequest[canceled].category
                              .toLowerCase()
                              .includes(searchTerm7.toLowerCase()) ||
                            // ) {
                            //   return request;
                            // } else if (
                            canceledRequest[canceled].sku
                              .toLowerCase()
                              .includes(searchTerm7.toLowerCase()) ||
                            canceledRequest[canceled].memberName
                              .toLowerCase()
                              .includes(searchTerm7.toLowerCase()) ||
                            canceledRequest[canceled].brand
                              .toLowerCase()
                              .includes(searchTerm7.toLowerCase()) ||
                            canceledRequest[canceled].note
                              .toLowerCase()
                              .includes(searchTerm7.toLowerCase()) ||
                            canceledRequest[canceled].item
                              .toLowerCase()
                              .includes(searchTerm7.toLowerCase())
                            //****** SEARCH SOURCE *****/
                            //   ||
                            // requestList[request].source
                            //   .toLowerCase()
                            //   .includes(searchTerm7.toLowerCase())
                          ) {
                            return canceled;
                          }
                        })
                        .map((canceled, i) => {
                          let canCreated = new Date(
                            canceledRequest[canceled].date_created
                          )

                            .toUTCString()
                            .split(" ")
                            .slice(1, 4)
                            .join(" ");
                          let canUpdated = new Date(
                            canceledRequest[canceled].date_updated
                          )

                            .toUTCString()
                            .split(" ")
                            .slice(1, 4)
                            .join(" ");
                          return (
                            <Table.Row
                              style={{ overflowY: "scroll" }}
                              key={canceled.id}
                            >
                              <Table.Cell>
                                {canceledRequest[canceled].id}
                              </Table.Cell>
                              <Table.Cell>
                                {canceledRequest[canceled].memberName}
                              </Table.Cell>
                              <Table.Cell>
                                {/* <Link
                          style={{ color: "black" }}
                          to={`/executiveAccount/${canceledRequest[canceled].id}`}
                        > */}
                                {canceledRequest[canceled].category}
                                {/* </Link> */}
                              </Table.Cell>

                              <Table.Cell>
                                {canceledRequest[canceled].brand}
                              </Table.Cell>
                              <Table.Cell>
                                {canceledRequest[canceled].sku}
                              </Table.Cell>
                              <Table.Cell>
                                {canceledRequest[canceled].item}
                              </Table.Cell>
                              <Table.Cell>
                                {canceledRequest[canceled].quantity}
                              </Table.Cell>

                              <Table.Cell>
                                {" "}
                                {canceledRequest[canceled].status}
                              </Table.Cell>
                              <Table.Cell>
                                <Form.Group
                                  style={{
                                    backgroundColor: "none",
                                    border: "none",
                                  }}
                                >
                                  <select
                                    onChange={(e) => {
                                      setNewStatus(
                                        e.target.value.toUpperCase()
                                      );
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
                                    <option value="Back Order">
                                      Back Order
                                    </option>
                                    <option value="Ordered">Ordered</option>
                                    <option value="Completed">Completed</option>
                                    <option value="Canceled">Canceled</option>
                                    <option value="Offered">Offered</option>
                                  </select>
                                  <Button
                                    onClick={() => {
                                      updateStatus(
                                        canceledRequest[canceled].id
                                      );
                                    }}
                                    style={{
                                      width: "100%",
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
                                </Form.Group>{" "}
                              </Table.Cell>
                              <Table.Cell>
                                {canceledRequest[canceled].note}
                              </Table.Cell>
                              <Table.Cell>
                                {canceledRequest[canceled].source}
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
                                    updateNote(canceledRequest[canceled].id);
                                  }}
                                  style={{
                                    marginLeft: "20px",
                                    color: "white",
                                    backgroundColor: "black",
                                  }}
                                >
                                  Update
                                  <Icon name="edit outline"></Icon>
                                </Button>
                              </Table.Cell>
                              {/* <Table.Cell>{canceledRequest[canceled].source}</Table.Cell> */}
                              <Table.Cell>
                                <textarea
                                  onChange={(e) => {
                                    setNewSource(e.target.value);
                                  }}
                                  placeholder="Update Source"
                                ></textarea>
                                <Button
                                  type="reset"
                                  onClick={() => {
                                    updateSource(canceledRequest[canceled].id);
                                  }}
                                  style={{
                                    marginLeft: "20px",
                                    color: "white",
                                    backgroundColor: "black",
                                  }}
                                >
                                  Update
                                  <Icon name="edit outline"></Icon>
                                </Button>
                              </Table.Cell>
                              <Table.Cell>{canCreated}</Table.Cell>
                              <Table.Cell> {canUpdated}</Table.Cell>
                            </Table.Row>
                          );
                        })}
                    </Table.Body>
                  </Table>
                </Card.Content>
                <Modal.Content style={{ float: "center" }}></Modal.Content>
                <Modal.Actions>
                  <Button color="black" onClick={() => setOpenEight(false)}>
                    Done
                  </Button>
                  {/* <Button
                    content="Submit Change"
                    labelPosition="right"
                    icon="checkmark"
                    onClick={() => setOpen(false)}
                    positive
                  /> */}
                </Modal.Actions>
              </Modal>
            </span>
            {/* END CANCELED REQUESTS */}
          </Card.Content>
          {/* 
      ALL REQUEST LIST
*/}
          <Segment
            style={{
              overflow: "auto",
              maxHeight: "1000px",
              width: "100%",
              position: "absolute",
              marginTop: "150px",
              boxShadow: "5px 10px 8px #F3F3FC",
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
                          <Grid.Column style={{ paddingLeft: "25px" }}>
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
                          <Grid.Column>
                            <Grid divided="vertically">
                              <Grid.Row columns={2}>
                                <Grid.Column>
                                  <h2>Details</h2>
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
                                </Grid.Column>
                                <Grid.Column>
                                  <h2>Notes</h2>
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
                                  <h2>Edit</h2>
                                  <select
                                    onChange={(e) => {
                                      setNewStatus(
                                        e.target.value.toUpperCase()
                                      );
                                    }}
                                    style={{
                                      height: "35px",
                                      width: "200px",
                                      backgroundColor: "lightGrey",
                                      borderRadius: "5px",
                                      border: "none",
                                    }}
                                  >
                                    <option>Choose Status</option>
                                    <option value="Pending">Pending</option>
                                    <option value="On Hold">On Hold</option>
                                    <option value="Back Order">
                                      Back Order
                                    </option>
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
                                      width: "200px",
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
                                  <Form>
                                    <Input
                                      onChange={(e) => {
                                        setNewSource(e.target.value);
                                      }}
                                      placeholder="Update Source"
                                      style={{
                                        marginTop: "10px",
                                        width: "200px",
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
                                        width: "200px",
                                      }}
                                    >
                                      Submit
                                      <Icon
                                        style={{ paddingLeft: "10px" }}
                                        name="edit outline"
                                      ></Icon>
                                    </Button>
                                  </Form>
                                </Grid.Column>
                                <Grid.Column>
                                  <h2 style={{ height: "30px" }}></h2>
                                  <Form>
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
        </Card>
      </div>
    </div>
  );
}

export default AllRequests;
