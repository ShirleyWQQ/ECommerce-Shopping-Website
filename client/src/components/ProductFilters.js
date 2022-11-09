import React, { useState } from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function ProductFilters(props) {
  const [selectedItem, setSelectedItem] = useState("");


    return (
      <div style={{ padding: 10 }}>
            <Nav>
              <NavDropdown
                id="nav-dropdown-dark-example"
                title="Dropdown"
                menuVariant="dark"
              >
                {['None', 'Price ascending', 'Rating > 1', 'Rating > 2'].map((sortingName, index) => (
                  <NavDropdown.Item onClick={() => props.onChange(index)}>
                    {sortingName}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            </Nav>
      </div>
    );
}
