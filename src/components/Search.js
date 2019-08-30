import React from "react";
import BackToStore from "./BackToStore";
import Product from "./Product";
import "./styles/search.css";

class Search extends React.Component {
  inputRef = React.createRef();
  handleSearch = e => {
    e.preventDefault();
    this.props.searchProducts(this.inputRef.current.value);
  };
  render() {
    const toggleTabindex =
      this.props.popUpVisible || this.props.modalVisible ? "-1" : "0";
    return (
      <section className="search-container">
        <BackToStore
          loadPage={this.props.loadPage}
          modalVisible={this.props.modalVisible}
          popUpVisible={this.props.popUpVisible}
        />
        <h1>What are you looking for?</h1>
        <form
          className="search-form"
          onSubmit={this.handleSearch}
          onChange={this.handleSearch}
        >
          <input
            tabIndex={toggleTabindex}
            placeholder="Enter product name here"
            ref={this.inputRef}
            type="text"
            name="search"
          />
          <button aria-label="search" tabIndex={toggleTabindex}>
            <svg
              fill="#fff"
              xmlns="http://www.w3.org/2000/svg"
              version="1"
              viewBox="0 0 57 57"
            >
              <path d="M55 52L42 38A23 23 0 0 0 24 0a23 23 0 1 0 13 42l14 14a3 3 0 0 0 4 0v-4zM24 6a17 17 0 1 1 0 34 17 17 0 0 1 0-34z" />
            </svg>
          </button>
        </form>
        <div className="products-container flex-container">
          {this.props.searchedProducts.map(product => (
            <Product
              key={product.id}
              addToCart={this.props.addToCart}
              details={product}
              loadModal={this.props.loadModal}
              priceCalculator={this.props.priceCalculator}
              modalVisible={this.props.modalVisible}
              popUpVisible={this.props.popUpVisible}
            />
          ))}
        </div>
      </section>
    );
  }
}

export default Search;
