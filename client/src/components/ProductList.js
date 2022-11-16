import React from "react";
import ProductCard from "./ProductCard";
import "./css/ProductList.css";

// props: data(product[])
export default function ProductList(props) {
  return (
    <div>
      <div className="flex-container" style={{ gap: "15px 20px" }}>
        {props.data.map((item, index) => (
          <ProductCard
            key={index}
            name={item.product_name}
            price={item.price}
            description={item.description}
            image={item.picture_source}
            product_id={item.product_id}
            rating={item.product_rating}
          />
        ))}
      </div>
    </div>
  );
}
