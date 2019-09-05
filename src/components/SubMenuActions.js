import React from "react";
import { withTranslation } from "react-i18next";

class SubMenuActions extends React.Component {
    render() {
        const t = this.props.t;
        return (
            <button className="btn primary" onClick={() => this.props.history.push(`/community/contacts/create`)}>
                {t("Add Contact")}
            </button>
        );
    }
}

export default withTranslation()(SubMenuActions);
