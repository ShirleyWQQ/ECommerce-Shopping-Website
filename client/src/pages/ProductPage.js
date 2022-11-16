import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../components/Product";
import api from "../lib/api";

export default function ProductPage() {
  const { product_id } = useParams();
  const [product, setProduct] = useState({ found: false });
  useEffect(() => {
    api.getProduct(product_id, setProduct);
  }, [product_id, setProduct]);
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
    </div>
  )
}
