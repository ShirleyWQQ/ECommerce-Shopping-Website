import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUser } from "../../stores/user";
import ShoppingCart from "../../components/ShoppingCart";
import api from "../../lib/api";

function roundNumber(num, scale) {
  if(!("" + num).includes("e")) {
    return +(Math.round(num + "e+" + scale)  + "e-" + scale);
  } else {
    var arr = ("" + num).split("e");
    var sig = ""
    if(+arr[1] + scale > 0) {
      sig = "+";
    }
    return +(Math.round(+arr[0] + "e" + sig + (+arr[1] + scale)) + "e-" + scale);
  }
}

// props:
function CartPage() {
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (user !== null) {
      api.getUserCart(user.user_id)
        .then(setItems)
        .catch(api.logError);
    } else {
      navigate("/login");
    }
  }, [user, navigate]);

  useEffect(() => {
    items.map((item) => {
      setTotal(total + item.quantity * item.price);
    })
  }, [items])

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
            price={roundNumber(item.price, 2)}
            product_id={item.product_id}
            total={item.quantity * item.price}
            setItems={setItems}
          />
          ))}
      </div>
      <div>{total}</div>
    </div>
  );
}

export default CartPage;
