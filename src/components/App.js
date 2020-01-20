import React, { Component } from "react";
import PropTypes from "prop-types";
import { ConnectedRouter } from "connected-react-router";
import Breadcrumbs from "react-router-dynamic-breadcrumbs";
import { Route, Switch } from "react-router-dom";

import FetchingContext from "../components/FetchingContext";
import SplashContainer from "../containers/Splash";
import NotifyContainer from "../containers/Notify";
import TopHeaderContainer from "../containers/TopHeader";
import BaseContainer from "../containers/Base";
import FooterContainer from "../containers/Footer";

import { Row, Col } from "react-bootstrap";
import SideNavNetwork from "./SideNavNetwork";
import SideNavCommunity from "./SideNavCommunity";
import SubMenuActions from "./SubMenuActions";

import Routes from "../Routes";

import "bootstrap/scss/bootstrap.scss";
import "../style/App.scss";
import "../style/Breadcrumbs.scss";
import "../style/SRIButton.scss";

import { history } from "../store";

class App extends Component {
    render() {
        return (
            <FetchingContext.Provider value={this.props.is_fetching}>
                <div className="App container">
                    <ConnectedRouter history={history}>
                        <Row>
                            <Col className="px-0">
                                <TopHeaderContainer />
                            </Col>
                        </Row>
                        <Row>
                            <SplashContainer />
                            <Switch>
                                <Route path="/network" component={SideNavNetwork} />
                                <Route path="/community" component={SideNavCommunity} />
                            </Switch>
                            <Col sm={10} className="fixed-adaptative">
                                <NotifyContainer />
                                <Row className="mt-4">
                                    <Col>
                                        <Breadcrumbs mappedRoutes={Routes} />
                                    </Col>
                                    <Col className="text-right">
                                        <SubMenuActions />
                                    </Col>
                                </Row>
                                {this.props.is_app_loaded && <BaseContainer />}
                            </Col>
                        </Row>
                        <Row>
                            <Col className="px-0">
                                <FooterContainer />
                            </Col>
                        </Row>
                    </ConnectedRouter>
                </div>
            </FetchingContext.Provider>
        );
    }
}

App.propTypes = {
    is_fetching: PropTypes.bool,
    is_app_loaded: PropTypes.bool,
};

export default App;
