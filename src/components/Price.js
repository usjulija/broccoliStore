import React from 'react';

class Price extends React.Component {
  render() {
    const newPrice = this.props.priceCalculator(this.props.price, this.props.discount);
    return (
        <div className="price-container">{newPrice}</div>
    )
  }
}

export default Price;