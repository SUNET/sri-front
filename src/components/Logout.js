import React, { Component } from "react";
import { API_HOST } from "../config.js";
import Cookies from "js-cookie";

import "../style/Splash.scss";

class Logout extends Component {
    logout = () => {
        // localStorage.clear();
        Cookies.remove("csrftoken");
        document.location.href = API_HOST + "/logout";
    };

    render() {
        return <i className="icon-logout" onClick={this.logout} title="Logout"></i>;
    }
}

export default Logout;
