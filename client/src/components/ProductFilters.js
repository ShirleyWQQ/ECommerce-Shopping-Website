import React, { useState } from "react";
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function ProductFilters(props) {

    return (
      <div style={{ padding: 10, marginLeft: 'auto', marginRight: 0 }}>
            <Nav>
              <NavDropdown
                id="nav-dropdown-dark-example"
                title="Sort"
                menuVariant="dark"
              >
                {['None', 'Price ascending', 'Price descending', 'Rating ascending', 'Rating descending'].map((sortingName, index) => (
                  <NavDropdown.Item onClick={() => props.onChange(`Sort${index}`)}>
                    {sortingName}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            </Nav>
      </div>
    );
}
