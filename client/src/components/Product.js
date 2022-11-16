/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./css/ProductCard.css";
// props: name price description rating comment
export default function Product(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <img className="img-top" src={props.image} alt="no image available" />
        </div>
        <div className="col">
          <h5 className="name">{props.name}</h5>
          <h5 className="price">${props.price}</h5>
          <h5 className="rating">{props.rating}</h5>
          <p className="description">{props.description}</p>
        </div>
      </div>
    </div>
  );
}