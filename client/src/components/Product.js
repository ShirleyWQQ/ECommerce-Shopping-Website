/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./css/ProductCard.css";
// props: name price description rating comment
export default function Product(props) {
  return (
    <div className="product" style={{width: '18rem'}}>
      <img className="img-top" src={props.image} alt="no image available" />
        <h5 className="name">{props.name}</h5>
        <p className="description">{props.description}</p>
        <h5 className="price">${props.price}</h5>
        <h5 className="rating">{props.rating}</h5>
        <p className="comment">{props.comment}</p>
    </div>
  );
}