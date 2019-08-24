import React from "react";
import StoreMenu from "./StoreMenu";
import grocery from "../foodData";
import ProductsGallery from "./ProductsGallery";
import Modal from "./Modal";
import Login from "./Login";
import Cart from "./Cart";
import Search from "./Search";
import PopUpMessage from "./PopUpMessage";
import NotFound from "./NotFound";
import { formatPrice } from "../helper";

class BroccoliStore extends React.Component {
  state = {
    products: {}, //all products available
    order: {}, //items in the order
    filteredProducts: [], //visible products
    searchedProducts: [], //products, shown in search mode
    totalItems: 0, //number of items in the cart
    displayContent: "products", //what content displayed on page "products", "login" (for admin menu), "cart" or "search"
    mobileVisible: false, //state of mobile menu
    modalVisible: false, //state of modal
    detailsForModal: grocery[0], //data for product modal content
    modalAdminView: false, //modified content for admin view
    popUpVisible: false, //state of pop up message
    popUpState: "add", //pop up message for "remove", "add", "removeAdmin"
    popUpName: "string" //here should be the name for the selected product
  };

  componentDidMount() {
    const localStorageOrder = localStorage.getItem("order");
    const localStorageProducts = localStorage.getItem("products");
    const localStorageFiltered = localStorage.getItem("filteredProducts");
    const loadTotalItems = localStorage.getItem("totalItems");
    if (localStorageOrder) {
      this.setState({
        order: JSON.parse(localStorageOrder),
        totalItems: JSON.parse(loadTotalItems)
      });
    }

    if (localStorageProducts) {
      if (localStorageFiltered && JSON.parse(localStorageFiltered).length > 0) {
        console.log(JSON.parse(localStorageFiltered).length, "exists");
        this.setState({
          products: JSON.parse(localStorageProducts),
          filteredProducts: JSON.parse(localStorageFiltered)
        });
      } else {
        console.log("else");
        this.setState(
          {
            products: JSON.parse(localStorageProducts)
          },
          () => {
            this.filterProducts("all");
          }
        );
      }
    } else {
      console.log("new");
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

  render() {
    const fixedBackground =
      this.state.modalVisible || this.state.popUpVisible ? "fixed" : "";
    let content;
    if (this.state.displayContent === "products") {
      content = (
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
    } else if (this.state.displayContent === "search") {
      content = (
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
        <div className={fixedBackground}>
          <StoreMenu
            toggleNavMenu={this.toggleNavMenu}
            mobileVisible={this.state.mobileVisible}
            modalVisible={this.state.modalVisible}
            popUpVisible={this.state.popUpVisible}
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
