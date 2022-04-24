const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const multer = require("multer");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();
const db = require("./config/db");
const { APPCENTER } = require("ci-info");
// const db1 = require("./models/Members");
// const { sequelize } = require("../models");
// const { QueryTypes, DATE } = require("sequelize");

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("./public"));

app.post("", (req, res) => {
  let sampleFile;
  let uploadPath;

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }

  // name of the imput is sampleFile
  sampleFile = req.files.samepleFile;
  uploadPath = __dirname + "/upload/" + sampleFile.name;
  console.log(sampleFile);

  // us mv() to place file on the server
  sampleFile.mv(uploadPath, function (err) {
    if (err) return res.status(500).send(err);

    res.send("file uploaded");
  });
});
//
//REGISTER A MEMBER
app.post("/register", (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;
  const role = req.body.role;
  const store = req.body.store;

  db.query(
    "INSERT INTO users (first_name, last_name, email, password, role, store) VALUES (?, ?, ?, ?, ?, ?)",
    [firstName, lastName, email, password, role, store],
    (err, result) => {
      console.log(err);
    }
  );
});

// ADMIN ACKNOWLEDGED NEW MEMBER
app.put("/adminResponded", (req, res) => {
  const notification = req.body.acknowledged;
  const id = req.body.id;
  db.query(
    "UPDATE members SET acknowledged = ? WHERE id = ?",
    [notification, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        // console.log(result);
      }
    }
  );
});
// GET THE CUSTOMERS THAT NEED CONTACT
app.get("/getNeedContact", (req, res) => {
  const sqlSelect =
    "SELECT * FROM Members WHERE acknowledged = 'No' ORDER BY id DESC LIMIT 100";
  db.query(sqlSelect, (err, result) => {
    // console.log(result);
    res.send(result);
  });
  ``;
});
//GET PENDING CARD MEMBERS
app.get("/PendingCardMembers", (req, res) => {
  const sqlSelect =
    "SELECT * FROM Members WHERE card = 'Pending' ORDER BY id DESC LIMIT 50";
  db.query(sqlSelect, (err, result) => {
    // console.log(result);
    res.send(result);
  });
  ``;
});

// NEW FIRST NAME IN NOTES
app.post("/newFirst", (req, res) => {
  const memberName = req.body.memberName;
  const id = req.body.id;
  const newFirstName = "Changed First Name" + ": " + req.body.newFirstName;
  const sqlInsert =
    "INSERT INTO Notes (memberName, memberIdentity, newFirst, createdAt) VALUES (?, ?, ?, NOW())";
  db.query(sqlInsert, [memberName, id, newFirstName], (err, result) => {
    console.log(err);
  });
});
// NEW Middle NAME IN NOTES
app.post("/newMiddle", (req, res) => {
  const memberName = req.body.memberName;
  const id = req.body.id;
  const newMiddleName = "Changed Middle Name" + ": " + req.body.newMiddleName;
  const sqlInsert =
    "INSERT INTO Notes (memberName, memberIdentity, newMiddle, createdAt) VALUES (?, ?, ?, NOW())";
  db.query(sqlInsert, [memberName, id, newMiddleName], (err, result) => {
    console.log(err);
  });
});
// NEW LAST NAME IN NOTES
app.post("/newLast", (req, res) => {
  const memberName = req.body.memberName;
  const id = req.body.id;
  const newLastName = "Changed Last Name" + ": " + req.body.newLastName;
  const sqlInsert =
    "INSERT INTO Notes (memberName, memberIdentity, newLast, createdAt) VALUES (?, ?, ?, NOW())";
  db.query(sqlInsert, [memberName, id, newLastName], (err, result) => {
    console.log(err);
  });
});

// NEW Card status IN NOTESyes
app.post("/newCard", (req, res) => {
  const memberName = req.body.memberName;
  const id = req.body.id;
  const newCardStatus = "Updated Card Status" + ": " + req.body.newCardStatus;
  const sqlInsert =
    "INSERT INTO Notes (memberName, memberIdentity, newCard, createdAt) VALUES (?, ?, ?, NOW())";
  db.query(sqlInsert, [memberName, id, newCardStatus], (err, result) => {
    console.log(err);
  });
});

// NEW Card status IN NOTES
app.post("/deletedNotification", (req, res) => {
  const memberName = req.body.memberName;
  const id = req.body.id;
  const newCardStatus = "Member Account Deleted";
  const sqlInsert =
    "INSERT INTO Notes (memberName, memberIdentity, newCard, createdAt) VALUES (?, ?, ?, NOW())";
  db.query(sqlInsert, [memberName, id, newCardStatus], (err, result) => {
    console.log(err);
  });
});

