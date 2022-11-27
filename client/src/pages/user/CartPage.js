import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../stores/user";

function CartPage() {
  const user = useSelector(selectUser);
  if (user) {
    return (
      <div>
        <h1>cart placeholder</h1>
      </div>
    )
  } else {
    return (
      <div>
        <h1>nothing</h1>
      </div>
    )
  }
}

export default CartPage;
