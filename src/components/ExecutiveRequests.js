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

  const [newNote, setNewNote] = useState("");
  const [memberName, setMemberName] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  // const [userId, setUserId] = useState("");
  // const [theId, setTheId] = useState("");

  // const options = [
  //   { key: 1, text: "Pending ", value: 1 },
  //   { key: 2, text: "On Hold", value: 2 },
  //   { key: 3, text: "Returned", value: 3 },
  //   { key: 4, text: "Completed", value: 4 },
  // ];

  const submitRequest = (e) => {
    // Axios.post("http://executive-app.herokuapp.com/requsted", {
    Axios.post("http://localhost:3001/requsted", {
      category: category,
      item: item,
      brand: brand,
      quantity: quantity,
      status: status,
      userId: userId,
      sku: sku,
      // theId: theId,
    }).then(() => {
      console.log("requested");
    });
  };

  //UPDATE REQUEST NOTE
  const updateNote = (id) => {
    Axios.put("https://executive-app.herokuapp.com/noteUpdate", {
      // Axios.put("http://localhost:3001/noteUpdate", {
      note: newNote,
      id: id,
    }).then((response) => {});
  };

  const updateStatus = (id) => {
    Axios.put("http://executive-app.herokuapp.com/statusUpdate", {
      // Axios.put("http://localhost:3001/statusUpdate", {
      status: newStatus,
      id: id,
    }).then((response) => {});
  };
  useEffect(() => {
    Axios.get("https://executive-app.herokuapp.com/memberRequest").then(
      (response) => {
        // Axios.get("http://localhost:3001/newRequests").then((response) => {
        setRequestList(response.data);
        console.log(response.data);
      }
    );
  }, []);

  return (
    <div style={{ padding: "1%", width: "100%" }}>
      <Card fluid style={{ marginRight: "10px", height: "350px" }}>
        <Card.Content>
          <Card.Header>Requests</Card.Header>
          <input
            type="text"
            placeholder="Search Member Name"
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
                <Table.HeaderCell>Member Name</Table.HeaderCell>
                <Table.HeaderCell>Category</Table.HeaderCell>
                <Table.HeaderCell>Item</Table.HeaderCell>
                <Table.HeaderCell>Quantity</Table.HeaderCell>
                <Table.HeaderCell>Concierge</Table.HeaderCell>
                <Table.HeaderCell>Status</Table.HeaderCell>
                <Table.HeaderCell>Date Created</Table.HeaderCell>
                <Table.HeaderCell>Date Updated</Table.HeaderCell>
                <Table.HeaderCell>Update Status</Table.HeaderCell>
                <Table.HeaderCell>ID</Table.HeaderCell>
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
      <div>
        <Card fluid style={{ marginRight: "10px", height: "350px" }}>
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
                setNewNote(e.target.value);
              }}
              placeholder="Note"
            ></Input>

            <Button onClick={submitRequest}>Submit Request</Button>
          </Card.Content>
        </Card>
      </div>
    </div>
  );
}

export default ExecutiveRequests;
