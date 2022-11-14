import React from "react";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function ProductFilters(props) {
    const sortOptions = ["None", "Price ascending", "Price descending", "Rating ascending", "Rating descending"];
    return (
      <div style={{ padding: 10, marginLeft: "auto", marginRight: 0 }}>
            <Nav>
              <NavDropdown
                id="nav-dropdown-dark-example"
                title="Sort"
                menuVariant="dark"
              >
                {sortOptions.map((sortingName, index) => (
                  <NavDropdown.Item onClick={() => props.onChange(index)} key={index}>
                    {sortingName}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            </Nav>
      </div>
    );
}
