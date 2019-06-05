import React from "react";
import { withTranslation } from "react-i18next";
import { Route, Switch } from "react-router-dom";

import SubMenu from "./SubMenu";
import Profile from "./Profile";
import Settings from "./Settings";

import "../style/Footer.scss";

class PersonalArea extends React.Component {
    render() {
        return (
            <div>
                <SubMenu />
                <Switch>
                    <Route
                        path={`${this.props.match.url}/profile`}
                        component={Profile}
                    />
                    <Route
                        path={`${this.props.match.url}/settings`}
                        component={Settings}
                    />
                </Switch>
            </div>
        );
    }
}

export default withTranslation()(PersonalArea);
