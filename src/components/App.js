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

import ModalNewContactContainer from "../containers/ModalNewContact";

import "bootstrap/scss/bootstrap.scss";
import "../style/App.scss";
import "../style/Breadcrumbs.scss";
import "../style/SRIButton.scss";

import { history } from "../store";
import { isMobile } from "react-device-detect";

class App extends Component {
    render() {
        const isDashBoardPath = history.location.pathname === "/dashboard";
        const columnsToMainContainer = isDashBoardPath || isMobile ? 12 : 10;

        return (
            <FetchingContext.Provider value={this.props.is_fetching}>
                <div className="App container-fluid">
                    <ConnectedRouter history={history}>
                        <Row>
                            <Col className="px-0">
                                <TopHeaderContainer />
                            </Col>
                        </Row>
                        <Row>
                            <SplashContainer />
                            {!isMobile && (
                                <Switch>
                                    <Route path="/network" component={SideNavNetwork} />
                                    <Route path="/community" component={SideNavCommunity} />
                                </Switch>
                            )}
                            <Col xs={columnsToMainContainer} className="fixed-adaptative">
                                <NotifyContainer />
                                <Row className="mt-4">
                                    <Col xs={10} sm={8}>
                                        <Breadcrumbs mappedRoutes={Routes} />
                                    </Col>
                                    <Col xs={2} sm={4} className="text-right">
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
                <ModalNewContactContainer />
            </FetchingContext.Provider>
        );
    }
}

App.propTypes = {
    is_fetching: PropTypes.bool,
    is_app_loaded: PropTypes.bool,
    show_contact_form: PropTypes.bool
};

export default App;
