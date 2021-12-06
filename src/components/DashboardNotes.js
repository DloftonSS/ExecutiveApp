import { Card, Feed, Icon, Input, Button } from "semantic-ui-react";
import React, { useState, useEffect } from "react";
import "./DashNotes.css";
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

  //GET ALL THE NOTES
  const GetNotes = () => {
    Axios.get("https://executive-app.herokuapp.com/api/get").then(
      (response) => {
        // Axios.get("http://localhost:3001/api/get").then((response) => {
        setNotesList(response.data);
        // console.log(response.data);
      }
    );
  };

  //DELETE NOTE
  const Deletenote = (id) => {
    Axios.delete(`https://executive-app.herokuapp.com/deleteNote/${id}`).then(
      () => {
        // Axios.delete(`http://localhost:3001/deleteNote/${id}`).then(() => {
        console.log("deleted");
        GetNotes();
      }
    );
  };
  useEffect(() => {
    GetNotes();
  }, []);

  return (
    <div
      className="allNotes"
      style={{ padding: "1%", width: "100%", backgroundColor: "black" }}
    >
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
                        {notesList[keyName].noteHeader}
                      </Feed.User>
                      <Feed.Date>{notesList[keyName].createdAt}</Feed.Date>
                    </Feed.Summary>
                    <Feed.Meta>
                      <Feed.User>
                        {/* <Link
                        style={{ color: "black" }}
                        to={`/executiveAccount/${memberList[member].id}`}
                      ></Link> */}
                        {notesList[keyName].memberName} {""}
                        {/* {notesList[keyName].memberIdentity} */}
                      </Feed.User>
                    </Feed.Meta>
                    <Feed.Extra
                      style={{
                        width: "300px",
                      }}
                    >
                      {" "}
                      {notesList[keyName].note}
                      {notesList[keyName].newFirst}
                      {notesList[keyName].newMiddle}
                      {notesList[keyName].newLast}
                      {notesList[keyName].newPhone}
                      {notesList[keyName].newEmail}
                      {notesList[keyName].newAddress}
                      {notesList[keyName].newPassword}
                      {notesList[keyName].newCard}
                      {notesList[keyName].newStore}
                      {notesList[keyName].newCommunication}
                      {notesList[keyName].newBorn}
                      {notesList[keyName].newDob}
                      {notesList[keyName].newSsn}
                      {notesList[keyName].newEthnicity}
                      {notesList[keyName].newRace}
                      <p
                        style={{
                          color: "gray",
                        }}
                      >
                        {notesList[keyName].requestNote}
                      </p>
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
