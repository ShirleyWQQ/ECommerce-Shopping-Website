import React from "react";
import Axios from "axios";

export default class ProductFilters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{ padding: 10}}>
        <label> Choose a filter: </label>
        <select id="filter-products">
            <option>None</option>
            <option value="">Order items based on Price ascending</option>
            <option value="">Display items with rating &gt;3 </option>
            <option value="">Display items with rating &gt;4 </option>
        </select>
      </div>
    );
  }
}