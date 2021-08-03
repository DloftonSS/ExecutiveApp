import "./App.css";
// import loggingIn from "./components/login";
// import Axios from "axios";
// import React, { useState } from "react";
// import PrivateRoute from "./PrivateRoute";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import AdminDashBoard from "./Pages/adminDashBoard";
import Login from "./Pages/login";
import AddMember from "./Pages/AddMember";
import AllMembers from "./Pages/Allmembers";
import AddAdmin from "./Pages/AddAdmin";
import AllRequests from "./Pages/AllRequests";
import ExecutiveAccount from "./Pages/ExecutiveAccount";
import Catalog from "./Pages/Catalog";
// import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/adminDashBoard" exact component={AdminDashBoard} />
        <Route path="/addMember" exact component={AddMember} />
        <Route path="/allMembers" exact component={AllMembers} />
        <Route path="/addAdmin" exact component={AddAdmin} />
        <Route path="/allRequests" exact component={AllRequests} />
        <Route path="/catalog" exact component={Catalog} />
        <Route
          path="/executiveAccount/:id"
          exact
          component={ExecutiveAccount}
        />
      </Switch>
    </Router>
  );
}

export default App;
