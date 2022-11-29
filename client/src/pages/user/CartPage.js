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
  const quantity = props.quantity;
  var productName = "";
  var productId = 0;

  // methods
  const addToCart = (productName) => {
    Api.addToCart(userId, productName);
  }

  const removeFromCart = (productName) => {
    Api.removeFromCart(userId, productName);
  }

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
        <div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Add Product In Cart</Form.Label>
              <Form.Control /*type="email"*/ onChange={e => productName(e.target.value)} placeholder="Enter product name" />
              <Form.Text className="text-muted">
                Click here to remove product
              </Form.Text>
              <Button style={{marginRight: "5px"}} onClick={() => removeFromCart(productName)}>Remove From Cart</Button>
            </Form.Group>
        </div>
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
