import React, { Component } from "react";
import { API_HOST } from "../config.js";

import "../style/Splash.scss";

class Logout extends Component {
    logout = () => {
        window.location.replace(API_HOST + "/logout")
    };

    render() {
        return <i className="icon-logout" onClick={this.logout} title="Logout"></i>;
    }
}

export default Logout;
