import React from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";

import Home from "./Home";
import Network from "./Network";
import Contracts from "./Contracts";
import Community from "./Community";
import PersonalArea from "./PersonalArea";

import CaptureRouteNotFound, { RouteNotFound } from "./NotFound";

class Base extends React.Component {
    render() {
        return (
            <>
                <CaptureRouteNotFound>
                    <Switch>
                        <Redirect exact from={"/community"} to={"/community/organizations"} />
                        <Redirect exact from={"/personal-area"} to={"/personal-area/profile-settings"} />
                        <Route exact path="/" component={Home} />
                        <Route path="/dashboard" component={Home} />
                        <Route path="/network" component={Network} />
                        <Route path="/community" component={Community} />
                        <Route path="/contracts" component={Contracts} />
                        <Route path="/personal-area" component={PersonalArea} />
                        <RouteNotFound />
                    </Switch>
                </CaptureRouteNotFound>
            </>
        );
    }
}

export default withRouter(Base);
