import React from 'react';
import BackToStore from './BackToStore';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';
import Support from './Support';

class AdminView extends React.Component {
  render() {
    const toggleTabindex =
    this.props.modalVisible ||
    this.props.popUpVisible
      ? "-1"
      : "0";
    const chatButtonMessage = this.props.supportVisible
    ? "close chat"
    : "open chat with clients";
    const chatButtonClass = this.props.supportVisible
    ? "chat-icon flex-container close"
    : "chat-icon flex-container";
    return (
      <section className="adminview flex-container">
        <BackToStore 
          loadPage={this.props.loadPage} 
          modalVisible={this.props.modalVisible} 
          popUpVisible={this.props.popUpVisible} />
        <h1>Administrator view</h1>
        <h3>Here you can manage your store</h3>
        <button
          title="chat with client"
          id="admin"
          aria-label="start chat with clients"
          className={chatButtonClass}
          tabIndex={toggleTabindex}
          onClick={this.props.toggleSupport}>
          <p>{chatButtonMessage}</p>
          <div className="dots-container flex-container">
            <div className="dot-one"></div>
            <div className="dot-two"></div>
            <div className="dot-three"></div>
          </div>
          <div className="bottom-arrow"></div>
        </button>
        <Support 
          supportVisible={this.props.supportVisible} 
          messages={this.props.messages}
          sendMessage={this.props.sendMessage}
          user="admin"
          />
        <h4>Add new product:</h4>
        <div className="product-form-container flex-container">
          <AddProduct 
            products={this.props.products}
            addProductToStore={this.props.addProductToStore}
            loadModal={this.props.loadModal}
            modalVisible={this.props.modalVisible}
            popUpVisible={this.props.popUpVisible} />
          <h4>Modify existing products:</h4>
          {Object.keys(this.props.products).map(key => (
            <EditProduct
                key={key}
                products={this.props.products}
                details={this.props.products[key]}
                loadModal={this.props.loadModal}
                modalVisible={this.props.modalVisible}
                updateProduct={this.props.updateProduct}
                removeProduct={this.props.removeProduct}
                popUpVisible={this.props.popUpVisible}
            />
          ))}
        </div>
      </section>
    )
  }
}

export default AdminView;