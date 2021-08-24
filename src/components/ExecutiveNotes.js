import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Card, Feed, Icon, Input, Button } from "semantic-ui-react";

function ExectuiveNotes(props) {
  const [noteTyped, setNoteTyped] = useState("");
  const [adminName, setAdminName] = useState("");
  const [memberName, setMemberName] = useState("");
  const [notesList, setNotesList] = useState("");

  const [searchTerm, setSearchTerm] = useState("");
  const name = props.id;

  //SUBMIT NOTE
  const submitNote = (e) => {
    Axios.post("https://executive-app.herokuapp.com/newDashboardNote", {
      // Axios.post("http://localhost:3001/newDashboardNote", {
      noteTyped: noteTyped,
      adminName: adminName,
      memberName: memberName,
    }).then(() => {
      // console.log("successful note posted");
      // reloadPage();
    });
  };
  //dfjtupd
  //DELETE NOTE
  useEffect(() => {
    Axios.get("https://executive-app.herokuapp.com/userNotes").then(
      (response) => {
        // Axios.get("http://localhost:3001/userNotes").then((response) => {
        // if (response.data)
        const userID = response.data;
        setNotesList(userID);

        // console.log(response);
        // console.log(props.memberDetails.first_name);
        // console.log("current member name is" + " " + currentName);
        // console.log(response.data);
      }
    );
  }, []);

  return (
    <div className="newMembers" style={{ padding: "1%", width: "100%" }}>
      <Card fluid style={{ maxHeight: "404px" }}>
        <Card.Content>
          <Card.Header>Executive Notes</Card.Header>
          <input
            type="text"
            placeholder="Search Name, Date, Note"
            style={{ width: "250px", height: "30px" }}
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          ></input>
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
            {Object.keys(notesList)
              .filter((keyName) => {
                if (searchTerm == "") {
                  return "";
                } else if (
                  notesList[keyName].adminName
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                  notesList[keyName].memberName
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
                ) {
                  return keyName;
                } else if (
                  notesList[keyName].note
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                  notesList[keyName].createdAt
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
                ) {
                  return keyName;
                }
              })
              .map((keyName, i) => {
                return (
                  // <p>{notesList[keyName].note}</p>;
                  <Feed.Event>
                    <Feed.Label>
                      <Icon name="user circle" />
                    </Feed.Label>

                    <Feed.Content style={{ color: "red" }}>
                      <Feed.Summary>
                        <Feed.User
                          style={{ cursor: "default", color: "#DB2828" }}
                        >
                          {notesList[keyName].adminName}
                        </Feed.User>
                        <Feed.Date>{notesList[keyName].createdAt}</Feed.Date>
                      </Feed.Summary>
                      <Feed.Meta>
                        <Feed.User> {notesList[keyName].memberName}</Feed.User>
                      </Feed.Meta>
                      <Feed.Extra style={{ width: "300px" }}>
                        {" "}
                        {notesList[keyName].note}
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
                );
              })}
          </Feed>
        </Card.Content>
      </Card>
      {/* <Card fluid>
        <Card.Content>
          <Card.Header>New Note</Card.Header>
        </Card.Content>
        <Card.Content>
          <Input
            onChange={(e) => {
              setNoteTyped(e.target.value);
            }}
            style={{ margin: "1rem", width: "90%" }}
            icon="sticky note outline"
            iconPosition="left"
            placeholder="Add Note..."
          />
        </Card.Content>
        <Card.Content>
          <Button type="reset" secondary onClick={submitNote}>
            Submit Note
          </Button>
        </Card.Content>
      </Card> */}
      <div
        style={{
          display: "flex",
          padding: ".5rem",
          alignItems: "top",
          marginTop: "1%",
        }}
      >
        <Input
          onChange={(e) => {
            setAdminName(e.target.value);
          }}
          style={{ margin: "1rem", width: "50%" }}
          icon="sticky note outline"
          iconPosition="left"
          placeholder="Admin Frist and Last"
        />

        <Input
          onChange={(e) => {
            setMemberName(e.target.value);
          }}
          style={{ margin: "1rem", width: "50%" }}
          icon="sticky note outline"
          iconPosition="left"
          placeholder="Member First and Last"
        />
      </div>{" "}
      <div
        style={{
          display: "flex",
          padding: ".5rem",
          alignItems: "top",
          // marginTop: "1%",
        }}
      >
        <textarea
          onChange={(e) => {
            setNoteTyped(e.target.value);
          }}
          style={{ margin: "1rem", width: "88%", height: "100px" }}
          icon="sticky note outline"
          iconPosition="left"
          placeholder="Add Note..."
        />
        {/* <Button type="reset" secondary onClick={submitChat}>
          Submit{" "} */}
        <div
          onClick={submitNote}
          style={{
            border: "solid black 2px",
            height: "100px",
            marginTop: "15px",
            borderRadius: "5px",
            backgroundColor: "lightgrey",
          }}
        >
          <Icon
            onClick={submitNote}
            name="arrow alternate circle up outline"
            size="big"
            style={{
              color: "black",
              marginTop: "30px",
              marginLeft: "4px",
            }}
          ></Icon>
        </div>
        {/* </Button> */}
      </div>
    </div>
  );
}

export default ExectuiveNotes;
