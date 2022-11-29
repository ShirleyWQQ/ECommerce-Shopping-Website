import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../components/Product";
import Comment from "../components/Comment";
import api from "../lib/api";
import "./ProductsPage.css"

export default function ProductPage() {
  const { product_id } = useParams();
  const [product, setProduct] = useState(null);
  const [comments, setComments] = useState([]);
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
    </div>
  )
}