// NEW DASHBOARD NOTE
app.post("/newDashboardNote", (req, res) => {
  const noteTyped = req.body.noteTyped;
  const memberName = req.body.memberName;
  const adminName = req.body.adminName;
  const id = req.body.id;

  const sqlInsert =
    "INSERT INTO Notes (note, adminName, memberName, memberIdentity, createdAt) VALUES (?, ?, ?, ?, NOW())";
  db.query(sqlInsert, [noteTyped, adminName, memberName, id], (err, result) => {
    console.log(err);
  });
});
// NEW MEMBER MESSAGE
app.post("/newMessageMember", (req, res) => {
  const messageTyped = req.body.messageTyped;
  const senderName = req.boby.senderName;
  // const memberIdentity = req.body.memberIdentity;
  const id = req.body.id;

  const sqlInsert =
    "INSERT INTO Messages (Message, SenderName, memberIdentity, Date) VALUES (?, ?, ?, NOW())";
  db.query(sqlInsert, [messageTyped, senderName, id], (err, result) => {
    console.log(err);
  });
});

// MESSAGE FROM MEMBER PROFILE
app.post("/sendMessageProfile", (req, res) => {
  const messageTyped = req.body.messageTyped;
  const senderName = req.body.senderName;

  const id = req.body.id;

  const sqlInsert =
    "INSERT INTO Messages (Message, SenderName, memberIdentity, Date) VALUES (?, ?, ?, NOW())";
  db.query(sqlInsert, [messageTyped, senderName, id], (err, result) => {
    console.log(err);
  });
});
// ADD CALENDAR EVENT
app.post("/addCalendarEvent", (req, res) => {
  const title = req.body.title;
  const date = req.body.date;
  const location = req.body.location;

  const id = req.body.id;

  const sqlInsert =
    "INSERT INTO events (Title, Date, location) VALUES (?, ?, ?)";
  db.query(sqlInsert, [title, date, location], (err, result) => {
    console.log(err);
  });
});

// ADDING MARKET ITEM TO REQUESTS
// app.post("/marketCart", (req, res) => {
//   const messageTyped = req.body.messageTyped;
//   const senderName = req.body.senderName;

//   const id = req.body.id;

//   const sqlInsert =
//     "INSERT INTO Requests (catgory, item, brand, quantity, status, sku, memberName, user_id, memberIdentity, price, date_created) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())";
//   db.query(sqlInsert, [messageTyped, senderName, id], (err, result) => {
//     console.log(err);
//   });
// });
// ADDING MARKET ITEM TO REQUESTS
app.post("/marketCart", (req, res) => {
  // const messageTyped = req.body.messageTyped;
  const custName = req.body.custName;
  const memberID = req.body.memberId;
  const id = req.body.id;

  const sqlInsert =
    // "INSERT INTO Requests (category, item, brand, sku, price) SELECT Category, Model, Make, Sku, Price FROM Catalog WHERE id = ?";
    "INSERT INTO Requests (category, item, brand, sku, price, quantity, status, memberName, user_id, memberIdentity, date_created) SELECT Category, Model, Make, Sku, Price, '1', 'PENDING', ?, ?, ?, NOW() FROM Catalog WHERE id = ?";
  db.query(sqlInsert, [custName, memberID, memberID, id], (err, result) => {
    console.log(err);
  });
});
// app.post("/sendName", (req, res) => {
//   // const messageTyped = req.body.messageTyped;
//   // const custName = req.body.custName;
//   const memberID = req.body.memberId;
//   const id = req.body.id;

//   const sqlInsert = "INSERT INTO Requests (memberIdentity) VALUES (?)";

//   db.query(sqlInsert, [memberID], (err, result) => {
//     console.log(err);
//   });
// });

// MEMBER DETAIL CHANGE
// app.post("/detailChange", (req, res) => {
//   const noteTyped = req.body.noteTyped;
//   const memberName = req.body.memberName;
//   const id = req.body.id;
//   const newFirstName = req.body.newFirstname;
//   const newMiddleName = req.body.newMiddleName;
//   const newLastName = req.body.newLastName;
//   const newPhone = req.body.newPhone;
//   const newEmail = req.body.newEmail;
//   const newAddress = req.body.newAddress;
//   const newPassword = req.body.newPassword;
//   const newCardStatus = req.body.newCardStatus;
//   const newPreferredStore = req.body.newPreferredStore;
//   const newCommunication = req.body.newCommunication;
//   const newPlaceBorn = req.body.newPlaceBorn;
//   const newDob = req.body.newDob;
//   const newSsn = req.body.newSsn;
//   const newEthnicity = req.body.newEthnicity;
//   const newRace = req.body.newRace;

