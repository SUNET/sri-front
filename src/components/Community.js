import React from "react";
import { withTranslation } from "react-i18next";
import { Route, Switch } from "react-router-dom";

import SearchContainer from "../containers/Search";
import SubMenu from "./SubMenu";
import SubMenuActions from "./SubMenuActions";

import "../style/Footer.scss";

class Community extends React.Component {
    render() {
        const t = this.props.t;
        return (
            <div>
                <SubMenu
                    links={[
                        {
                            link: `${this.props.match.url}/contacts`,
                            label: t("submenu.contacts")
                        },

                    ]}
                    actions_component={<SubMenuActions />}
                />
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
