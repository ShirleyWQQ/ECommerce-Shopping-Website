import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { };
    }


    render () {
        return (
            <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Search for Product</Form.Label>
        <Form.Control type="email" placeholder="Enter product name" />
        <Form.Text className="text-muted">
          Click here to search for products.
        </Form.Text>
      </Form.Group>
    </Form>
        
        );
    }
}