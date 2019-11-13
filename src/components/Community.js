import React from "react";
import { withTranslation } from "react-i18next";

import SearchOrganization from "./SearchOrganization";
import SearchContact from "./SearchContact";
import SearchGroup from "./SearchGroup";
// import SubMenu from "./SubMenu";
// import SubMenuActions from "./SubMenuActions";

import "../style/Footer.scss";

class Community extends React.Component {
    render() {
        return (
            <>
                <SearchOrganization />
                <SearchContact />
                <SearchGroup />
            </>
        );
    }
}

export default withTranslation()(Community);
