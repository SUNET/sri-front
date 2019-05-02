import React from "react";
import { withTranslation } from "react-i18next";

import "bootstrap/scss/bootstrap.scss";

import SplashContainer from "../containers/Splash";
import HeaderContainer from "../containers/Header";
import FooterContainer from "../containers/Footer";
import NotifyContainer from "../containers/Notify";

import "../style/App.scss";

function App() {
	return (
		<div className="App">
			<SplashContainer />
			<HeaderContainer />
			<NotifyContainer />
			<div className="row" id="main" />
			<FooterContainer />
		</div>
	);
}

export default withTranslation()(App);
