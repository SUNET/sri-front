import React, { Component } from "react";
import PropTypes from "prop-types";
import { ConnectedRouter } from "connected-react-router";
import Breadcrumbs from "react-router-dynamic-breadcrumbs";

import FetchingContext from "../components/FetchingContext";
import SplashContainer from "../containers/Splash";
import NotifyContainer from "../containers/Notify";
import TopHeader from "./TopHeader";
import BaseContainer from "../containers/Base";
import FooterContainer from "../containers/Footer";

import Routes from "./Routes";

import "bootstrap/scss/bootstrap.scss";
import "../style/App.scss";
import "../style/Breadcrumbs.scss";

import { history } from "../store";

class App extends Component {
    render() {
        return (
            <FetchingContext.Provider value={this.props.is_fetching}>
                <div className="App">
                    <ConnectedRouter history={history}>
                        <TopHeader />
                        <Breadcrumbs mappedRoutes={Routes} />
                        <NotifyContainer />
                        <SplashContainer />
                        <BaseContainer />
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

export default App;
