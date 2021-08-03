import {
  Card,
  // Link,
  Checkbox,
  Table,
  Icon,
  Feed,
  Input,
  Button,
  // Item,
} from "semantic-ui-react";
import React, { useState, useEffect } from "react";
// import Axios from "axios";
import Header from "../components/header";
import API from "../utils/API";
import axios from "axios";
// import axios from "axios";

// import { useSelector } from "react-redux";

function ExecutiveAccount(props) {
  // const { token } = useSelector((state) => state.auth);

  const [memberDetails, setMemberDetails] = useState({});
  // const [dates, setDates] = useState({
  //   date_joined: "",
  //   expiration_date: "",
  // });
  const id = props.id;

  useEffect(() => {
    // async function getDetails() {
    // axios.get(`http://localhost:3001/member/${id}`).then((response) => {
    //   setMemberDetails(response.data[1]);
    //   console.log(memberDetails);
    // });
    // const options = {
    //   headers: {
    //     token: token,
    //   },
    // };
    // const { data } = await API.loadMember(id);
    // setMemberDetails(data);
    //
    // let dateJoined = new Date(data.date_joined)
    //   .toUTCString()
    //   .split(" ")
    //   .slice(0, 4)
    //   .join(" ");
    // let dateExpired = new Date(data.expiration_date)
    //   .toUTCString()
    //   .split(" ")
    //   .slice(0, 4)
    //   .join(" ");
    // setDates({
    //   date_joined: dateJoined,
    //   expiration_date: dateExpired,
    // });
    // console.log(data);
    // }
    // getDetails();
  }, []);

  return (
    <div style={{ width: "100%", overflowY: "scroll", scrollbarWidth: "1px" }}>
      <Header />
      {/* <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={clickHandler}>click</button>
      {memberDetails.first_name} */}

      <div style={{ display: "flex", padding: ".5rem", alignItems: "top" }}>
        <Card fluid style={{ width: "50%", marginRight: "10px" }}>
          {/* {Object.keys(memberDetails).map((Details, i) => {
            if (Details.id === id) {
              return ( */}
          <Card.Content>
            <Card.Header>
              {memberDetails.first_name} {memberDetails.last_name}{" "}
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
            <Card.Meta>{memberDetails.address} </Card.Meta>
            <Card.Meta>
              {/* <span className="date">{memberDetails.address}</span> */}
            </Card.Meta>
          </Card.Content>

          <Card.Content extra>
            <Icon name="phone" style={{ margin: "0 5px" }} />

            {memberDetails.phone
              ? memberDetails.phone
              : "No phone number provided"}
            <Icon name="mail" style={{ margin: "0 5px" }} />

            {memberDetails.email}
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
                  <Table.Cell>Date Joined goes here</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Icon name="calendar times outline" /> Expiration Date
                  </Table.Cell>
                  <Table.Cell>Date expires goes here</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Icon name="building outline" /> Preferred Store
                  </Table.Cell>
                  <Table.Cell>
                    {memberDetails.preferred_store
                      ? memberDetails.preferred_store
                      : "No Store Set"}
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
