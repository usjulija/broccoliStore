import React from "react";

class AddProduct extends React.Component {
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
        }
        this.props.addProductToStore(product);
        this.props.loadModal(product, true);
        e.currentTarget.reset();
    };
    render() {
    const toggleTabindex = this.props.modalVisible ? "-1" : "0";
    return (
      <form className="product-form" onSubmit={this.createProduct}>
        <input tabIndex={toggleTabindex} type="text" name="name" ref={this.nameRef} placeholder="Product Name" />
        <input tabIndex={toggleTabindex} type="text" name="category" ref={this.categoryRef} placeholder="Category Name" />
        <input tabIndex={toggleTabindex} type="text" name="price" ref={this.priceRef} placeholder="Product Price" />
        <input tabIndex={toggleTabindex} type="text" name="discount" ref={this.discountRef} placeholder="Product Discount" />
        <textarea tabIndex={toggleTabindex} name="description" ref={this.descriptionRef} placeholder="Description" />
        <input tabIndex={toggleTabindex} type="text" name="imageUrl" ref={this.imageUrlRef} placeholder="Product Image" />
        <button tabIndex={toggleTabindex}>+ Add Product</button>
      </form>
    );
  }
}

export default AddProduct;
