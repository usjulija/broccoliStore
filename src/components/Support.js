import React from "react";
import "./styles/support.css";
import GroupChat from "./GroupChat";

class Support extends React.Component {
  render() {
    const supportVisibility = this.props.supportVisible ? "support" : "hide";
    return (
      <section className={supportVisibility}>
        <GroupChat
          messages={this.props.messages}
          user={this.props.user}
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
