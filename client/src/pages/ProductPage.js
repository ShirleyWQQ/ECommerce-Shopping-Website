import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../components/Product";
import Comment from "../components/Comment";
import api from "../lib/api";

export default function ProductPage() {
  const { product_id } = useParams();
  const [product, setProduct] = useState(null);
  const [comments, setComments] = useState([]);
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
          comments />
        : <h1>Product Not Found</h1>
      }
      {comments.map((item, index) => (
        <Comment
          key={index}
          user_name={item.user_name}
          rating={item.rating}
          updated_time={item.updated_time}
          content={item.content}
        />
      ))}
    </div>
  )
}
