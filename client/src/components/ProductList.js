import React from "react";
import ProductCard from "./ProductCard";

// props: data(product[])
export default function ProductList(props) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
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
