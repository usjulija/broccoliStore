import React from 'react';
import StoreMenu from './StoreMenu';
import grocery from '../foodData';
import ProductsGallery from './ProductsGallery';
import Modal from './Modal';
import { formatPrice } from '../helper';

class BroccoliStore extends React.Component {
  state = {
    products: grocery,
    mobileVisible: false, //state of mobile menu
    modalVisible: false, //state of modal
    detailsForModal: grocery[0] //data for product modal content
  }
    
  //makes mobile menu visible & invisible
  toggleNavMenu= () => {
      this.setState({ mobileVisible: !this.state.mobileVisible });
  }

  closeModal= () => {
      this.setState({ modalVisible: false });
  }

  loadPage = (selection) => {
    this.props.history.push(selection);
  }

  priceCalculator = (price, discount) => {
    if(discount > 0) {
      const percentToDecimal = (100 - discount) / 100;
      const newPrice = price * percentToDecimal;
      return (<p className="withDiscount"><span>{formatPrice(price)}</span> {formatPrice(newPrice)}</p>);
    } else {
      return (<p>{formatPrice(price)}</p>);
    }
  }

  loadModal = (e) => {
    this.setState({ 
      detailsForModal: e.props.details,
      modalVisible: true
     });
    console.log(e.props.details);
  }
  
  render() {
      return (
        <React.Fragment>
          <StoreMenu
            toggleNavMenu={this.toggleNavMenu}
            mobileVisible={this.state.mobileVisible}
            modalVisible ={this.state.modalVisible}
            loadPage={this.loadPage} />
          <Modal 
            modalVisible ={this.state.modalVisible}
            closeModal={this.closeModal}
            details={this.state.detailsForModal}
            priceCalculator={this.priceCalculator} />
          <ProductsGallery 
            modalVisible={this.state.modalVisible}
            products={this.state.products}
            loadModal={this.loadModal}
            priceCalculator={this.priceCalculator} />
        </React.Fragment>
      );
  }
}

export default BroccoliStore;