//   const sqlInsert =
//     "INSERT INTO Notes (note, memberName, memberIdentity, newFirst, newMiddle, newLast, newPhone, newEmail, newAddress, newPassword, newCard, newStore, newCommunication, newBorn, newDob, newSsn, newEthnicity, newRace, createdAt) VALUES (?, ?, ?, 'First Name Changed', 'Middle Name Changed', 'Last Name Changed', 'Phone Number Changed', 'Email Changed', 'Address Changed', 'Password Changed', 'Card Status Changed', 'Preferred Store Changed', 'Communication Style Changed', 'Place Born Changed', 'D.O.B. Changed', 'SSN Changed', 'Ethnicity Changed', 'Race Changed ',  NOW())";
//   db.query(
//     sqlInsert,
//     [
//       noteTyped,
//       memberName,
//       id,
//       newFirstName,
//       newMiddleName,
//       newLastName,
//       newPhone,
//       newEmail,
//       newAddress,
//       newPassword,
//       newCardStatus,
//       newPreferredStore,
//       newCommunication,
//       newPlaceBorn,
//       newDob,
//       newSsn,
//       newEthnicity,
//       newRace,
//     ],
//     (err, result) => {
//       console.log(err);
//     }
//   );
// });
//REQUEST NOTE
app.post("/requestNote", (req, res) => {
  const newNote = req.body.note;
  const memberName = req.body.memberName;
  const noteHeader = req.body.noteHeader;
  const id = req.body.id;

  const sqlInsert =
    "INSERT INTO Notes (requestNote, memberName, noteHeader, memberIdentity, createdAt) VALUES (?, ?, ?, ?, NOW()) ";
  db.query(sqlInsert, [newNote, memberName, noteHeader, id], (err, result) => {
    console.log(err);
    // console.log("user ID is " + memberName);
  });
});

// GET DASHBOARD NOTES
app.get("/api/get", (req, res) => {
  const sqlSelect = "SELECT * FROM Notes ORDER BY id DESC";
  db.query(sqlSelect, (err, result) => {
    // console.log(result);
    res.send(result);
  });
  ``;
});

//GET USER SPECIFIC NOTES
app.get("/userNotes", (req, res) => {
  // const awesomeID = req.body.awesomeID;
  const id = req.body.id;
  const sqlSelect = "SELECT * FROM Notes ";
  // "SELECT id, note, adminName, memberName, createdAt, requestNote, memberIdentity FROM Notes ";
  // WHERE memberIdentity = 23

  db.query(sqlSelect, [id], (err, result) => {
    // console.log(result);
    res.send(result);
  });
  ``;
});
//GET USER SPECIFIC MESSAGES
app.get("/getMessagesMembers", (req, res) => {
  // const awesomeID = req.body.awesomeID;
  const id = req.body.id;
  const sqlSelect = "SELECT * FROM Messages ";
  // "SELECT id, note, adminName, memberName, createdAt, requestNote, memberIdentity FROM Notes ";
  // WHERE memberIdentity = 23

  db.query(sqlSelect, [id], (err, result) => {
    // console.log(result);
    res.send(result);
  });
  ``;
});

//ADMIN CHAT POST
app.post("/postChat", (req, res) => {
  const chatTyped = req.body.chatTyped;
  const adminName = req.body.adminName;

  const sqlInsert =
    "INSERT INTO Chat (expression, adminName, createdAt) VALUES (?, ?, NOW())";
  db.query(sqlInsert, [chatTyped, adminName], (err, result) => {
    console.log(err);
  });
});
//ADMIN CHAT GET
app.get("/chat", (req, res) => {
  const sqlSelect = "SELECT * FROM Chat ORDER BY id DESC";
  db.query(sqlSelect, (err, result) => {
    // console.log(result);
    res.send(result);
  });
  ``;
});

//DELETE NOTE
app.delete("/deleteNote/:id", (req, res) => {
  const note = req.params.id;
  const sqlDelete = "DELETE FROM Notes WHERE id = ?";

  db.query(sqlDelete, note, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log("success");
      res.send(result);
    }
  });
});

//DELETE NOTE
app.delete("/deleteChat/:id", (req, res) => {
  const chatTyped = req.params.id;
  const sqlDelete = "DELETE FROM Chat WHERE id = ?";

  db.query(sqlDelete, chatTyped, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log("success");
      res.send(result);
    }
  });
});

//GET A SINGLE MEMBER DETAILS
app.get("/member", (req, res) => {
  const sqlSelect = "SELECT * FROM Members";
  // const member = req.body.id;
  db.query(sqlSelect, (err, result) => {
    res.send(result);
    console.log(result);
  });
});

