import React, { useState, useEffect } from "react";
// import ProductFilters from "../components/ProductFilters";
// import ProductFilterBar from "../components/ProductFilterBar";
import ProductList from "../components/ProductList";
import Axios from "axios";
// return promise of axios

export default class ProductListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [{ product_id: 1, product_name: "Mock", price: "0.00" }],
      sortIndex: 0
    }
  }
  componentDidMount() {
    this.getProduct();
  }
  getProduct = (sortIndex) => {
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
        this.setState({ products: res.data });
      })
      .catch(err => {
        alert("Failed to retrieve products");
      });
  }
  render() {
    return (
      <div>
        <h1>Product List Page</h1>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* <ProductFilters value={this.state.selected} onChange={this.handleSelectChange} /> */}
          <div style={{ display: "flex", flexDirection: "row" }}>
            {/* <ProductFilterBar /> */}
            <ProductList data={this.state.products} />
          </div>
        </div>
      </div>
    );
  }
}