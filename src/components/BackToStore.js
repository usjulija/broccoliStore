import React from "react";

class BackToStore extends React.Component {
  render() {
    const toggleTabindex = this.props.popUpVisible || this.props.modalVisible ? "-1" : "0";
    return (
      <button tabIndex={toggleTabindex} className="back-to-store" onClick={() => { this.props.loadPage("products"); }}>
        🡐 go back to broccoli store
      </button>
    );
  }
}

export default BackToStore;