//DELETE MEMBER
app.delete("/deleteMember/:id", (req, res) => {
  const member = req.params.id;
  const sqlDelete = "DELETE FROM Members WHERE id = ?";

  db.query(sqlDelete, member, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log("success");
      res.send(result);
    }
  });
});

//GET ALL ADMINS
app.get("/getAdmins", (req, res) => {
  const sqlSelect = "SELECT * FROM users";
  // const member = req.body.id;
  db.query(sqlSelect, (err, result) => {
    res.send(result);
    console.log(result);
  });
});

app.get("/memberProfile", (req, res) => {
  // const id = req.body.id;
  const sqlSelect = "SELECT * FROM Members";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});
app.get("/adminData", (req, res) => {
  // const id = req.body.id;
  const sqlSelect = "SELECT * FROM users";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});
app.get("/managerData", (req, res) => {
  // const id = req.body.id;
  const sqlSelect = "SELECT * FROM users";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

// ADD NEW MEMBER//
app.post("/addMember", (req, res) => {
  const customerFirst = req.body.customerFirst;
  const customerMiddle = req.body.customerMiddle;
  const customerLast = req.body.customerLast;
  const customerPhone = req.body.customerPhone;
  const customerEmail = req.body.customerEmail;
  const customerAddress = req.body.customerAddress;
  const communication = req.body.communication;
  const PreferredStore = req.body.preferredStore;
  const ssn = req.body.ssn;
  const placeBorn = req.body.placeBorn;
  const dob = req.body.dob;
  const ethnicity = req.body.ethnicity;
  const race = req.body.race;
  const card = req.body.card;
  const acknowledged = req.body.acknowledged;

  const sqlInsert =
    "INSERT INTO members (first_name, middle_name, last_name, phone, email, address, communication, preferredStore, SSN, placeBorn, DOB, ethnicity, race, card, acknowledged, dateJoined, renewal_date, expiring ) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW() + INTERVAL 1 YEAR, NOW() + INTERVAL 1 YEAR)";
  db.query(
    sqlInsert,
    [
      customerFirst,
      customerMiddle,
      customerLast,
      customerPhone,
      customerEmail,
      customerAddress,
      communication,
      PreferredStore,
      ssn,
      placeBorn,
      dob,
      ethnicity,
      race,
      card,
      acknowledged,
    ],
    (err, result) => {
      console.log(result);
      if (err) {
        res.send("You are missing something");
      }
    }
  );
});
// ADMIN SIDE ADD NEW MEMBER//
app.post("/adminAddMember", (req, res) => {
  const customerFirst = req.body.customerFirst;
  const customerMiddle = req.body.customerMiddle;
  const customerLast = req.body.customerLast;
  const customerPhone = req.body.customerPhone;
  const customerEmail = req.body.customerEmail;
  const customerAddress = req.body.customerAddress;
  const communication = req.body.communication;
  const PreferredStore = req.body.preferredStore;
  const ssn = req.body.ssn;
  const placeBorn = req.body.placeBorn;
  const dob = req.body.dob;
  const ethnicity = req.body.ethnicity;
  const race = req.body.race;
  const memberNumber = req.body.race;
  const card = req.body.card;
  const acknowledged = req.body.acknowledged;

  const sqlInsert =
    "INSERT INTO members (first_name, middle_name, last_name, phone, email, address, communication, preferredStore, SSN, placeBorn, DOB, ethnicity, race, number, card, acknowledged, dateJoined, renewal_date, expiring ) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW() + INTERVAL 1 YEAR, NOW() + INTERVAL 1 YEAR)";
  db.query(
    sqlInsert,
    [
      customerFirst,
      customerMiddle,
      customerLast,
      customerPhone,
      customerEmail,
      customerAddress,
      communication,
      PreferredStore,
      ssn,
      placeBorn,
      dob,
      ethnicity,
      race,
      memberNumber,
      card,
      acknowledged,
    ],
    (err, result) => {
      console.log(result);
      if (err) {
        res.send("You are missing something");
      }
    }
  );
});

//GET LIMITED NUMBER OF MEMBERS
app.get("/api/getMembers", (req, res) => {
  const sqlSelect = "SELECT * FROM Members ORDER BY id DESC LIMIT 10";
  db.query(sqlSelect, (err, result) => {
    // console.log(result);
    res.send(result);
  });
  ``;
});
//GET PENDING CARD MEMBERS
app.get("/PendingCardMembers", (req, res) => {
  const sqlSelect =
    "SELECT * FROM Members WHERE card = 'pending' ORDER BY id DESC LIMIT 50";
  db.query(sqlSelect, (err, result) => {
    // console.log(result);
    res.send(result);
  });
  ``;
});

//GET ALL MEMBERS
app.get("/api/getAllMembers", (req, res) => {
  const sqlSelect = "SELECT * FROM Members";
  db.query(sqlSelect, (err, result) => {
    // console.log(result);
    res.send(result);
  });
  ``;
});
//GET ALL MEMBERS DESCENDING
app.get("/getAllMembersDesc", (req, res) => {
  const sqlSelect = "SELECT * FROM Members ORDER BY id DESC";
  db.query(sqlSelect, (err, result) => {
    // console.log(result);
    res.send(result);
  });
  ``;
});

//GET ACTIVE MEMBERS
app.get("/api/activeMembers", (req, res) => {
  const sqlSelect = "SELECT * FROM Members WHERE expiring >= NOW()";
  db.query(sqlSelect, (err, result) => {
    // console.log(result);
    res.send(result);
  });
  ``;
});
//GET ACTIVE MEMBERS
app.get("/initialContact", (req, res) => {
  const sqlSelect = "SELECT * FROM Members WHERE acknowledged = 'no' ";
  db.query(sqlSelect, (err, result) => {
    // console.log(result);
    res.send(result);
  });
  ``;
});

//GET EXPIRED MEMBERS
app.get("/expiredMembers", (req, res) => {
  const sqlSelect = "SELECT * FROM Members WHERE expiring < NOW()";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

//GET EXPIRING MEMBERS
app.get("/expiringMembers", (req, res) => {
  const sqlSelect = "SELECT * FROM Members WHERE DATEDIFF(NOW(),expiring)<=30";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
    // console.log(result);
  });
});

// GETTING ALL REQUESTS , back ordered
app.get("/allRequests", (req, res) => {
  const sqlSelect =
    "SELECT * FROM Requests WHERE status = 'ordered' OR status = 'back ordered' OR status = 'on hold' OR status = 'pending' ORDER BY date_created ASC";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});
// GETTING ALL CONCLUDED REQUESTS
app.get("/allConcluded", (req, res) => {
  const sqlSelect =
    "SELECT * FROM Requests WHERE status = 'canceled' OR status = 'offered' OR status = 'completed' ORDER BY date_created ASC";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

// GETTING NEWEST REQUESTS
app.get("/newRequests", (req, res) => {
  const sqlSelect = "SELECT * FROM Requests ORDER BY id DESC LIMIT 10";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
    // console.log(result);
  });
});
// GETTING SPECIFIC MEMBER REQUESTS
app.get("/membersRequests", (req, res) => {
  const sqlSelect = "SELECT * FROM Requests";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});
// GETTING SPECIFIC MEMBER MESSAGES
app.get("/memberMessages", (req, res) => {
  const sqlSelect = "SELECT * FROM Messages";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});
// GETTING OLDEST REQUESTS
app.get("/oldRequests", (req, res) => {
  const sqlSelect = "SELECT * FROM Requests ORDER BY id ASC LIMIT 10";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});
// GETTING PENDING REQUESTS
app.get("/pendingRequests", (req, res) => {
  const sqlSelect = "SELECT * FROM Requests WHERE status = 'pending'";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});
// GETTING ON HOLD REQUESTS
app.get("/onholdRequests", (req, res) => {
  const sqlSelect = "SELECT * FROM Requests WHERE status = 'on hold'";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});
// GETTING BACK ORDERED REQUESTS
app.get("/backorderedRequests", (req, res) => {
  const sqlSelect = "SELECT * FROM Requests WHERE status = 'back order'";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});
// GETTING  ORDERED REQUESTS
app.get("/orderedRequests", (req, res) => {
  const sqlSelect = "SELECT * FROM Requests WHERE status = 'ordered'";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});
// GETTING  COMPLETED REQUESTS
app.get("/completedRequests", (req, res) => {
  const sqlSelect = "SELECT * FROM Requests WHERE status = 'completed'";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});
// GETTING  CANCELED REQUESTS
app.get("/canceledRequests", (req, res) => {
  const sqlSelect = "SELECT * FROM Requests WHERE status = 'canceled'";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});
// GETTING  OFFERED REQUESTS
app.get("/offeredRequests", (req, res) => {
  const sqlSelect = "SELECT * FROM Requests WHERE status = 'offered'";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

// ************************   GETTING THE TOTOALS FOR THE CATALOG PAGE **********************
//
// GETTING  CATALOG
app.get("/getCatalogNow", (req, res) => {
  const sqlSelect = "SELECT * FROM Catalog";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});
// GETTING  CATALOG
app.post("/addALike", (req, res) => {
  const likeTotal = req.body.likeTotal;
  const id = req.body.id;

  const sqlInsert = "INSERT INTO Catalog (Likes) VALUES (?) WHERE id = ?";
  db.query(sqlInsert, [likeTotal, id], (err, result) => {
    console.log(err);
  });
});
// GETTING  ACCESSORIES TOTALS
app.get("/getAccessories", (req, res) => {
  const sqlSelect = "SELECT * FROM Catalog WHERE category = 'Accessories'";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});
// GETTING  ACCESSORIES TOTALS
app.get("/getFirearms", (req, res) => {
  const sqlSelect = "SELECT * FROM Catalog WHERE category = 'Firearms'";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});
// GETTING  ACCESSORIES TOTALS
app.get("/getAmmunition", (req, res) => {
  const sqlSelect = "SELECT * FROM Catalog WHERE category = 'Ammunition'";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});
// GETTING  ACCESSORIES TOTALS
app.get("/getClass3", (req, res) => {
  const sqlSelect = "SELECT * FROM Catalog WHERE category = 'Class3'";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});
// GETTING EVENTS FOR PROFILE PAGE
app.get("/events", (req, res) => {
  const sqlSelect = "SELECT * FROM Events ORDER BY id ASC";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});
// GETTING REQUESTS FOR DOWNLOAD
app.get("/downloadRequests", (req, res) => {
  const sqlSelect = "SELECT * FROM REQUESTS";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});
// GETTING MEMBERS FOR DOWNLOAD
app.get("/downloadMembers", (req, res) => {
  const sqlSelect = "SELECT * FROM Members";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});
//DELETE CALENDAR ITEM
app.delete("/deleteCalendar/:id", (req, res) => {
  const calEvent = req.params.id;
  const sqlDelete = "DELETE FROM Events WHERE id = ?";

  db.query(sqlDelete, calEvent, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log("success");
      res.send(result);
    }
  });
});

//DELETE CATALOG ITEM
app.delete("/deleteProduct/:id", (req, res) => {
  const product = req.params.id;
  const sqlDelete = "DELETE FROM Catalog WHERE id = ?";

  db.query(sqlDelete, product, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log("success");
      res.send(result);
    }
  });
});
//ADD PRODUCT TO CATALOG
app.post("/addProductCatalog", (req, res) => {
  const category = req.body.category;
  const make = req.body.make;
  const model = req.body.model;
  const qty = req.body.qty;
  const price = req.body.price;
  const upcsku = req.body.upcsku;

  const sqlInsert =
    "INSERT INTO Catalog (category, make, model, quantity, price, sku) VALUES (?, ?, ?, ?, ?, ?)";
  db.query(
    sqlInsert,
    [category, make, model, qty, price, upcsku],
    (err, result) => {
      console.log(err);
    }
  );
});
// ************************   ENG GETTING THE TOTOALS FOR THE CATALOG PAGE **********************
//

