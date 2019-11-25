import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { withTranslation } from "react-i18next";

import SearchOrganizationContainer from "../containers/organization/SearchOrganization";
import SearchContactContainer from "../containers/contact/SearchContact";
import SearchGroupContainer from "../containers/group/SearchGroup";
// import SubMenu from "./SubMenu";
// import SubMenuActions from "./SubMenuActions";

import "../style/Footer.scss";

class Community extends React.Component {
    render() {
        return (
            <Switch>
                <Redirect exact from="/community" to="/community/organizations" />
                <Route path="/community/organizations" component={SearchOrganizationContainer} />
                <Route path="/community/contacts" component={SearchContactContainer} />
                <Route path="/community/groups" component={SearchGroupContainer} />
            </Switch>
        );
    }
}

export default withTranslation()(Community);
