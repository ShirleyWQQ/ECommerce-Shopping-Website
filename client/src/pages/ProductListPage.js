import React, { useCallback, useEffect, useState } from "react";
import Axios from "axios";
import ProductList from "../components/ProductList";
import ProductSort from "../components/ProductSort";
import ProductFilterBar from "../components/ProductFilterBar";

const sortOptions = ["None", "Price ascending", "Price descending", "Rating ascending", "Rating descending"];
export default function ProductListPage(props) {
  const [products, setProducts] = useState([{ product_id: 1, product_name: "Mock", price: "0.00" }]);
  const [sortIndex, setSortIndex] = useState(0);
  const getProduct = useCallback(() => {
    let url = "http://localhost:3001/api/products";
    switch (sortIndex) {
      case 1: // Price ASC
        url = `${url}?sortfield=price&sortorder=asc`;
        break;
      case 2: // Price DESC
        url = `${url}?sortfield=price&sortorder=desc`;
        break;
      case 3: // Rating ASC
        url = `${url}?sortfield=rating&sortorder=asc`;
        break;
      case 4: // Rating DESC
        url = `${url}?sortfield=rating&sortorder=desc`;
        break;
      default: // NON
        url = "http://localhost:3001/api/products";
    }
    Axios.get(url)
      .then(res => {
        setProducts(res.data);
      })
      .catch(err => {
        alert("Failed to retrieve products");
      });
  }, [sortIndex]);
  const sortOnSelect = (sortIndex) => {
    setSortIndex(sortIndex);
  };
  useEffect(() => {
    getProduct();
  }, [getProduct]);
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <ProductSort sortOptions={sortOptions} onSelect={sortOnSelect} />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <ProductFilterBar onChange={() => { }} />
          <ProductList data={products} />
        </div>
      </div>
    </div>
  );
}