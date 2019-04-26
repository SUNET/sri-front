import React from 'react';

import 'bootstrap/scss/bootstrap.scss';

import SplashContainer from "../containers/Splash";
import HeaderContainer from "../containers/Header";
import FooterContainer from "../containers/Footer";
import NotifyContainer from "../containers/Notify";

import '../style/App.scss';


function App() {
  return (
    <div className="App">
			<SplashContainer />
			<HeaderContainer />
			<NotifyContainer />
      <div className="row" id="main">
      </div>
			<FooterContainer />
    </div>
  );
}

export default App;
