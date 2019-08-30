import React from "react";
import StoreMenu from "./StoreMenu";
import grocery from "../foodData";
import ProductsGallery from "./ProductsGallery";
import Modal from "./Modal";
import AdminView from "./AdminView";
import Cart from "./Cart";
import Search from "./Search";
import PopUpMessage from "./PopUpMessage";
import Checkout from "./Checkout";
import Support from "./Support";
import { formatPrice } from "../helper";

class BroccoliStore extends React.Component {
  state = {
    products: {}, //all products available
    order: {}, //items in the order
    filteredProducts: [], //visible products
    searchedProducts: [], //products, shown in search mode
    totalItems: 0, //number of items in the cart
    totalPrice: 0, //total price
    displayContent: "products", //what content displayed on page "products", "adminview" (for admin menu), "cart" or "search"
    mobileVisible: false, //state of mobile menu
    modalVisible: false, //state of modal
    detailsForModal: grocery[0], //data for product modal content
    modalAdminView: false, //modified content for admin view
    popUpVisible: false, //state of pop up message
    popUpState: "add", //pop up message for "remove", "add", "removeAdmin"
    popUpName: "string", //here should be the name for the selected product
    checkoutVisible: false, //checkout message
    supportVisible: false, //login and chat visibility
    //chat functionality
    username: "", //stores generated user name
    currentMessage: "",
    messages: [
      {
        senderId: "admin",
        text: "Hello! How can I help you?"
      }
    ]
  };

  componentDidMount() {
    const localStorageOrder = localStorage.getItem("order");
    const localStorageProducts = localStorage.getItem("products");
    const localStorageFiltered = localStorage.getItem("filteredProducts");
    const loadTotalItems = localStorage.getItem("totalItems");
    //load data from local storage
    if (localStorageOrder) {
      this.setState({
        order: JSON.parse(localStorageOrder),
        totalItems: JSON.parse(loadTotalItems)
      });
    }

    if (localStorageProducts) {
      if (localStorageFiltered && JSON.parse(localStorageFiltered).length > 0) {
        this.setState({
          products: JSON.parse(localStorageProducts),
          filteredProducts: JSON.parse(localStorageFiltered)
        });
      } else {
        this.setState({ products: JSON.parse(localStorageProducts) }, () => {
          this.filterProducts("all");
        });
      }
    } else {
      this.setState({ products: grocery }, () => {
        this.filterProducts("all");
      });
    }
  }

  componentDidUpdate() {
    localStorage.setItem("order", JSON.stringify(this.state.order));
    localStorage.setItem("products", JSON.stringify(this.state.products));
    localStorage.setItem("totalItems", JSON.stringify(this.state.totalItems));
    localStorage.setItem(
      "filteredProducts",
      JSON.stringify(this.state.filteredProducts)
    );
  }

  //load page content: "products", "adminview", "cart", search
  loadPage = selection => {
    this.setState({ displayContent: selection });
  };

  //makes mobile menu visible & invisible
  toggleNavMenu = () => {
    this.setState({ mobileVisible: !this.state.mobileVisible });
  };

  //info modal load and close
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

  //checkout load and close
  loadCheckout = price => {
    this.setState({ checkoutVisible: true, totalPrice: price });
  };

