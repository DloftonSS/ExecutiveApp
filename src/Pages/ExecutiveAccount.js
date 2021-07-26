import {
  Card,
  Link,
  Checkbox,
  Table,
  Icon,
  Feed,
  Input,
  Button,
} from "semantic-ui-react";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import Header from "../components/header";

function ExecutiveAccount() {
  const [memberDetails, setmemberDetails] = useState("");

  useEffect(() => {
    Axios.get("https://executive-app.herokuapp.com/api/getMembers").then(
      (response) => {
        // Axios.get("http://localhost:3001/getAmember").then((response) => {
        setmemberDetails(response.data);
        console.log(response.data);
      }
    );
  }, []);

  return (
    <div style={{ width: "100%", overflowY: "scroll", scrollbarWidth: "1px" }}>
      <Header />
      <div style={{ display: "flex", padding: ".5rem", alignItems: "top" }}>
        <Card fluid style={{ width: "50%", marginRight: "10px" }}>
          <Card.Content>
            <Card.Header>
              {/* {memberDetails.first_name} {memberDetails.last_name}{" "} */}
              <span>
                {/* <Link */}
                {/* // to={"/edit/member/" + memberDetails.id}
            > */}
                <Icon
                  style={{ float: "right" }}
                  color="red"
                  name="edit outline"
                />
                {/* </Link> */}
              </span>
            </Card.Header>
            <Card.Meta>
              {/* {memberDetails.address ? (
            <span className="date">{memberDetails.address}</span>
          ) : (
            <span className="date">No address given</span>
          )} */}
            </Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <Icon name="phone" style={{ margin: "0 5px" }} />
            {/* {memberDetails.phone_number
          ? memberDetails.phone_number
          : "No phone number provided"} */}
            <Icon name="mail" style={{ margin: "0 5px" }} />
            {/* {memberDetails.email ? memberDetails.email : "No email provided"} */}
          </Card.Content>
          <Card.Content>
            <Table celled striped color="red">
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell colSpan="3">Account Info</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    <Icon name="calendar check outline" /> Join Date
                  </Table.Cell>
                  <Table.Cell>{/* {dates.date_joined} */}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Icon name="calendar times outline" /> Expiration Date
                  </Table.Cell>
                  <Table.Cell>{/* {dates.expiration_date} */}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Icon name="building outline" /> Preferred Store
                  </Table.Cell>
                  <Table.Cell>
                    {/* {memberDetails.preferred_store */}
                    {/* ? memberDetails.preferred_store */}
                    {/* : "No Store Set"} */}
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Icon name="id card outline" /> Card Status
                  </Table.Cell>
                  {/* <Table.Cell>
                {memberDetails.card_status === "YES" ? (
                  <Icon
                    name="id card outline"
                    color="green"
                    size="large"
                    style={{ margin: "0 auto" }}
                  />
                ) : (
                  <Icon
                    name="id card outline"
                    color="red"
                    size="large"
                    style={{ margin: "0 auto" }}
                  />
                )}
              </Table.Cell> */}
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Icon name="handshake outline" /> Initial Contact
                  </Table.Cell>
                  <Table.Cell>
                    <Checkbox toggle defaultChecked />
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Card.Content>
        </Card>
      </div>

      <div style={{ display: "flex", padding: ".5rem", alignItems: "top" }}>
        <Card
          fluid

          // style={{ maxHeight: "350px" }}
        >
          <Card.Content>
            <Card.Header>Notes</Card.Header>
          </Card.Content>
          <Card.Content
            style={{
              overflowY: "scroll",
              scrollbarWidth: "1px",
              height: "100%",
              display: "flex",
              flexDirection: "column-reverse",
            }}
          >
            <Feed>
              {/* {Object.keys(notesList).map((keyName, i) => { */}{" "}
              {/* return (// <p>{notesList[keyName].note}</p>; */}
              <Feed.Event>
                <Feed.Label>
                  <Icon name="user circle" />
                </Feed.Label>

                <Feed.Content style={{ color: "red" }}>
                  <Feed.Summary>
                    <Feed.User style={{ cursor: "default", color: "#DB2828" }}>
                      Name of Admin
                    </Feed.User>
                    <Feed.Date>
                      {/* {notesList[keyName].createdAt} */}
                    </Feed.Date>
                  </Feed.Summary>
                  <Feed.Meta>
                    <Feed.User>Name of Customer</Feed.User>
                  </Feed.Meta>
                  <Feed.Extra style={{ width: "300px" }}>
                    {" "}
                    {/* {notesList[keyName].note} */}
                  </Feed.Extra>
                  ____________________________________________________________________________________________{" "}
                  <Icon
                    name="x"
                    style={{ marginRight: "0px" }}
                    // onClick={() => {
                    //   deleteNote(keyName.note);
                    // }}
                  />{" "}
                </Feed.Content>
              </Feed.Event>
              {/* ); */}
              {/* })} */}
            </Feed>
          </Card.Content>
        </Card>
        <Card fluid>
          <Card.Content>
            <Card.Header>New Note</Card.Header>
          </Card.Content>
          <Card.Content>
            <Input
              // onChange={(e) => {
              //   setNoteTyped(e.target.value);
              // }}
              style={{ margin: "1rem", width: "90%" }}
              icon="sticky note outline"
              iconPosition="left"
              placeholder="Add Note..."
            />
          </Card.Content>
          <Card.Content>
            <Button
              type="reset"
              secondary
              // onClick={submitNote}
            >
              Submit Note
            </Button>
          </Card.Content>
        </Card>
      </div>
    </div>
  );
}

export default ExecutiveAccount;
