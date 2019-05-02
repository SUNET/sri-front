import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

import 'bootstrap/scss/bootstrap.scss';

import FetchingContext from "../components/FetchingContext";

import SplashContainer from "../containers/Splash";
import HeaderContainer from "../containers/Header";
import FooterContainer from "../containers/Footer";
import NotifyContainer from "../containers/Notify";

import '../style/App.scss';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fetching: props.is_fetching,
            setFetching: this.setFetching.bind(this),
            openTabs: false
        };
    }

    setFetching(fetching) {
        this.setState({
            fetching: fetching
        });
    }

    render () {
      return (
        <FetchingContext.Provider value={this.state}>
          <div className="App">
            <SplashContainer />
            <HeaderContainer />
            <NotifyContainer />
            <div className="row" id="main">
            </div>
            <FooterContainer />
          </div>
        </FetchingContext.Provider>
      );
    }
}

export default withTranslation()(App);
