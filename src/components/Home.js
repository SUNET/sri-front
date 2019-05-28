import React from "react";
import { withTranslation } from "react-i18next";

import "../style/Footer.scss";

function Home({ t, i18n }) {
    return (
        <div>
            <p>Home</p>
        </div>
    );
}

export default withTranslation()(Home);
