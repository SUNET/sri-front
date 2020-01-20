import React, { Component } from "react";
import { API_HOST } from "../config.js";
import Cookies from "js-cookie";
import { postRequest } from "../sagas/common";

import "../style/Splash.scss";

class Logout extends Component {
    logout = () => {
        // localStorage.clear();
        // TODO: rethink the use of cookies
        // Cookies.remove("csrftoken");
        // fetch(`${API_HOST}/logout`, {
        //     method: "GET"
        // }).then((response) => {
        //     console.log(response);
        //     // Cookies.remove("JWT");
        //     if (response.redirected) {
        //         document.location.href = response.url;
        //     }
        // });
        // document.location.href = API_HOST + "/logout";
        window.location.replace(API_HOST + "/logout")
    };

    render() {
        return <i className="icon-logout" onClick={this.logout} title="Logout"></i>;
    }
}

export default Logout;
