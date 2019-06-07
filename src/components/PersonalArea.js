import React from "react";
import { withTranslation } from "react-i18next";
import { Route, Switch } from "react-router-dom";

import SubMenu from "./SubMenu";
import Profile from "./Profile";
import Settings from "./Settings";

import { RouteNotFound } from "./NotFound";

import "../style/Footer.scss";

class PersonalArea extends React.Component {
    render() {
        const t = this.props.t;
        return (
            <div>
                <SubMenu
                    links={[
                        {
                            link: `${this.props.match.url}/profile`,
                            label: t("submenu.profile")
                        },
                        {
                            link: `${this.props.match.url}/settings`,
                            label: t("submenu.settings")
                        }
                    ]}
                />
                <Switch>
                    <Route
                        path={`${this.props.match.url}/profile`}
                        component={Profile}
                    />
                    <Route
                        path={`${this.props.match.url}/settings`}
                        component={Settings}
                    />
                    <RouteNotFound />
                </Switch>
            </div>
        );
    }
}

export default withTranslation()(PersonalArea);
