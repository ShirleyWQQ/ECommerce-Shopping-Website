import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUser } from "../../stores/user";
import ShoppingCart from "../../components/ShoppingCart";
import api from "../../lib/api";

// function roundNumber(num, scale) {
//   if(!("" + num).includes("e")) {
//     return +(Math.round(num + "e+" + scale)  + "e-" + scale);
//   } else {
//     var arr = ("" + num).split("e");
//     var sig = ""
//     if(+arr[1] + scale > 0) {
//       sig = "+";
//     }
//     return +(Math.round(+arr[0] + "e" + sig + (+arr[1] + scale)) + "e-" + scale);
//   }
// }

// props:
function CartPage() {
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const [items, setItems] = useState([]);
  const initialTotal = items.reduce((acc, item) => acc + item.quantity * item.price, 0);
  const [total, setTotal] = useState(initialTotal);

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
   setTotal(items.reduce((acc, item) => acc + item.quantity * item.price, 0));
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
            price={item.price}
            product_id={item.product_id}
            total={(item.quantity * (item.price*100))/100}
            setItems={setItems}
          />
          ))}
      </div>
      <div>{Number(total).toFixed(2)}</div>
    </div>
  );
}

export default CartPage;
