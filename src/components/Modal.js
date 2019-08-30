import React from "react";
import PropTypes from 'prop-types';
import Price from "./Price";
import "./styles/modal.css";

class Modal extends React.Component {
  static propTypes = {
    details: PropTypes.shape({
      category: PropTypes.string,
      description: PropTypes.string,
      discount: PropTypes.number,
      imageUrl: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number
    }),
    modalVisible: PropTypes.bool,
    modalAdminView: PropTypes.bool,
    loadPage: PropTypes.func,
    closeModal: PropTypes.func,
    priceCalculator: PropTypes.func
  };
  
  render() {
    const {
      category,
      description,
      discount,
      imageUrl,
      name,
      price
    } = this.props.details;
    const modalVisibility = this.props.modalVisible ? "modal" : "hide";
    let button;
    if (this.props.modalAdminView) {
      button = (
        <button
          className="cart-button"
          onClick={() => {
            this.props.loadPage("products");
            this.props.closeModal();
          }}
        >
          🡐 view store
        </button>
      );
    } else {
      button = <button className="cart-button">+ add to cart</button>;
    }
    return (
      <section className={modalVisibility}>
        <div className="modal-content">
          <div className="close-button-container">
            <button
              aria-label="close modal"
              className="close"
              onClick={this.props.closeModal}
            >
              <svg
                fill="#6c3a32"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 47.971 47.971"
              >
                <path d="M28.228 23.986L47.092 5.122a2.998 2.998 0 0 0 0-4.242 2.998 2.998 0 0 0-4.242 0L23.986 19.744 5.121.88a2.998 2.998 0 0 0-4.242 0 2.998 2.998 0 0 0 0 4.242l18.865 18.864L.879 42.85a2.998 2.998 0 1 0 4.242 4.241l18.865-18.864L42.85 47.091c.586.586 1.354.879 2.121.879s1.535-.293 2.121-.879a2.998 2.998 0 0 0 0-4.242L28.228 23.986z" />
              </svg>
            </button>
          </div>
          <h1>
            {this.props.modalAdminView ? "New product added:" : ""}
            {name}
          </h1>
          <h4>category: {category}</h4>
          <img src={imageUrl} alt={name} />
          <Price
            discount={discount}
            price={price}
            priceCalculator={this.props.priceCalculator}
          />
          <h5>{description}</h5>
          {button}
        </div>
      </section>
    );
  }
}

export default Modal;
