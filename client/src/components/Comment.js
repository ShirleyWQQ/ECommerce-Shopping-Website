/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./css/Comment.css";
// props: name price description
export default function Comment(props) {
  return (
    <div className = "row">
        <div className="col">{props.user_name}</div>
        <div className="col">{props.rating}</div>
        <div className="col">{props.updated_time}</div>
        <div className="col">{props.content}</div>
    </div>
  );
}