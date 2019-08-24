import React from "react";

class BackToStore extends React.Component {
  render() {
    const toggleTabindex =  this.props.popUpVisible || this.props.modalVisible ? "-1" : "0";
    return (
      <button
        tabIndex={toggleTabindex}
        className="back-to-store"
        onClick={() => {
          this.props.loadPage("products");
        }}
      >
        <svg fill="#fff"
          version="1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 492 492"
        >
          <path d="M464 207l1 1H136l103-104a27 27 0 0 0 0-38l-16-16c-5-6-12-8-19-8s-14 2-19 8L8 227a27 27 0 0 0 0 38l177 177c5 6 12 8 19 8s14-2 19-8l16-16a27 27 0 0 0 0-37L135 284h330c15 0 27-12 27-27v-23c0-15-13-27-28-27z" />
        </svg>
        go back to broccoli store
      </button>
    );
  }
}

export default BackToStore;
