import React, { Component } from 'react';
import CONFIG from '../config';
import Cookies from 'js-cookie';

import '../style/Splash.scss';

const { API_HOST, COOKIE_DOMAIN } = CONFIG;

export class Logout extends Component {
  logout() {
    window.location.replace(API_HOST + "/logout");
  }

  render() {
    return <i className="icon-logout" onClick={this.logout} title="Logout"></i>;
  }
}

export default Logout;
