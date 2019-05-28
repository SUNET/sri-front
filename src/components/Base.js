import React from "react";
import { Route, Switch } from "react-router-dom";
import Breadcrumbs from "react-router-dynamic-breadcrumbs";

import TopHeader from "./TopHeader";
import Home from "./Home";
import Network from "./Network";
import Services from "./Services";
import Community from "./Community";

import NotifyContainer from "../containers/Notify";
import FooterContainer from "../containers/Footer";
import Routes from "./Routes";
import NotFound from "./NotFound";

import "../style/Breadcrumbs.scss"

class Base extends React.Component {
    render() {
        return (
            <section>
                <TopHeader />
                <NotifyContainer />
                <Breadcrumbs mappedRoutes={Routes} />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/network" component={Network} />
                    <Route path="/services" component={Services} />
                    <Route path="/community" component={Community} />
                    <Route path="*" component={NotFound} />
                </Switch>
                <FooterContainer />
            </section>
        );
    }
}

export default Base;
