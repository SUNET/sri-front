import React from "react";
import { Route, Switch } from "react-router-dom";
import Breadcrumbs from "react-router-dynamic-breadcrumbs";

import TopHeader from "./TopHeader";
import SearchContainer from "../containers/Search";
import NotifyContainer from "../containers/Notify";
import FooterContainer from "../containers/Footer";
import { ContactDetails } from "./Contact";
import Routes from "./Routes";

class Base extends React.Component {
    render() {
        return (
            <section>
                <TopHeader />
                <NotifyContainer />
                <Breadcrumbs mappedRoutes={Routes} />
                <Switch>
                    <Route exact path="/contacts" component={SearchContainer} />
                    <Route
                        path="/contacts/:contactId"
                        component={ContactDetails}
                    />
                    <Route path="/roles" component={SearchContainer} />
                </Switch>
                <FooterContainer />
            </section>
        );
    }
}

export default Base;
