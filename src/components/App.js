import React, { Component } from "react";
import PropTypes from "prop-types";
import { ConnectedRouter } from "connected-react-router";
import Breadcrumbs from "react-router-dynamic-breadcrumbs";
import { Route, Switch, withRouter } from "react-router-dom";

import FetchingContext from "../components/FetchingContext";
import SplashContainer from "../containers/Splash";
import NotifyContainer from "../containers/Notify";
import TopHeader from "./TopHeader";
import BaseContainer from "../containers/Base";
import FooterContainer from "../containers/Footer";

import { Row, Col } from "react-bootstrap";
import SideNavNetwork from "./SideNavNetwork";
import SideNavCommunity from "./SideNavCommunity";

import Routes from "../Routes";

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
                        <Row>
                        {/* Col define on components */}
                            <Switch>
                                <Route path="/network" component={SideNavNetwork} />
                                <Route path="/community" component={SideNavCommunity} />
                            </Switch>
                            <Col>
                                <Breadcrumbs mappedRoutes={Routes} />
                                <NotifyContainer />
                                <SplashContainer />
                                <BaseContainer />
                            </Col>
                        </Row>
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
