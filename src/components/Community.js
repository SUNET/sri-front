import React from "react";
import { withTranslation } from "react-i18next";
import { Route, Switch } from "react-router-dom";

import SearchContainer from "../containers/Search";
// import SubMenu from "./SubMenu";
// import SubMenuActions from "./SubMenuActions";

import "../style/Footer.scss";

class Community extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path={`${this.props.match.url}`} component={() => <p>Community</p>} />
                <Route component={SearchContainer} />
            </Switch>
        );
    }
}

export default withTranslation()(Community);
