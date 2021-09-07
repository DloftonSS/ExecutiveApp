import { Card, Feed, Icon, Input, Button } from "semantic-ui-react";
import React, { useState, useEffect } from "react";
import Axios from "axios";

function DashboardNotes() {
  const [noteTyped, setNoteTyped] = useState("");
  const [notesList, setNotesList] = useState("");

  //SUBMIT NOTE
  const submitNote = (e) => {
    Axios.post("https://executive-app.herokuapp.com/newDashboardNote", {
      // Axios.post("http://localhost:3001/newDashboardNote", {
      noteTyped: noteTyped,
    }).then(() => {
      // console.log("successful note posted");
      // reloadPage();
    });
  };

  //DELETE NOTE
  const Deletenote = (id) => {
    Axios.delete(`https://executive-app.herokuapp.com/deleteNote/${id}`).then(
      () => {
        // Axios.delete(`http://localhost:3001/deleteNote/${id}`).then(() => {
        console.log("deleted");
      }
    );
  };
  useEffect(() => {
    Axios.get("https://executive-app.herokuapp.com/api/get").then(
      (response) => {
        // Axios.get("http://localhost:3001/api/get").then((response) => {
        setNotesList(response.data);
        // console.log(response.data);
      }
    );
  }, []);

  return (
    <div className="newMembers" style={{ padding: "1%", width: "100%" }}>
      <Card fluid style={{ maxHeight: "660px" }}>
        <Card.Content>
          <Card.Header>All Notes</Card.Header>
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
            {Object.keys(notesList).map((keyName, i) => {
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
                      <Feed.User>{notesList[keyName].memberName}</Feed.User>
                    </Feed.Meta>
                    <Feed.Extra style={{ width: "300px" }}>
                      {" "}
                      {notesList[keyName].note}
                    </Feed.Extra>
                    ____________________________________________________________________________________________{" "}
                    {/* Delete */}
                    {/* <button
                      onClick={() => {
                        Deletenote(notesList[keyName].id);
                      }}
                    > */}
                    <Icon
                      onClick={() => {
                        Deletenote(notesList[keyName].id);
                      }}
                      name="x"
                      style={{ marginRight: "0px" }}
                    />{" "}
                    {/* </button> */}
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
    </div>
  );
}

export default DashboardNotes;
