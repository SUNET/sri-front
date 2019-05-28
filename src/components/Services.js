import React from "react";
import { withTranslation } from "react-i18next";

import "../style/Footer.scss";

function Services({ t, i18n }) {
    return (
        <div>
            <p>Services</p>
        </div>
    );
}

export default withTranslation()(Services);
