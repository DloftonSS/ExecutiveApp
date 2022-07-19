import { Icon, } from "semantic-ui-react";
import React, { useState, useEffect } from "react"; 
import ExecutiveData from "../components/ExecutiveData";  

function ExecutiveAccount(props) {
  const id = props.match.params.id;

  return (
    <div style={{ backgroundColor: "black" }}> 
      <div style={{ textAlign: "center", paddingTop: "5%", color: "white", backgroundColor: "black", }}>
        <a href="/AdminAccount" style={{ color: "white" }}>
          <Icon disabled name="home" style={{ color: "white" }}></Icon> Home
        </a>
      </div>
      <div style={{ width: "100%", overflowY: "scroll", scrollbarWidth: "1px",}}>
        <div style={{ display: "flex", padding: ".5rem", alignItems: "top", }} >
          <ExecutiveData id={id} /> 
        </div> 
        <div style={{ display: "flex", padding: ".5rem", alignItems: "top" }}></div> 
        <div style={{ display: "flex", padding: ".5rem", alignItems: "top" }}></div>
      </div>
    </div>
  );
}

export default ExecutiveAccount;
