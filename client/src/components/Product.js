/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Button from "react-bootstrap/Button"
import "./css/ProductCard.css";
// props: name price description
export default function ProductCard(props) {
  return (
    <div className="product" style={{width: '18rem'}}>
      <img className="img-top" src={props.image} alt="no image available" />
        <h5 className="name">{props.name}</h5>
        <p className="description">{props.description}</p>
        <h5 className="price">${props.price}</h5>
    </div>
  );
}