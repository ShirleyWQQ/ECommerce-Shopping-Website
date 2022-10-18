import React from "react";
import Axios from "axios";
import './ProductsPage.css';
// React calls componentDidMount twice in dev mode
export default class ServerCheck extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
  }
  getServerStatus = () => {
    Axios.get("http://localhost:3001/api/products")
      .then(res => {
        this.setState((state, props) => ({
          products: res.data
        }));
      })
      .catch(err => {
        alert("Failed to retrieve products");
      });
  }
  componentDidMount() {
    this.getServerStatus();
  }
  render() {
    return (
      <div>
        <table>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Rating</th>
            <th>Delete product</th>
          </tr>
          {this.state.products.map(item => (
            <tr>
              <td>{item.product_name}</td>
              <td>${item.price}</td>
              <td>{item.description}</td>
              <td>{item.product_rating}</td>
              <td><button>delete product</button></td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}