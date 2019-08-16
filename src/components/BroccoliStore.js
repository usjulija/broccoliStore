import React from 'react';
import StoreMenu from './StoreMenu';
import grocery from '../foodData';
import ProductsGallery from './ProductsGallery';

class BroccoliStore extends React.Component {
  state = {
    products: grocery,
    mobileVisible: false //state of mobile menu
  }
    
  //makes mobile menu visible & invisible
  toggleNavMenu= () => {
      this.setState({ mobileVisible: !this.state.mobileVisible });
  }

  loadPage = (selection) => {
    this.props.history.push(selection);
  }
  
  render() {
      return (
        <React.Fragment>
          <StoreMenu
            toggleNavMenu={this.toggleNavMenu}
            mobileVisible={this.state.mobileVisible}
            loadPage={this.loadPage} />
          <ProductsGallery products={this.state.products} />
        </React.Fragment>
      );
  }
}

export default BroccoliStore;