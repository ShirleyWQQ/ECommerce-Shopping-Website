/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Button from "react-bootstrap/Button"
import { useNavigate } from "react-router-dom";
import "./css/ProductCard.css";
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
// props: name price description
export default function ProductCard(props) {
  const navigate = useNavigate();
  return (
    <div className="card" style={{width: '18rem'}}>
      <div class="container">
        <img className="card-img-top" src={props.image} id="img1" alt="no image available" />
        <Button classname="button button1" id="button">+</Button>
      </div>
      <div className="card-body">
        <h5 className="price" id="price">${props.price}</h5>
        <h5 className="card-title" id="para0" onClick={() => {navigate(`/product/${props.product_id}`)}}>{props.name}</h5>
        <p className="card-text" id="para">{props.description}</p>
        <h5 className="rating">
          <PrintStars number={props.rating} />
        </h5>
      </div>
    </div>
  );
}

