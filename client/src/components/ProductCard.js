import React from "react";
import Button from "react-bootstrap/Button"
import "./css/ProductCard.css";
// props: name price description
export default function ProductCard(props) {
  return (
    <div className="card" style={{width: '18rem'}}>
      <img className="card-img-top" src={props.image} alt="Product" />
      <div className="card-body">
        <h5 className="card-title" id="para0">{props.name}</h5>
        <h5 className="card-title2">${props.price}</h5>
        <p className="card-text" id="para">{props.description}</p>
        <Button>+</Button>
      </div>
    </div>
  );
}

