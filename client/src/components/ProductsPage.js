import React from "react";
import Axios from "axios";

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
        <ul>
          {this.state.products.map(item => (
            <li>{item.product_name} | ${item.price}</li>
          ))}
        </ul>
      </div>
    );
  }
}