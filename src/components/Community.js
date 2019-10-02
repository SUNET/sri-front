import React from "react";
import { withTranslation } from "react-i18next";
import { Route } from "react-router-dom";

import SearchOrganization from "./SearchOrganization";
import SearchContainer from "../containers/Search";
import SearchGroup from "./SearchGroup";
// import SubMenu from "./SubMenu";
// import SubMenuActions from "./SubMenuActions";

import "../style/Footer.scss";

class Community extends React.Component {
    render() {
        return (
            <>
                <Route exact path={`${this.props.match.url}`} component={() => <p>Community</p>} />
                <Route path={`${this.props.match.url}`} component={SearchOrganization} />
                <Route path={`${this.props.match.url}`} component={SearchContainer} />
                <Route path={`${this.props.match.url}`} component={SearchGroup} />
            </>
        );
    }
}

export default withTranslation()(Community);
