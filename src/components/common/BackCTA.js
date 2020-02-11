import React from "react";
import { withTranslation } from "react-i18next";

class BackCTA extends React.Component {
    onClick() {
        this.props.onClick();
    }
    render() {
        const { t } = this.props;
        return (
            <button type="button" onClick={() => this.onClick()} className="btn btn-back outline">
                <span>{t("actions.back")}</span>
            </button>
        );
    }
}

export default withTranslation()(BackCTA);
