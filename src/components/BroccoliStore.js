import React from "react";
import StoreMenu from "./StoreMenu";
import grocery from "../foodData";
import ProductsGallery from "./ProductsGallery";
import Modal from "./Modal";
import Login from "./Login";
import Cart from "./Cart";
import { formatPrice } from "../helper";
import PopUpMessage from "./PopUpMessage";

class BroccoliStore extends React.Component {
  state = {
    products: {},
    order: {}, //items in the order
    totalItems: 0, //number of items in the cart
    displayContent: "cart", //what content displayed on page "products", "login" or "cart"
    mobileVisible: false, //state of mobile menu
    modalVisible: false, //state of modal
    detailsForModal: grocery[0], //data for product modal content
    modalAdminView: false, //modified content for admin view
    popUpVisible: false, //state of pop up message
    popUpState: "add", //pop up message for "remove", "add", "removeAdmin"
    popUpName: "string"
  };

  componentDidMount() {
    const localStorageOrder = localStorage.getItem("order");
    const localStorageProducts = localStorage.getItem("products");
    const loadTotalItems = localStorage.getItem("totalItems");
    if (localStorageOrder) {
      this.setState({
        order: JSON.parse(localStorageOrder),
        totalItems: JSON.parse(loadTotalItems)
      });
    }

    if (localStorageProducts) {
      this.setState({ products: JSON.parse(localStorageProducts) });
    } else {
      this.setState({ products: grocery });
    }
  }

  componentDidUpdate() {
    localStorage.setItem("order", JSON.stringify(this.state.order));
    localStorage.setItem("products", JSON.stringify(this.state.products));
    localStorage.setItem("totalItems", JSON.stringify(this.state.totalItems));
  }

  loadPage = selection => {
    this.setState({ displayContent: selection });
  };

  //makes mobile menu visible & invisible
  toggleNavMenu = () => {
    this.setState({ mobileVisible: !this.state.mobileVisible });
  };

  //calculates price with or without discount
  priceCalculator = (price, discount) => {
    if (discount > 0) {
      const percentToDecimal = (100 - discount) / 100;
      const newPrice = price * percentToDecimal;
      return (
        <p className="withDiscount">
          <span>{formatPrice(price)}</span> {formatPrice(newPrice)}
        </p>
      );
    } else {
      return <p>{formatPrice(price)}</p>;
    }
  };

  //info modal
  loadModal = (details, adminView) => {
    if (adminView === true) {
      this.setState({ modalAdminView: true });
    } else {
      this.setState({ modalAdminView: false });
    }
    this.setState({
      detailsForModal: details,
      modalVisible: true
    });
  };

  closeModal = () => {
    this.setState({ modalVisible: false });
  };

  //admin functions:
  //add new product
  addProductToStore = product => {
    const products = { ...this.state.products };
    products[product.id] = product;
    this.setState({ products });
  };

  //modify existing products
  updateProduct = (key, newProduct) => {
    const products = { ...this.state.products };
    products[key] = newProduct;
    this.setState({ products });
  };

  //remove existing products
  removeProduct = (key, name) => {
    const products = { ...this.state.products };
    const order = { ...this.state.order };
    delete products[key];
    delete order[key];
    this.setState({ products, order });
    this.loadPopUp(name, "removeAdmin");
    this.totalItemsCalculator(order);
  };

  //cart functions:
  //add products to cart
  addToCart = (index, name) => {
    const order = { ...this.state.order };
    order[index] = order[index] + 1 || 1;
    this.setState({ order });
    this.loadPopUp(name, "add");
    this.totalItemsCalculator(order);
  };

  //remove from cart
  removeFromCart = (index, name) => {
    const order = { ...this.state.order };
    delete order[index];
    this.setState({ order });
    this.loadPopUp(name, "remove");
    this.totalItemsCalculator(order);
  };

  //add and remove only one item from the cart
  addOneItem = index => {
    const order = { ...this.state.order };
    order[index] = order[index] + 1 || 1;
    this.setState({ order });
    this.totalItemsCalculator(order);
  };

  removeOneItem = index => {
    const order = { ...this.state.order };
    if (order[index] > 1) {
      order[index] = order[index] - 1;
    } else {
      delete order[index];
    }
    this.setState({ order });
    this.totalItemsCalculator(order);
  };

  //load & close pop up
  loadPopUp = (name, state) => {
    if (state === "add") {
      this.setState({
        popUpState: "add",
        popUpName: name,
        popUpVisible: true
      });
    } else if (state === "remove") {
      this.setState({
        popUpState: "remove",
        popUpName: name,
        popUpVisible: true
      });
    } else if (state === "removeAdmin") {
      this.setState({
        popUpState: "removeAdmin",
        popUpName: name,
        popUpVisible: true
      });
    }
  };

  closePopUp = () => {
    this.setState({
      popUpVisible: false
    });
  };

  //total number of items in the cart
  totalItemsCalculator = order => {
    console.log(order);
    const total = Object.keys(order).reduce((prevTotal, key) => {
      if (this.state.products[key]) {
        return prevTotal + order[key];
      }
      return prevTotal;
    }, 0);
    console.log(total);
    this.setState({ totalItems: total });
  };

  render() {
    let content;
    if (this.state.displayContent === "products") {
      content = (
        <ProductsGallery
          modalVisible={this.state.modalVisible}
          popUpVisible={this.state.popUpVisible}
          products={this.state.products}
          loadModal={this.loadModal}
          priceCalculator={this.priceCalculator}
          addToCart={this.addToCart}
        />
      );
    } else if (this.state.displayContent === "login") {
      content = (
        <Login
          products={this.state.products}
          addProductToStore={this.addProductToStore}
          loadPage={this.loadPage}
          loadModal={this.loadModal}
          modalVisible={this.state.modalVisible}
          popUpVisible={this.state.popUpVisible}
          updateProduct={this.updateProduct}
          removeProduct={this.removeProduct}
        />
      );
    } else if (this.state.displayContent === "cart") {
      content = (
        <Cart
          loadPage={this.loadPage}
          order={this.state.order}
          products={this.state.products}
          removeFromCart={this.removeFromCart}
          addToCart={this.addOneItem}
          removeOneItem={this.removeOneItem}
          popUpVisible={this.state.popUpVisible}
        />
      );
    }

    return (
      <React.Fragment>
        <StoreMenu
          toggleNavMenu={this.toggleNavMenu}
          mobileVisible={this.state.mobileVisible}
          modalVisible={this.state.modalVisible}
          popUpVisible={this.state.popUpVisible}
          loadPage={this.loadPage}
          totalItems={this.state.totalItems}
        />
        <Modal
          modalVisible={this.state.modalVisible}
          closeModal={this.closeModal}
          details={this.state.detailsForModal}
          priceCalculator={this.priceCalculator}
          modalAdminView={this.state.modalAdminView}
          loadPage={this.loadPage}
        />
        <PopUpMessage
          popUpVisible={this.state.popUpVisible}
          popUpName={this.state.popUpName}
          popUpState={this.state.popUpState}
          closePopUp={this.closePopUp}
        />
        <div>{content}</div>
      </React.Fragment>
    );
  }
}

export default BroccoliStore;
