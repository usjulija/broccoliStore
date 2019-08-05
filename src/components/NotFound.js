import React from 'react';

class NotFound extends React.Component {
  render() {
    return (
      <header className="not-found">
        <h2>Ups! Page is not found!</h2>
        <button className="store-button">
          <span>Shop Now </span>
        </button>
      </header>
    )
  }
}

export default NotFound;