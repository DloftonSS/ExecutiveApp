import { Card, Feed, Icon, Input, Button } from "semantic-ui-react";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./MainPage.css";

function MainPage() {
  return (
    <div className="MainContainer">
      <div className="titleDiv">
        {" "}
        <h1>
          AN <span>EXCLUSIVE</span> BENEFITS PROGRAM FOR FIREARMS ENTHUSIASTS
        </h1>
      </div>

      <p className="underline"></p>
    </div>
  );
}

export default MainPage;
