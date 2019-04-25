import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap/Alert';

import '../style/Notify.scss';


function Notify (props) {

    let message = props.messages[0],
        msg = message.msg;

    if (message.vals !== null) {
        msg = msg(message.vals);
    }

    return (
        <div className="notify-area">
            <Alert color={message.level}>
               {msg}
            </Alert>
        </div>
    );
}

Notify.propTypes = {
    messages: PropTypes.array,
}

export default Notify;
