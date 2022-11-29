import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../stores/user";
import ShoppingCart from "../../components/ShoppingCart";
import api from "../../lib/api";

// props: data(product[])
function CartPage(props) {
  const user = useSelector(selectUser);

  const [items, setItems] = useState([]);
  useEffect(() => {
    api.getUserCart(user.user_id)
      .then(setItems)
      .catch(api.logError);
  }, [user]);
  if (user) {
    return (
      <div>
        <div>Shopping Cart</div>
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
    )
  } else {
    return (
      <div>
        <h1>Sorry you need to login to view your cart :)</h1>
      </div>
    )
  }
}

export default CartPage;
