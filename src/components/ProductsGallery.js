import React from 'react';
import Product from './Product';

class ProductsGallery extends React.Component {
  render() {
    return (
      <div className="products-gallery">
        {Object.keys(this.props.products).map(key => (
            <Product
                key={key}
                addToCart = {this.props.addToCart}
                details={this.props.products[key]}
                loadModal={this.props.loadModal}
                priceCalculator={this.props.priceCalculator}
                modalVisible={this.props.modalVisible}
                popUpVisible={this.props.popUpVisible}
            />
        ))}
      </div>
    )
  }
}

export default ProductsGallery;