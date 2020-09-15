import React, { Component } from 'react';
import CONFIG from '../config';

import '../style/Splash.scss';

const { API_HOST } = CONFIG;

export class Logout extends Component {
  logout() {
    window.location.replace(API_HOST + '/logout');
  }

  render() {
    return <i className="icon-logout" onClick={this.logout} title="Logout"></i>;
  }
}

export default Logout;
