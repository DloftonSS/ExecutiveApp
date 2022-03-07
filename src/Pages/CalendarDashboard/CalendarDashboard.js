import React, { useState, useEffect } from "react";
import {
  Input,
  List,
  Button,
  Checkbox,
  Grid,
  Header,
  Icon,
  Feed,
  Image,
  Modal,
  Card,
  Popup,
  Form,
  Menu,
  Segment,
  Sidebar,
} from "semantic-ui-react";
import Axios from "axios";
// import API from "../utils/API";
// import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "./CatalogDashboard.css";
import Logo from "../images/exec catalog.png";

function CalendarDashbaord() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [events, setEvents] = useState("");

  //
  //GETTING EVENTS
  const getEvents = () => {
    Axios.get("https://executive-app.herokuapp.com/events").then((response) => {
      // Axios.get("http://localhost:3001/events").then((response) => {
      setEvents(response.data);
      console.log(events);
    });
  };
  // ADD EVENT TO CALENDAR
  const AddProduct = () => {
    Axios.post("https://executive-app.herokuapp.com/addCalendarEvent", {
      // Axios.post("http://localhost:3001/addCalendarEvent", {
      title: title,
      date: date,
      location: location,
    }).then(() => {
      alert("new event added");
    });
  };

  //DELETE EVENT
  const DeleteEvent = (id) => {
    Axios.delete(
      `https://executive-app.herokuapp.com/deleteProduct/${id}`
    ).then(() => {
      // Axios.delete(`http://localhost:3001/deleteProduct/${id}`).then(() => {
      console.log("deleted");
    });
  };
  const DoTasks = () => {
    getEvents();
  };
  useEffect(() => {
    getEvents();
  });
  //
  //
  return (
    <div>
      <Row>
        <Col sm={2} className="stats-container">
          {/* .stats-container */}
          <Popup
            trigger={
              <div className="stats-box">
                {" "}
                <h1 className="stat-number">{events.length}</h1>
                <p>Calendar</p>
              </div>
            }
            content="Total items in Catalog"
            position="bottom center"
            inverted
          />
        </Col>
        <Col sm={2} className="stats-container">
          {/* .stats-container */}
          <Popup
            trigger={
              <div className="stats-box">
                {" "}
                <h1 className="stat-number">{events.length}</h1>
                <p>Accessories</p>
              </div>
            }
            content="Total posted Accessories"
            position="bottom center"
            inverted
          />
        </Col>
        <Col sm={2} className="stats-container">
          {/* .stats-container */}
          <Popup
            trigger={
              <div className="stats-box">
                {" "}
                <h1 className="stat-number">{events.length}</h1>
                <p>Ammunition</p>
              </div>
            }
            content="Total posted ammunition"
            position="bottom center"
            inverted
          />
        </Col>
        <Col sm={2} className="stats-container">
          {/* .stats-container */}
          <Popup
            trigger={
              <div className="stats-box">
                {" "}
                <h1 className="stat-number">{events.length}</h1>
                <p>Class3</p>
              </div>
            }
            content="Total posted Class3"
            position="bottom center"
            inverted
          />
        </Col>
        <Col sm={2} className="stats-container">
          {/* .stats-container */}
          <Popup
            trigger={
              <div className="stats-box">
                {" "}
                <h1 className="stat-number">{events.length}</h1>
                <p>Firearms</p>
              </div>
            }
            content="Total posted Firearms"
            position="bottom center"
            inverted
          />
        </Col>
      </Row>
      <Row id="active-requests">
        <button onClick={DoTasks} style={{ width: "200px" }}>
          Reload Data
        </button>
        <h2 className="ra-title">
          <span className="span">C</span>alendar
        </h2>
        <p className="dividing-line"></p>
        <br></br>
      </Row>
      <Row>
        <Form
          className="main-form"
          style={{
            marginTop: "0%",
            backgroundColor: "white",
            width: "80%",
            borderRadius: "5px",
            padding: "2%",
            boxShadow: "1px 2px 3px 2px black",
          }}
        >
          <h3>Add Event</h3>{" "}
          <Form.Group widths="equal">
            <Form.Field width={4}>
              <label>Title</label>
              <Input
                fluid
                placeholder="Orlando Gun Show"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </Form.Field>

            <Form.Field width={4}>
              <label>Date</label>
              <Input
                fluid
                placeholder="Saturday July 4 - 5, 9 - 5pm"
                onChange={(e) => {
                  setDate(e.target.value);
                }}
              />
            </Form.Field>
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field width={4}>
              <label>Location</label>
              <Input
                fluid
                placeholder="Centrol Florida Fair Grounds, Orlando Florida"
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
              />
            </Form.Field>
          </Form.Group>
          <Form.Group>
            <Form.Field width={4}>
              {/* <label>Image</label> */}
              <Input fluid placeholder="Upload Image"></Input>
            </Form.Field>
            <Form.Field width={4}></Form.Field>
            <Form.Field width={4} style={{ alignItems: "right" }}>
              <Button
                style={{ float: "right" }}
                type="reset"
                onClick={AddProduct}
              >
                Post Item
              </Button>
            </Form.Field>
          </Form.Group>
        </Form>
      </Row>
      <br></br>
      <Row>
        <Col className="trythis">
          {Object.keys(events).map((logs, i) => {
            return (
              <div>
                <Row>
                  <Col>{events.Title}</Col>
                  <Col>{events.Date}</Col>
                  <Col>{events.location}</Col>
                </Row>
              </div>
            );
          })}
        </Col>
      </Row>
    </div>
  );
}

export default CalendarDashbaord;
