import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import Home from './Home';
import Network from './Network';
import Community from './Community';
// import Contracts from './Contracts';
// import PersonalArea from './PersonalArea';

import environment from '../createRelayEnvironment';
import GeneralSearchContainer from './generalSearch/GeneralSearch';
// import CaptureRouteNotFound, { RouteNotFound } from "./NotFound";

const Base = ({ view_network, view_community, generalFilter }) => (
  <Switch>
    <Redirect exact from="/" to={'/dashboard'} />
    <Route path="/dashboard" component={Home} />
    {!generalFilter && view_network && <Route path="/network" component={Network} />}
    {!generalFilter && view_community && <Route path="/community" component={Community} />}
    {generalFilter && <GeneralSearchContainer environment={environment} />}
    {/* <Route path="/contracts" component={Contracts} />
    <Redirect exact from="/personal-area" to={'/personal-area/profile-settings'} />
    <Route path="/personal-area" component={PersonalArea} /> */}
  </Switch>
);

export default withRouter(Base);
