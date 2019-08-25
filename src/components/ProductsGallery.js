import React from 'react';
import Product from './Product';
import Categories from './Categories';

class ProductsGallery extends React.Component {
  render() {
    return (
      <div className="products-gallery flex-container">
        <Categories 
          products={this.props.products}
          modalVisible={this.props.modalVisible}
          popUpVisible={this.props.popUpVisible}
          filterProducts={this.props.filterProducts}
         />
         <div className="products-container flex-container">
          {this.props.filteredProducts.map(product => (
              <Product
                  key={product.id}
                  addToCart = {this.props.addToCart}
                  details={product}
                  loadModal={this.props.loadModal}
                  priceCalculator={this.props.priceCalculator}
                  modalVisible={this.props.modalVisible}
                  popUpVisible={this.props.popUpVisible}
              />
              ))}
        </div>
      </div>
    )
  }
}

export default ProductsGallery;