import React from "react";
import { withTranslation } from "react-i18next";

import SearchContainer from "../containers/Search";
import SubMenu from "./SubMenu";

import "../style/Footer.scss";

class Community extends React.Component {
    render() {
        return (
            <div>
                <p>Community</p>
                <SubMenu />
                <SearchContainer />
            </div>

        );
    }
}

export default withTranslation()(Community);
