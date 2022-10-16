import React, { useState } from "react";
import Axios from "axios";

function ServerCheck(props) {
  let [text, setText] = useState("Unknown");
  const getServerStatus = () => {
    Axios.get("http://localhost:3001/status")
      .then(res => {
        setText(res.data);
      })
      .catch(err => {
        console.log(err.message);
        setText("Server is not running");
      })
  };
  const getList = () => {
    Axios.get("http://localhost:3001/api/products")
      .then(res => {
        setText("Press F12 to check the list of product in the console");
        console.log(res.data);
      })
      .catch(err => {
        console.log(err.message);
        setText("Server is not running");
      })
  }
  return (
    <div style={{ position: "absolute", right: 0, width: 300, padding: 10, backgroundColor: "LightGreen" }}>
      <button onClick={getServerStatus}>Check Server</button><br />
      <i><b>{text}</b></i><br/>
      <button onClick={getList}>Get Product</button><br />
    </div>
  );
}

export default ServerCheck;