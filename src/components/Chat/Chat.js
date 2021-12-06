import { Card, Feed, Icon, Input, Button } from "semantic-ui-react";
import React, { useState, useEffect } from "react";
import Axios from "axios";

function AdminChat() {
  const [chatTyped, setChatTyped] = useState("");
  const [chatList, setchatList] = useState("");

  //SUBMIT NOTE
  const submitChat = (e) => {
    Axios.post("https://executive-app.herokuapp.com/postChat", {
      // Axios.post("http://localhost:3001/postChat", {
      chatTyped: chatTyped,
    }).then(() => {
      GetChat();
      console.log("successful chat post");
      // reloadPage();
    });
  };

  const GetChat = () => {
    Axios.get("https://executive-app.herokuapp.com/chat").then((response) => {
      // Axios.get("http://localhost:3001/chat").then((response) => {
      setchatList(response.data);
      // console.log(response.data);
    });
  };
  useEffect(() => {
    GetChat();
  }, []);

  return (
    <div className="newMembers" style={{ padding: "1%", width: "100%" }}>
      <Card fluid style={{ height: "600px" }}>
        <Card.Content>
          <Card.Header>Admin Chat</Card.Header>
        </Card.Content>
        <Card.Content
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column-reverse",
          }}
        >
          <Feed
            style={{
              overflowY: "scroll",
              scrollbarWidth: "1px",
              height: "100%",
              display: "flex",
              flexDirection: "column-reverse",
              marginBottom: "8%",
            }}
          >
            {Object.keys(chatList).map((adminChat, i) => {
              return (
                // <p>{chatList[adminChat].note}</p>;
                <Feed.Event>
                  <Feed.Label>
                    <Icon name="user circle" />
                  </Feed.Label>

                  <Feed.Content style={{ color: "red" }}>
                    <Feed.Summary>
                      <Feed.User
                        style={{ cursor: "default", color: "#DB2828" }}
                      >
                        Name of Admin
                      </Feed.User>
                      <Feed.Date>{chatList[adminChat].createdAt}</Feed.Date>
                    </Feed.Summary>
                    {/* <Feed.Meta>
                      <Feed.User>Name of Customer</Feed.User>
                    </Feed.Meta> */}
                    <Feed.Extra style={{ width: "300px" }}>
                      {" "}
                      {chatList[adminChat].expression}
                    </Feed.Extra>
                    _____________________________________________________________{" "}
                  </Feed.Content>
                </Feed.Event>
              );
            })}
          </Feed>
        </Card.Content>
      </Card>
      {/* <Card fluid>
        <Card.Content>
          <Card.Header>Chat</Card.Header>
        </Card.Content> */}
      {/* <Card.Content fluid> */}
      <div
        style={{
          display: "flex",
          padding: ".5rem",
          alignItems: "top",
          marginTop: "-2%",
        }}
      >
        <Input
          onChange={(e) => {
            setChatTyped(e.target.value);
          }}
          style={{ margin: "1rem", width: "90%" }}
          icon="talk"
          iconPosition="left"
          placeholder="Add Chat..."
        />
        {/* <Button type="reset" secondary onClick={submitChat}>
          Submit{" "} */}
        <Button type="reset" onClick={submitChat}>
          Submit
        </Button>
      </div>
    </div>
  );
}

export default AdminChat;
