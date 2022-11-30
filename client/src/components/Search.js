/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import "./css/Header.css"

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render () {
        return (
    <Form id="1">
      <div className="container">
        <div className="row">
          <div className="col">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Search for Product</Form.Label>
              <Form.Control /*type="email"*/ onChange={e => this.props.setSearchWord(e.target.value)} placeholder="Enter product name" />
              <Form.Text className="text-muted">
                Click here to search for products.
              </Form.Text>
            </Form.Group>
          </div>
        </div>
      </div>
    </Form>
        
        );
    }
}