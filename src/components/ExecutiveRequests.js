import React, { useEffect, useState } from "react";
// import API from "../../utils/API";
import {
  Card,
  Icon,
  Table,
  Input,
  Button,
  Dropdown,
  Menu,
  Form,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import Axios from "axios";
import { useParams } from "react-router";

// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";

function ExecutiveRequests(props) {
  // const [requestList, setRequestList] = useState("");
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

  const { id } = useParams();

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
        // console.log(result);
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
      newNote: newNote,
      newSource: newSource,
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
      requestNote();
    });
  };
  const updateSource = (id) => {
    Axios.put("https://executive-app.herokuapp.com/sourceUpdate", {
      // Axios.put("http://localhost:3001/sourceUpdate", {
      source: newSource,
      id: id,
    }).then((response) => {
      getMemberRequests();
    });
  };

  const updateStatus = (id) => {
    Axios.put("https://executive-app.herokuapp.com/statusUpdate", {
      // Axios.put("http://localhost:3001/statusUpdate", {
      //   status: newStatus,
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
      id: id,
    }).then(() => {});
  };
  useEffect(() => {
    // GetAllRequests();
    // WhereMember();
    getMemberRequests();
  }, []);

  return (
    <div style={{ padding: "1%", width: "100%", backgroundColor: "black" }}>
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
              <Form.Input
                onChange={(e) => {
                  setMemberName(e.target.value.toUpperCase());
                }}
                placeholder="Member Name"
              />
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
            </Form.Group>
            <Form.Group widths="equal" style={{ height: "50px" }}>
              <Form.Input
                onChange={(e) => {
                  setSku(e.target.value.toUpperCase());
                }}
                placeholder="UPC / SKU"
              />
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
                  setNewNote(e.target.value);
                }}
                placeholder="Note"
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
                <Table.HeaderCell>Note</Table.HeaderCell>
                <Table.HeaderCell>Update Note</Table.HeaderCell>
                <Table.HeaderCell>Source</Table.HeaderCell>
                <Table.HeaderCell>Update Source</Table.HeaderCell>
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
                    <Table.Cell>{requestList[request].source}</Table.Cell>
                    <Table.Cell>
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
                    </Table.Cell>

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
  );
}

export default ExecutiveRequests;
