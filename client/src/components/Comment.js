/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
// props: name price description
export default function Comment(props) {
  return (
    <div className="comment" style={{width: '18rem'}}>
        <h5 className="username">{props.user_name}</h5>
        <h5 className="rating">{props.rating}</h5>
        <h5 className="updated_time">{props.updated_time}</h5>
        <p className="content">{props.content}</p>
    </div>
  );
}