import React, { useCallback, useEffect, useState } from "react";
import Axios from "axios";
import ProductList from "../components/ProductList";
import ProductSort from "../components/ProductSort";
import ProductFilter from "../components/ProductFilter";

const baseUrl = "http://localhost:3001/api/products?";
function getUrl(sortIndex, rating) {
  let url = baseUrl;
  switch (sortIndex) {
    case 1: // Price ASC
      url = `${url}&sortfield=price&sortorder=asc`;
      break;
    case 2: // Price DESC
      url = `${url}&sortfield=price&sortorder=desc`;
      break;
    case 3: // Rating ASC
      url = `${url}&sortfield=rating&sortorder=asc`;
      break;
    case 4: // Rating DESC
      url = `${url}&sortfield=rating&sortorder=desc`;
      break;
    default:
  }
  if (rating > 0) {
    url = `${url}&rating=${rating}`;
  }
  console.log(url);
  return url;
}

const sortOptions = ["None", "Price ascending", "Price descending", "Rating ascending", "Rating descending"];
export default function ProductListPage(props) {
  /* State */
  const [products, setProducts] = useState([{ product_id: 1, product_name: "Mock Product", price: "0.00" }]);
  const [sortIndex, setSortIndex] = useState(0);
  const [ratingIndex, setRatingIndex] = useState(-1);
  const [categories, setcategories] = useState([{ category_id: 1, category_name: "Mock Category" }]);
  /* Method */
  const sortOnSelect = (sortIndex) => { setSortIndex(sortIndex); };
  const ratingOnSelect = (ratingIndex) => { setRatingIndex(ratingIndex); };
  /* Dependent Method */
  const getProduct = useCallback(() => {
    const url = getUrl(sortIndex, ratingIndex);
    Axios.get(url)
      .then(res => {
        setProducts(res.data);
      })
      .catch(err => {
        alert("Failed to retrieve products");
      });
  }, [sortIndex, ratingIndex]);
  const getCategory = useCallback(() => {
    Axios.get("http://localhost:3001/api/categories")
      .then(res => {
        setcategories(res.data);
      })
      .catch(err => {
        alert("Failed to retrieve products");
      });
  }, []);
  /* Hook */
  useEffect(() => {
    getProduct();
    getCategory();
  }, [getProduct, getCategory]);
  /* Render */
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <ProductSort sortOptions={sortOptions} onSelect={sortOnSelect} />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <ProductFilter selectedIndex={ratingIndex} setSelectedIndex={ratingOnSelect} categories={categories} />
          <ProductList data={products} />
        </div>
      </div>
    </div>
  );
}