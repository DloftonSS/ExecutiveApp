import React from "react";
import { Card, Feed, Icon, Input, Button } from "semantic-ui-react";

function ExectuiveNotes() {
  return (
    <div style={{ padding: "1%", width: "100%" }}>
      <Card fluid style={{ height: "100%" }}>
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
                  <Feed.Date>{/* {notesList[keyName].createdAt} */}</Feed.Date>
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
    </div>
  );
}

export default ExectuiveNotes;
