import { Card, Feed, Icon, Input, Button, Form } from "semantic-ui-react";
import React, { useState, useEffect } from "react";
import Axios from "axios";

function AdminChat() {
  const [chatTyped, setChatTyped] = useState("");
  const [chatList, setchatList] = useState("");
  const [adminName, setAdminName] = useState("");

  //SUBMIT NOTE
  const submitChat = (e) => {
    Axios.post("https://executive-app.herokuapp.com/postChat", {
      // Axios.post("http://localhost:3001/postChat", {
      chatTyped: chatTyped,
      adminName: adminName,
    }).then(() => {
      GetChat();
      // console.log("successful chat post");
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

  //DELETE NOTE
  const DeleteChat = (id) => {
    Axios.delete(`https://executive-app.herokuapp.com/deleteChat/${id}`).then(
      () => {
        // Axios.delete(`http://localhost:3001/deleteChat/${id}`).then(() => {
        console.log("deleted");
        GetChat();
      }
    );
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
            {Object.keys(chatList).map((keyName, i) => {
              let date = new Date(chatList[keyName].createdAt)

                .toUTCString()
                .split(" ")
                .slice(1, 4)
                .join(" ");
              return (
                // <p>{chatList[keyName].note}</p>;
                <Feed.Event>
                  <Feed.Label>
                    <Icon name="user circle" />
                  </Feed.Label>

                  <Feed.Content style={{ color: "red" }}>
                    <Feed.Summary>
                      <Feed.User
                        style={{ cursor: "default", color: "#DB2828" }}
                      >
                        {chatList[keyName].adminName}
                      </Feed.User>
                      <Feed.Date>{date}</Feed.Date>
                    </Feed.Summary>
                    {/* <Feed.Meta>
                      <Feed.User>Name of Customer</Feed.User>
                    </Feed.Meta> */}
                    <Feed.Extra style={{ width: "300px" }}>
                      {" "}
                      {chatList[keyName].expression}
                    </Feed.Extra>
                    _____________________________________________________________{" "}
                    <Icon
                      onClick={() => {
                        DeleteChat(chatList[keyName].id);
                      }}
                      name="x"
                      style={{ marginRight: "0px" }}
                    />{" "}
                  </Feed.Content>
                </Feed.Event>
              );
            })}
          </Feed>
        </Card.Content>
      </Card>

      <Form
        style={{
          display: "flex",
          padding: ".5rem",
          alignItems: "top",
          marginTop: "-2%",
        }}
      >
        <select
          onChange={(e) => {
            setAdminName(e.target.value);
          }}
          style={{
            height: "40px",
            width: "100%",
            backgroundColor: "lightGrey",
            borderRadius: "5px",
            border: "none",
          }}
        >
          <option>Admin Name</option>
          <option value="Dillon H.">Dillon H.</option>
          <option value="Jose R. ">Jose R. </option>
          <option value="Derek L.">Derek L.</option>
          <option value="Chris A.">Chris A.</option>
          {/* <option value="Scopes">Scopes</option> */}
        </select>
        <Input
          onChange={(e) => {
            setChatTyped(e.target.value);
          }}
          style={{ margin: "1rem", width: "90%" }}
          icon="talk"
          iconPosition="left"
          placeholder="Add Chat..."
        />

        <Button
          type="reset"
          onClick={submitChat}
          style={{ height: "40px", marginTop: "2%" }}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default AdminChat;
