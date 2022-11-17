/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectUser } from "../stores/user";
import "./css/Comment.css";
// props: name price description
export default function Comment(props) {
  const user = useSelector(selectUser);
  return (
    <div className="row">
      <div className="col">{props.user_name}</div>
      <div className="col">{props.rating}</div>
      <div className="col">{props.updated_time}</div>
      <div className="col">{props.content}</div>
      <div className="col">
        {user?.user_id === props.user_id ? <Button onClick={() => props.onDelete(props.comment_id)}>Delete</Button> : ""}
      </div>
    </div>
  );
}