//SUBMIT REQUEST
app.post("/requsted", (req, res) => {
  const category = req.body.category;
  const item = req.body.item;
  const brand = req.body.brand;
  const quantity = req.body.quantity;
  const status = req.body.status;
  const userId = req.body.userId;
  const sku = req.body.sku;
  const note = req.body.note;
  const memberName = req.body.memberName;
  const source = req.body.source;
  const id = req.body.id;

  const sqlInsert =
    "INSERT INTO Requests (category, item, brand, quantity, status, user_id, sku, note, memberName, source, memberIdentity, date_created) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())";
  db.query(
    sqlInsert,
    [
      category,
      item,
      brand,
      quantity,
      status,
      userId,
      sku,
      note,
      memberName,
      source,
      id,
    ],
    (err, result) => {
      console.log(err);
    }
  );
});
//SUBMIT REQUEST
app.post("/newRequested", (req, res) => {
  const category = req.body.category;
  const item = req.body.item;
  const brand = req.body.brand;
  const quantity = req.body.quantity;
  const status = req.body.status;
  const userId = req.body.userId;
  const sku = req.body.sku;
  const note = req.body.note;
  const memberName = req.body.memberName;
  const source = req.body.source;
  const id = req.body.id;

  const sqlInsert =
    "INSERT INTO Requests (category, item, brand, quantity, status, user_id, sku, note, memberName, source, memberIdentity, date_created) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())";
  db.query(
    sqlInsert,
    [
      category,
      item,
      brand,
      quantity,
      status,
      userId,
      sku,
      note,
      memberName,
      source,
      id,
    ],
    (err, result) => {
      console.log(err);
    }
  );
});

