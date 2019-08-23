import React from 'react';
import BackToStore from './BackToStore';
import AddProduct from './AddProduct';

class Login extends React.Component {
  render() {
    return (
      <section className="login">
        <BackToStore loadPage={this.props.loadPage} modalVisible={this.props.modalVisible} />
        <h1>Administrator view</h1>
        <h3>Login to manage your store</h3>
        <h4>Add new product:</h4>
        <div className="product-form-container">
          <AddProduct 
            addProductToStore={this.props.addProductToStore}
            loadModal={this.props.loadModal}
            modalVisible={this.props.modalVisible} />
        </div>
      </section>
    )
  }
}

export default Login;