import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../stores/user";
import ShoppingCart from "../../components/ShoppingCart";
import Api from "../../lib/api";

// props: data(product[])
function CartPage(props) {
  // states and varaibles
  const user = useSelector(selectUser);
  const userId = user?.user_id;
  const productName = props.productName;
  const productId = props.productID;
  const quantity = props.quantity;

  // methods
  const addToCart = useCallback(() => {
    Api.addToCart(userId, productName);
  }, [productName]);

  const removeFromCart = useCallback(() => {
    Api.removeFromCart(userId, productName);
  }, [productName]);

  const updateCart = useCallback(() => {
    Api.updateCart(userId, productId, quantity);
  }, [productId, quantity]);

  const getCartItem = useCallback(() => {
    Api.getCartItem(userId, productId);
  }, [productId]);

  const getCart = useCallback(() => {
    Api.getCart(userId);
  }, [userId]);

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
