import "../components/css/ShoppingCart.css"
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import Api from "../lib/api";
import { selectUser } from "../stores/user";

// props: image, productName, price, quantity
export default function ShoppingCart(props) {
  const user = useSelector(selectUser);
  const removeFromCart = () => {
    const product_id = props.product_id;
    const user_id = user?.user_id;
    Api.getCartItem(user_id, product_id)
    .then(res => {
      if ((res.length !== 0) && (res[0].quantity == 1)) {
        Api.removeFromCart(user_id, product_id);
      } else {
        Api.updateCart(user_id, product_id, res[0].quantity - 1);
      }
    })
    .catch(err => {
      if (err.response) {
        alert("Login Failed");
      } else
        alert("Failed to retrieve products");
    });
  }
    return (
        <div className="container">
          <div className="row">
            <div className="col">
              <img className="img-top" src={props.image} alt="no image available" id="img3"/>
            </div>
            <div className="col">
              <h5 className="productName">{props.productName}</h5>
              <h5 className="quantity">{props.quantity}</h5>
            </div>
            <div className="col">
              <h5 className="price">${props.price}</h5>
            </div>
            <div className="col">
              <Button onClick={removeFromCart}>-</Button>
            </div>
          </div>
        </div>
      );
}