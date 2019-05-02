import React, { Component } from "react";
import PropTypes from "prop-types";
import Alert from "react-bootstrap/Alert";

import "../style/Notify.scss";

class Notify extends Component {
  render() {
    if (this.props.messages.length > 0) {
      return (
        <div className="notify-area">
          {this.props.messages.map(msg => {
            let message = msg.msg;
            if (msg.values !== null) {
              message = msg(msg.values);
            }
            return (
              <Alert
                dismissible
                className="sri-notification"
                key={message}
                variant={msg.level}
                onClose={this.props.rmNotification}
              >
                {message}
              </Alert>
            );
          })}
        </div>
      );
    }
    return "";
  }
}

Notify.propTypes = {
  messages: PropTypes.array
};

export default Notify;
