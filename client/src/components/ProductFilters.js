import React from "react";

export default class ProductFilters extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: "0" };
  }
  handleSelectChange = (event) => {
    this.setState({ selected: event.target.value });
    this.props.handleSelection(event.target.value);
  }

  render() {
    return (
      <div style={{ padding: 10 }}>
        <label> Choose a filter: </label>
        <select id="filter-products" value={this.state.selected} onChange={this.handleSelectChange}>
          <option value="0">None</option>
          <option value="1">Order items based on Price ascending</option>
          <option value="2">Display items with rating &gt;1 </option>
          <option value="3">Display items with rating &gt;2 </option>
        </select>
      </div>
    );
  }
}