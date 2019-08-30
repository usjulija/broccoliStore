import React from "react";
import PropTypes from 'prop-types';

class AddProduct extends React.Component {
  static propTypes = {
    addProductToStore: PropTypes.func,
    loadModal: PropTypes.func,
    modalVisible: PropTypes.bool,
    popUpVisible: PropTypes.bool,
    products: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object
    ])
  };

  nameRef = React.createRef();
  categoryRef = React.createRef();
  priceRef = React.createRef();
  discountRef = React.createRef();
  descriptionRef = React.createRef();
  imageUrlRef = React.createRef();

  createProduct = e => {
    e.preventDefault();
    const product = {
      id: Date.now(),
      name: this.nameRef.current.value,
      category: this.categoryRef.current.value,
      price: parseFloat(this.priceRef.current.value),
      discount: parseFloat(this.discountRef.current.value),
      description: this.descriptionRef.current.value,
      imageUrl: this.imageUrlRef.current.value
    };
    this.props.addProductToStore(product);
    this.props.loadModal(product, true);
    e.currentTarget.reset();
  };
  render() {
    const toggleTabindex =
      this.props.modalVisible || this.props.popUpVisible ? "-1" : "0";
    let names = [];
    Object.keys(this.props.products).map(key => {
      return names.push(this.props.products[key].category);
    });
    let categoryName = [...new Set(names)];
    return (
      <form className="product-form" onSubmit={this.createProduct}>
        <input
          tabIndex={toggleTabindex}
          type="text"
          name="name"
          ref={this.nameRef}
          placeholder="Product Name"
          required
        />
        <select
          tabIndex={toggleTabindex}
          name="category"
          ref={this.categoryRef}
          required
        >
          {categoryName.map(category => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </select>
        <input
          tabIndex={toggleTabindex}
          type="text"
          name="price"
          ref={this.priceRef}
          placeholder="Product Price in Cents"
          required
        />
        <input
          tabIndex={toggleTabindex}
          type="text"
          name="discount"
          ref={this.discountRef}
          placeholder="Discount: number from 0 to 100"
          required
        />
        <textarea
          tabIndex={toggleTabindex}
          name="description"
          ref={this.descriptionRef}
          placeholder="Description"
          required
        />
        <input
          tabIndex={toggleTabindex}
          type="text"
          name="imageUrl"
          ref={this.imageUrlRef}
          placeholder="Image URL"
          required
        />
        <button tabIndex={toggleTabindex}>+ Add Product</button>
      </form>
    );
  }
}

export default AddProduct;
