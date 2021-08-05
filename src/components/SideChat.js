import React from "react";
import {
  Checkbox,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
} from "semantic-ui-react";
import DashboadNotes from "../components/DashboardNotes";
import AdminChat from "../components/Chat/Chat";

function SideChat() {
  const [visible, setVisible] = React.useState(false);

  return (
    <div className="newMembers" style={{ padding: "1%", width: "100%" }}>
      <Grid columns={1}>
        <Grid.Column
          style={{
            backgroundColor: "lightGrey",
            border: "solid black 2px",
            borderRadius: "5px",
            marginTop: "15px",
          }}
        >
          <Checkbox
            checked={visible}
            label={{ children: <code>Show/hide Chat</code> }}
            onChange={(e, data) => setVisible(data.checked)}
          />
        </Grid.Column>

        <Grid.Column>
          <Sidebar.Pushable as={Segment}>
            <Sidebar
              as={Menu}
              animation="overlay"
              icon="labeled"
              inverted
              onHide={() => setVisible(false)}
              vertical
              visible={visible}
              width="very wide"
            >
              <AdminChat />
              {/* <Menu.Item as="a">
                <Icon name="home" />
                Home
              </Menu.Item>
              <Menu.Item as="a">
                <Icon name="gamepad" />
                Games
              </Menu.Item>
              <Menu.Item as="a">
                <Icon name="camera" />
                Channels
              </Menu.Item> */}
            </Sidebar>
            <Sidebar.Pusher style={{ height: "600px" }}>
              <Segment basic>
                {/* <Header as="h3">Application Content</Header> */}
                <DashboadNotes />
              </Segment>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default SideChat;
