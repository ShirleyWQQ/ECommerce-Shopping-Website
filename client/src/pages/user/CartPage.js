import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUser } from "../../stores/user";
import ShoppingCart from "../../components/ShoppingCart";
import api from "../../lib/api";

// props:
function CartPage() {
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  const [items, setItems] = useState([]);
  useEffect(() => {
    if (user !== null) {
      api.getUserCart(user.user_id)
        .then(setItems)
        .catch(api.logError);
    } else {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <div className="flex-container" style={{ gap: "15px 20px" }}>
        {items.map((item, index) => (
          <ShoppingCart
            key={index}
            image={item.picture_source}
            productName={item.product_name}
            quantity={item.quantity}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default CartPage;
