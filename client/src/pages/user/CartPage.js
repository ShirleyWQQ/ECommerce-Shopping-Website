import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../stores/user";
import ShoppingCart from "../../components/ShoppingCart";

// props: data(product[])
function CartPage(props) {
  const user = useSelector(selectUser);
  if (user) {
    return (
      <div>
        <div>Shopping Cart</div>
        <div className="flex-container" style={{ gap: "15px 20px" }}>
          {props.data.map((item, index) => (
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
