import React from "react";
import ProductCard from "./ProductCard";
import "./css/ProductList.css";

// props: data(product[])
export default function ProductList(props) {
  return (
    <div>
      <div>Displaying {props.data.length} item{props.data.length!==1?"s":""}</div>
      <div className="flex-container">
        {props.data.map((item, index) => (
          <ProductCard
          key={index}
            name={item.product_name}
            price={item.price}
            description={item.description}
            image={item.picture_source}
            product_id={item.product_id}
          />
        ))}
      </div>
    </div>
  );
}
