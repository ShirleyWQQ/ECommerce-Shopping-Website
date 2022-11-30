import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../components/Product";
import Comment from "../components/Comment";
import api from "../lib/api";
import "./ProductsPage.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Api from "../lib/api";
import User from "../components/Comment";
import {useSelector} from "react-redux";
import {selectUser} from "../stores/user";

// let btn = document.createElement("button");
// btn.innerHTML = "Post My comment";
// btn.addEventListener("click", function () {
//   alert("Button is clicked");
// });

export default function ProductPage() {
  const user = useSelector(selectUser);
  const { product_id } = useParams();
  const [product, setProduct] = useState(null);

  const [comments, setComments] = useState([]);

  const [rating, setRating] = useState("");
  const [content, setContent] = useState("");


  const deleteComment = (cid) => {
    api.deleteComment(cid)
        .then(() => {
          api.getProduct(product_id)
              .then(setProduct)
              .catch(api.logError);
          api.getComments(product_id)
              .then(setComments)
              .catch(api.logError);
        })
        .catch(api.logError);
  };
  const addComment = () => {
    console.log(user.user_id);
    console.log(product_id);
    console.log(parseInt(rating));
    console.log(content);
    Api.addComment(user.user_id, product_id, parseInt(rating), content)
        .then(res => {

          setRating("");
          setContent("");
        })
        .catch(err => {
          if (err.response) {
            alert("adding Failed");
          } else
            alert("Failed to retrieve products");
        });
  };
  useEffect(() => {
    api.getProduct(product_id)
        .then(setProduct)
        .catch(api.logError);
    api.getComments(product_id)
        .then(setComments)
        .catch(api.logError);
  }, [product_id]);
  return (
      <div>
        {product
            ? <Product
                name={product.product_name}
                price={product.price}
                description={product.description}
                image={product.picture_source}
                rating={product.product_rating}
                comments />
            : <h1>Product Not Found</h1>
        }
        <div className="row">
          <div className="col" id="comment">User</div>
          <div className="col" id="comment">Rating</div>
          <div className="col" id="comment">Reviewed time</div>
          <div className="col" id="comment">Content</div>
          <div className="col" id="comment">Edit</div>
        </div>
        {comments.map((item, index) => (
            <Comment
                key={index}
                user_name={item.user_name}
                rating={item.rating}
                updated_time={item.updated_time}
                content={item.content}
                user_id={item.user_id}
                comment_id={item.comment_id}
                onDelete={deleteComment}
            />
        ))}
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        {user?

            <Form>
              {/*//     <Form.Group className="mb-3" controlId="formRanting">*/}
              {/*//         <Form.Label style={{fontWeight: "500"}} class="font-weight-bold">Set Rating</Form.Label>*/}
              {/*//         <Form.Control style={{maxWidth: "250px"}} type="int" placeholder="Enter rating" value={rating} onChange={e => setRating(e.target.value)} />*/}
              {/*//     </Form.Group>*/}


              <Form.Select aria-label="Default select example" onChange={e => setRating(e.target.value)}>

                <Form.Label  style={{fontWeight: "500"}} class="font-weight-bold">Set Rating</Form.Label>


                <option>My rating is: </option>
                <option value="1">★Run away now</option>
                <option value="2">★★Buy it unless you get no other choice</option>
                <option value="3">★★★Just so so</option>
                <option value="4">★★★★Great choice</option>
                <option value="5">★★★★★Buy it, or I will be sad</option>

              </Form.Select>



              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label style={{fontWeight: "500"}}>Set Content</Form.Label>
                <Form.Control  type="string" placeholder="I would say:" value={content} onChange={e => setContent(e.target.value)} />
              </Form.Group>
              {/*<Form.Group className="mb-3" controlId="formBasicCheckbox">*/}
              {/*    <Form.Check type="checkbox" label="This account will be an admin account" onChange={handleCheckboxChange} />*/}
              {/*</Form.Group>*/}
              <Button style={{marginRight: "5px"}} onClick={() => addComment()}>
                addComment
              </Button>
              {/*<Button onClick={() => navigate("/")}>*/}
              {/*    Back to Homepage*/}
              {/*</Button>*/}
              {/*{successMessage &&<Form.Group style={{color:"green", display: "flex"}} ><p class="font-weight-bold" style={{marginTop: "15px"}}>Registered Successfully, you may</p>*/}
              {/*    <Button style={{paddingLeft: "5px "}}variant="link" onClick={() => navigate("/login")}>Log in</Button>*/}
              {/*</Form.Group>}*/}
            </Form>
            :""}





        {/*<Form>*/}
        {/*  /!*<Form.Group className="mb-3" controlId="formBasicEmail">*!/*/}
        {/*  /!*  <Form.Label>Rating</Form.Label>*!/*/}
        {/*  /!*  <Form.Control type="rating" placeholder="Enter your rating" />*!/*/}
        {/*  /!*</Form.Group>*!/*/}
        {/*  <Form.Select aria-label="Default select example">*/}
        {/*    <option>My rating is: </option>*/}
        {/*    <option value="1">★Run away now</option>*/}
        {/*    <option value="2">★★Buy it unless you get no other choice</option>*/}
        {/*    <option value="3">★★★Just so so</option>*/}
        {/*    <option value="4">★★★★Great choice</option>*/}
        {/*    <option value="5">★★★★★Buy it, or I will be sad</option>*/}
        {/*  </Form.Select>*/}

        {/*  <Form.Group className="mb-3" controlId="formBasicPassword">*/}
        {/*    <Form.Label>Comment</Form.Label>*/}
        {/*    <Form.Control type="comment" placeholder="My comment is: " />*/}
        {/*  </Form.Group>*/}

        {/*  <Button variant="primary" type="send my comment">*/}
        {/*    send my comment*/}
        {/*  </Button>*/}
        {/*</Form>*/}
      </div>
  )
}
