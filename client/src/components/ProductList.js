import React from "react";
import ProductCard from "./ProductCard";
import "./css/ProductList.css";

// props: data(product[])
export default function ProductList(props) {
  return (
    <div className="flex-container">
      {props.data.map((item, index) => (
        <ProductCard
          name={item.product_name}
          price={item.price}
          description={item.description}
          image={item.picture_source}
          key={index}
        />
      ))}
    </div>
  );
}
