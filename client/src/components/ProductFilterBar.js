import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import StarIcon from "../images/StarIcon";


export default function ProductFilterBar(props) {
    const [isSelected, setIsSelected] = useState(-1);
    console.log(isSelected);

    const handleSelectStarRating = (num) => {
        setIsSelected((num == isSelected)? -1 : num);
    }

    return (
    <div style={{ minWidth: 200, paddingLeft: "30px"}}>
        <p className="font-weight-bold">Filter by Rating</p>
        <div style={{display: "flex", flexDirection: "column", marginBottom: "30px"}}>
            <Button variant="light" style={{marginRight: "40px", marginBottom: "7px"}} onClick={()=>handleSelectStarRating(5)} active={(isSelected == 5)? true: false}>
                <div style={{display: "flex", alignItems: "center"}}>
                    <StarIcon/>
                    <StarIcon/>
                    <StarIcon/>
                    <StarIcon/>
                    <StarIcon/>
                </div>
            </Button>
            <Button variant="light" style={{marginRight: "40px", marginBottom: "7px"}} onClick={()=>handleSelectStarRating(4)} active={(isSelected == 4)? true: false}>
                <div style={{display: "flex", alignItems: "center", float: "right"}}>
                    <StarIcon/>
                    <StarIcon/>
                    <StarIcon/>
                    <StarIcon/>
                    {`&up`}
                </div>
            </Button>
            <Button variant="light" style={{marginRight: "40px", marginBottom: "7px"}} onClick={()=>handleSelectStarRating(3)} active={(isSelected == 3)? true: false}>
                <div style={{display: "flex", alignItems: "center", float: "right"}}>
                    <StarIcon/>
                    <StarIcon/>
                    <StarIcon/>
                    {`&up`}
                </div>
            </Button>
            <Button variant="light" style={{marginRight: "40px", marginBottom: "7px"}} onClick={()=>handleSelectStarRating(2)} active={(isSelected == 2)? true: false}>
                <div style={{display: "flex", alignItems: "center", float: "right"}}>
                    <StarIcon/>
                    <StarIcon/>
                    {`&up`}
                </div>
            </Button>
        </div>
        <p className="font-weight-bold">Filter by Rating</p>
        <Form>
            <div>
            <Form.Check 
            type="checkbox"
            id="Rating>=1"
            label="Rating>=1"
            />
            <Form.Check
            type="checkbox"
            id="Rating>=2"
            label="Rating>=2"
            />
            <Form.Check
            type="checkbox"
            id="Rating>=3"
            label="Rating>=3"
            />
            <Form.Check
            type="checkbox"
            id="Rating>=4"
            label="Rating>=4"
            />
            <Form.Check
            type="checkbox"
            id="Rating>=5"
            label="Rating>=5"
            />
            </div>
        </Form>
    </div>
    );
}