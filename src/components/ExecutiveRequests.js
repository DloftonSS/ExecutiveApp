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
  const [memberName, setMemberName] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // const { id } = useParams();
  const GetAllRequests = () => {
    Axios.get("https://executive-app.herokuapp.com/newRequests").then(
      (response) => {
        // Axios.get("http://localhost:3001/newRequests").then((response) => {
        const data = response.data;
        console.log(userId);
        if (data.id == userId) {
          setRequestList(response.data);
          console.log(requestList);
        }
        // setRequestList(response.data);
        // console.log(response.data);
        // WhereMember();
      }
    );
  };

  //GETTING SPECIFIC REQUESTS
  // const WhereMember = () => {
  //   // Axios.get("https://executive-app.herokuapp.com/membersRequests").then(
  //   //   (response) => {
  //   Axios.get("http://localhost:3001/membersRequests").then((response) => {
  //     if (requestList.id == userId) {
  //       setRequestList(response.data);
  //       console.log(requestList);
  //     }
  //   });
  // };
  const submitRequest = (e) => {
    Axios.post("http://executive-app.herokuapp.com/requsted", {
      // Axios.post("http://localhost:3001/requsted", {
      category: category,
      item: item,
      brand: brand,
      quantity: quantity,
      status: status,
      userId: userId,
      sku: sku,
      newNote: newNote,
      memberName: memberName,
    }).then(() => {
      console.log("requested");
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
      GetAllRequests();
    });
  };

  const updateStatus = (id) => {
    Axios.put("http://executive-app.herokuapp.com/statusUpdate", {
      // Axios.put("http://localhost:3001/statusUpdate", {
      status: newStatus,
      id: id,
    }).then((response) => {
      GetAllRequests();
    });
  };
  useEffect(() => {
    GetAllRequests();
    // WhereMember();
  }, []);

  return (
    <div style={{ padding: "1%", width: "100%", backgroundColor: "black" }}>
      <Card fluid style={{ marginRight: "10px", height: "550px" }}>
        <Card.Content>
          <Card.Header>Requests</Card.Header>
          <Input
            type="text"
            placeholder="Search Member Name"
            style={{ width: "250px", height: "30px" }}
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          ></Input>
        </Card.Content>
        <Card.Content style={{ marginTop: "-5%" }}>
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
                <option value="Firearms">Firearms</option>
                <option value="Scopes">Scopes</option>
                <option value="Suppressors">Suppressors</option>
              </select>

              <Form.Input
                onChange={(e) => {
                  setBrand(e.target.value.toUpperCase());
                }}
                placeholder="Brand"
              />
              <Form.Input
                onChange={(e) => {
                  setItem(e.target.value.toUpperCase());
                }}
                placeholder="Item"
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
                <Table.HeaderCell>Date Updated</Table.HeaderCell>
                {/* <Table.HeaderCell>ID</Table.HeaderCell> */}
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {Object.keys(requestList)
                .filter((request) => {
                  if (searchTerm == "") {
                    return "";
                  } else if (
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

                      <Table.Cell>
                        {requestList[request].date_updated}
                      </Table.Cell>
                      {/* <Table.Cell></Table.Cell> */}
                    </Table.Row>
                  );
                })}
            </Table.Body>
          </Table>
        </Card.Content>
      </Card>
      {/* <div>
        <Card fluid style={{ marginRight: "10px", height: "350px" }}>
          {" "}
          <Card.Content>
            <Card.Header>Create Request</Card.Header>
          </Card.Content>
          <Card.Content style={{ height: "100px" }}>
            <Input
              onChange={(e) => {
                setMemberName(e.target.value.toUpperCase());
              }}
              placeholder="Member Name"
            ></Input>
            <Input
              onChange={(e) => {
                setCategory(e.target.value.toUpperCase());
              }}
              placeholder="Category"
            ></Input>
            <Input
              onChange={(e) => {
                setBrand(e.target.value.toUpperCase());
              }}
              placeholder="Brand"
            ></Input>
            <Input
              onChange={(e) => {
                setItem(e.target.value.toUpperCase());
              }}
              placeholder="Item"
            ></Input>
            <Input
              onChange={(e) => {
                setSku(e.target.value.toUpperCase());
              }}
              placeholder="UPC / SKU"
            ></Input>

            <Input
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
              placeholder="Quantity"
            ></Input>
            <Input
              onChange={(e) => {
                setStatus(e.target.value.toUpperCase());
              }}
              placeholder="Status"
            ></Input>

            <Input
              onChange={(e) => {
                setNewNote(e.target.value);
              }}
              placeholder="Note"
            ></Input>

            <Button onClick={submitRequest}>Submit Request</Button>
          </Card.Content>
        </Card>
      </div> */}
    </div>
  );
}

export default ExecutiveRequests;