//SINGLE REQUEST BY MEMBER
app.get("/memberRequest", (req, res) => {
  const id = req.body.id;
  const sqlSelect =
    "SELECT id, category, item, brand, quantity, status, sku, note, date_created, date_updated FROM Requests ";

  db.query(sqlSelect, [id], (err, result) => {
    res.send(result);
  });
  ``;
});

//SET RANDOM PASSWORD
app.put("/setRandomPassword", (req, res) => {
  const password = req.body.password;
  const id = req.body.id;

  db.query(
    "UPDATE members SET password = ? WHERE id = ?",
    [password, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        // console.log(result);
      }
    }
  );
});
//UPDATE FIRST NAME
app.put("/changeFirst", (req, res) => {
  const firstName = req.body.firstName;
  const id = req.body.id;

  db.query(
    "UPDATE members SET first_name = ? WHERE id = ?",
    [firstName, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        // console.log(result);
      }
    }
  );
});
//UPDATE MIDDLE NAME
app.put("/changeMiddle", (req, res) => {
  const middleName = req.body.middleName;
  const id = req.body.id;

  db.query(
    "UPDATE members SET middle_name = ? WHERE id = ?",
    [middleName, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        // console.log(result);
      }
    }
  );
});
//UPDATE LAST NAME
app.put("/changeLast", (req, res) => {
  const lastName = req.body.lastName;
  const id = req.body.id;

  db.query(
    "UPDATE members SET last_name = ? WHERE id = ?",
    [lastName, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        // console.log(result);
      }
    }
  );
});
//UPDATE EMAIL NAME
app.put("/changeEmail", (req, res) => {
  const email = req.body.email;
  const id = req.body.id;

  db.query(
    "UPDATE members SET email = ? WHERE id = ?",
    [email, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        // console.log(result);
      }
    }
  );
});
//UPDATE PHONE NUMBER
app.put("/changePhone", (req, res) => {
  const phone = req.body.phone;
  const id = req.body.id;

  db.query(
    "UPDATE members SET phone = ? WHERE id = ?",
    [phone, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        // console.log(result);
      }
    }
  );
});
//UPDATE ADDRESS NAME
app.put("/changeAddress", (req, res) => {
  const address = req.body.address;
  const id = req.body.id;

  db.query(
    "UPDATE members SET address = ? WHERE id = ?",
    [address, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        // console.log(result);
      }
    }
  );
});
//UPDATE PASSWORD
app.put("/changePassword", (req, res) => {
  const password = req.body.password;
  const id = req.body.id;

  db.query(
    "UPDATE members SET password = ? WHERE id = ?",
    [password, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        // console.log(result);
      }
    }
  );
});
//UPDATE ADMIN PASSWORD
app.put("/changeAdminPassword", (req, res) => {
  const password = req.body.password;
  const id = req.body.id;

  db.query(
    "UPDATE users SET password = ? WHERE id = ?",
    [password, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        // console.log(result);
      }
    }
  );
});
//UPDATE PROFILE PICTURE

