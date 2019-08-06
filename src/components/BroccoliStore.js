import React from 'react';
import StoreMenu from './StoreMenu';

class BroccoliStore extends React.Component {
  state = {
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
          <StoreMenu
              toggleNavMenu={this.toggleNavMenu}
              mobileVisible={this.state.mobileVisible}
              loadPage={this.loadPage} />
      );
  }
}

export default BroccoliStore;