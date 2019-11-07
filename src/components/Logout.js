import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { API_HOST } from "../createRelayEnvironment.js";
import Cookies from "js-cookie";

import "../style/Splash.scss";

class Logout extends Component {
    logout = () => {
        localStorage.clear();
        Cookies.remove("JWT");
        Cookies.remove("csrftoken");
        Cookies.remove("sessionid");
        this.setState({ navigate: true });
        document.location.href = API_HOST;
    };

    render() {
        return <i className="icon-logout" onClick={this.logout} title="Logout"></i>;
    }
}

export default Logout;
