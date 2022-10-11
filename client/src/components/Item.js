import React, { useState } from "react";
import Axios from "axios";

function Item(props) {
  let [text, setText] = useState("Unknown");
  const getServerStatus = () => {
    Axios.get("http://localhost:3001/status")
      .then(res => {
        debugger;
        setText(res.data);
      })
      .catch(err => {
        console.log(err.message);
      })
  }
  return (
    <div className="Item">
      <button onClick={getServerStatus}>Check Server</button>
      <h1>Hello {props.name}!</h1>
      <h2>Server Status: {text}</h2>
    </div>
  );
}

export default Item;