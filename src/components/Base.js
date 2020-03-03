import React from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";

import Home from "./Home";
import Network from "./Network";
import Contracts from "./Contracts";
import Community from "./Community";
import PersonalArea from "./PersonalArea";
// import CaptureRouteNotFound, { RouteNotFound } from "./NotFound";

class Base extends React.Component {
    
    render() {
        const { view_network, view_community } = this.props;
        return (
            <Switch>
                <Redirect exact from="/" to={"/dashboard"} />
                <Route path="/dashboard" component={Home} />
                {view_network && <Route path="/network" component={Network} />}
                {view_community && <Route path="/community" component={Community} />}
                <Route path="/contracts" component={Contracts} />
                <Redirect exact from="/personal-area" to={"/personal-area/profile-settings"} />
                <Route path="/personal-area" component={PersonalArea} />
            </Switch>
        );
    }
}

export default withRouter(Base);
