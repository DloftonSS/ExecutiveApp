import {
  Card,
  Table,
  Icon,
  Checkbox,
  Modal,
  Button,
  Feed,
  Header,
  Segment,
  Popup,
  Form,
  Image,
} from "semantic-ui-react";
import React, { useState, useEffect, Input, Link } from "react";
import Axios from "axios";
// import API from "../utils/API";
import { useParams } from "react-router";
import { useLocation } from "react-router-dom";

function Stats() {
  const [activeList, setActiveList] = useState("");
  const [requestList, setRequestList] = useState("");
  const [expiringMembers, setExpiringMembers] = useState("");

  //GET ACTIVE ONLY MEMBERS
  const ActiveMembers = () => {
    Axios.get("https://executive-app.herokuapp.com/api/activeMembers").then(
      (response) => {
        // Axios.get("http://localhost:3001/api/activeMembers").then((response) => {
        setActiveList(response.data);
        // console.log(response.data);
      }
    );
  };

  const GetAllRequests = () => {
    Axios.get("https://executive-app.herokuapp.com/allRequests").then(
      (response) => {
        // Axios.get("http://localhost:3001/allRequests").then((response) => {
        setRequestList(response.data);
      }
    );
  };

  useEffect(() => {
    ActiveMembers();
    GetAllRequests();
    //GET EXPIRING MEMBERS
    Axios.get("https://executive-app.herokuapp.com/expiringMembers").then(
      (response) => {
        // Axios.get("http://localhost:3001/expiringMembers").then((response) => {
        setExpiringMembers(response.data);
      }
    );
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridGap: 20,
        backgroundColor: "#F3F3FC",
        width: "98%",
        margin: "1%",
        padding: "1%",
        borderRadius: "5px",
      }}
    >
      <div>
        <Card
          style={{
            width: "500px",
            boxShadow: "5px 10px 8px black",
            backgroundColor: "white",
            border: "1px solid white",
          }}
        >
          <Card.Content>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gridGap: 20,
                backgroundColor: "black",
                width: "100%",
                margin: "1%",
                padding: "1%",
                borderRadius: "5px",
              }}
            >
              <div>
                <Icon
                  name="user circle"
                  size="big"
                  style={{ color: "white", float: "left", marginTop: "10%" }}
                >
                  {" "}
                </Icon>
              </div>
              <div>
                <h2
                  style={{
                    color: "white",
                    marginTop: "10%",
                  }}
                >
                  Active Users
                </h2>
              </div>
              <div>
                <h2
                  style={{
                    color: "white",
                    float: "right",
                    position: "relative",
                    marginTop: "5%",
                    padding: "5%",
                  }}
                >
                  {activeList.length}
                </h2>
              </div>
            </div>
          </Card.Content>
        </Card>
      </div>

      <div>
        <Card
          style={{
            width: "500px",
            boxShadow: "5px 10px 8px black",
            backgroundColor: "#F3F3FC",
            border: "1px solid #F3F3FC",
          }}
        >
          <Card.Content>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gridGap: 20,
                backgroundColor: "black",
                width: "100%",
                margin: "1%",
                padding: "1%",
                borderRadius: "5px",
              }}
            >
              <div>
                <Icon
                  name="list"
                  size="big"
                  style={{ color: "white", float: "left", marginTop: "10%" }}
                >
                  {" "}
                </Icon>
              </div>
              <div>
                <h2 style={{ color: "white", marginTop: "10%" }}>
                  All Requests
                </h2>
              </div>
              <div>
                <h2
                  style={{
                    color: "white",
                    float: "right",
                    position: "relative",
                    marginTop: "5%",
                    padding: "5%",
                  }}
                >
                  {requestList.length}
                </h2>
              </div>
            </div>
          </Card.Content>
        </Card>
      </div>

      <div>
        <Card
          style={{
            width: "500px",
            boxShadow: "5px 10px 8px black",
            backgroundColor: "#F3F3FC",
            border: "1px solid #F3F3FC",
          }}
        >
          <Card.Content>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gridGap: 20,
                backgroundColor: "black",
                width: "100%",
                margin: "1%",
                padding: "1%",
                borderRadius: "5px",
              }}
            >
              <div>
                <Icon
                  name="exclamation circle"
                  size="big"
                  style={{ color: "white", float: "left", marginTop: "10%" }}
                >
                  {" "}
                </Icon>
              </div>
              <div>
                <h2 style={{ color: "white", marginTop: "10%" }}>
                  All Expiring
                </h2>
              </div>
              <div>
                <h2
                  style={{
                    color: "white",
                    float: "right",
                    position: "relative",
                    marginTop: "5%",
                    padding: "5%",
                  }}
                >
                  {expiringMembers.length}
                </h2>
              </div>
            </div>
          </Card.Content>
        </Card>
      </div>
    </div>
  );
}

export default Stats;
