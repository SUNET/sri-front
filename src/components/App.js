import React from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'connected-react-router';
// import Breadcrumbs from 'react-router-dynamic-breadcrumbs';
import { Route, Switch } from 'react-router-dom';

import { Row, Col } from 'react-bootstrap';
import { isMobile } from 'react-device-detect';
import FetchingContext from '../components/FetchingContext';
import SplashContainer from '../containers/Splash';
import NotifyContainer from '../containers/Notify';
import TopHeaderContainer from '../containers/TopHeader';
import BaseContainer from '../containers/Base';
import FooterContainer from '../containers/Footer';
import SideNavNetwork from './SideNavNetwork';
import SideNavCommunity from './SideNavCommunity';
import SubMenuActions from './SubMenuActions';
import Breadcrumbs from '../containers/Breadcrumbs';
import ModalFormContainer from '../containers/ModalForm';

import 'bootstrap/scss/bootstrap.scss';
import '../style/App.scss';
import '../style/Breadcrumbs.scss';
import '../style/SRIButton.scss';

import { history } from '../store';

const App = ({ is_fetching, is_app_loaded, generalFilter }) => {
  const isDashBoardPath = history.location.pathname === '/dashboard';
  const columnsToMainContainer = isDashBoardPath || isMobile ? 12 : 10;
  return (
    <FetchingContext.Provider value={is_fetching}>
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
                  <Breadcrumbs />
                </Col>
                <Col xs={2} sm={4} className="text-right">
                  <SubMenuActions />
                </Col>
              </Row>
              {is_app_loaded && <BaseContainer generalFilter={generalFilter} />}
            </Col>
          </Row>
          <Row>
            <Col className="px-0">
              <FooterContainer />
            </Col>
          </Row>
        </ConnectedRouter>
      </div>
      <ModalFormContainer />
    </FetchingContext.Provider>
  );
};

App.propTypes = {
  is_fetching: PropTypes.bool,
  is_app_loaded: PropTypes.bool,
  show_contact_form: PropTypes.bool,
};

export default App;
