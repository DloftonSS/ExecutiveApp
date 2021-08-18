import { Card, Table, Icon, Checkbox, Input, Button } from "semantic-ui-react";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import API from "../utils/API";
import { useLocation } from "react-router-dom";

function ExecutiveData(props) {
  const [memberDetails, setMemberDetails] = useState("");
  const [memID, setMemId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [memberId, setMemberId] = useState("");

  const id = props.id;
  useEffect(() => {
    Axios.get("https://executive-app.herokuapp.com/member").then((response) => {
      // Axios.get("http://localhost:3001/member").then((response) => {
      const userID = response.data[id - 1];
      setMemberDetails(userID);
      // console.log(response.data);
      setMemberId(memberDetails.id);
      // console.log("member ID is" + " " + memberDetails.id);
    });
  }, []);

  return (
    <div style={{ padding: "1%", width: "100%" }}>
      <Card fluid style={{ width: "100%", marginRight: "10px" }}>
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
                <Table.Cell>{memberDetails.dateJoined}</Table.Cell>
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
                <Table.Cell>{memberDetails.preferredStore}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Icon name="id card outline" /> Card Status
                </Table.Cell>
                <Table.Cell>
                  <Icon
                    name="id card outline"
                    color="green"
                    size="large"
                    style={{ margin: "0 auto" }}
                  />
                </Table.Cell>
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
  );
}

export default ExecutiveData;
