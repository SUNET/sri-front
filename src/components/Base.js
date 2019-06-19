import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import Home from "./Home";
import Network from "./Network";
import Services from "./Services";
import Community from "./Community";
import PersonalArea from "./PersonalArea";

import CaptureRouteNotFound, { RouteNotFound } from "./NotFound";

class Base extends React.Component {
    render() {
        return (
            <section>

                <CaptureRouteNotFound>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/network" component={Network} />
                        <Route path="/services" component={Services} />
                        <Route path="/community" component={Community} />
                        <Route path="/personal-area" component={PersonalArea} />
                        <RouteNotFound />
                    </Switch>
                </CaptureRouteNotFound>
            </section>
        );
    }
}

export default withRouter(Base);
