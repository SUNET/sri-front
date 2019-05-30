import React from "react";
import { withTranslation } from "react-i18next";
import { Route, Switch } from "react-router-dom";

import SearchContainer from "../containers/Search";
import SubMenu from "./SubMenu";
import { RouteNotFound } from "./NotFound";

import "../style/Footer.scss";

class Community extends React.Component {
    render() {
        return (
            <div>
                <SubMenu />
                <Switch>
                    <Route
                        exact
                        path="/community"
                        component={() => <p>Community</p>}
                    />
                    <Route component={SearchContainer} />
                </Switch>
            </div>
        );
    }
}

export default withTranslation()(Community);