//UPDATE ADMIN USERNAME
app.put("/changeUserName", (req, res) => {
  const email = req.body.email;
  const id = req.body.id;

  db.query(
    "UPDATE users SET email = ? WHERE id = ?",
    [email, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        // console.log(result);
      }
    }
  );
});
//UPDATE MEMBER ID
app.put("/changeMemId", (req, res) => {
  const memId = req.body.memId;
  const id = req.body.id;

  db.query(
    "UPDATE members SET number = ? WHERE id = ?",
    [memId, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        // console.log(result);
      }
    }
  );
});
//UPDATE PLACE BORN
app.put("/changePlaceBorn", (req, res) => {
  const placeBorn = req.body.placeBorn;
  const id = req.body.id;

  db.query(
    "UPDATE members SET placeBorn = ? WHERE id = ?",
    [placeBorn, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        // console.log(result);
      }
    }
  );
});
//UPDATE PLACE DOB
app.put("/changeDob", (req, res) => {
  const dob = req.body.dob;
  const id = req.body.id;

  db.query(
    "UPDATE members SET DOB = ? WHERE id = ?",
    [dob, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        // console.log(result);
      }
    }
  );
});
//UPDATE PLACE SSN
app.put("/changeSsn", (req, res) => {
  const ssn = req.body.ssn;
  const id = req.body.id;

  db.query(
    "UPDATE members SET SSN = ? WHERE id = ?",
    [ssn, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        // console.log(result);
      }
    }
  );
});
//UPDATE PLACE ETHNICITY
app.put("/changeEthnicity", (req, res) => {
  const ethnicity = req.body.ethnicity;
  const id = req.body.id;

  db.query(
    "UPDATE members SET ethnicity = ? WHERE id = ?",
    [ethnicity, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        // console.log(result);
      }
    }
  );
});
//UPDATE  RACE
app.put("/changeRace", (req, res) => {
  const race = req.body.race;
  const id = req.body.id;

  db.query(
    "UPDATE members SET race = ? WHERE id = ?",
    [race, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        // console.log(result);
      }
    }
  );
});
//UPDATE MEMBERSHIP DATE
app.put("/changeMemDate", (req, res) => {
  const membershipDate = req.body.membershipDate;
  const id = req.body.id;

  db.query(
    "UPDATE members SET expiring = ? WHERE id = ?",
    [membershipDate, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        // console.log(result);
      }
    }
  );
});
//UPDATE CARD STATUS
app.put("/changeCard", (req, res) => {
  const card = req.body.card;
  const id = req.body.id;

  db.query(
    "UPDATE members SET card = ? WHERE id = ?",
    [card, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        console.log(result);
      }
    }
  );
});
//UPDATE STORE STATUS
app.put("/changeStore", (req, res) => {
  const store = req.body.store;
  const id = req.body.id;

  db.query(
    "UPDATE members SET preferredStore = ? WHERE id = ?",
    [store, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        // console.log(result);
      }
    }
  );
});
//UPDATE COMMUNICATION TYPE
app.put("/changeCommunication", (req, res) => {
  const communication = req.body.communication;
  const id = req.body.id;

  db.query(
    "UPDATE members SET communication = ? WHERE id = ?",
    [communication, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        // console.log(result);
      }
    }
  );
});
//UPDATE RENEWAL DATE
app.put("/changeRenewal", (req, res) => {
  const id = req.body.id;
  const card = req.body.card;
  const acknowledged = req.body.acknowledged;
  // const card = req.body.card;

  const sqlInsert =
    "UPDATE members SET card = ?, acknowledged = ?, renewal_date = NOW(), expiring = NOW() + INTERVAL 1 YEAR WHERE id = ?";
  db.query(sqlInsert, [card, acknowledged, id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log(id);
    }
  });
});
//PENDING CARD AGAIN
app.put("/pendingCardRenew", (req, res) => {
  const id = req.body.id;
  const card = req.body.card;
  const acknowledged = req.body.acknowledged;
  db.query(
    "UPDATE members SET card = ?, acknowledged = ? WHERE id = ?",
    [card, acknowledged, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        console.log("pending card renew function completed");
      }
    }
  );
});
//UPDATE STATUS FOR REQUEST
app.put("/statusUpdate", (req, res) => {
  const id = req.body.id;
  const status = req.body.status;
  db.query(
    "UPDATE Requests SET status = ?, date_updated = NOW() WHERE id = ?",

    [status, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        // console.log(result);
      }
    }
  );
});

