import React, { Component } from "react";
import PropTypes from "prop-types";
import Expire from "./Expire";

import "../style/Notify.scss";

class Notify extends Component {
    render() {
        if (this.props.messages.length > 0) {
            return (
                <div className="notify-area">
                    {this.props.messages.map((msg) => {
                        let message = msg.msg;
                        if (msg.values !== null) {
                            message = msg(msg.values);
                        }
                        return (
                            <Expire delay={4000} callback={this.props.rmNotification} key={message}>
                                <div className={"notification " + msg.level} onClick={this.props.rmNotification}>
                                    <span>{message}</span>
                                </div>
                            </Expire>
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
