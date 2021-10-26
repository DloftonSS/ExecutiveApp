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
} from "semantic-ui-react";
import { Link, useParams } from "react-router-dom";
import Axios from "axios";
import Header from "../components/header";

// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";

function AllRequests(props) {
  const userId = props.id;

  const [requestList, setRequestList] = useState("");
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
  const [searchTerm, setSearchTerm] = useState("");
  const [mostRecent, setMostRecent] = useState("");
  const noteHeader = "Request Note";

  const { id } = useParams();

  //GET ALL REQUESTS
  const GetAllRequests = () => {
    Axios.get("https://executive-app.herokuapp.com/allRequests").then(
      (response) => {
        // Axios.get("http://localhost:3001/allRequests").then((response) => {
        setRequestList(response.data);
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
      requestNote(id);
      console.log("this is the id " + id);
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
  //SUBMIT REQUEST NOTE TO THE DASHBOARD NOTES
  const requestNote = (id) => {
    Axios.post("https://executive-app.herokuapp.com/newDashboardNote", {
      // Axios.post("http://localhost:3001/requestNote", {
      note: newNote,
      noteHeader: noteHeader,
      id: id,
    }).then(() => {});
  };

  useEffect(() => {
    GetAllRequests();
  }, []);

  return (
    <div style={{ backgroundColor: "black" }}>
      <Header />
      <Card fluid style={{ marginRight: "10px", height: "1300px" }}>
        <Card.Content>
          <Card.Header>All Requests</Card.Header>
          <input
            type="text"
            placeholder="Search Category, Status, or Name"
            style={{ width: "250px", height: "30px" }}
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          ></input>
        </Card.Content>

        <Card.Content style={{ overflowY: "scroll", height: "100%" }}>
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
                      .includes(searchTerm.toLowerCase())
                  ) {
                    return request;
                  } else if (
                    requestList[request].sku
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase()) ||
                    requestList[request].memberName
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  ) {
                    return request;
                  }
                })
                .map((request, i) => {
                  return (
                    <Table.Row key={request.id}>
                      <Table.Cell>{requestList[request].id}</Table.Cell>
                      <Table.Cell>{requestList[request].memberName}</Table.Cell>
                      <Table.Cell>
                        {/* <Link
                          style={{ color: "black" }}
                          to={`/executiveAccount/${requestList[request].id}`}
                        > */}
                        {requestList[request].category}
                        {/* </Link> */}
                      </Table.Cell>

                      <Table.Cell>{requestList[request].brand}</Table.Cell>
                      <Table.Cell>{requestList[request].sku}</Table.Cell>
                      <Table.Cell>{requestList[request].item}</Table.Cell>
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
                      <Table.Cell>{requestList[request].note}</Table.Cell>
                      <Table.Cell>{requestList[request].source}</Table.Cell>
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
                      {/* <Table.Cell>{requestList[request].source}</Table.Cell> */}
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
                            updateSource(requestList[request].id);
                          }}
                          style={{ marginLeft: "20px" }}
                        >
                          Update
                          <Icon name="edit outline"></Icon>
                        </Button>
                      </Table.Cell>
                      <Table.Cell>
                        {requestList[request].date_created}
                      </Table.Cell>
                      <Table.Cell>
                        {" "}
                        {requestList[request].date_updated}
                      </Table.Cell>
                    </Table.Row>
                  );
                })}
            </Table.Body>
          </Table>
        </Card.Content>
      </Card>
    </div>
  );
}

export default AllRequests;
