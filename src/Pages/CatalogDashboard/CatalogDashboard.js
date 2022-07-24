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
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "./CatalogDashboard.css";
import Logo from "../images/exec catalog.png";

function CatalogDashboard() {
  const [catalog, setCatalog] = useState("");
  const [accessoriesTotal, setAccessoriesTotal] = useState("");
  const [firearmsTotal, setFirearmsTotal] = useState("");
  const [ammunitionTotal, setAmmunitionTotal] = useState("");
  const [class3Total, setClass3Total] = useState("");

  const [category, setCategory] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [upcsku, setUpcsku] = useState("");
  const [qty, setQty] = useState("");
  const [price, setPrice] = useState("");
  const [open, setOpen] = React.useState(false);

  const AddProduct = () => {
    Axios.post("https://executive-app.herokuapp.com/addProductCatalog", {
      // Axios.post("http://localhost:3001/addProductCatalog", {
      category: category,
      make: make,
      model: model,
      upcsku: upcsku,
      qty: qty,
      price: price,
    }).then(() => {
      alert("new product added");
      DoTasks();
    });
  };

  const GetCatalog = () => {
    Axios.get("https://executive-app.herokuapp.com/getCatalogNow").then(
      (response) => {
        // Axios.get("http://localhost:3001/getCatalogNow").then((response) => {
        setCatalog(response.data);
        // console.log(response.data.length);
      }
    );
  };
  //
  //**************** GETTING THE CATEGORIES TOTAL NUMBERS ****************
  //
  const GetAccessories = () => {
    Axios.get("https://executive-app.herokuapp.com/getAccessories").then(
      (response) => {
        // Axios.get("http://localhost:3001/getAccessories").then((response) => {
        setAccessoriesTotal(response.data);
      }
    );
  };
  //
  const GetFirearms = () => {
    Axios.get("https://executive-app.herokuapp.com/getFirearms").then(
      (response) => {
        // Axios.get("http://localhost:3001/getFirearms").then((response) => {
        setFirearmsTotal(response.data);
      }
    );
  };
  //
  const GetAmmunition = () => {
    Axios.get("https://executive-app.herokuapp.com/getAmmunition").then(
      (response) => {
        // Axios.get("http://localhost:3001/getAmmunition").then((response) => {
        setAmmunitionTotal(response.data);
      }
    );
  };
  //
  const GetClass3 = () => {
    Axios.get("https://executive-app.herokuapp.com/getClass3").then(
      (response) => {
        // Axios.get("http://localhost:3001/getClass3").then((response) => {
        setClass3Total(response.data);
      }
    );
  };

  //DELETE PRODUCT
  const DeleteProduct = (id) => {
    Axios.delete(
      `https://executive-app.herokuapp.com/deleteProduct/${id}`
    ).then(() => {
      // Axios.delete(`http://localhost:3001/deleteProduct/${id}`).then(() => {
      // console.log("deleted");
      DoTasks();
    });
  };
  const DoTasks = () => {
    GetCatalog();
    GetAccessories();
    GetFirearms();
    GetAmmunition();
    GetClass3();
  };
  useEffect(() => {
    // GetCatalog();
    // GetAccessories();
    // GetFirearms();
    // GetAmmunition();
    // GetClass3();
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
                <h1 className="stat-number">{catalog.length}</h1>
                <p>Catalog</p>
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
                <h1 className="stat-number">{accessoriesTotal.length}</h1>
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
                <h1 className="stat-number">{ammunitionTotal.length}</h1>
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
                <h1 className="stat-number">{class3Total.length}</h1>
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
                <h1 className="stat-number">{firearmsTotal.length}</h1>
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
        <button className="reload-btn"
          onClick={DoTasks}
          style={{ width: "200px", height: "30px", marginLeft: "50px" }}
        >
          Reload Data
        </button>
        <h2 className="ra-title">
          <span className="span">M</span>arket
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
          <h3>Add Item</h3>{" "}
          <Form.Group widths="equal">
            <Form.Field width={4}>
              <label>category</label>
              <select
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
                style={{
                  height: "35px",
                  width: "100%",
                  backgroundColor: "lightGrey",
                  borderRadius: "5px",
                  border: "none",
                }}
              >
                <option>category</option>
                <option value="Accessories">Accessories</option>
                <option value="Ammunition">Ammunition</option>
                <option value="Class3">Class 3</option>
                <option value="Firearms">Firearms</option>
              </select>
              {/* <Input
              fluid
              placeholder="Apopka, Sarasota, Ft. Lauderdale"
              onChange={(e) => {
                setStoreReg(e.target.value);
              }}
            /> */}
            </Form.Field>
            <Form.Field width={4}>
              <label>Make</label>
              <Input
                fluid
                placeholder="Ruger"
                onChange={(e) => {
                  setMake(e.target.value);
                }}
              />
            </Form.Field>

            <Form.Field width={4}>
              <label>Model</label>
              <Input
                fluid
                placeholder="Security-9 9mm 15+1 Semi Auto Pistol "
                onChange={(e) => {
                  setModel(e.target.value);
                }}
              />
            </Form.Field>
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field width={4}>
              <label>UPC / SKU</label>
              <Input
                fluid
                placeholder="16585TH924658R"
                onChange={(e) => {
                  setUpcsku(e.target.value);
                }}
              />
            </Form.Field>
            <Form.Field width={4}>
              <label>Quantity Available</label>
              <Input
                fluid
                placeholder="5"
                onChange={(e) => {
                  setQty(e.target.value);
                }}
              />
            </Form.Field>
            <Form.Field width={4}>
              <label>Price</label>
              <Input
                fluid
                placeholder="$1,250.00"
                onChange={(e) => {
                  setPrice(e.target.value);
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
          {Object.keys(catalog).map((logs, i) => {
            return (
              <div className="card-catalog-container">
                <Image wrapped ui={false} />{" "}
                <img src={Logo} className="img-height"></img>
                <Card.Content style={{ marginLeft: "5%" }}>
                  <Card.Header style={{ fontSize: "20px" }}>
                    {catalog[logs].Make}
                  </Card.Header>
                  <Card.Meta>{catalog[logs].Category}</Card.Meta>
                  <Card.Meta>{catalog[logs].Model}</Card.Meta>
                  <Card.Description style={{ color: "red" }}>
                    <span className="date">{catalog[logs].Price}</span>
                  </Card.Description>
                  <Card.Description>{catalog[logs].Sku}</Card.Description>
                </Card.Content>
                <Row>
                  {/* <Col>
                    <Modal
                      // basic
                      onClose={() => setOpen(false)}
                      onOpen={() => setOpen(true)}
                      open={open[logs]}
                      size="small"
                      trigger={<Button>Edit</Button>}
                    >
                      <Modal.Content>
                        <Row>
                         
                          <Icon
                            name="x"
                            onClick={() => {
                              DeleteProduct(catalog[logs].id);
                            }}
                          >
                            {" "}
                            Del
                          </Icon>
                        </Row>
                      </Modal.Content>
                      <Modal.Actions>
                        <Button
                          basic
                          color="red"
                          inverted
                          onClick={() => setOpen(false)}
                        >
                          <Icon name="remove" /> Done
                        </Button>
                      </Modal.Actions>
                    </Modal>
                  </Col> */}
                  <Col sm={4} style={{ marginLeft: "10px" }}>
                    <Card.Content extra>
                      <a>
                        <Icon name="thumbs up" />
                        22
                      </a>
                    </Card.Content>
                  </Col>
                  <Col sm={4}>
                    <Card.Content extra>
                      <Card.Description>
                        Qty: {catalog[logs].Quantity}
                      </Card.Description>
                    </Card.Content>
                  </Col>
                  <Col sm={2}>
                    <Card.Content extra>
                      <Icon
                        name="x"
                        onClick={() => {
                          DeleteProduct(catalog[logs].id);
                        }}
                      >
                        {" "}
                        Del
                      </Icon>
                    </Card.Content>
                  </Col>
                </Row>
              </div>
            );
          })}
        </Col>
      </Row>
    </div>
  );
}

export default CatalogDashboard;