//UPDATE CARD STATUS FOR REQUEST
app.put("/cardStatusChange", (req, res) => {
  const id = req.body.id;
  const card = req.body.card;
  db.query(
    "UPDATE members SET card = ? WHERE id = ?",

    [card, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        // console.log(result);
      }
    }
  );
});

//UPDATE NOTE FOR REQUEST
app.put("/noteUpdate", (req, res) => {
  const id = req.body.id;
  const note = req.body.note;
  db.query(
    "UPDATE Requests SET note = ?, date_updated = NOW() WHERE id = ?",

    [note, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        console.log(id);
      }
    }
  );
});
//UPDATE SOURCE FOR REQUEST
app.put("/sourceUpdate", (req, res) => {
  const id = req.body.id;
  const source = req.body.source;
  db.query(
    "UPDATE Requests SET source = ?, date_updated = NOW() WHERE id = ?",

    [source, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        // console.log(result);
      }
    }
  );
});

//UPDATE DATE FOR REQUEST
app.put("/dateChange", (req, res) => {
  db.query(
    "INSERT INTO Requests (date_updated) VALUES (NOW())",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

// LOGING INTO APP
app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    "SELECT * FROM users WHERE email = ? AND password = ?",
    [email, password],
    (err, result) => {
      // if (err) {
      //   res.send({ err: err });
      // }
      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: "Wrong email or password combination" });
      }
    }
  );
});

// LOGING INTO APP MEMBERS PROFILE PAGE
app.post("/memberLogin", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    "SELECT * FROM members WHERE email = ? AND password = ?",
    [email, password],
    (err, result) => {
      // if (err) {
      //   res.send({ err: err });
      // }
      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: "Wrong email or password combination" });
      }
    }
  );
});

//*****PORT INFORMATION*****/
const PORT = 3001;

app.listen(process.env.PORT || 3001, () => {
  console.log(`listening on:${PORT}`);
});
