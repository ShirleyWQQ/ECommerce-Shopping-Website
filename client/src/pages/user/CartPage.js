import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../stores/user";

function CartPage(props) {
  const user = useSelector(selectUser);
  return (
    <div>
      <h1> {user ? "cart placeholder" : "Nothing"}</h1>
    </div>
  )
}

export default CartPage;
