import React, { useState } from "react";
import Form from 'react-bootstrap/Form';

export default function ProductFilterBar(props) {

    return (
    <div style={{ minWidth: 200, paddingLeft: "30px"}}>
        <p class="font-weight-bold">Filter by Rating</p>
        <Form>
            <div>
            <Form.Check 
            type='checkbox'
            id="Rating > 1"
            label="Rating > 1"
            />
            <Form.Check
            type='checkbox'
            id="Rating > 2"
            label="Rating > 2"
            />
            <Form.Check
            type='checkbox'
            id="Rating > 3"
            label="Rating > 3"
            />
            <Form.Check
            type='checkbox'
            id="Rating > 4"
            label="Rating > 4"
            />
            <Form.Check
            type='checkbox'
            id="Rating >= 5"
            label="Rating >= 5"
            />
            </div>
        </Form>
    </div>
    );
}