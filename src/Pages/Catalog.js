import React, { useEffect, useState } from "react";
// import API from "../../utils/API";
import { Card, Table } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Axios from "axios";
import Header from "../components/header";
import CatComponent from "../components/Catelog/CatelogComponent";

function Catalog() {
  return (
    <div>
      <Header />
      <div>
        <CatComponent />
      </div>
    </div>
  );
}

export default Catalog;
