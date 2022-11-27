/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./css/Product.css";
import StarIcon from "../images/StarIcon";
function PrintStars(props) {
    const num = parseFloat(props.number);
    if (num > 4) {
      return <div id="rating">{props.number}<StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon /></div>
    } else if (num > 3) {
      return <div id="rating">{props.number}<StarIcon /><StarIcon /><StarIcon /><StarIcon /></div>
    } else if (num > 2) {
      return <div id="rating">{props.number}<StarIcon /><StarIcon /><StarIcon /></div>
    }
    return <div id="rating">{props.number}<StarIcon /></div>
}
// props: name price description rating comment
export default function Product(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <img className="img-top" src={props.image} alt="no image available" />
        </div>
        <div className="col">
          <h5 className="name" id="name">{props.name}</h5>
          <h5 className="price" id="price1">Price: ${props.price}</h5>
          <h5 className="rating">
            <PrintStars number={props.rating} />
          </h5>
          <p className="description">{props.description}</p>
        </div>
      </div>
    </div>
  );
}