  closeCheckout = () => {
    this.setState({ checkoutVisible: false });
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

  //load and close support window
  toggleSupport = () => {
    this.setState({ supportVisible: !this.state.supportVisible });
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

  //calculates total number of items in the cart
  totalItemsCalculator = order => {
    const total = Object.keys(order).reduce((prevTotal, key) => {
      if (this.state.products[key]) {
        return prevTotal + order[key];
      }
      return prevTotal;
    }, 0);
    this.setState({ totalItems: total });
  };

  //filter products by category
  filterProducts = category => {
    let newArray = [];
    const products = { ...this.state.products };
    if (category === "all") {
      Object.keys(products).forEach(key => {
        newArray.push(products[key]);
      });
    } else {
      Object.keys(products).forEach(key => {
        if (category === products[key].category) {
          newArray.push(products[key]);
        }
      });
    }
    this.setState({ filteredProducts: newArray });
  };

  //search products by given query
  searchProducts = query => {
    const filter = query.toUpperCase();
    const products = { ...this.state.products };
    let newArray = [];
    Object.keys(products).forEach(key => {
      const textValue = products[key].name.toUpperCase();
      if (textValue.indexOf(filter) > -1) {
        newArray.push(products[key]);
      }
    });
    this.setState({ searchedProducts: newArray });
  };

  //chat functionality
  sendMessage = (message, user) => {
    const newMessage = {
      senderId: user,
      text: message
    };
    const messages = this.state.messages.slice();
    messages.push(newMessage);
    const messageArray = message.toLowerCase().replace(/[^a-zA-Z ]/g, "").split(" ");
    console.log(messageArray);
    this.setState({messages}, () => {
      this.messageTemplate(messageArray);
    });
  }

  messageTemplate = (messageArray) => {
    if(messageArray.includes("hello") || messageArray.includes("hi")) {
      const newMessage = {
        senderId: "admin",
        text: "Hey! Nice to meet you in our store! How can I help you?"
      };
      const messages = this.state.messages.slice();
      messages.push(newMessage);
      this.setState({messages});
    } else if (messageArray.includes("discount") || messageArray.includes("discounts") || messageArray.includes("pay") || messageArray.includes("payment") || messageArray.includes("delivery")) {
      const newMessage = {
        senderId: "admin",
        text: "It is just a store concept! You cannot buy anything real here!"
      };
      const messages = this.state.messages.slice();
      messages.push(newMessage);
      this.setState({messages});
    } else if (messageArray.includes("author")) {
      const newMessage = {
        senderId: "admin",
        text: "This application author is Julia Us. To see more her projects visit: https://github.com/usjulija"
      };
      const messages = this.state.messages.slice();
      messages.push(newMessage);
      this.setState({messages});
    }
  }

  render() {
    const fixedBackground =
      this.state.modalVisible ||
      this.state.popUpVisible ||
      this.state.checkoutVisible
        ? "fixed"
        : "";
    const toggleTabindex =
      this.state.modalVisible ||
      this.state.popUpVisible ||
      this.state.checkoutVisible
        ? "-1"
        : "0";
    const chatButtonClass = this.state.supportVisible
      ? "chat-icon flex-container close"
      : "chat-icon flex-container";
    const chatButtonMessage = this.state.supportVisible
      ? "close chat"
      : "start-chat";
    const supportContent = (
      <React.Fragment>
        <button
          aria-label="start chat with admin"
          className={chatButtonClass}
          tabIndex={toggleTabindex}
          onClick={this.toggleSupport}>
          <p>{chatButtonMessage}</p>
          <div className="dots-container flex-container">
            <div className="dot-one"></div>
            <div className="dot-two"></div>
            <div className="dot-three"></div>
          </div>
          <div className="bottom-arrow"></div>
        </button>
        <Support 
          supportVisible={this.state.supportVisible} 
          messages={this.state.messages}
          sendMessage={this.sendMessage}
          user="client"
          modalVisible={this.state.modalVisible}
          popUpVisible={this.state.popUpVisible}
          checkoutVisible={this.state.checkoutVisible}
          />
      </React.Fragment>
    );
    let content;
    if (this.state.displayContent === "products") {
      content = (
        <React.Fragment>
          {supportContent}
          <ProductsGallery
            modalVisible={this.state.modalVisible}
            popUpVisible={this.state.popUpVisible}
            products={this.state.products}
            filteredProducts={this.state.filteredProducts}
            loadModal={this.loadModal}
            priceCalculator={this.priceCalculator}
            addToCart={this.addToCart}
            filterProducts={this.filterProducts}
          />
        </React.Fragment>
      );
    } else if (this.state.displayContent === "adminview") {
      content = (
        <AdminView
          products={this.state.products}
          addProductToStore={this.addProductToStore}
          loadPage={this.loadPage}
          loadModal={this.loadModal}
          modalVisible={this.state.modalVisible}
          popUpVisible={this.state.popUpVisible}
          updateProduct={this.updateProduct}
          removeProduct={this.removeProduct}
          toggleSupport={this.toggleSupport}
          supportVisible={this.state.supportVisible}
          messages={this.state.messages}
          sendMessage={this.sendMessage}
          checkoutVisible={this.state.checkoutVisible}
        />
      );
    } else if (this.state.displayContent === "cart") {
      content = (
        <React.Fragment>
          {supportContent}
          <Cart
            loadPage={this.loadPage}
            order={this.state.order}
            products={this.state.products}
            removeFromCart={this.removeFromCart}
            addToCart={this.addOneItem}
            removeOneItem={this.removeOneItem}
            popUpVisible={this.state.popUpVisible}
            loadCheckout={this.loadCheckout}
            checkoutVisible={this.state.checkoutVisible}
          />
        </React.Fragment>
      );
    } else if (this.state.displayContent === "search") {
      content = (
        <React.Fragment>
          {supportContent}
          <Search
            loadModal={this.loadModal}
            loadPage={this.loadPage}
            modalVisible={this.state.modalVisible}
            popUpVisible={this.state.popUpVisible}
            searchProducts={this.searchProducts}
            searchedProducts={this.state.searchedProducts}
            priceCalculator={this.priceCalculator}
            addToCart={this.addToCart}
          />
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
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
        <Checkout
          checkoutVisible={this.state.checkoutVisible}
          closeCheckout={this.closeCheckout}
          totalItems={this.state.totalItems}
          totalPrice={this.state.totalPrice}
        />
        <div className={fixedBackground}>
          <StoreMenu
            toggleNavMenu={this.toggleNavMenu}
            mobileVisible={this.state.mobileVisible}
            modalVisible={this.state.modalVisible}
            popUpVisible={this.state.popUpVisible}
            checkoutVisible={this.state.checkoutVisible}
            loadPage={this.loadPage}
            totalItems={this.state.totalItems}
          />
          <div>{content}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default BroccoliStore;
