import React from 'react';
import BackToStore from './BackToStore';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';

class Login extends React.Component {
  render() {
    return (
      <section className="login">
        <BackToStore 
          loadPage={this.props.loadPage} 
          modalVisible={this.props.modalVisible} 
          popUpVisible={this.props.popUpVisible} />
        <h1>Administrator view</h1>
        <h3>Here you can manage your store</h3>
        <h4>Add new product:</h4>
        <div className="product-form-container">
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

export default Login;