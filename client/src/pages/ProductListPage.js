import React, { useCallback, useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import ProductSort from "../components/ProductSort";
import ProductFilter from "../components/ProductFilter";
import api from "../lib/api";

const sortOptions = ["None", "Price ascending", "Price descending", "Rating ascending", "Rating descending"];
export default function ProductListPage() {
  /* State */
  const [products, setProducts] = useState([{ product_id: 1, product_name: "Mock Product", price: "0.00" }]);
  const [sortIndex, setSortIndex] = useState(0);
  const [ratingIndex, setRatingIndex] = useState(-1);
  const [categories, setCategories] = useState([{ category_id: 1, category_name: "Mock Category" }]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  /* Method */
  const sortOnSelect = (sortIndex) => { setSortIndex(sortIndex); };
  const ratingOnSelect = (ratingIndex) => { setRatingIndex(ratingIndex); };
  const changeCategory = (categoryId) => {
    selectedCategory.includes(categoryId)
      ? setSelectedCategory(selectedCategory.filter(item => item !== categoryId))
      : setSelectedCategory([categoryId, ...selectedCategory]);
  };
  /* Dependent Method */
  const getProduct = useCallback(() => {
    api.getProducts(sortIndex, ratingIndex, selectedCategory)
      .then(setProducts)
      .catch(api.logError);
  }, [sortIndex, ratingIndex, selectedCategory]);
  /* Hook */
  useEffect(() => {
    getProduct();
    api.getCategories()
      .then(setCategories)
      .catch(api.logError)
  }, [getProduct]);
  /* Render */
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <ProductSort sortOptions={sortOptions} onSelect={sortOnSelect} />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <ProductFilter selectedIndex={ratingIndex} setSelectedIndex={ratingOnSelect} categories={categories} changeCategory={changeCategory} />
          <ProductList data={products} />
        </div>
      </div>
    </div>
  );
}