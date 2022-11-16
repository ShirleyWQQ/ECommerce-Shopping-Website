import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../components/Product";
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
        <div key={index}>
          <p>username: {item.user_name}</p>
          <p>rating: {item.rating}</p>
          <p>updated_time: {item.updated_time}</p>
          <p>content: {item.content}</p>
        </div>
      ))}
    </div>
  )
}
