import React from "react";
import BackToStore from "./BackToStore";
import { formatPrice } from "../helper";

class Cart extends React.Component {
  renderOrder = key => {
    const toggleTabindex = this.props.popUpVisible || this.props.checkoutVisible ? "-1" : "0";
    const product = this.props.products[key];
    if (!product) return null;
    if (product) {
      return (
        <li className="selected-product flex-container" key={key}>
          <button
            onClick={() => {
              this.props.removeFromCart(key, product.name);
            }}
            aria-label="remove from cart"
            className="close"
            title="remove product"
            tabIndex={toggleTabindex}
          >
            <svg
              fill="#6c3a32"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 47.971 47.971"
            >
              <path d="M28.228 23.986L47.092 5.122a2.998 2.998 0 0 0 0-4.242 2.998 2.998 0 0 0-4.242 0L23.986 19.744 5.121.88a2.998 2.998 0 0 0-4.242 0 2.998 2.998 0 0 0 0 4.242l18.865 18.864L.879 42.85a2.998 2.998 0 1 0 4.242 4.241l18.865-18.864L42.85 47.091c.586.586 1.354.879 2.121.879s1.535-.293 2.121-.879a2.998 2.998 0 0 0 0-4.242L28.228 23.986z" />
            </svg>
          </button>
          <img src={product.imageUrl} alt={product.name} />
          <h4>{product.name}</h4>
          <div className="price-for-cart flex-container">
            <p>{formatPrice(product.price)}</p>
            <p>
              <span
                onClick={() => {
                  this.props.removeOneItem(key);
                }}
                role="button"
                aria-label="remove one item"
                title="remove"
              >
                -
              </span>
              {this.props.order[key]}
              <span
                onClick={() => {
                  this.props.addToCart(key, product.name);
                }}
                role="button"
                aria-label="add one item"
                title="add"
              >
                +
              </span>
            </p>
            <p>{formatPrice(this.props.order[key] * product.price)}</p>
          </div>
        </li>
      );
    } else {
      return <li key={key}>Sorry, {product.name} is no longer available!</li>;
    }
  };
  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      if (this.props.products[key]) {
        return (
          prevTotal + this.props.order[key] * this.props.products[key].price
        );
      } else {
        return prevTotal;
      }
    }, 0);
    return (
      <section className="cart flex-container">
        <BackToStore
          loadPage={this.props.loadPage}
          popUpVisible={this.props.popUpVisible}
          checkoutVisible={this.props.checkoutVisible}
        />
        <h1>Your shopping cart</h1>
        <ul className="products-in-cart">{orderIds.map(this.renderOrder)}</ul>
        <div className="check-out-container flex-container">
          <button onClick={()=>{this.props.loadCheckout(total)}}>Checkout</button>
          <h2 className="total">Total: {formatPrice(total)}</h2>
        </div>
      </section>
    );
  }
}

export default Cart;
