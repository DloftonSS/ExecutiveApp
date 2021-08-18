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
} from "semantic-ui-react";
import { Link } from "react-router-dom";
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
  const [memberName, setMemberName] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // const options = [
  //   { key: 1, text: "Pending ", value: 1 },
  //   { key: 2, text: "On Hold", value: 2 },
  //   { key: 3, text: "Returned", value: 3 },
  //   { key: 4, text: "Completed", value: 4 },
  // ];

  //NEW REQUEST
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
      note: note,
      memberName: memberName,
      // theId: theId,
    }).then(() => {
      console.log("requested");
    });
  };

  //CHANGE REQUEST DATE
  const dateChange = (id) => {
    Axios.put("http://executive-app.herokuapp.com/dateChange", {
      // Axios.put("http://localhost;3001/dateChange", {
      id: id,
    });
  };

  //UPDATE REQUEST STATUS
  const updateStatus = (id) => {
    Axios.put("http://executive-app.herokuapp.com/statusUpdate", {
      // Axios.put("http://localhost:3001/statusUpdate", {
      //   status: newStatus,
      id: id,
    }).then((response) => {});
  };
  //UPDATE REQUEST NOTE
  const updateNote = (id) => {
    Axios.put("http://executive-app.herokuapp.com/noteUpdate", {
      // Axios.put("http://localhost:3001/noteUpdate", {
      note: newNote,
      id: id,
    }).then((response) => {});
  };
  useEffect(() => {
    //GET ALL REQUESTS
    Axios.get("https://executive-app.herokuapp.com/newRequests").then(
      (response) => {
        // Axios.get("http://localhost:3001/newRequests").then((response) => {
        setRequestList(response.data);
        console.log(response.data);
      }
    );
  }, []);

  return (
    <div>
      <Header />
      <Card fluid style={{ marginRight: "10px", height: "1300px" }}>
        <Card fluid style={{ marginRight: "10px", height: "180px" }}>
          {" "}
          <Card.Content>
            <Card.Header>Create Request</Card.Header>
          </Card.Content>
          <Card.Content style={{ height: "100px" }}>
            <Input
              onChange={(e) => {
                setCategory(e.target.value.toUpperCase());
              }}
              placeholder="Category"
            ></Input>
            <Input
              onChange={(e) => {
                setItem(e.target.value.toUpperCase());
              }}
              placeholder="Item"
            ></Input>
            <Input
              onChange={(e) => {
                setBrand(e.target.value.toUpperCase());
              }}
              placeholder="Brand"
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
                setSku(e.target.value.toUpperCase());
              }}
              placeholder="Sku"
            ></Input>
            <Input
              onChange={(e) => {
                setMemberName(e.target.value.toUpperCase());
              }}
              placeholder="Member Name"
            ></Input>
            <Input
              onChange={(e) => {
                setNote(e.target.value);
              }}
              placeholder="Note"
            ></Input>

            <Button onClick={submitRequest}>Submit Request</Button>
          </Card.Content>
        </Card>
        <Card.Content>
          <Card.Header>All Requests</Card.Header>
          <input
            type="text"
            placeholder="Search Category or Status"
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
                <Table.HeaderCell>Category</Table.HeaderCell>
                <Table.HeaderCell>Item</Table.HeaderCell>
                <Table.HeaderCell>Member Name</Table.HeaderCell>
                <Table.HeaderCell>Sku</Table.HeaderCell>
                <Table.HeaderCell>Status</Table.HeaderCell>
                <Table.HeaderCell>Change Status</Table.HeaderCell>
                <Table.HeaderCell>Note</Table.HeaderCell>
                <Table.HeaderCell>Edit Note</Table.HeaderCell>
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
                      <Table.Cell>
                        {/* <Link
                          style={{ color: "black" }}
                          to={`/executiveAccount/${requestList[request].id}`}
                        > */}
                        {requestList[request].category}
                        {/* </Link> */}
                      </Table.Cell>

                      <Table.Cell>{requestList[request].item}</Table.Cell>
                      <Table.Cell>{requestList[request].memberName}</Table.Cell>
                      <Table.Cell>{requestList[request].sku}</Table.Cell>
                      <Table.Cell>
                        {" "}
                        {requestList[request].status}
                        {/* <Dropdown clearable options={options} selection />
                      {requestList[request].status} */}
                      </Table.Cell>
                      <Table.Cell>
                        <Input
                          onChange={(e) => {
                            setNewStatus(e.target.value.toUpperCase());
                          }}
                          placeholder="New Status"
                          style={{ width: "100px" }}
                        ></Input>

                        <button
                          onClick={() => {
                            updateStatus(requestList[request].id);
                          }}
                          style={{ marginLeft: "20px" }}
                        >
                          Update
                          <Icon
                            // onClick={() => {
                            //   updateStatus(requestList[request].id);
                            // }}
                            name="edit outline"
                          ></Icon>
                        </button>
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
                          // style={{ marginLeft: "20px" }}
                        ></textarea>
                        <button
                          onClick={() => {
                            updateNote(requestList[request].id);
                          }}
                          style={{ marginLeft: "20px" }}
                        >
                          Update
                          <Icon
                            // onClick={() => {
                            //   updateStatus(requestList[request].id);
                            // }}
                            name="edit outline"
                          ></Icon>
                        </button>
                      </Table.Cell>

                      <Table.Cell>
                        {requestList[request].date_created}
                      </Table.Cell>
                      <Table.Cell></Table.Cell>
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