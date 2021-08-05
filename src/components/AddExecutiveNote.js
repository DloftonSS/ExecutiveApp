import React from "react";
import { Card, Feed, Icon, Input, Button } from "semantic-ui-react";

function AddExNote() {
  return (
    <div style={{ paddingLeft: "1%", paddingRight: "1%", width: "100%" }}>
      <Card fluid style={{ height: "100%" }}>
        <Card.Content>
          <Card.Header>New Note</Card.Header>
        </Card.Content>
        <Card.Content>
          <textarea
            // onChange={(e) => {
            //   setNoteTyped(e.target.value);
            // }}
            style={{ margin: "1rem", width: "90%", height: "150px" }}
            name="paragraph_text"
            cols="50"
            rows="10"
            icon="sticky note outline"
            iconPosition="left"
            placeholder="Add Note..."
          />
        </Card.Content>
        <Card.Content>
          <Button
            type="reset"
            secondary
            // onClick={submitNote}
          >
            Submit Note
          </Button>
        </Card.Content>
      </Card>
    </div>
  );
}

export default AddExNote;
