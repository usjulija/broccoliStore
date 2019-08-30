import React from "react";
import PropTypes from 'prop-types';

class EditProduct extends React.Component {
  static propTypes = {
    details: PropTypes.shape({
      category: PropTypes.string,
      description: PropTypes.string,
      discount: PropTypes.number,
      imageUrl: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
      id: PropTypes.number
    }),
    updateProduct: PropTypes.func,
    modalVisible: PropTypes.bool,
    popUpVisible: PropTypes.bool,
    products: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object
    ]),
    removeProduct: PropTypes.func
  };

  handleChange = e => {
    const updatedProduct = {
      ...this.props.details,
      [e.currentTarget.name]: e.currentTarget.value
    };
    this.props.updateProduct(this.props.details.id, updatedProduct);
  };
  render() {
    const {
      category,
      description,
      discount,
      id,
      imageUrl,
      name,
      price
    } = this.props.details;
    const toggleTabindex =
      this.props.modalVisible || this.props.popUpVisible ? "-1" : "0";
    let names = [];
    Object.keys(this.props.products).map(key => {
      return names.push(this.props.products[key].category);
    });
    let categoryName = [...new Set(names)];
    return (
      <div className="product-form">
        <input
          tabIndex={toggleTabindex}
          type="text"
          name="name"
          onChange={this.handleChange}
          value={name}
          ref={this.nameRef}
          placeholder="Product Name"
          required
        />
        <select
          tabIndex={toggleTabindex}
          name="category"
          onChange={this.handleChange}
          value={category}
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
          onChange={this.handleChange}
          value={price}
          ref={this.priceRef}
          placeholder="Product Price in Cents"
          required
        />
        <input
          tabIndex={toggleTabindex}
          type="text"
          name="discount"
          onChange={this.handleChange}
          value={discount}
          ref={this.discountRef}
          placeholder="Discount: number from 0 to 100"
          required
        />
        <textarea
          tabIndex={toggleTabindex}
          name="description"
          onChange={this.handleChange}
          value={description}
          ref={this.descriptionRef}
          placeholder="Description"
          required
        />
        <input
          tabIndex={toggleTabindex}
          type="text"
          name="imageUrl"
          onChange={this.handleChange}
          value={imageUrl}
          ref={this.imageUrlRef}
          placeholder="Image URL"
          required
        />
        <button
          tabIndex={toggleTabindex}
          onClick={() => {
            this.props.removeProduct(id, name);
          }}
        >
          - Remove Product
        </button>
      </div>
    );
  }
}

export default EditProduct;
