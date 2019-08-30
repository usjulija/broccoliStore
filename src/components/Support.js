import React from "react";
import PropTypes from 'prop-types';
import "./styles/support.css";
import GroupChat from "./GroupChat";

class Support extends React.Component {
  static propTypes = {
    supportVisible: PropTypes.bool,
    messages: PropTypes.array,
    modalVisible: PropTypes.bool,
    popUpVisible: PropTypes.bool,
    checkoutVisible: PropTypes.bool,
    sendMessage: PropTypes.func,
    user: PropTypes.oneOf(['client', 'admin'])
  };
  render() {
    const supportVisibility = this.props.supportVisible ? "support" : "hide";
    return (
      <section className={supportVisibility}>
        <GroupChat
          user={this.props.user}
          messages={this.props.messages}
          sendMessage={this.props.sendMessage}
          modalVisible={this.props.modalVisible}
          popUpVisible={this.props.popUpVisible}
          checkoutVisible={this.props.checkoutVisible}
        />
      </section>
    );
  }
}

export default Support;
