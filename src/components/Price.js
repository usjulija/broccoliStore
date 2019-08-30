import React from "react";
import PropTypes from 'prop-types';

class Price extends React.Component {
  static propTypes = {
    priceCalculator: PropTypes.func,
    price: PropTypes.number,
    discount: PropTypes.number
  };

  render() {
    const newPrice = this.props.priceCalculator(
      this.props.price,
      this.props.discount
    );
    return <div className="price-container">{newPrice}</div>;
  }
}

export default Price;
