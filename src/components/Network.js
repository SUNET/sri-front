import React from "react";
import { withTranslation } from "react-i18next";

import "../style/Footer.scss";

function Network({ t, i18n }) {
    return (
        <div>
            <p>Network</p>
        </div>
    );
}

export default withTranslation()(Network);
