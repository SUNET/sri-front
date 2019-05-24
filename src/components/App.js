import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import Breadcrumbs  from 'react-router-dynamic-breadcrumbs';

import "bootstrap/scss/bootstrap.scss";

import FetchingContext from "../components/FetchingContext";

import SplashContainer from "../containers/Splash";
import HeaderContainer from "../containers/Header";
import BaseContainer from "../containers/Base";
import FooterContainer from "../containers/Footer";
import NotifyContainer from "../containers/Notify";

import "../style/App.scss";

import { history } from "../store";

const routes = {
  '/': 'Home',
  '/contacts': 'Contacts',
  '/roles': 'Roles',
  '/contacts/create': 'Create Contact',
  '/contacts/:contactId': 'Contact Info',
};

class App extends Component {
    render() {
        return (
            <FetchingContext.Provider value={this.props.is_fetching}>
                <div className="App">
                    <ConnectedRouter history={history}>
                        <SplashContainer />
                        <HeaderContainer />
                        <Breadcrumbs mappedRoutes={routes} />
                        <NotifyContainer />
                        <Route path="/" component={BaseContainer} />
                        <FooterContainer />
                    </ConnectedRouter>
                </div>
            </FetchingContext.Provider>
        );
    }
}

App.propTypes = {
    is_fetching: PropTypes.bool
};

export default withTranslation()(App);
