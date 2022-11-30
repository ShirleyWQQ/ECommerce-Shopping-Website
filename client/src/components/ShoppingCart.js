import "../components/css/ShoppingCart.css"
// props: image, productName, price, quantity
export default function ShoppingCart(props) {
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
          </div>
        </div>
      );
}