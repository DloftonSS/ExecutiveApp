import { Card, Table, Feed, Icon, Input, Button } from "semantic-ui-react";
import React, { useState, useEffect } from "react";
import Axios from "axios";

function DashboardNotes() {
  const [noteTyped, setNoteTyped] = useState("");
  const [notesList, setNotesList] = useState("");

  const submitNote = (e) => {
    Axios.post("http://executive-app.herokuapp.com/newDashboardNote", {
      noteTyped: noteTyped,
    }).then(() => {
      console.log("successful note posted");
    });
  };

  useEffect(() => {
    Axios.get("http://executive-app.herokuapp.com/api/get").then((response) => {
      setNotesList(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <div className="newMembers">
      <Card fluid style={{ maxHeight: "350px" }}>
        <Card.Content>
          <Card.Header>Notes</Card.Header>
        </Card.Content>
        <Card.Content
          style={{
            overflowY: "scroll",
            scrollbarWidth: "1px",
            height: "100%",
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

                  <Feed.Content>
                    <Feed.Summary>
                      <Feed.User
                        style={{ cursor: "default", color: "#DB2828" }}
                      >
                        Name of Admin
                      </Feed.User>
                      <Feed.Date>Date</Feed.Date>
                    </Feed.Summary>
                    <Feed.Meta>
                      <Feed.User>Name of Customer</Feed.User>
                    </Feed.Meta>
                    <Feed.Extra style={{ width: "300px" }}>
                      {" "}
                      {notesList[keyName].note}
                    </Feed.Extra>
                  </Feed.Content>
                </Feed.Event>
              );
            })}
          </Feed>
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Card.Header>New Note</Card.Header>
        </Card.Content>
        <Card.Content>
          <Input
            onChange={(e) => {
              setNoteTyped(e.target.value);
            }}
            style={{ margin: "1rem" }}
            icon="sticky note outline"
            // action={{
            //   icon: "add",
            //   onClick: () => handleClick(),
            // }}
            iconPosition="left"
            placeholder="Add Note..."
            // value={note}
            // onChange={(event) => handleChange(event)}
          />
        </Card.Content>
        <Card.Content>
          <Button secondary onClick={submitNote}>
            Submit Note
          </Button>
        </Card.Content>
      </Card>
    </div>
  );
}

export default DashboardNotes;
