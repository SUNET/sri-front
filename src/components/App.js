import React, { Component } from "react";
import PropTypes from "prop-types";
import { ConnectedRouter } from "connected-react-router";
import { Route } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

import "bootstrap/scss/bootstrap.scss";

import FetchingContext from "../components/FetchingContext";
import SplashContainer from "../containers/Splash";
import MainMenuContainer from "../containers/MainMenu";
import BaseContainer from "../containers/Base";

import "../style/App.scss";

import { history } from "../store";

class App extends Component {
    render() {
        return (
            <FetchingContext.Provider value={this.props.is_fetching}>
                <div className="App">
                    <ConnectedRouter history={history}>
                        <SplashContainer />
                        <Row>
                            <Col sm={1} id="wrapper-main-menu" className="px-0">
                                <MainMenuContainer />
                            </Col>
                            <Col sm={11} id="wrapper-base">
                                <Route path="/" component={BaseContainer} />
                            </Col>
                        </Row>
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
