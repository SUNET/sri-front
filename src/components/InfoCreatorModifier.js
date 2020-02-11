import React from "react";
import { withTranslation } from "react-i18next";

import "../style/InfoCreatorModifier.scss";

class InfoCreatorModifier extends React.Component {
    formatDate = (dateString) => {
        let date = new Date(dateString);
        return new Intl.DateTimeFormat().format(date);
    };

    render() {
        const { t } = this.props;
        return (
            <div className="info-creator-modifier">
                <div className="info-creator-modifier__info info-creator-modifier__info--created with-vertical-separator with-vertical-separator--right">
                    <div className="info-creator-modifier__info__date">
                        {t("info.created")}: {this.formatDate(this.props.model.created)}
                    </div>
                    <div className="info-creator-modifier__info__usermail">{this.props.model.creator.email}</div>
                </div>
                <div className="info-creator-modifier__info info-creator-modifier__info--updated with-vertical-separator with-vertical-separator--right">
                    <div className="info-creator-modifier__info__date">
                        {t("info.last_update")}: {this.formatDate(this.props.model.modified)}
                    </div>
                    <div className="info-creator-modifier__info__usermail">{this.props.model.modifier.email}</div>
                </div>
            </div>
        );
    }
}

export default withTranslation()(InfoCreatorModifier);
