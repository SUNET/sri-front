import React, { Component } from "react";
import PropTypes from "prop-types";
import Alert from "react-bootstrap/Alert";

import "../style/Notify.scss";

class Notify extends Component {
	render() {
		if (this.props.messages.length > 0) {
			let message = this.props.messages[0],
				msg = message.msg;

			if (message.vals !== null) {
				msg = msg(message.vals);
			}

			return (
				<div className="notify-area">
					<Alert
						dismissible
						variant={message.level}
						onClose={this.props.rmNotification}
					>
						{msg}
					</Alert>
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
