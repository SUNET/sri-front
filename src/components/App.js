import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";

import "bootstrap/scss/bootstrap.scss";

import FetchingContext from "../components/FetchingContext";

import SplashContainer from "../containers/Splash";
import HeaderContainer from "../containers/Header";
import FooterContainer from "../containers/Footer";
import NotifyContainer from "../containers/Notify";

import "../style/App.scss";

class App extends Component {
  render() {
    return (
      <FetchingContext.Provider value={this.props.is_fetching}>
        <div className="App">
          <SplashContainer />
          <HeaderContainer />
          <NotifyContainer />
          <div className="row" id="main" />
          <FooterContainer />
        </div>
      </FetchingContext.Provider>
    );
  }
}

App.propTypes = {
  is_fetching: PropTypes.bool
};

export default withTranslation()(App);
