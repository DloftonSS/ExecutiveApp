import React, { useState, useEffect, useRef } from "react";
import {
  Button,
  Form,
  Input,
  Card,
  Table,
  Accordion,
  Icon,
  Modal,
  Header,
  Popup,
} from "semantic-ui-react";
import Axios from "axios";
import StoreHeader from "../components/Storefront/header";
import { useParams } from "react-router";
import "../components/Storefront/addMember.css";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
import { normalizeUnits } from "moment";
init("user_9MrgO9HIeQQan5hAG15a2");

function StoreFront(props) {
  const [customerFirst, setCustomerFirst] = useState("");
  const [customerMiddle, setCustomerMiddle] = useState("");
  const [customerLast, setCustomerLast] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [communication, setCommunication] = useState("");
  const [preferredStore, setPreferredStore] = useState("");
  const [requestList, setRequestList] = useState("");
  const [arrayRequests, setArrayRequests] = useState("");
  const userId = props.id; 
  const [placeBorn, setPlaceBorn] = useState("");
  const [dob, setDob] = useState("");
  const [ssn, setSsn] = useState("");
  const [ethnicity, setEthnicity] = useState("");
  const [race, setRace] = useState("");
  const [associate, setAssociate] = useState("");
  const [clerk, setClerk] = useState("");
  const [clerkRenew, setClerkRenew] = useState("");
  const [store, setStore] = useState("");
  const form = useRef();
  const card = "Pending";
  const acknowledged = "No";
  // FIND ALL MEMBERS

  const [memberList, setMemberList] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTerm1, setSearchTerm1] = useState("");
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);

  //LOGGED IN USER
  const { id } = useParams();
  const [managerDetails, setManagerDetails] = useState("");
  const getManager = () => {
    Axios.get("https://executive-app.herokuapp.com/managerData").then(
      (response) => {
        // Axios.get("http://localhost:3001/managerData").then((response) => {
        const userID = response.data;
        const result = userID.filter((userID) => userID.id == id);
        setManagerDetails(result[0]);
        setClerk(result[0].first_name + " " + result[0].last_name);
        setStore(result[0].store);
        // console.log(result);
      }
    );
  };
  //REGISTER CUSTOMER
  const submitNewCustomer = () => {
    Axios.post("https://executive-app.herokuapp.com/addMember", {
      // Axios.post("http://localhost:3001/addMember", {
      customerFirst: customerFirst,
      customerMiddle: customerMiddle,
      customerLast: customerLast,
      customerPhone: customerPhone,
      customerEmail: customerEmail,
      customerAddress: customerAddress,
      communication: communication,
      preferredStore: preferredStore,
      ssn: ssn,
      placeBorn: placeBorn,
      dob: dob,
      ethnicity: ethnicity,
      race: race,
      clerk: clerk,
      card: card,
      acknowledged: acknowledged,
    })

      .then((response, error) => { 
        GetAllmembers(); 
        alert("Submition Successful");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //RENEW CUSTOMER SET NEW DATE
  const ChangeRenewal = (id) => {
    Axios.put("https://executive-app.herokuapp.com/changeRenewal", {
      // Axios.put("http://localhost:3001/changeRenewal", {
      id: id,
    }).then((response) => {
      GetAllmembers();
      alert("Submition Successful");
      // THIS WILL UPDATE PENDING CARD AND ACKNOWWLDEGMENT 
      Axios.put("https://executive-app.herokuapp.com/pendingCardRenew", {
        // Axios.put("http://localhost:3001/pendingCardRenew", {
        id: id,
        card: card,
        acknowledged: acknowledged,
      }).then((response) => { 
        GetAllmembers();
      });
    });
  };
  //SENDING EMAIL NOTIFICATION OF EXEC SIGN UP
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        // "service_gt7pfpe",
        "service_640rs57",
        "template_nvhp8i6",
        form.current,
        "user_QGlVs4Qz8yzIHPSfomOw6"
      )
      .then(
        (result) => { 
        },
        (error) => { 
        }
      );
    e.target.reset();
  };
  //SEND RENEWAL EMAIL
  const sendRenewEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm( 
        "service_640rs57",
        "template_cpec7nh",
        form.current,
        "user_QGlVs4Qz8yzIHPSfomOw6"
      )
      .then(
        (result) => { 
        },
        (error) => { 
        }
      );
    e.target.reset();
  };
  //SEND ISSUE EMAIL
  const sendIssueEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm( 
        "service_640rs57",
        "template_95cld3x",
        form.current,
        "user_QGlVs4Qz8yzIHPSfomOw6"
      )
      .then(
        (result) => {
          alert("Your report has been submited.");
        },
        (error) => { 
        }
      );
    e.target.reset();
  };

  //UPDATE CARD PENDING STATUS
  const PendingCard = (id) => {
    Axios.put("https://executive-app.herokuapp.com/pendingCardRenew", {
      // Axios.put("http://localhost:3001/pendingCardRenew", {
      id: id,
      card: card,
    }).then((response) => { 
    });
  };
  // GET ALL MEMBERS
  const GetAllmembers = () => {
    Axios.get("https://executive-app.herokuapp.com/api/getAllMembers").then(
      (response) => {
        // Axios.get("http://localhost:3001/api/getAllMembers").then((response) => {
        setMemberList(response.data); 
      }
    );
  };
  const getMemberRequests = () => {
    Axios.get("https://executive-app.herokuapp.com/membersRequests").then(
      (response) => {
        // Axios.get("http://localhost:3001/membersRequests").then((response) => {
        const arrayRequests = response.data;
        const result = arrayRequests.filter(
          (arrayRequests) => arrayRequests.memberIdentity == memberList.number
        );
        setArrayRequests(arrayRequests);
        setRequestList(result); 
      }
    );
  };

  useEffect(() => {
    getManager();
    GetAllmembers();
    getMemberRequests();
  }, []);

  return (
    <div className="newMember" style={{ backgroundColor: "#F3F3FC" }}>
      <StoreHeader /> 
      <div
        class="dropdown"
        style={{ marginLeft: "10%", marginTop: "2%", borderRadius: "10px" }}
      >
        <button class="dropbtn">
          Hello {clerk}
          <Icon name="caret down"></Icon>
        </button>
        <div class="dropdown-content">
          <Modal
            onClose={() => setOpen2(false)}
            onOpen={() => setOpen2(true)}
            open={open2}
            trigger={
              <Button style={{ width: "100%", backgroundColor: "white" }}>
                Report an Issue{" "}
                <Icon name="warning sign" style={{ marginLeft: "5px" }}></Icon>
              </Button>
            }
            style={{
              width: "500px",
              height: "500px",
              marginLeft: "25%",
              marginTop: "10%",
            }}
          >
            <Modal.Header>Report an Issue</Modal.Header>
            <Modal.Content>
              <Modal.Description>
                <form
                  className="register-modal"
                  ref={form}
                  onSubmit={sendIssueEmail} 
                >
                  <input
                    style={{
                      color: "black",
                      border: "1px solid",
                      borderRadius: "5px",
                      padding: "10px",
                      boxShadow: "1px 2px 3px 2px #888888",
                      marginBottom: "30px",
                      marginRight: "10px",
                      width: "350px",
                    }}
                    required
                    type="text"
                    placeholder="Title"
                    name="title" 
                  />
                  <input
                    style={{
                      color: "black",
                      border: "1px solid",
                      borderRadius: "5px",
                      padding: "10px",
                      boxShadow: "1px 2px 3px 2px #888888",
                      marginBottom: "30px",
                      marginRight: "10px",
                      width: "350px",
                    }}
                    required
                    type="text"
                    placeholder="Name"
                    name="issuer name" 
                  />
                  <textarea
                    style={{
                      color: "black",
                      border: "1px solid",
                      borderRadius: "5px",
                      padding: "10px",
                      boxShadow: "1px 2px 3px 2px #888888",
                      marginBottom: "30px",
                      marginRight: "10px",
                      height: "120px",
                      width: "350px",
                    }}
                    required
                    type="text"
                    placeholder="Detailed Description of Issue"
                    name="description" 
                  ></textarea>
                  <input
                    style={{
                      color: "white",
                      backgroundColor: "#121212",
                      border: "1px solid",
                      borderRadius: "5px",
                      padding: "10px",

                      marginBottom: "30px",
                      marginRight: "10px",
                      width: "350px",
                    }}
                    type="submit"
                    value="Submit Issue"
                    onClick={submitNewCustomer}
                  />
                </form>
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions> 
              <Button
                content="Done"
                labelPosition="right"
                icon="checkmark"
                onClick={() => setOpen2(false)}
                positive
              />
            </Modal.Actions>
          </Modal>
          <a
            href="/"
            style={{
              backgroundColor: "white",
              color: "black",
              textAlign: "center",
            }}
          >
            {" "}
            Sign Out{" "}
            <Icon disabled name="sign out" style={{ marginLeft: "5px" }}></Icon>
          </a>
        </div>
      </div>
      {/* START CUSTOMER LOOK UP */}
      <h1 style={{ marginLeft: "10%" }}>Customer Look up</h1>
      <Input
        type="text"
        placeholder="Search First or Last Name"
        style={{
          width: "250px",
          height: "40px",
          marginLeft: "10%",
          boxShadow: "1px 2px 3px 2px black",
          borderRadius: "5px",
        }}
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      ></Input>
      <Card
        style={{
          width: "80%",
          marginLeft: "auto",
          marginRight: "auto",
          boxShadow: "1px 2px 3px 2px black",
        }}
      >
        <Card.Content
          style={{ overflowY: "scroll", height: "200px", marginBottom: "5%" }}
        >
          <Table celled striped color="red">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Details</Table.HeaderCell>
                <Table.HeaderCell>First Name</Table.HeaderCell>
                <Table.HeaderCell>Last Name</Table.HeaderCell> 
                <Table.HeaderCell>Date Joined</Table.HeaderCell>
                <Table.HeaderCell>Date Expiring</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {Object.keys(memberList)
                .filter((member) => {
                  if (searchTerm == "" || searchTerm == null) {
                    return "";
                  } else if (
                    memberList[member].first_name
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase()) ||
                    memberList[member].last_name
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  ) {
                    return member;
                  }
                })
                .map((member, i) => {
                  let joindate1 = new Date(memberList[member].dateJoined)
                    .toUTCString()
                    .split(" ")
                    .slice(0, 4)
                    .join(" ");
                  let expiring = new Date(memberList[member].expiring)
                    .toUTCString()
                    .split(" ")
                    .slice(0, 4)
                    .join(" ");
                  return (
                    <Table.Row
                      style={{ overflowY: "scroll", width: "100%" }}
                      key={member.id}
                    >
                      <Table.Cell>
                        {" "}
                        <Modal
                          className="members-info-modal"
                          onClose={() => setOpen(false)}
                          onOpen={() => setOpen(true)}
                          open={open[member]}
                          style={{
                            marginLeft: "25%",
                            height: "500px",
                            marginTop: "10%",
                          }}
                          trigger={
                            <Button
                              color="gray"
                              content="View"
                              style={{
                                float: "center",
                                backgroundColor: "#F3F3FC",
                                color: "black",
                                boxShadow: "1px 2px 1px 2px black",
                              }}
                            />
                          }
                        >
                          <Modal.Header>
                            Member Number: {memberList[member].number}
                          </Modal.Header>
                          <Modal.Content>
                            <Modal.Description>
                              <Header>
                                {memberList[member].first_name}{" "}
                                {memberList[member].last_name}
                              </Header>
                              <p>{memberList[member].phone}</p>
                              <p>{memberList[member].email}</p>
                              <p>{memberList[member].address}</p>
                              <p>Date Joined: {joindate1}</p>
                              <p>Date Expiring: {expiring}</p>
                            </Modal.Description>
                            {/* START CARD CONTENT FOR THE REQURST */}
                            <Card.Content
                              style={{ overflowY: "scroll", height: "100%" }}
                            >
                              <h2 style={{ marginTop: "20px" }}>
                                Members Requests
                              </h2>
                              <h3>Coming Soon!</h3>
                              <Table celled striped color="red">
                                <Table.Header>
                                  <Table.Row>
                                    <Table.HeaderCell>
                                      Category
                                    </Table.HeaderCell>
                                    <Table.HeaderCell>Item</Table.HeaderCell>
                                    <Table.HeaderCell>
                                      UPC / SKU
                                    </Table.HeaderCell>
                                    <Table.HeaderCell>
                                      Quantity
                                    </Table.HeaderCell>
                                    <Table.HeaderCell>Status</Table.HeaderCell>

                                    <Table.HeaderCell>
                                      Date Updated
                                    </Table.HeaderCell>
                                  </Table.Row>
                                </Table.Header>

                                <Table.Body>
                                  {Object.keys(requestList).map(
                                    (request, i) => {
                                      let update = new Date(
                                        requestList[request].date_updated
                                      )
                                        .toUTCString()
                                        .split(" ")
                                        .slice(0, 4)
                                        .join(" ");
                                      return (
                                        <Table.Row key={request.id}>
                                          <Table.Cell>
                                            {requestList[request].category}
                                          </Table.Cell>

                                          <Table.Cell>
                                            {requestList[request].item}
                                          </Table.Cell>
                                          <Table.Cell>
                                            {requestList[request].sku}
                                          </Table.Cell>
                                          <Table.Cell>
                                            {requestList[request].quantity}
                                          </Table.Cell>
                                          <Table.Cell>
                                            {" "}
                                            {requestList[request].status}
                                          </Table.Cell>

                                          <Table.Cell>{update}</Table.Cell>
                                          {/* <Table.Cell></Table.Cell> */}
                                        </Table.Row>
                                      );
                                    }
                                  )}
                                </Table.Body>
                              </Table>
                            </Card.Content>
                            <br></br>
                            <div className="renew-div">
                              <h1>Renew Membership</h1>
                              <h4>Associate Name *</h4>

                              <form
                                ref={form}
                                onSubmit={sendRenewEmail}
                                style={{
                                  marginRigth: "10%",
                                  width: "1500px",
                                }}
                              >
                                <input
                                  required
                                  name="clerkRenew"
                                  onChange={(e) => {
                                    setClerkRenew(e.target.value);
                                  }}
                                  placeholder="First and Last Name"
                                  style={{
                                    color: "black",
                                    border: "1px solid",
                                    borderRadius: "5px",
                                    padding: "10px",
                                    boxShadow: "1px 2px 3px 2px black",
                                    marginBottom: "30px",
                                    marginRight: "10px",
                                    width: "200px",
                                  }}
                                ></input>
                                <p>* Name REQUIRED for renewal credit.</p>
                                {/* VALUES BELOW ARE HIDEN SO THAT USERS DO NOT CHANGE THEM. THESE VALUES ARE 
                             SENT USING EMAIL.JS TO NOTIFY OFFICE THAT MEMBERSHIP HAS BEEN REMREWED.  */}
                                <input
                                  name="user_name"
                                  value={memberList[member].first_name}
                                  style={{
                                    color: "black",
                                    border: "1px solid  #BF3312",
                                    borderRadius: "5px",
                                    padding: "10px",
                                    boxShadow: "1px 5px 3px 5px #BF3312",
                                    marginBottom: "30px",
                                    marginRight: "10px",
                                    width: "200px",
                                    display: "none",
                                  }}
                                ></input>
                                <input
                                  name="user_middle"
                                  value={memberList[member].middle_name}
                                  style={{
                                    color: "black",
                                    border: "1px solid  #BF3312",
                                    borderRadius: "5px",
                                    padding: "10px",
                                    boxShadow: "1px 5px 3px 5px #BF3312",
                                    marginBottom: "30px",
                                    marginRight: "10px",
                                    width: "200px",
                                    display: "none",
                                  }}
                                ></input>
                                <br></br>
                                <input
                                  name="user_last"
                                  value={memberList[member].last_name}
                                  style={{
                                    color: "black",
                                    border: "1px solid  #BF3312",
                                    borderRadius: "5px",
                                    padding: "10px",
                                    boxShadow: "1px 5px 3px 5px #BF3312",
                                    marginBottom: "30px",
                                    marginRight: "10px",
                                    width: "200px",
                                    display: "none",
                                  }}
                                ></input>
                                <input
                                  name="user_email"
                                  value={memberList[member].email}
                                  style={{
                                    color: "black",
                                    border: "1px solid  #BF3312",
                                    borderRadius: "5px",
                                    padding: "10px",
                                    boxShadow: "1px 5px 3px 5px #BF3312",
                                    marginBottom: "30px",
                                    marginRight: "10px",
                                    width: "200px",
                                    display: "none",
                                  }}
                                ></input>
                                <br></br>
                                <input
                                  name="user_phone"
                                  value={memberList[member].phone}
                                  style={{
                                    color: "black",
                                    border: "1px solid  #BF3312",
                                    borderRadius: "5px",
                                    padding: "10px",
                                    boxShadow: "1px 5px 3px 5px #BF3312",
                                    marginBottom: "30px",
                                    marginRight: "10px",
                                    width: "200px",
                                    display: "none",
                                  }}
                                ></input>
                                <input
                                  name="store"
                                  value={store}
                                  style={{
                                    color: "black",
                                    border: "1px solid  #BF3312",
                                    borderRadius: "5px",
                                    padding: "10px",
                                    boxShadow: "1px 2px 3px 2px #BF3312",
                                    marginBottom: "30px",
                                    marginRight: "10px",
                                    width: "200px",
                                    display: "none",
                                  }}
                                ></input>
                                <br></br>
                                <Popup
                                  content="This Action Can NOT be undone."
                                  trigger={
                                    <input
                                      style={{
                                        color: "black",
                                        backgroundColor: "#F3F3FC",
                                        border: "1px solid black",
                                        borderRadius: "5px",
                                        padding: "10px",

                                        marginBottom: "30px",
                                        marginRight: "10px",
                                        boxShadow: "1px 2px 3px 2px black",
                                        width: "230px",
                                      }}
                                      type="submit"
                                      value="Renew Customer Membership"
                                      onClick={() => {
                                        ChangeRenewal(memberList[member].id);
                                      }}
                                    />
                                  }
                                ></Popup>
                              </form>
                            </div>
                          </Modal.Content> 
                          <Modal.Actions> 
                            <h1>Click outside of the box to close.</h1>
                          </Modal.Actions>
                        </Modal>
                      </Table.Cell>
                      <Table.Cell>{memberList[member].first_name}</Table.Cell> 
                      <Table.Cell> {memberList[member].last_name}</Table.Cell> 
                      <Table.Cell>{joindate1}</Table.Cell>
                      <Table.Cell>{expiring}</Table.Cell>
                    </Table.Row>
                  );
                })}
            </Table.Body>
          </Table>
        </Card.Content>
      </Card>
      <br></br>
    
      <br></br>
      {/* REGISTER NEW CUSTOMER */}
      <form
        className="register-modal"
        ref={form}
        onSubmit={sendEmail} 
      >
        {" "}
        <h2>Sign Up Form</h2>
        <input
          style={{
            color: "black",
            border: "1px solid",
            borderRadius: "5px",
            padding: "10px",
            boxShadow: "1px 2px 3px 2px #888888",
            marginBottom: "30px",
            marginRight: "10px",
            width: "350px",
          }}
          required
          type="text"
          placeholder=" * First name"
          name="user_name"
          onChange={(e) => {
            setCustomerFirst(e.target.value);
          }}
        />
        <input
          style={{
            color: "black",
            border: "1px solid",
            borderRadius: "5px",
            padding: "10px",
            boxShadow: "1px 5px 3px 5px #888888",
            marginBottom: "30px",
            marginRight: "10px",
            width: "350px",
          }}
          required
          type="text"
          placeholder=" * Middle name"
          name="user_middle"
          onChange={(e) => {
            setCustomerMiddle(e.target.value);
          }}
        />
        <input
          required
          style={{
            color: "black",
            border: "1px solid",
            borderRadius: "5px",
            padding: "10px",
            boxShadow: "1px 5px 3px 5px #888888",
            marginBottom: "30px",
            marginRight: "10px",
            width: "350px",
          }}
          placeholder=" * Last name"
          type="text"
          name="user_last"
          onChange={(e) => {
            setCustomerLast(e.target.value);
          }}
        />
        <input
          required
          style={{
            color: "black",
            border: "1px solid",
            borderRadius: "5px",
            padding: "10px",
            boxShadow: "1px 5px 3px 5px #888888",
            marginBottom: "30px",
            marginRight: "10px",
            width: "350px",
          }}
          placeholder=" * Email"
          type="email"
          name="user_email"
          onChange={(e) => {
            setCustomerEmail(e.target.value);
          }}
        />
        <br></br>
        <input
          required
          style={{
            color: "black",
            border: "1px solid",
            borderRadius: "5px",
            padding: "10px",
            boxShadow: "1px 5px 3px 5px #888888",
            marginBottom: "30px",
            marginRight: "10px",
            width: "350px",
          }}
          type="text"
          placeholder=" * Phone Number"
          name="user_phone"
          onChange={(e) => {
            setCustomerPhone(e.target.value);
          }}
        />
        <input
          required
          style={{
            color: "black",
            border: "1px solid",
            borderRadius: "5px",
            padding: "10px",
            boxShadow: "1px 5px 3px 5px #888888",
            marginBottom: "30px",
            marginRight: "10px",
            width: "350px",
          }}
          type="text"
          placeholder=" * Address"
          name="user_address"
          onChange={(e) => {
            setCustomerAddress(e.target.value);
          }}
        />
        <select
          onChange={(e) => {
            setCommunication(e.target.value);
          }}
          style={{
            height: "40px",
            width: "350px",
            backgroundColor: "lightGrey",
            borderRadius: "5px",
            border: "none",
            marginRight: "10px",
            boxShadow: "1px 5px 3px 5px #888888",
          }}
        >
          <option>Communication Style</option>
          <option value="Phone only">Phone Only</option>
          <option value="Email Only">Email Only</option>
          <option value="Both">Both</option>
        </select>
        <select
          onChange={(e) => {
            setPreferredStore(e.target.value);
          }}
          style={{
            height: "40px",
            width: "350px",
            backgroundColor: "lightGrey",
            borderRadius: "5px",
            border: "none",
            boxShadow: "1px 5px 3px 5px #888888",
          }}
        >
          <option>Preferred Store</option>
          <option value="Apopka">Apopka</option>
          <option value="Casselberry">Casselberry</option>
          <option value="Clearwater">Clearwater</option>
          <option value="Fort Lauderdale">Fort Lauderdale</option>
          <option value="Fort Myers">Fort Myers</option>
          <option value="Lakeland">Lakeland</option>
          <option value="Sarasota">Sarasota</option>
          <option value="Tampa">Tampa</option>
          <option value="West Palm Beach">West Palm Beach</option>
        </select>
        <br></br>
        <input
          className="placeBorn"
          style={{
            color: "black",
            border: "1px solid",
            borderRadius: "5px",
            padding: "10px",
            boxShadow: "1px 5px 3px 5px #888888",
            marginBottom: "30px",
            marginRight: "10px",
            width: "350px",
          }}
          type="text"
          placeholder="Place of Birth: Orlando, Florida USA"
          name="user_birthPlace"
          onChange={(e) => {
            setPlaceBorn(e.target.value);
          }}
        />
        <input
          className="dob"
          required
          style={{
            color: "black",
            border: "1px solid",
            borderRadius: "5px",
            padding: "10px",
            boxShadow: "1px 5px 3px 5px #888888",
            marginBottom: "30px",
            marginRight: "10px",
            width: "350px",
          }}
          type="text"
          placeholder=" * D.O.B. July 4, 1977"
          name="user_birth"
          onChange={(e) => {
            setDob(e.target.value);
          }}
        />
        <input
          style={{
            color: "black",
            border: "1px solid",
            borderRadius: "5px",
            padding: "10px",
            boxShadow: "1px 5px 3px 5px #888888",
            marginBottom: "30px",
            marginRight: "10px",
            width: "350px",
          }}
          type="text"
          placeholder="SSN: Optional"
          name="user_ssn"
          onChange={(e) => {
            setSsn(e.target.value);
          }}
        />
        <input
          style={{
            color: "black",
            border: "1px solid",
            borderRadius: "5px",
            padding: "10px",
            boxShadow: "1px 5px 3px 5px #888888",
            marginBottom: "30px",
            marginRight: "10px",
            width: "350px",
          }}
          type="text"
          placeholder="Ethnicity: Japanese American, African American, European"
          name="user_ethnicity"
          onChange={(e) => {
            setEthnicity(e.target.value);
          }}
        />
        <br></br>
        <input
          style={{
            color: "black",
            border: "1px solid",
            borderRadius: "5px",
            padding: "10px",
            boxShadow: "1px 5px 3px 5px #888888",
            marginBottom: "30px",
            marginRight: "10px",
            width: "350px",
          }}
          type="text"
          placeholder="Race: Black, Hispanic, White"
          name="user_race"
          onChange={(e) => {
            setRace(e.target.value);
          }}
        />
        <input
          required
          style={{
            color: "black",
            border: "1px solid",
            borderRadius: "5px",
            padding: "10px",
            boxShadow: "1px 5px 3px 5px #888888",
            marginBottom: "30px",
            marginRight: "10px",
            width: "350px",
          }}
          name="clerk"
          // value={clerk}
          placeholder=" * Associate Name"
        />
        <input
          style={{
            color: "black",
            border: "1px solid",
            borderRadius: "5px",
            padding: "10px",
            boxShadow: "1px 5px 3px 5px #888888",
            marginBottom: "30px",
            marginRight: "10px",
            width: "350px",
          }}
          name="store"
          value={store}
          onChange={(e) => {
            setClerk(e.target.value);
          }}
        />
        <input
          style={{
            color: "black",
            backgroundColor: "lightgreen",
            border: "1px solid",
            borderRadius: "5px",
            padding: "10px",
            boxShadow: "1px 5px 3px 5px darkgreen",
            marginBottom: "30px",
            marginRight: "10px",
            width: "350px",
          }}
          type="submit"
          value="Register Customer"
          onClick={submitNewCustomer}
        />
        <p>* required fields are labeled with a Star - * </p>
        <p>* Verify all information is correct. </p>
        <p>* Associate name required to receive credit for sign up. </p>
      </form>
      <footer></footer>
    </div>
  );
}

export default StoreFront;
