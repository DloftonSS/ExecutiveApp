import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router";
import { Card, Feed, Icon, Input, Button, Form } from "semantic-ui-react";

function ExectuiveNotes(props) {
  const [noteTyped, setNoteTyped] = useState("");
  const [adminName, setAdminName] = useState("");
  const [memberName, setMemberName] = useState("");
  const [notesList, setNotesList] = useState("");

  const [searchTerm, setSearchTerm] = useState("");

  const { id } = useParams();

  //GET USER NOTES
  const getMemberNotes = () => {
    Axios.get("https://executive-app.herokuapp.com/userNotes").then(
      (response) => {
        // Axios.get("http://localhost:3001/userNotes").then((response) => {
        const arrayNotes = response.data;
        const result = arrayNotes.filter(
          (arrayNotes) => arrayNotes.memberIdentity == id
        );
        setNotesList(result);
        console.log(result);
      }
    );
  };

  //SUBMIT NOTE
  const submitNote = (e) => {
    Axios.post("https://executive-app.herokuapp.com/newDashboardNote", {
      // Axios.post("http://localhost:3001/newDashboardNote", {
      noteTyped: noteTyped,
      adminName: adminName,
      memberName: memberName,
      id: id,
    }).then(() => {
      getMemberNotes();
    });
  };

  //DELETE NOTE
  const Deletenote = (id) => {
    Axios.delete(`https://executive-app.herokuapp.com/deleteNote/${id}`).then(
      () => {
        // Axios.delete(`http://localhost:3001/deleteNote/${id}`).then(() => {
        getMemberNotes();
      }
    );
  };

  useEffect(() => {
    getMemberNotes();
  }, []);

  return (
    <div
      className="newMembers"
      style={{ padding: "1%", width: "100%", backgroundColor: "black" }}
    >
      <Card fluid style={{ height: "600px" }}>
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
            {Object.keys(notesList).map((keyName, i) => {
              let date = new Date(notesList[keyName].createdAt)
                .toUTCString()
                .split(" ")
                .slice(0, 4)
                .join(" ");
              return (
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
                      <Feed.Date>{date}</Feed.Date>
                    </Feed.Summary>
                    <Feed.Meta>
                      <Feed.User> {notesList[keyName].memberName}</Feed.User>
                    </Feed.Meta>
                    <Feed.Extra style={{ width: "300px" }}>
                      {" "}
                      {notesList[keyName].note}
                    </Feed.Extra>
                    ________________________________________________________________{" "}
                    <Icon
                      name="x"
                      style={{ marginRight: "0px" }}
                      onClick={() => {
                        Deletenote(notesList[keyName].id);
                      }}
                    />{" "}
                  </Feed.Content>
                </Feed.Event>
              );
            })}
          </Feed>
        </Card.Content>

        <Card.Content>
          <Form
            style={{
              backgroundColor: "white",
              border: "none",
              padding: "0px",
              marginLeft: "0",
              width: "100%",
            }}
          >
            <Form.Group widths="equal" style={{ height: "50px" }}>
              <Form.Input
                onChange={(e) => {
                  setAdminName(e.target.value);
                }}
                icon="user circle"
                iconPosition="left"
                placeholder="Admin Frist and Last"
              />
              <Form.Input
                onChange={(e) => {
                  setMemberName(e.target.value);
                }}
                icon="user circle"
                iconPosition="left"
                placeholder="Member First and Last"
              />
            </Form.Group>

            <textarea
              onChange={(e) => {
                setNoteTyped(e.target.value);
              }}
              style={{ margin: "1px", width: "88%", height: "100px" }}
              icon="sticky note outline"
              iconPosition="left"
              placeholder="Add Note..."
            />
            <Button type="reset" onClick={submitNote}>
              Submit
            </Button>
          </Form>
        </Card.Content>
      </Card>
    </div>
  );
}

export default ExectuiveNotes;
