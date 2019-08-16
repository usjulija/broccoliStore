import React from 'react';
import Product from './Product';
import { execSync } from 'child_process';

class ProductsGallery extends React.Component {
  render() {
    console.log(this.props.products);
    return (
      <div className="products-gallery">
        {Object.keys(this.props.products).map(key => (
            <Product
                key={key}
                details={this.props.products[key]}
            />
        ))}
      </div>
    )
  }
}

export default ProductsGallery;