import React from 'react';

import HeaderContainer from "../containers/Header";
import FooterContainer from "../containers/Footer";

import '../style/App.scss';


function App() {
  return (
    <div className="App">
			<HeaderContainer />	
			<FooterContainer />	
    </div>
  );
}

export default App;
