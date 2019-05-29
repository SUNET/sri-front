import React from "react";
import { withTranslation } from "react-i18next";
import { Route, Switch, withRouter } from "react-router-dom";

import SearchContainer from "../containers/Search";
import SubMenu from "./SubMenu";
import { RouteNotFound } from "./NotFound";

import "../style/Footer.scss";

class Community extends React.Component {
    render() {
        return (
            <div>
                <SubMenu />
                <SearchContainer />
            </div>
        );
    }
}

export default withTranslation()(withRouter(Community));
