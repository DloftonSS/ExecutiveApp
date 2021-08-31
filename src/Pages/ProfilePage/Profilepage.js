import React from "react";
import {
  Card,
  Checkbox,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
} from "semantic-ui-react";
import Albert from "./Albert.png";

import "./Profilepage.css";

const Profile = () => {
  const [visible, setVisible] = React.useState(false);

  return (
    <div className="newMembers" style={{ padding: "1%", width: "100%" }}>
      <h1>Profile page</h1>

      <Card className="main">
        <Card.Header>Hello Derek</Card.Header>
        <Card.Content>
          <img src={Albert}></img>
        </Card.Content>
      </Card>

      <Grid columns={1}>
        <Grid.Column>
          <Checkbox
            checked={visible}
            label={{ children: <code>visible</code> }}
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
              width="thin"
            >
              <Menu.Item as="a">
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
              </Menu.Item>
            </Sidebar>

            <Sidebar.Pusher>
              <Segment basic>
                <Header as="h3">Application Content</Header>
                <p></p>
              </Segment>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default Profile;
