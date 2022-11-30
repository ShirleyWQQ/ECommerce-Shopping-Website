import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../components/Product";
import Comment from "../components/Comment";
import "./ProductsPage.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Api from "../lib/api";
import { useSelector } from "react-redux";
import { selectUser } from "../stores/user";

export default function ProductPage() {
  const user = useSelector(selectUser);
  const { product_id } = useParams();
  const [product, setProduct] = useState(null);
  const [comments, setComments] = useState([]);
  const [rating, setRating] = useState("");
  const [content, setContent] = useState("");


  const deleteComment = (cid) => {
    Api.deleteComment(cid)
      .then(() => {
        Api.getProduct(product_id)
          .then(setProduct)
          .catch(Api.logError);
        Api.getComments(product_id)
          .then(setComments)
          .catch(Api.logError);
      })
      .catch(Api.logError);
  };
  const addComment = () => {
    debugger;
    Api.addComment(user.user_id, parseInt(product_id), parseInt(rating), content)
      .then(res => {
        Api.getProduct(product_id)
          .then(setProduct)
          .catch(Api.logError);
        Api.getComments(product_id)
          .then(setComments)
          .catch(Api.logError);
      })
      .catch(err => {
        if (err.response) {
          alert("adding Failed");
        } else
          alert("Failed to retrieve products");
      });
  };
  useEffect(() => {
    Api.getProduct(product_id)
      .then(setProduct)
      .catch(Api.logError);
    Api.getComments(product_id)
      .then(setComments)
      .catch(Api.logError);
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
      <br/>
      <br/>
      <br/>
      {user
        ? <Form>
          <Form.Label style={{ fontWeight: "500" }} className="font-weight-bold">Rating</Form.Label>
          <Form.Select aria-label="Default select example" onChange={e => setRating(e.target.value)}>
            <option>My rating is: </option>
            <option value="1">★Run away now</option>
            <option value="2">★★Buy it unless you get no other choice</option>
            <option value="3">★★★Just so so</option>
            <option value="4">★★★★Great choice</option>
            <option value="5">★★★★★Buy it, or I will be sad</option>
          </Form.Select>
          <Form.Label style={{ fontWeight: "500" }}>Comment</Form.Label>
          <Form.Control type="string" placeholder="I would say:" value={content} onChange={e => setContent(e.target.value)} />
          <br/>
          <Button style={{ marginRight: "5px" }} onClick={() => addComment()}>
            Add Comment
          </Button>

        </Form>
        : ""}
    </div>
  )
}
