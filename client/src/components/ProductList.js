import React from "react";
import ProductCard from "./ProductCard";
import "./css/ProductList.css";

// props: data(product[])
export default function ProductList(props) {
  return (
    <div class="flex-container">
      {props.data.map(item => (
        <ProductCard
          name={item.product_name}
          price={item.price}
          description={item.description}
        />
      ))}
    </div>
  );
}
