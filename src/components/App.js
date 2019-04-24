import React from 'react';

import SplashContainer from "../containers/Splash";
import HeaderContainer from "../containers/Header";
import FooterContainer from "../containers/Footer";

import '../style/App.scss';


function App() {
  return (
    <div className="App">
			<SplashContainer />	
			<HeaderContainer />	
			<FooterContainer />	
    </div>
  );
}

export default App;
