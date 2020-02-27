import React from "react";
import { withTranslation } from "react-i18next";
import { isBrowser } from "react-device-detect";

import "../style/InfoCreatorModifier.scss";

class InfoCreatorModifier extends React.Component {
    formatDate = (dateString) => {
        let date = new Date(dateString);
        return new Intl.DateTimeFormat().format(date);
    };

    renderInfoUserBlock(createdOrModified) {
        const { t } = this.props;
        const isCreated = createdOrModified === "created";
        const text = isCreated ? t("info.created") : t("info.last_update");
        const model = isCreated ? this.props.model.created : this.props.model.modified;
        const email = isCreated ? this.props.model.creator.email : this.props.model.modifier.email;
        const creatorClass = isCreated ? "info-creator-modifier__info--created" : "";
        const browserClass = isBrowser ? "with-vertical-separator with-vertical-separator--right" : "";
        return (
            <div className={`${creatorClass} ${browserClass} info-creator-modifier__info`}>
                <div className="info-creator-modifier__info__date">
                    {text}: {this.formatDate(model)}
                </div>
                <div className="info-creator-modifier__info__usermail">{email}</div>
            </div>
        );
    }

    render() {
        return (
            <div className="info-creator-modifier">
                {this.renderInfoUserBlock("created")}
                {this.renderInfoUserBlock("updated")}
            </div>
        );
    }
}

export default withTranslation()(InfoCreatorModifier);
